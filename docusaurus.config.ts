import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "T1",
  tagline:
    "Digitaliza tu negocio con nuestro ecosistema Todo en 1. Obtén todos los beneficios: vende en múltiples canales digitales, optimiza tu logística, acepta pagos de manera segura, centraliza la administración de tus productos y potencializa tus ventas.",
  favicon: "img/T1Logo.svg",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // derived from docusaurus-theme-openapi-docs
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "",
      logo: {
        alt: "T1 Logo",
        src: "img/T1logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentación",
        },
        { to: "/blog", label: "Blog", position: "left" },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: "Docs",
      //     items: [
      //       {
      //         label: "T1Pagos",
      //         to: "/docs/T1Pagos/t-1-pagos",
      //       },
      //       {
      //         label: "T1Comercios",
      //         to: "/docs/T1Comercios/claro-authentication-api",
      //       },
      //       {
      //         label: "T1Envíos",
      //         to: "/docs/T1Envíos/t-1-envios",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "Facebook",
      //         href: "https://www.facebook.com/t1paginas",
      //       },
      //       {
      //         label: "Twitter",
      //         href: "https://x.com/t1paginas",
      //       },
      //       {
      //         label: "Instagram",
      //         href: "https://www.instagram.com/t1paginas/",
      //       },
      //       {
      //         label: "Linkedin",
      //         href: "https://www.linkedin.com/company/t1paginas/",
      //       },
      //     ],
      //   },
      //   {
      //     title: "More",
      //     items: [
      //       {
      //         label: "Blog",
      //         to: "/blog",
      //       },
      //       // {
      //       //   label: 'GitHub',
      //       //   href: 'https://github.com/facebook/docusaurus',
      //       // },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} CLAROSHOP.COM, S.A. DE C.V. & CLARO PAGOS, S.A. DE C.V.`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsLight,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic", // e.g. "classic" or the plugin-content-docs id
        config: {
          T1Pagos: {
            // "petstore" is considered the <id> that you will reference in the CLI
            specPath: "examples/T1Pagos/T1Pagos-API.yaml", // path or URL to the OpenAPI spec
            outputDir: "docs/T1Pagos", // output directory for generated *.mdx and sidebar.js files
            sidebarOptions: {
              groupPathsBy: "tag", // generate a sidebar.js slice that groups operations by tag
            },
          },
          T1Comercios: {
            specPath: "examples/T1Comercios/T1Comercios_Productos_V6.yaml", // path or URL to the OpenAPI spec
            outputDir: "docs/T1Comercios", // output directory for generated *.mdx and sidebar.js files
            sidebarOptions: {
              groupPathsBy: "tag", // generate a sidebar.js slice that groups operations by tag
            },
          },
          T1Envios: {
            specPath: "examples/T1Envios/T1Envios-OpenApi31Yaml.yaml", // path or URL to the OpenAPI spec
            outputDir: "docs/T1Envíos", // output directory for generated *.mdx and sidebar.js files
            sidebarOptions: {
              groupPathsBy: "tag", // generate a sidebar.js slice that groups operations by tag
            },
          },
        },
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"], // export theme components
};

export default config;
