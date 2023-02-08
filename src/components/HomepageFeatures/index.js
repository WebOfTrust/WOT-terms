import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '⚡ Beginner',
    Svg: require('@site/static/img/child-girl-kid-svgrepo-com.svg').default,
    description: (
      <>
        A beginner is still an expert in the field of identity. Triggered by
        meaning and practical advantages.
      </>
    ),
  },
  {
    title: '⚡ Advanced',
    Svg: require('@site/static/img/graduate-svgrepo-com.svg').default,
    description: <>A skilled power user.</>,
  },
  {
    title: '⚡ Expert',
    Svg: require('@site/static/img/professor-svgrepo-com.svg').default,
    description: <>Technically skilled and very knowledgeable</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
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

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className="homepage--heading">Different knowledge levels</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
