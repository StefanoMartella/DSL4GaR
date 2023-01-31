---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Rule Simulation

The rule simulation process is a fundamental phase to verify the correctness of the generated rules 🧪.<br />
This process can be decomposed into four steps:

- **Facts definition**: This steps consists of the definition of the facts (through the so-called _fact builders_) that will be inserted inside the Drools working memory during the simulation phase.
- **Expectations definition**: In this step all the expected outcome in terms of game state changes are defined; basically a list of assertion is defined.
- **Scenario definition**: This step consists of defining the order the rules and the facts that will be inserted in the Drools production memory and the Drools working memory respectively. 
- **Actual simulation**: This final step allows to simulate the pre-defined scenarios and verify if the assertions satisfied.

## Fact Builders

A `GameFactBuilder` instance allows to fluently instantiate a fact representing a gamification element. Each gamification element has its corresponding fact builder:

- `Action` ➡️ `ActionFactBuilderImpl`
- `BadgeCollectionConcept` ➡️ `BadgeCollectionFactBuilderImpl`
- `Challenge` ➡️ `ChallengeFactBuilderImpl`
- `Classification` ➡️ `ClassificationFactBuilderImpl`
- `CustomData` ➡️ `CustomDataFactBuilderImpl`
- `Game` ➡️ `GameFactBuilderImpl`
- `InputData` ➡️ `InputDataFactBuilderImpl`
- `Player` ➡️ `PlayerFactBuilderImpl`
- `PointConcept` ➡️ `PointConceptFactBuilderImpl`
- `Propagation` ➡️ `PropagationFactBuilderImpl`
- `Reward` ➡️ `RewardFactBuilderImpl`

The fact builders can be used as follow:

```java title="Simulation.java"
public static void main(String[] args) {
  // The following builder instantiates a PointConcept
  // named "green leaves" and associated to a score of 10 points.
  final PointFactBuilderImpl pointFact = PointFactBuilderImpl.builder()
    .name("green leaves")
    .score(10.0)
    .build();

  // The following builder instantiates a Game with a name of "game1".
  final GameFactBuilderImpl gameFact = GameFactBuilderImpl.builder().id("game1").build();

  // The following builder instantiates a Player with "player1" as id.
  final PlayerFactBuilderImpl playerFact = PlayerFactBuilderImpl.builder().id("player1").build();

  // The following builder instantiates a BadgeCollectionConcept named "green_leaves_badge".
  final BadgeCollectionFactBuilderImpl badgeCollectionFact = BadgeCollectionFactBuilderImpl.builder()
    .name("green_leaves_badge")
    .build();

  // The following builder instantiates an InputData with an 
  // associated map containing the key "sustainable" valued as true.
  final InputDataFactBuilderImpl inputDataFact = InputDataFactBuilderImpl.builder()
    .data(new HashMap<>() {{ put("sustainable", true); }})
    .build();
}
```

## Expectations Definition

When a simulation is run we want to be sure that the outcome matches what we expect; the `CheckExpectationLambda` interface allows to define a callback that permits to verify if the state of the game has evolved as planned during the simulation:

```java title="Simulation.java"
public static void main(String[] args) {
  // Fact builders definition here ...

  // The expectation is to have the badge "10-point-green" inside the badgeCollectionFact
  CheckExpectationLambda doesContain10PointGreenBadge = () -> Assert.assertTrue(
    "The '10-point-green' badge has been assigned",
    badgeCollectionFact.getBadgeEarned().contains("10-point-green")
  );

  // The expectation is to have 70 points associated to the pointFact
  CheckExpectationLambda has70Points = () -> Assert.assertEquals(
    "Has 70 points",
    70.0, 
    pointFact.getScore(),
    0.0
  );

  // The expectation is to have the badge "50-point-green" inside the badgeCollectionFact
  CheckExpectationLambda doesContain50PointGreenBadge = () -> Assert.assertTrue(
    "The '50-point-green' badge has been assigned",
    badgeCollectionFact.getBadgeEarned().contains("50-point-green")
  );
}
```

:::tip
Each expectation can be associated to a message (i.e. `"The '10-point-green' badge has been assigned"`) that will be displayed on the graph generated during the simulation.
:::

## Scenario Definition

Once the facts and the expectations are defined, the DSL4GaR allows to simulate a scenario through the `SimulationBuilder` interface:

<Tabs>
  <TabItem value="Simulation" label="Simulation" default>

  ```java title="Simulation.java" {9-21}
  import game.rules.GreenBadgeRules;
  import game.rules.GreenPointsRules;

  public static void main(String[] args) {
    // Fact builders definition here ...

    // Expectations definition here ...

    new SimulationBuilderImpl()
      .addFacts(pointFact, gameFact, playerFact, badgeCollectionFact, inputDataFact)
      .addRules(
        GreenPointsRules.getGreenSustainableBonusRule(),
        GreenBadgeRules.getGreenBadge10Rule(),
        GreenBadgeRules.getGreenBadge50Rule()
      )
      .addExpectations(
        has70Points,
        doesContain10PointGreenBadge, 
        doesContain50PointGreenBadge
      )
      .simulateAndClose();
  }
  ```
  </TabItem>
  <TabItem value="GreenPointsRules" label="GreenPointsRules">

  ```java title="GreenPointsRules.java"
  package game.rules;

  import eu.trentorise.game.model.*;
  import game.concepts.Point;
  import game.declared.PRItinerary;
  import it.univaq.gamification.dsl.binders.PointBind;
  import it.univaq.gamification.dsl.builders.impl.PackageDescrBuilderImpl;
  import it.univaq.gamification.dsl.builders.lhs.PackageDescr;

  import static it.univaq.gamification.dsl.builders.lhs.ConstraintType.EQ;

  public class GreenPointsRules {

    public static PackageDescr getGreenSustainableBonusRule() {
      final PointBind POINT_BIND = new PointBind("pc");

      return new PackageDescrBuilderImpl()
        .name("eu.trentorise.game.model")
        .newImport(InputData.class).end()
        .newImport(PointConcept.class).end()
        .newDeclare().type().name(PRItinerary.class).end()
        .newRule()
        .name("green sustainable bonus")
            .attribute("salience", "1")
            .when()
                .inputData().fromData(EQ, "sustainable", true).end()
                .not()
                    .pattern(PRItinerary.class.getSimpleName()).end()
                .end()
                .point(POINT_BIND).name(EQ, "green leaves").end()
            .end()
            .then()
                .increaseScore(POINT_BIND, 60.0)
            .end()
        .end()
        .getDescr();
    }

  }
  ```
  </TabItem>
  <TabItem value="GreenBadgeRules" label="GreenBadgeRules">

  ```java title="GreenBadgeRules.java"
  package game.rules;

  import game.concepts.Badge;
  import game.concepts.BadgeCollection;
  import game.concepts.Point;
  import game.rules.templates.GenericBadgeRuleTemplate;
  import it.univaq.gamification.dsl.builders.lhs.PackageDescr;

  public class GreenBadgeRules {
    public static PackageDescr getGreenBadge10Rule() {
      return GenericBadgeRuleTemplate.getBadgeTemplate(
        -1000,
        "10 point green badge",
        "green leaves",
        "green leaves",
        "10-points-green",
        10.0
      );
    }

    public static PackageDescr getGreenBadge50Rule() {
      return GenericBadgeRuleTemplate.getBadgeTemplate(
        -1000,
        "50 point green badge",
        "green leaves",
        "green leaves",
        "50-point-green",
        50.0
      );
    }
  }
  ```
  </TabItem>

  <TabItem value="GenericBadgeRuleTemplate" label="GenericBadgeRuleTemplate">

  ```java title="GenericBadgeRuleTemplate.java"
  package game.rules.templates;

  import eu.trentorise.game.model.BadgeCollectionConcept;
  import eu.trentorise.game.model.Game;
  import eu.trentorise.game.model.Player;
  import eu.trentorise.game.model.PointConcept;
  import eu.trentorise.game.notification.BadgeNotification;
  import it.univaq.gamification.dsl.binders.BadgeCollectionBind;
  import it.univaq.gamification.dsl.binders.Bind;
  import it.univaq.gamification.dsl.builders.impl.PackageDescrBuilderImpl;
  import it.univaq.gamification.dsl.builders.lhs.PackageDescr;

  import static it.univaq.gamification.dsl.builders.lhs.ConstraintType.EQ;
  import static it.univaq.gamification.dsl.builders.lhs.ConstraintType.GTE;

  public class GenericBadgeRuleTemplate {
    public static PackageDescr getBadgeTemplate(
      Integer salience,
      String ruleName,
      String pointName,
      String badgeCollectionName,
      String badgeName,
      Double scoreThreshold
    ) {
      final Bind GAME_ID_BIND = new Bind("gameId");
      final Bind PLAYER_ID_BIND = new Bind("playerId");
      final BadgeCollectionBind BADGE_COLLECTION_BIND = new BadgeCollectionBind("bc");

      return new PackageDescrBuilderImpl()
        .name("eu.trentorise.game.model")
        .newImport(PointConcept.class).end()
        .newImport(Game.class).end()
        .newImport(Player.class).end()
        .newImport(BadgeCollectionConcept.class).end()
        .newImport(BadgeNotification.class).end()
        .newRule()
          .name(ruleName)
          .attribute("salience", String.valueOf(salience))
          .when()
            .point()
              .name(EQ, pointName)
              .score(GTE, scoreThreshold)
            .end()
            .badgeCollection(BADGE_COLLECTION_BIND)
              .name(EQ, badgeCollectionName)
              .badgeEarnedNotContains(badgeName)
            .end()
            .game().bindId(GAME_ID_BIND).end()
            .player().bindId(PLAYER_ID_BIND).end()
          .end()
          .then()
            .addBadgeWithNotification(BADGE_COLLECTION_BIND, GAME_ID_BIND, PLAYER_ID_BIND, badgeName)
          .end()
        .end()
        .getDescr();
    }
  }
  ```
  </TabItem>
</Tabs>

:::info
The `addFacts`, `addRules` and `addExpectations` methods can be called multiple times and in different orders during the same simulation; this allows to verify more complex and dynamic scenarios. Also partial simulations (where the graph is not generated) are allowed through to the `simulate` method:

```java title="Simulation.java" {5}
new SimulationBuilderImpl()
  .addFacts(pointFact, gameFact, playerFact, badgeCollectionFact, inputDataFact)
  .addRules(GreenPointsRules.getGreenSustainableBonusRule(), GreenBadgeRules.getGreenBadge10Rule())
  .addExpectations(has70Points, doesContain10PointGreenBadge)
  .simulate()
  .addRules(GreenBadgeRules.getGreenBadge50Rule())
  // All previous expectations are no longer valid
  .addExpectations(doesContain50PointGreenBadge)
  .simulateAndClose();
```
:::

:::caution
Every time the `simulate` method is called all the expectations are cleared, thus you need to eventually add them again before calling the `simulate` or `simulateAndClose` methods.
:::

## Graph

The `simulateAndClose` method produces a filtrable graph where the game state transitions are shown:

![graph_success](/img/graph/graph_success.png)

If during the simulation not all the expectations are successfully verified an error message reporting the assertion message and the related rules is displayed:

![graph_success](/img/graph/graph_error.png)