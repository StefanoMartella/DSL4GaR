---
sidebar_position: 1
---

# Package Definition

Before defining the rules, it is necessary to build one or more containers capable of holding them.<br />
These containers are Drools **packages** and they can be defined as follow: 

```java title="PackageDefinition.java"
  PackageDescr package = new PackageDescrBuilderImpl()
      .name("eu.trentorise.game.model")
      .getDescr();
```

In the above example we created a package whose name namespace is `eu.trentorise.game.model`.<br />
Packages can be enriched with **imports**, **globals**, **declarations** and **rules**.

:::danger One rule per package
Even if this is not true for Drools, while using DSL4GaR each package should contain exactly one rule.
:::

## Imports

It is possible to import necessary classes inside a package as follow:

```java title="PackageDefinition.java" {3}
PackageDescr package = new PackageDescrBuilderImpl()
      .name("eu.trentorise.game.model")
      .import("eu.trentorise.game.model.PointConcept")
      .getDescr();
```

The `import` method accepts a string that corresponds to the full name of the entity as parameter.

:::tip Reduce error
Generally it is better to import classes using java reflections to reduce possible typos errors:

```java {6}
// Other imports ...
import eu.trentorise.game.model.PointConcept;

PackageDescr package = new PackageDescrBuilderImpl()
      .name("eu.trentorise.game.model")
      .import(PointConcept.class.getName())
      .getDescr();
```
:::