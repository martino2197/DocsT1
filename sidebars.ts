import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // { type: "autogenerated", dirName: "." },
  //   {
  //     type: "category",
  //     label: "Customization",
  //     link: {
  //       type: "generated-index",
  //     },
  //     items: [
  //       {
  //         type: "autogenerated",
  //         dirName: "customization",
  //       },
  //     ],
  //   },
  // ],

  // tutorialSidebar: [
  // {
  // type: "autogenerated",
  // dirName: ".",
  // link: {
  //   type: "generated-index",
  //   title: "Petstore API",
  //   description:
  //     "This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
  //   slug: "/category/T1Pagos",
  // },
  // },
  // {
  //   type: "category",
  //   label: "Cloud Object Storage",
  //   link: {
  //     type: "generated-index",
  //     title: "Cloud Object Storage API",
  //     slug: "/category/cos-api",
  //   },
  //   items: require("./docs/cos/sidebar.js"),
  // },
  // {
  //   type: "category",
  //   label: "Burgers",
  //   link: {
  //     type: "generated-index",
  //     title: "Burger API",
  //     slug: "/category/food-api",
  //   },
  //   items: [
  //     {
  //       type: "autogenerated",
  //       dirName: "food/burgers", // '.' means the current docs folder
  //     },
  //   ],
  // },
  // {
  //   type: "category",
  //   label: "Yogurt Store",
  //   link: {
  //     type: "generated-index",
  //     title: "Yogurt Store API",
  //     slug: "/category/yogurt-api",
  //   },
  //   items: [
  //     {
  //       type: "autogenerated",
  //       dirName: "food/yogurtstore", // '.' means the current docs folder
  //     },
  //   ],
  // },
  // {
  //   type: "category",
  //   label: "Restaurant",
  //   link: {
  //     type: "generated-index",
  //     title: "Restaurant API",
  //     slug: "/category/restaurant-api",
  //   },
  //   items: require("./docs/restaurant/sidebar.js"),
  // },

  // But you can create a sidebar manually

  // { type: "autogenerated", dirName: ".", },
  // {
  //   type: 'category',
  //   label: 'T1Comercios',
  //   items: 'T1Comercios',
  // },

  t1pagos: [
    {
      type: "category",
      label: "T1Pagos",
      items: require("./docs/T1Pagos/sidebar.ts"),
    },
  ],

  t1envios: [
    {
      type: "category",
      label: "COMENZAR",
      items: require("./docs/T1Envíos/sidebar.ts"),
    },
  ],

  t1comercios: [
    {
      type: "category",
      label: "T1Comercios",
      items: require("./docs/T1Comercios/sidebar.ts"),
    },
  ],
};

export default sidebars;
