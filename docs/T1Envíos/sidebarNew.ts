import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "T1Envíos/t-1-enviosaws",
    },
    {
      type: "category",
      label: "Misc",
      items: [
        {
          type: "doc",
          id: "T1Envíos/consultpackagesbyshopid",
          label: "consult packages by shop id",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Envíos/updatesactiveandinactivepackages",
          label: "Activación paqueterías",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Envíos/packagesbypriorityandrule-update",
          label: "Reglas y Prioridades",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Envíos/consulta-regla",
          label: "Consulta regla",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
