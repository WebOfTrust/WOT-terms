import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '⚡ Documentation',
    Svg: require('@site/static/img/10119973341678815049.svg').default,
    description: (
      <>
        <strong>KERISSE</strong> is a technical documentation site. You'll find information on decentralized identity technologies: KERI, ACDC and more.
      </>
    ),
  },
  {
    title: '⚡ Kerisse',
    Svg: require('@site/static/img/185139417416345278704481.svg')
      .default,
    description: <><strong>KERISSE</strong> is the fastest way to find relevant info about Keri.</>,
  },
  {
    title: '⚡ Search Engine',
    Svg: require('@site/static/img/1626701221679047824.svg')
      .default,
    description: <><strong>KERISSE</strong> is a sophisticated search engine. It searches this documentation site, AND other relevant sites.</>,
  },
  // {
  //   title: '⚡ Chatbot',
  //   Svg: require('@site/static/img/5553419701679821143.svg')
  //     .default,
  //   description: <>You can also have a conversation with <strong>KERISSE</strong> via our chatbot. Well informed, polite and patient.</>,
  // },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="margin-top--lg text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="margin-top--lg text--center padding-horiz--md">
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
