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
          id: "T1Comercios/obtener-token-de-acceso",
          label: "Obtener token de acceso",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
