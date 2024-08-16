import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "T1Comercios/documentacion-api-v-2-t-1-comercios",
    },
    {
      type: "category",
      label: "Productos",
      items: [
        {
          type: "doc",
          id: "T1Comercios/creacion-de-un-producto-en-la-plataforma-t-1-comercios",
          label: "Creación de un producto en la plataforma T1comercios",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Comercios/listado-de-productos-del-comercio",
          label: "Listado de productos del comercio",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/actualizacion-de-informacion-de-un-producto",
          label: "Actualización de información de un producto",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "T1Comercios/obtener-informacion-del-producto",
          label: "Obtener información del producto",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/eliminacion-del-producto-en-t-1-comercios",
          label: "Eliminación del producto en T1comercios",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "T1Comercios/pausar-publicacion",
          label: "Pausar publicación",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Comercios/activar-publicacion",
          label: "Activar publicación",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Comercios/obtiene-informacion-de-las-variaciones-de-un-producto",
          label: "Obtiene información de las variaciones de un producto",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
