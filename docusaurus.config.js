// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rankmonk',
  tagline: 'AI-Powered SEO Landing Page Generator',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.rankmonk.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'reachkga',
  projectName: 'seo-agent-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/reachkga/seo-agent-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/rankmonk-social-card.jpg',
      navbar: {
        title: 'Rankmonk',
        logo: {
          alt: 'Rankmonk Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'dropdown',
            label: 'Quick Links',
            position: 'left',
            items: [
              {
                label: 'Landing Page Types',
                to: '/landingpage-types',
              },
              {
                label: 'Keyword Research',
                to: '/keyword-research/understanding-intent',
              },
              {
                label: 'CMS Integrations',
                to: '/framer-integration',
              },
            ],
          },
          {
            href: 'https://github.com/reachkga/seo-agent-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/getting_started',
              },
              {
                label: 'Landing Page Types',
                to: '/landingpage-types',
              },
              {
                label: 'Keyword Research',
                to: '/keyword-research/understanding-intent',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://rankmonk.slack.com',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/rankmonk',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/reachkga/seo-agent-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rank Monk, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
