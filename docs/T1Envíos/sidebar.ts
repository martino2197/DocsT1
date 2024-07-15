import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "T1Envíos/t-1-envios",
    },
    {
      type: "doc",
      id: "T1Envíos/obtenerun-accesstoken",
      label: "Obtener un Access token",
      className: "api-method post",
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
        // {
        //   type: "doc",
        //   id: "T1Envíos/updatesactiveandinactivepackages",
        //   label: "Activación paqueterías",
        //   className: "api-method post",
        // },
        {
          type: "doc",
          id: "T1Envíos/generarguiaapartirdecotizacionprevia",
          label: "Generar guía",
          className: "api-method post",
        },
        // {
        //   type: "doc",
        //   id: "T1Envíos/packagesbypriorityandrule-update",
        //   label: "Reglas y Prioridades",
        //   className: "api-method post",
        // },
        {
          type: "doc",
          id: "T1Envíos/consultarguias",
          label: "Consultar guías",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Envíos/consulta-saldo",
          label: "Consultar saldo",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Envíos/consultadeestadodeguia",
          label: "Rastreo de guía ",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Envíos/saldosy-movimientos",
          label: "Saldos y Movimientos",
          className: "api-method get",
        },
        // {
        //   type: "doc",
        //   id: "T1Envíos/consulta-regla",
        //   label: "Consulta regla",
        //   className: "api-method post",
        // },
      ],
    },
  ],
};

export default sidebar.apisidebar;
