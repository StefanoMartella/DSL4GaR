---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Left Hand Side (LHS)

Inside a package it is possible to define a rule (only one per package!). Each rule consists of a **Left Hand Side** (LHS) and a **Right Hand Side** (RHS). The LHS contains all the conditions that lead to the rule execution when they are met; the RHS contains all the consequences of the rule's execution. In this section it is shown how it is possible to leverage on the DLS4Gar APIs to properly define the LHS.

## Rule Definition

Before defining the conditions to trigger a rule it is necessary to first declare the rule itself; this can be done with the `newRule` method:

```java title="RuleDefinition.java - Rule definition" {7-9}
public static void main(String[] args) {
  PackageDescr package = new PackageDescrBuilderImpl()
    .name("eu.trentorise.game.model")
    // Imports...
    // Globals...
    // Types declaration...
    .newRule()
      .name("my_amazing_rule")
    .end()
    .getDescr();
  }
```

The rule can also be enriched by [attributes](https://docs.drools.org/7.73.0.Final/drools-docs/html_single/index.html#rules-attributes-ref_drl-rules) such as the salience by using the `attribute` method:

```java title="RuleDefinition.java - Attributes" {9}
public static void main(String[] args) {
  PackageDescr package = new PackageDescrBuilderImpl()
    .name("eu.trentorise.game.model")
    // Imports...
    // Globals...
    // Types declaration...
    .newRule()
      .name("my_amazing_rule")
      .attribute("salience", "1000")
      // Other attributes...
    .end()
    .getDescr();
  }
```

## LHS Definition

### Constraint Types

A `ConstraintType` instance allows to constraint the fact fields inside the LHS of a rule (i.e. we want a rule to fire when the Drools working memory contains a `BadgeCollectionConcept` instance whose name is equal to `amazing_collection`).<br />
The constraint types provided by the DSL4GaR are the following:

- `LT` ➡️ Less than
- `LTE` ➡️ Less than or equal to
- `GT` ➡️ Greater than
- `GTE` ➡️ Grater then or equal to
- `EQ` ➡️ Equal to
- `NEQ` ➡️ Not equal to
- `CONTAINS` ➡️ Contains
- `NOT_CONTAINS` ➡️ Not contains

In the next paragraphs will be shown how they can be used.

### Pattern and constraints

Once the rule is defined inside the package, it is possible to use the `when` method to specify when it must be triggered:

<Tabs>
  <TabItem value="Java" label="Java" default>

  ```java title="RuleDefinition.java - Fact constraints" {14-23}
  import eu.trentorise.game.model.BadgeCollectionConcept;
  import eu.trentorise.game.model.Classification;
  import static it.univaq.gamification.dsl.builders.lhs.ConstraintType.EQ;
  import static it.univaq.gamification.dsl.builders.lhs.ConstraintType.NEQ;

  public static void main(String[] args) {
    PackageDescr package = new PackageDescrBuilderImpl()
      .name("eu.trentorise.game.model")
      .newImport(BadgeCollectionConcept.class).end()
      .newImport(Classification.class).end()
      .newRule()
        .name("my_amazing_rule")
        .attribute("salience", "1000")
        .when()
          .classification()
              .name(EQ, "green classification")
              .position(NEQ, 1)
          .end()
          .badgeCollection()
              .name(EQ, "green leaves")
              .badgeEarnedNotContains("gold-medal-green-1")
          .end()
        .end()
      .end()
      .getDescr();
    }
  ```
  </TabItem>
  <TabItem value="DRL" label="DRL">

  ```java title="my_amazing_rule.drl" {8-10}
  package eu.trentorise.game.model

  import eu.trentorise.game.notification.BadgeCollectionConcept
  import eu.trentorise.game.task.Classification

  rule "my_amazing_rule"
    salience 1000
    when
      Classification( name == "green classification", position != 1 )
      BadgeCollectionConcept( name == "green leaves", badgeEarned not contains "gold-medal-green-1" )
    then
  end
  ```
  </TabItem>
</Tabs>

:::tip
Use the tabs to switch from the Java code to the corresponding generated DRL code.
:::

:::caution Constraint patterns
For each pattern used inside the `when` method it is necessary to add the relative import inside the package definition (i.e. since the `classification` method is used the `newImport` method must be used to import the `Classification` class).
:::

Each gamification elements has an associated method that allows to apply the constraints to the relative pattern:

- `Action` ➡️ `action()`
- `BadgeCollectionConcept` ➡️ `badgeCollection()`
- `Challenge` ➡️ `challenge()`
- `Classification` ➡️ `classification()`
- `CustomData` ➡️ `customData()`
- `Game` ➡️ `game()`
- `InputData` ➡️ `inputData()`
- `Player` ➡️ `player()`
- `PointConcept` ➡️ `pointConcept()`
- `Propagation` ➡️ `propagation()`
- `Reward` ➡️ `reward()`

All the above methods provide a set of other methods to apply the constraints on the gamification elements.<br />
For example, the `action()` method provides the `id()` and the `name()` methods to apply the constraints on the relative fields of the action itself. All the available methods can be found [here](./../../../api).

:::tip
Of course you don't need to consult the source code every time you need to apply a constraint to a pattern; your IDE will suggest the available methods 😉.
:::

### Binding

In the LHS it is also possible to bind the patterns to variables:

<Tabs>
  <TabItem value="Java" label="Java" default>

  ```java title="RuleDefinition.java - Pattern binding" {6,15}
  import eu.trentorise.game.model.Classification;
  import it.univaq.gamification.dsl.binders.ClassificationBind;
  import static it.univaq.gamification.dsl.builders.lhs.ConstraintType.EQ;

  public static void main(String[] args) {
    final ClassificationBind CLASSIFICATION_BIND = new ClassificationBind("classification");

    PackageDescr package = new PackageDescrBuilderImpl()
      .name("eu.trentorise.game.model")
      .newImport(Classification.class).end()
      .newRule()
        .name("my_amazing_rule")
        .attribute("salience", "1000")
        .when()
          .classification(CLASSIFICATION_BIND)
              .name(EQ, "green classification")
          .end()
        .end()
      .end()
      .getDescr();
    }
  ```
  </TabItem>
  <TabItem value="DRL" label="DRL">

  ```java title="my_amazing_rule.drl" {8}
  package eu.trentorise.game.model

  import eu.trentorise.game.task.Classification

  rule "my_amazing_rule"
    salience 1000
    when
      $classification: Classification( name == "green classification", position != 1 )
      BadgeCollectionConcept( name == "green leaves", badgeEarned not contains "gold-medal-green-1" )
    then
  end
  ```
  </TabItem>
</Tabs>

:::info
Each gamification element has its relative binding class; in this case the `ClassificationBind` class is used to create a binding for a `Classification` instance.
:::

Other then the pattern itself, also its fields can be bound to variables:

<Tabs>
  <TabItem value="Java" label="Java" default>

  ```java title="RuleDefinition.java - Fields binding" {6,16}
  import eu.trentorise.game.model.Classification;
  import it.univaq.gamification.dsl.binders.Bind;
  import static it.univaq.gamification.dsl.builders.lhs.ConstraintType.EQ;

  public static void main(String[] args) {
    final Bind CLASSIFICATION_NAME_BIND = new Bind("classificationName");

    PackageDescr package = new PackageDescrBuilderImpl()
      .name("eu.trentorise.game.model")
      .newImport(Classification.class).end()
      .newRule()
        .name("my_amazing_rule")
        .attribute("salience", "1000")
        .when()
          .classification()
              .bindName(CLASSIFICATION_NAME_BIND)
              .name(EQ, "green classification")
          .end()
        .end()
      .end()
      .getDescr();
    }
  ```
  </TabItem>
  <TabItem value="DRL" label="DRL">

  ```java title="my_amazing_rule.drl" {8}
  package eu.trentorise.game.model

  import eu.trentorise.game.task.Classification

  rule "my_amazing_rule"
    salience 1000
    when
      Classification( $classificationName : name, name == "green classification", position != 1 )
      BadgeCollectionConcept( name == "green leaves", badgeEarned not contains "gold-medal-green-1" )
    then
  end
  ```
  </TabItem>
</Tabs>

For each gamification element it is possible to bind all the relative fields.

:::note
In this case the class to define a binding is the `Bind` class.
:::

Furthermore, also the constraints can be bound:

<Tabs>
  <TabItem value="Java" label="Java" default>

  ```java title="RuleDefinition.java - Constraint binding" {6,16}
  import eu.trentorise.game.model.Classification;
  import it.univaq.gamification.dsl.binders.Bind;
  import static it.univaq.gamification.dsl.builders.lhs.ConstraintType.EQ;

  public static void main(String[] args) {
    final Bind IS_GREEN_CLASSIFICATION_BIND = new Bind("isGreenClassification");

    PackageDescr package = new PackageDescrBuilderImpl()
      .name("eu.trentorise.game.model")
      .newImport(Classification.class).end()
      .newRule()
        .name("my_amazing_rule")
        .attribute("salience", "1000")
        .when()
          .classification()
              .name(EQ, "green classification", IS_GREEN_CLASSIFICATION_BIND)
          .end()
        .end()
      .end()
      .getDescr();
    }
  ```
  </TabItem>
  <TabItem value="DRL" label="DRL">

  ```java title="my_amazing_rule.drl" {8}
  package eu.trentorise.game.model

  import eu.trentorise.game.task.Classification

  rule "my_amazing_rule"
    salience 1000
    when
      Classification( $isGreenClassification : name == "green classification", position != 1 )
      BadgeCollectionConcept( name == "green leaves", badgeEarned not contains "gold-medal-green-1" )
    then
  end
  ```
  </TabItem>
</Tabs>

:::tip
For each method useful to apply a constraint to a gamification element's field it is possible to pass as last parameter a `Bind` instance.
:::

### Conditional Elements

If a rule LHS contains multiples patterns their default conjunction is the logical `and`; it is also possible to use other conjunctions such as `or`, `not` and `exists`:

<Tabs>
  <TabItem value="Java" label="Java" default>

  ```java title="RuleDefinition.java - Conditional Elements" {12-23}
  import eu.trentorise.game.model.Action;
  import eu.trentorise.game.model.Classification;
  import eu.trentorise.game.model.BadgeCollectionConcept;
  import static it.univaq.gamification.dsl.builders.lhs.ConstraintType.EQ;

  public static void main(String[] args) {
    PackageDescr package = new PackageDescrBuilderImpl()
      .name("eu.trentorise.game.model")
      .newImport(Classification.class).end()
      .newRule()
        .name("my_amazing_rule")
        .when()
          .or()
            .action().name(EQ, "walk").end()
            .action().name(EQ, "run").end()
          .end()
          .exists()
            .classification().name(EQ, "green classification").end()
          .end()
          .not()
            .badgeCollection().badgeEarnedContains("green-badge")
          .end()
        .end()
      .end()
      .getDescr();
    }
  ```
  </TabItem>
  <TabItem value="DRL" label="DRL">

  ```java title="my_amazing_rule.drl" {9-11}
  package eu.trentorise.game.model

  import eu.trentorise.game.task.Action
  import eu.trentorise.game.task.Classification
  import eu.trentorise.game.task.BadgeCollectionConcept

  rule "my_amazing_rule"
    when
      Action( name == "walk" ) or Action( name == "run" )
      exists( Classification( name == "green classification" ) ) 
      not( BadgeCollectionConcept( badgeEarned contains "green-badge" ) ) 
    then
  end
  ```
  </TabItem>
</Tabs>

### Free Constraints

Sometimes the constraints might be more complex than others; in these cases it is possible to rely on the `pattern` methods that accepts a `String` representing the constraint:

<Tabs>
  <TabItem value="Java" label="Java" default>

  ```java title="RuleDefinition.java - Free constraint" {11}
  import eu.trentorise.game.model.InputData;

  public static void main(String[] args) {
    PackageDescr package = new PackageDescrBuilderImpl()
      .name("eu.trentorise.game.model")
      .newImport(Classification.class).end()
      .newRule()
        .name("my_amazing_rule")
        .when()
          .inputData()
              .constraint("(data['walkDistance'] != null || data['bikeDistance'] != null) && ((data['busDistance'] == null || data['busDistance'] == 0) &&  (data['carDistance'] == null || data['carDistance'] == 0))")
          .end()
        .end()
      .end()
      .getDescr();
    }
  ```
  </TabItem>
  <TabItem value="DRL" label="DRL">

  ```java title="my_amazing_rule.drl" {7}
  package eu.trentorise.game.model

  import eu.trentorise.game.task.InputData

  rule "my_amazing_rule"
    when
      InputData( (data['walkDistance'] != null || data['bikeDistance'] != null) && ((data['busDistance'] == null || data['busDistance'] == 0) &&  (data['carDistance'] == null || data['carDistance'] == 0)) )
    then
  end
  ```
  </TabItem>
</Tabs>

:::caution Heads up
The `pattern` method should be used only when it is strictly necessary because while using it the main advantages of the DSL are lost (typo checking, autocomplete, etc.).
:::