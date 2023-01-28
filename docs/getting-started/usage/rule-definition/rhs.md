---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Right Hand Side (RHS)

In the RHS of a rule its consequences on the state of the game are defined.<br />
Each possible consequence of a rule has an associated method:

- `addBadge(...)`: this method allows to add a badge to a badge collection and eventually to insert a `BadgeNotification` into the working memory.
- `completeChallenge(...)`: this method allows mark a challenge as completed.
- `gainLevel(...)`: this method allows to insert a new level inside a `CustomData`.
- `updateScore(...)`: this method allows to update the score of a `PointConcept`.
- `insert(...)`: this method allows to insert a fact inside the working memory.
- `log(...)`: this method allows to log a message on the console.
- `freeRHS(...)`: this method allows to specify the consequences of a rule by supplying a `String`.

:::caution Heads up
The `freeRHS` method should be used only when it is strictly necessary because while using it the main advantages of the DSL are lost (typo checking, autocomplete, etc.).
:::

A full description of the methods can be found [here](./../../../api).

## RHS Definition

The RHS of a rule can be defined by combining the above methods:

<Tabs>
  <TabItem value="Java" label="Java" default>

  ```java title="RuleDefinition.java - Fact constraints" {17-20}
  import eu.trentorise.game.model.BadgeCollectionConcept;

  public static void main(String[] args) {
    final String BADGE_NAME = "green-badge";
    final BadgeCollectionBind BADGE_COLLECTION_BIND = new BadgeCollectionBind("badgeCollection");

    pkg = new PackageDescrBuilderImpl()
      .name("eu.trentorise.game.model")
      .newImport(BadgeCollectionBind.class).end()
      .newRule()
          .name("my_amazing_rule")
          .when()
            .badgeCollection(BADGE_COLLECTION_BIND)
                .badgeEarnedNotContains(BADGE_NAME)
            .end()
          .end()
          .then()
            .addBadge(BADGE_COLLECTION_BIND, BADGE_NAME)
            .log(String.format("The %s badge has been assigned", BADGE_NAME))
          .end()
      .end()
      .getDescr();
  }
  ```
  </TabItem>
  <TabItem value="DRL" label="DRL">

  ```java title="my_amazing_rule.drl" {9-11}
  package eu.trentorise.game.model 

  import eu.trentorise.game.notification.BadgeCollectionConcept

  rule "my_amazing_rule"
  when
      $badgeCollection : BadgeCollectionConcept( badgeEarned not contains "green-badge" )  
  then
      $badgeCollection.getBadgeEarned().add("green-badge");
      update( $badgeCollection );
      utils.log("The green-badge badge has been assigned");
  end
  ```
  </TabItem>
</Tabs>

