---
sidebar_position: 1
---

# Package Definition

Before defining the rules, it is necessary to build one or more containers capable of holding them.<br />
These containers are Drools **packages** and they can be defined as follow:

```java title="PackageDefinition.java" {3}
public static void main(String[] args) {
  PackageDescr package = new PackageDescrBuilderImpl()
    .name("eu.trentorise.game.model")
    .getDescr();
}
```

In the above example we created a package whose name namespace is `eu.trentorise.game.model`.<br />
Packages can be enriched with **imports**, **globals**, **declarations** and **rules**.

:::danger One rule per package
Even if this is not true for Drools, while using DSL4GaR each package should contain exactly one rule.
:::

## Imports

It is possible to [import](https://docs.drools.org/7.73.0.Final/drools-docs/html_single/index.html#drl-imports-con_drl-rules) necessary classes inside a package as follow:

```java title="PackageDefinition.java - Imports" {6}
import eu.trentorise.game.model.BadgeCollectionConcept;

public static void main(String[] args) {
  PackageDescr package = new PackageDescrBuilderImpl()
    .name("eu.trentorise.game.model")
    .newImport(BadgeCollectionConcept.class)
    // Other imports...
    .getDescr();
}
```

All the imported classes can then be used inside the rule to apply the corresponding constraints.

## Globals

Within a package it is also possible to define [global](https://docs.drools.org/7.73.0.Final/drools-docs/html_single/index.html#drl-globals-con_drl-rules) variables in the following way:

```java title="PackageDefinition.java - Globals" {4,9}
import it.univaq.gamification.dsl.Global;

public static void main(String[] args) {
  final Global GLOBAL_VERONA_DISTANCE = new Global(Double.class, "verona_distance");

  PackageDescr package = new PackageDescrBuilderImpl()
    .name("eu.trentorise.game.model")
    // Imports...
    .newGlobal(GLOBAL_VERONA_DISTANCE).end()
    // Other globals...
    .getDescr();
}
```

In order to add a new global to a package it is necessary to declare a `Global` instance; its constructor accepts a `Class` that corresponds to the type of the global variable and a `String` that corresponds to the name of the variable itself.

:::info Global reference
The `Global` object is not instantiated directly inside `newGlobal` method but its reference is kept in a variable `GLOBAL_VERONA_DISTANCE` so that it can be further referenced within the rule inside the package.
:::

## Types Declaration

A package can also hold [type declarations](https://docs.drools.org/7.73.0.Final/drools-docs/html_single/index.html#drl-declarations-con_drl-rules):

```java title="PackageDefinition.java - Declarations" {8-12}
import it.univaq.gamification.dsl.Global;

public static void main(String[] args) {
  PackageDescr package = new PackageDescrBuilderImpl()
    .name("eu.trentorise.game.model")
    // Imports...
    // Globals...
    .newDeclare()
      .type().name(PRItinerary.class)
      .newField("length").type(Double.class).end()
      .newField("name").type(String.class).end()
    .end()
    // Other type declarations
    .getDescr();
}
```

In order to define a type, it is necessary to use the `newDeclare` method; it allows to define the class of the type to declare and its relative fields (with their corresponding types). In this case the following type has been declared:


```java title="rule.drl"
declare PRItinerary
  length: Double
  name: String
end
```

:::tip
Inside a package it is possible to define **imports**, **globals** and **types** in any order!
:::