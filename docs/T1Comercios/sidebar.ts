import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: 'category',
      label: 'Autenticación',
      items: require("./sidebarAutenticacion.ts"),
    },
    {
      type: "category",
      label: "Productos",
      items: require("./sidebarProducts")
    },
    {
      type: 'category',
      label: 'File Manager',
      items: require("./sidebarFileManager.ts"),
    },
    {
      type: 'category',
      label: 'Catálogos',
      items: require("./sidebarCatalogosCategorias.ts"),
    },
    {
      type: 'category',
      label: 'Pedidos',
      items: require("./sidebarPedidos.ts"),
    },
  ],
};

export default sidebar.apisidebar;
