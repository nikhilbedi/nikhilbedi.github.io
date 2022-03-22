// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mobile Data Flow',
  tagline: 'Data You Need When You Want It',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'mobile-data-flow', // Usually your repo name.
  trailingSlash: false,

  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
 

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Mobile Data Flow',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            docId: 'android/index',
            type: 'doc',
            position: 'left',
            label: 'Android',
          },
          {
            docId: 'ios/index',
            type: 'doc',
            position: 'left',
            label: 'iOS',
          },
          {
            docId: 'tools/index',
            type: 'doc',
            position: 'left',
            label: 'Tools',
          },
          {
            label: "Latest",
            position: "right",
            items: [
              {
                label: "0.67",
                href: 'https://www.example.com'
              },
              {
                label: "0.66",
                href: 'https://www.example.com'
              },
              {
                label: "0.65",
                href: 'https://www.example.com'
              },
              {
                label: "0.64",
                href: 'https://www.example.com'
              },
              {
                label: "0.63",
                href: 'https://www.example.com'
              },
              {
                label: "0.62",
                href: 'https://www.example.com'
              },
            ],
          },
          {
            href: 'https://jira01.corp.linkedin.com:8443/secure/CreateIssue.jspa?issuetype=1&pid=18270',
            label: 'Support Ticket',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Slack',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Email',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GraphQL',
                to: 'https://graphql.org/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LinkedIn, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

    }),
};

module.exports = config;
