import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "T1Comercios/pedidos",
    },
    {
      type: "category",
      label: "Pedidos",
      items: [
        {
          type: "doc",
          id: "T1Comercios/get-orders-full",
          label: "Listado de pedidos de un comercio.",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
