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
          label: "CmV2ProductCommerceProductByIDCommerce_POST",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-product-by-id-commerce-get",
          label: "CmV2ProductCommerceProductByIDCommerce_GET",
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
          label: "CmV2ProductCommerceProductByIDCommerce_GET",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-product-by-id-commerce-delete",
          label: "CmV2ProductCommerceProductByIDCommerce_DELETE",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-pause-by-id-commerce-post",
          label: "CmV2ProductCommercePauseByIDCommerce_POST",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-active-by-id-commerce-post",
          label: "CmV2ProductCommerceActiveByIDCommerce_POST",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-product-sku-get",
          label: "CmV2ProductCommerceProductSku_GET",
          className: "api-method get",
        },
      ],
    },
    {
      type: 'category',
      label: 'Autenticación',
      items: require("./sidebarAutenticacion.ts"),
    },
  ],
};

export default sidebar.apisidebar;
