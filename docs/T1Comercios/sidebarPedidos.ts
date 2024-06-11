import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "T1Comercios/pedidos",
    },
    {
      type: "category",
      label: "Lista pedidos Pedidos",
      items: [
        {
          type: "doc",
          id: "T1Comercios/get-orders-full",
          label: "Listado de pedidos de un comercio.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Anexos",
      items: [
        {
          type: "doc",
          id: "T1Comercios/download-orderservice-pdf",
          label: "Descarga la Orden de compra  de un pedido en formato PDF",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/download-order-guide-pdf",
          label: "Descarga la guía un pedido en formato PDF",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Guías",
      items: [
        {
          type: "doc",
          id: "T1Comercios/upload-order-guide",
          label: "Carga la guía de un pedido",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Comercios/upload-status",
          label: "uploadStatus",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Cancelar pedidos",
      items: [
        {
          type: "doc",
          id: "T1Comercios/cancel-order",
          label: "Cancelación de una partida de un pedido",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
