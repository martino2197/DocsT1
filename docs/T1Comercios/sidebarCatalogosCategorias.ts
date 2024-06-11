import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "T1Comercios/catalogos-y-categorias",
    },
    {
      type: "category",
      label: "Marcas",
      items: [
        {
          type: "doc",
          id: "T1Comercios/get-brands",
          label: "Catálogo  todas las marcas oficiales.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Categorías",
      items: [
        {
          type: "doc",
          id: "T1Comercios/get-categories-by-sales-channel",
          label: "Retorna el árbol de categorías por canal de venta.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/get-categories-by-sales-channelby-id",
          label: "Rerorna información de la categoría seleccionada.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/getmatches",
          label: "Obtiene coincidencias de una categoría t1 con los canales de ventas.",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
