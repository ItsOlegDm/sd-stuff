import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
//import './index.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} >
      <div className={clsx("container", styles.container)}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--lg", styles.button)}
            to="/docs/installation/index">
            Открыть туториал
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Немного полезной информации о Stable Diffusion">
      <style>{".footer,.navbar--fixed-top{position:absolute;width:100vw}.navbar--fixed-top{background-color:#23232357}.footer{bottom:0;padding:10px 0;background-color:unset;color:#b4b4b4}"}</style>
      <main style={{"height": "100vh"}}
            className={styles.intromainpage}>
        <HomepageHeader />
      </main>
    </Layout>
  );
}
