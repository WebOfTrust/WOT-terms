import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "SSI made easy",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        You will find everything related to Self Sovereign Identity collected
        here. OK, nearly everything.
      </>
    ),
  },
  {
    title: "WOT terms at your fingertips",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>Search at light speed. Find while you type.</>,
  },
  {
    title: "Contribute",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Missing something? Contribute!</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
