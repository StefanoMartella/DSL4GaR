import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Rules Definition",
    Svg: require("@site/static/img/rule_definition.svg").default,
    description: (
      <>The DSL provides user-friendly APIs for the rules definiton phase.</>
    ),
  },
  {
    title: "Rules Simulation",
    Svg: require("@site/static/img/rule_testing.svg").default,
    description: (
      <>
        The defined rules can be easily tested in different scenario and further
        analized.
      </>
    ),
  },
  {
    title: "Rules Deployment",
    Svg: require("@site/static/img/rule_deployment.svg").default,
    description: (
      <>
        The rules can be directly deployed on the gamification engine in no
        time.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
