import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

import CodeFeatureImageUrl from "@site/static/img/code-feature.png";
import GuideFeatureImageUrl from "@site/static/img/guides-feature.png";
import CheatSheetsFeatureImageUrl from "@site/static/img/cheatsheets-feature.png";

type FeatureItem = {
  title: string;
  imageUrl: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Code",
    imageUrl: CodeFeatureImageUrl,
    description: (
      <>
        Boilerplates and code snippets of common full stack development patterns
      </>
    ),
  },
  {
    title: "Guides",
    imageUrl: GuideFeatureImageUrl,
    description: (
      <>Step by step guides on common full stack development tasks</>
    ),
  },
  {
    title: "Cheat Sheets",
    imageUrl: CheatSheetsFeatureImageUrl,
    description: (
      <>Cheat sheets for programming languages and other technologies</>
    ),
  },
];

function Feature({ title, imageUrl, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={imageUrl} />
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
