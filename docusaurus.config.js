// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Full Stack Book',
  tagline: 'The TL;DR Guide Book For Full Stack Developers',
  url: 'https://www.fullstackbook.com',
  baseUrl: '/fullstackbook/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'travisluong', // Usually your GitHub org/user name.
  projectName: 'fullstackbook', // Usually your repo name.

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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/travisluong/fullstackbook/tree/main/',
          sidebarCollapsible: false,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/travisluong/fullstackbook/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-49B2N8W371',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Full Stack Book',
        logo: {
          alt: 'Full Stack Book',
          src: 'img/fullstackbook.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Start Here',
          },
          {
            type: 'doc',
            docId: 'courses/courses',
            position: 'left',
            label: 'Courses'
          },
          {
            type: 'doc',
            docId: 'business/business',
            position: 'left',
            label: 'Business',
          },          
          {
            type: 'doc',
            docId: 'design/design',
            position: 'left',
            label: 'Design',
          },          
          {
            type: 'doc',
            docId: 'frontend/frontend',
            position: 'left',
            label: 'Front End'
          },
          {
            type: 'doc',
            docId: 'backend/backend',
            position: 'left',
            label: 'Back End'
          },
          {
            type: 'doc',
            docId: 'devops/devops',
            position: 'left',
            label: 'DevOps'
          },
          {
            type: 'doc',
            docId: 'philosophy/philosophy',
            position: 'left',
            label: 'Philosophy'
          },          
          {
            type: 'docSidebar',
            sidebarId: 'cheatsheetSidebar',
            position: 'left',
            label: 'Cheat Sheets',
          },
          {
            type: 'doc',
            docId: 'coffee/coffee',
            position: 'left',
            label: 'Coffee'
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/travisluong/fullstackbook',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Intro',
                to: '/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/travisluong/fullstackbook',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Full Stack Book. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java']
      },
    }),
};

module.exports = config;
