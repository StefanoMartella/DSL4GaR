---
sidebar_position: 3
---

# Rule Deployment

Once the rules have been generated and tested, they are ready to be shipped in production (on the so called gamification engine) to make the final user enjoy the new game mechanics 🥳.

## Deployer Instance

The first step to deploy the rules consists in establishing a connection with the gamification engine; this is possible through a `DeploymentService` instance:

```java title="RuleDeployment.java"
import it.univaq.gamification.deployment.services.DeploymentService;
import it.univaq.gamification.deployment.services.impl.DeploymentServiceImpl;

public class Deployer {

  private static DeploymentService deployer;

  public static DeploymentService getInstance() {
    if (deployer == null) {
      deployer = DeploymentServiceImpl
        .builder()
        .protocol("http")
        .domain("localhost")
        .port(8010)
        .username("admin")
        .password("password")
        .build();
    }
    return deployer;
  }
}
```

:::caution
Set the protocol, domain, port, username and password according to your needs.
:::

The above snippet shows how it is possible to create a singleton that returns a `DeploymentServiceImpl` instance that holds the connection to the gamification engine.

## Rule Insertion/Update

The `Deployer` instance provides the `upsert` method through which it is possible to deploy a rule on the gamification engine:

```java title="RuleDeployment.java - Rule upsert" {6-12}
public static void main(String[] args) {
  // Definition of the rules
  PackageDescr rule1 = ...; 
  PackageDescr rule2 = ...;

  Deployer.getInstance().upsert(
    // The following is the id of the game on the gamification engine
    "62df8ddc0055b0275113d374",
    rule1,
    rule2,
    /// Other rules
  );
}
```
:::info
The `upsert` method verifies, for each rule passed as parameter, if the gamification engine already contains a rule with the same name, if that is the case the rule is updated on the engine otherwise it is inserted as a new one.
:::

The above code will produce a similar output:

```bash
2023-01-29 17:48:17,695  INFO | main | i.u.g.deployment.services.impl.DeploymentServiceImpl    | PENDING - Retrieving rules of game with ID 62df8ddc0055b0275113d374... 
2023-01-29 17:48:18,187  INFO | main | i.u.g.deployment.services.impl.DeploymentServiceImpl    | SUCCESS - Rules of game 62df8ddc0055b0275113d374 retrieved 
2023-01-29 17:48:18,410  INFO | main | i.u.g.deployment.services.impl.DeploymentServiceImpl    | PENDING - Adding rule "rule1" to game with ID 62df8ddc0055b0275113d374... 
2023-01-29 17:48:18,539  INFO | main | i.u.g.deployment.services.impl.DeploymentServiceImpl    | SUCCESS - Rule "rule1" added to game with ID 62df8ddc0055b0275113d374 
2023-01-29 17:48:18,541  INFO | main | i.u.g.deployment.services.impl.DeploymentServiceImpl    | PENDING - PENDING - Editing rule "rule2" (ID: 63d6a352e392ba20b7009a78) to game with ID 62df8ddc0055b0275113d374...
2023-01-29 17:48:18,617  INFO | main | i.u.g.deployment.services.impl.DeploymentServiceImpl    | SUCCESS - Rule "rule2" (ID: 63d6a352e392ba20b7009a79) edited at game with ID 62df8ddc0055b0275113d374 
```

## Rule Deletion

The `Deployer` instance also provides the `delete` method through which it is possible remove previously deployed rules from the gamification engine:

```java title="RuleDeployment.java - Rule deletion" {6-12}
public static void main(String[] args) {
  // Definition of the rules
  PackageDescr rule1 = ...; 
  PackageDescr rule2 = ...;

  Deployer.getInstance().delete(
    // The following is the id of the game on the gamification engine
    "62df8ddc0055b0275113d374",
    rule1,
    rule2,
    /// Other rules
  );
}
```

The above code will produce a similar output:

```bash
2023-01-29 17:51:47,378  INFO | main | i.u.g.deployment.services.impl.DeploymentServiceImpl    | PENDING - Retrieving rules of game with ID 62df8ddc0055b0275113d374... 
2023-01-29 17:51:47,868  INFO | main | i.u.g.deployment.services.impl.DeploymentServiceImpl    | SUCCESS - Rules of game 62df8ddc0055b0275113d374 retrieved 
2023-01-29 17:51:47,974  INFO | main | i.u.g.deployment.services.impl.DeploymentServiceImpl    | PENDING - Deleting rule with ID 63d6a352e392ba20b7009a77 to game with ID 62df8ddc0055b0275113d374... 
2023-01-29 17:51:48,052  INFO | main | i.u.g.deployment.services.impl.DeploymentServiceImpl    | SUCCESS - Rule with ID 63d6a352e392ba20b7009a77 deleted at game with ID 62df8ddc0055b0275113d374 
2023-01-29 17:51:48,053  INFO | main | i.u.g.deployment.services.impl.DeploymentServiceImpl    | PENDING - Deleting rule with ID 63d6a352e392ba20b7009a78 to game with ID 62df8ddc0055b0275113d374... 
2023-01-29 17:51:48,118  INFO | main | i.u.g.deployment.services.impl.DeploymentServiceImpl    | SUCCESS - Rule with ID 63d6a352e392ba20b7009a78 deleted at game with ID 62df8ddc0055b0275113d374 
```