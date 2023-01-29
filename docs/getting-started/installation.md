---
sidebar_position: 1
---

# Installation

DSL4GaR is essentially a maven dependency.

:::info Maven repository
The package is not available through maven repository yet.
:::

## Requirements

<ul>
  <li> Java SDK 11 or above. You can download it from:</li>
  <ul>
    <li><a href="https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/downloads-list.html">Amazon corretto</a></li>
    <li><a href="https://adoptopenjdk.net/">AdoptJDK</a></li>
  </ul>
  <li><a href="https://maven.apache.org/download.cgi">Maven</a> version 3 or above.</li>
</ul>


## Setup

Since the .jar of the project is not yet available from the maven repository, it is necessary to build the project autonomously by downloading it from [here](https://github.com/antbucc/GRL) and running the following command:

```bash 
maven package
```

Alternatively, is is possible to download the pre-build jar file from [here](https://github.com/antbucc/GRL/releases/tag/v1.0.0).<br />

Once the jar has been generated/downloaded, it is possible to add the dependency to the project by running the following command:

```bash 
mvn install:install-file -Dfile=path/to/the/gamification-dsl-1.0-SNAPSHOT.jar -DgroupId=it.univaq.gamification -DartifactId=gamification-dsl -Dversion=1.0-SNAPSHOT -Dpackaging=jar -DgeneratePom=true
```

:::caution Set the right path
In the above command replace the `-Dfile` path based on the location of the jar on your device.
:::

Lastly, update the pom as follow:

```xml title="pom.xml" {5-9}
<dependencies>

    // Other dependencies

    <dependency>
        <groupId>it.univaq.gamification</groupId>
        <artifactId>gamification-dsl</artifactId>
        <version>1.0-SNAPSHOT</version>
    </dependency>

</dependencies>
```

<br />

That's it, you can start using the DSL for designing rules! 🥳

## Problems?

Ask for help or notify some lack on this documentation [here](https://github.com/antbucc/GRL/issues). 🙏🏻
