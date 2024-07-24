import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "T1Envíos/api-sso-documentacion",
    },
    {
      type: "category",
      label: "Auth",
      items: [
        {
          type: "doc",
          id: "T1Envíos/obteneruntoken",
          label: "Autenticación",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Collections",
      items: [
        {
          type: "doc",
          id: "T1Envíos/cotizador",
          label: "Cotizador",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Envíos/generaguia",
          label: "Genera guia",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
