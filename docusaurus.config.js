// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  // ✅ 站点标题（浏览器标题 + 首页大标题来源）
  title: 'TRON IT基础架构和日常SOP',
  tagline: 'TRON IT 基础设施规划与实施文档',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages 配置
  url: 'https://zyy1997.github.io/',
  baseUrl: '/full-it-infra-docs/',

  organizationName: 'Zyy1997',
  projectName: 'full-it-infra-docs',

  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/Zyy1997/full-it-infra-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Zyy1997/full-it-infra-docs/edit/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      // ✅ 左上角标题
      title: 'TRON IT基础架构和日常SOP',
      logo: {
        alt: 'TRON IT',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        //{to: '/blog', label: '博客', position: 'left'},
        {
          href: 'https://github.com/Zyy1997/full-it-infra-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {label: '开始阅读', to: '/docs/intro'},
          ],
        },
        {
          title: '更多',
          items: [
            //{label: '博客', to: '/blog'},
            {
              label: 'GitHub',
              href: 'https://github.com/Zyy1997/full-it-infra-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bruce4611`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
