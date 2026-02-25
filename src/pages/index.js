import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            点击进入详细页面📚
          </Link>
        </div>
      </div>
    </header>
  );
}
function FeatureCard({title, description, link, linkText}) {
  return (
    <div className={clsx('card', styles.featureCard)}>
      <div className="card__body">
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p>{description}</p>
      </div>
      <div className="card__footer">
        <Link className="button button--primary button--sm" to={link}>
          {linkText}
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="Stars Labs IT 基础架构设计"
      description="全面的企业IT基础设施规划与实施方案">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <Heading as="h2" className={styles.sectionTitle}>文档导航</Heading>
            <div className={styles.grid}>
              <FeatureCard
                title="IT 基础架构设计"
                description="身份认证、设备管理、自动化运维与企业资源管理整体架构方案。"
                link="/docs/intro"
                linkText="查看详情"
              />
              <FeatureCard
                title="网络架构"
                description="三层网络架构设计，包括VLAN划分、IP规划与路由策略。"
                link="/docs/network-architecture"
                linkText="查看详情"
              />
              <FeatureCard
                title="资产管理"
                description="企业IT资产全生命周期管理方案与最佳实践。"
                link="/docs/asset-management"
                linkText="查看详情"
              />
              <FeatureCard
                title="账户管理"
                description="企业账户体系设计与权限管理策略。"
                link="/docs/account-management"
                linkText="查看详情"
              />
              <FeatureCard
                title="AWS部署"
                description="基于AWS云平台的企业级部署方案。"
                link="/docs/aws-production"
                linkText="查看详情"
              />
              <FeatureCard
                title="故障响应"
                description="企业IT系统故障响应流程与处理机制。"
                link="/docs/incident-response"
                linkText="查看详情"
              />
              <FeatureCard
                title="日常排障"
                description="IT系统日常故障排查技巧与案例分析。"
                link="/docs/it-daily-troubleshooting"
                linkText="查看详情"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
