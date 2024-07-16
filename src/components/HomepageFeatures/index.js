import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '⚡ KERIDoc',
    Svg: require('@site/static/img/10119973341678815049.svg').default,
    description: (
      <></>
    ),
    url: 'https://weboftrust.github.io/keridoc/'
  },
  {
    title: '⚡ KERI Suite Glossary',
    Svg: require('@site/static/img/9491177161682829258.svg')
      .default,
    description: (
      <></>),
    url: 'https://weboftrust.github.io/WOT-terms/'
  },
  {
    title: '⚡ Kerisse',
    Svg: require('@site/static/img/1626701221679047824.svg')
      .default,
    description: (
      <></>
    ),
    url: 'https://weboftrust.github.io/kerisse/'
  },
];

function Feature({ Svg, title, description, url }) {
  return (
    (
      <div className={clsx('col col--4')}>
        <a className='feature-block' href={`${url}`}>
          <div className="margin-top--lg text--center">
            <Svg className={styles.featureSvg} role="img" />
          </div>
          <div className="margin-top--lg text--center padding-horiz--md">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </a>
      </div>
    )
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className="homepage--heading">Personal learning environment and consensus building tool</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
