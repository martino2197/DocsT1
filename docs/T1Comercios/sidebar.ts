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
          id: "T1Comercios/cm-v-2-product-commerce-product-by-id-commerce-post",
          label: "Creación de productos",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-product-by-id-commerce-get",
          label: "Listado de productos",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-product-by-id-commerce-patch",
          label: "CmV2ProductCommerceProductByIDCommerce_PATCH",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "T1Comercios/get-cm-v-2-product-commerce-product-by-id-commerce-get",
          label: "Obtiene información",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-product-by-id-commerce-delete",
          label: "Eliminación del producto",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-pause-by-id-commerce-post",
          label: "Pausa la publicación",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-active-by-id-commerce-post",
          label: "Activa la publicación",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-product-sku-get",
          label: "Obtiene los datos de los SKUS",
          className: "api-method get",
        },
      ],
    },
    {
      type: 'category',
      label: 'Autenticación',
      items: require("./sidebarAutenticacion.ts"),
    },
    {
      type: 'category',
      label: 'File Manager',
      items: require("./sidebarFileManager.ts"),
    },
  ],
};

export default sidebar.apisidebar;
