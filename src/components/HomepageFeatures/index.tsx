import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy Documentation',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Find everything you need to get started with RankMonk. Simple guides show you how to create SEO-optimized landing pages step by step. Start with the basics and learn as you grow.
      </>
    ),
  },
  {
    title: 'Learn at Your Own Pace',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Each guide is designed to help you master RankMonk quickly. From basic setup to advanced features, discover how to create landing pages that rank. Pick the topics that matter most to your business.
      </>
    ),
  },
  {
    title: 'Built for Growth',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Get detailed guides on scaling your content creation, managing multiple landing pages, and optimizing for both SEO and PPC. Learn how to use RankMonk's AI to grow your online presence effectively.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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
