// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require('dotenv').config(); //TODO: move to elsewhere, does not belong in config
const paths = require('./docusaurus.paths.js');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KERISSE.org',
  tagline:
    'KERI Suite Search Engine',
  url: paths.url,
  baseUrl: paths.baseUrl,
  onBrokenLinks: 'ignore',//'ignore' | 'log' | 'warn' | 'throw'
  onBrokenMarkdownLinks: 'ignore',//'ignore' | 'log' | 'warn' | 'throw'
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'WebOfTrust', // Usually your GitHub org/user name.
  projectName: 'WOT-terms', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace 'en' with 'zh-Hans'.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the 'edit this page' links.
          // editUrl: 'https://github.com/kordwarshuis/WOT-terms-docusaurus/tree/main/',//TODO: find correct url
        },
        blog: false,
        // {
        //  showReadingTime: true,
        // Please change this to your repo.
        // Remove this to remove the 'edit this page' links.
        // editUrl:
        //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  // puts scripts in the head of the page
  scripts: [
    {
      //TODO: find out how to set path properly
      src: 'https://weboftrust.github.io/WOT-terms/js/chatbaseConfig.js'
    },
    {
      src: 'https://www.chatbase.co/embed.min.js',
      id: "gEyyxwGeZbnMxnrWTzhkV",
      defer: true
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js',
    }
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      sidebar: {
        autoCollapseCategories: true,
      },
      navbar: {
        title: 'KERISSE',
        logo: {
          alt: 'KERISSE Logo',
          src: 'img/stamp.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/visualisations',
            label: 'Visualisations',
            position: 'left',
            items: [
              {
                to: 'https://weboftrust.github.io/WOT-terms/visualisations/WebOfTrust/index.htm',
                label: 'Connections in repo`s of WebOfTrust',
                target: '_self',
              }
            ],
          },
          // {
          //   href: 'https://weboftrust.github.io/WOT-terms/glossary.html',
          //   label: 'Glossary',
          //   position: 'left',
          //   target: '_self',
          // },
          {
            href: '/feedback',
            label: 'Feedback',
            position: 'left',
          },
          {
            href: 'https://github.com/weboftrust/WOT-terms',
            label: 'GitHub repo',
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
                label: 'Documentation',
                to: '/docs/intro',
              },
              {
                label: 'Concepts',
                to: '/docs/concepts/intro',
              },
              {
                label: 'Education',
                to: '/docs/education/intro',
              },
              {
                label: 'Resources',
                to: '/docs/resources/intro',
              },
              {
                label: 'Glossary',
                to: '/docs/terms/glossary/intro',
              },
              {
                label: 'Howtos',
                to: '/docs/how\ we\did/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //  label: 'Blog',
              //  to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/weboftrust/WOT-terms',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} Web Of Trust.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      //TODO: disable when not used anymore
      mermaid: {
        theme: { light: 'neutral', dark: 'forest' },
        options: {
          //…
        }
      },
    }),
  plugins: [
    [
      'docusaurus-plugin-dotenv',
      {
        path: './.env', // The path to your environment variables.
        safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
        systemvars: false, // Set to true if you would rather load all system variables as well (useful for CI purposes)
        silent: false, //  If true, all warnings will be suppressed
        expand: false, // Allows your variables to be "expanded" for reusability within your .env file
        defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
        ignoreStub: true,
      },
    ],
    // /**
    //  * BEGIN LOCAL SEARCH
    //  */
    // [
    //   require.resolve('@cmfcmf/docusaurus-search-local'),
    //   {
    //     // whether to index docs pages
    //     indexDocs: true,

    //     // Whether to also index the titles of the parent categories in the sidebar of a doc page.
    //     // 0 disables this feature.
    //     // 1 indexes the direct parent category in the sidebar of a doc page
    //     // 2 indexes up to two nested parent categories of a doc page
    //     // 3...
    //     //
    //     // Do _not_ use Infinity, the value must be a JSON-serializable integer.
    //     indexDocSidebarParentCategories: 4,

    //     // whether to index blog pages
    //     indexBlog: false,

    //     // whether to index static pages
    //     // /404.html is never indexed
    //     indexPages: true,

    //     // language of your documentation, see next section
    //     language: 'en',

    //     // setting this to 'none' will prevent the default CSS to be included. The default CSS
    //     // comes from autocomplete-theme-classic, which you can read more about here:
    //     // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
    //     // When you want to overwrite CSS variables defined by the default theme, make sure to suffix your
    //     // overwrites with `!important`, because they might otherwise not be applied as expected. See the
    //     // following comment for more information: https://github.com/cmfcmf/docusaurus-search-local/issues/107#issuecomment-1119831938.
    //     style: undefined,

    //     // The maximum number of search results shown to the user. This does _not_ affect performance of
    //     // searches, but simply does not display additional search results that have been found.
    //     maxSearchResults: 8,

    //     // lunr.js-specific settings
    //     lunr: {
    //       // When indexing your documents, their content is split into 'tokens'.
    //       // Text entered into the search box is also tokenized.
    //       // This setting configures the separator used to determine where to split the text into tokens.
    //       // By default, it splits the text at whitespace and dashes.
    //       //
    //       // Note: Does not work for 'ja' and 'th' languages, since these use a different tokenizer.
    //       tokenizerSeparator: /[\s\-]+/,
    //       // https://lunrjs.com/guides/customising.html#similarity-tuning
    //       //
    //       // This parameter controls the importance given to the length of a document and its fields. This
    //       // value must be between 0 and 1, and by default it has a value of 0.75. Reducing this value
    //       // reduces the effect of different length documents on a term’s importance to that document.
    //       b: 0.75,
    //       // This controls how quickly the boost given by a common word reaches saturation. Increasing it
    //       // will slow down the rate of saturation and lower values result in quicker saturation. The
    //       // default value is 1.2. If the collection of documents being indexed have high occurrences
    //       // of words that are not covered by a stop word filter, these words can quickly dominate any
    //       // similarity calculation. In these cases, this value can be reduced to get more balanced results.
    //       k1: 1.2,
    //       // By default, we rank pages where the search term appears in the title higher than pages where
    //       // the search term appears in just the text. This is done by 'boosting' title matches with a
    //       // higher value than content matches. The concrete boosting behavior can be controlled by changing
    //       // the following settings.
    //       titleBoost: 5,
    //       contentBoost: 1,
    //       tagsBoost: 3,
    //       parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
    //     },
    //   },
    // ],
    // /**
    //  * END LOCAL SEARCH
    //  */
  ],
  clientModules: [
    require.resolve('./clientModules/typesenseInstantSearchInit.js'),// Typesense InstantSearch Plugin
    require.resolve('./clientModules/typesenseInstantSearch.js'),// Typesense InstantSearch Plugin
    require.resolve('./clientModules/showLevels'),
    require.resolve('./clientModules/insertVideo'),
    require.resolve('./clientModules/insertSubtitles'),
    require.resolve('./clientModules/dynamicTables'),
    require.resolve('./clientModules/elementGoFullScreen'),
    require.resolve('./clientModules/horizontalScrollHint'),
    require.resolve('./clientModules/showDefinitionsPopUpOnClick'),
    require.resolve('./clientModules/writeChanges'),
    require.resolve('./clientModules/addDataTypes'),
    require.resolve('./clientModules/showGPTsummary'),
    require.resolve('./clientModules/typesenseHandleSearchModal'),
  ],
};

module.exports = config;