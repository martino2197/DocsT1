import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "T1Envíos/t-1-envios",
    },
    {
      type: "category",
      label: "API",
      items: [
        {
          type: "doc",
          id: "T1Envíos/generarcotizacion",
          label: "Generar cotización",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Envíos/generarguiaapartirdecotizacionprevia",
          label: "Generar guía a partir de cotización previa",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Envíos/generarguiasincotizacion",
          label: "Generar guía sin cotización",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Envíos/consultarguias",
          label: "Consultar guías",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
