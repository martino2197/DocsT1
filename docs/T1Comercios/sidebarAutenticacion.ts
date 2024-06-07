import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "T1Comercios/claro-authentication-api",
    },
    {
      type: "category",
      label: "Autenticación",
      items: [
        {
          type: "doc",
          id: "T1Comercios/obtain-access-token",
          label: "Obtain access token",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
