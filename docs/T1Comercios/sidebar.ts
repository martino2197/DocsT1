import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "T1Comercios/catalogo-homologado-t-1",
    },
    {
      type: "category",
      label: "filtros-nombrados",
      items: [
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-filter-by-id-commerce-get",
          label: "CmV2ProductCommerceFilterByIDCommerce_GET",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-filter-by-id-commerce-post",
          label: "CmV2ProductCommerceFilterByIDCommerce_POST",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-filter-by-id-commerce-delete",
          label: "CmV2ProductCommerceFilterByIDCommerce_DELETE",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "reportes",
      items: [
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-report-by-id-commerce-get",
          label: "CmV2ProductCommerceReportByIDCommerce_GET",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-report-by-id-commerce-post",
          label: "CmV2ProductCommerceReportByIDCommerce_POST",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-report-by-id-commerce-delete",
          label: "CmV2ProductCommerceReportByIDCommerce_DELETE",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "canales de venta activos",
      items: [
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-sales-channel-commerce-by-id-commerce-get",
          label: "CmV2SalesChannelCommerceByIDCommerce_GET",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "categorias",
      items: [
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-sales-channel-category-by-id-sales-channel-get",
          label: "CmV2SalesChannelCategoryByIDSalesChannel_GET",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/get-cm-v-2-sales-channel-category-by-id-sales-channel-get",
          label: "CmV2SalesChannelCategoryByIDSalesChannel_GET",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "catalogos",
      items: [
        {
          type: "doc",
          id: "T1Comercios/seobtieneellistadodemarcas",
          label: "Se obtiene el listado de marcas",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/seobtieneellistadodecoloresporcategoria",
          label: "Se obtiene el listado de colores por categoria",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/seobtieneellistadodetallasporcategoria",
          label: "Se obtiene el listado de tallas por categoria",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "carga-manual",
      items: [
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-product-by-id-commerce-get",
          label: "CmV2ProductCommerceProductByIDCommerce_GET",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-product-by-id-commerce-post",
          label: "CmV2ProductCommerceProductByIDCommerce_POST",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Comercios/get-cm-v-2-product-commerce-product-by-id-commerce-get",
          label: "CmV2ProductCommerceProductByIDCommerce_GET",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-product-by-id-commerce-put",
          label: "CmV2ProductCommerceProductByIDCommerce_PUT",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-product-by-id-commerce-delete",
          label: "CmV2ProductCommerceProductByIDCommerce_DELETE",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-product-by-id-commerce-patch",
          label: "CmV2ProductCommerceProductByIDCommerce_PATCH",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-product-sku-get",
          label: "CmV2ProductCommerceProductSku_GET",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-product-sku-post",
          label: "CmV2ProductCommerceProductSku_POST",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-product-sku-sku-get",
          label: "CmV2ProductCommerceProductSkuSKU_GET",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-product-sku-sku-put",
          label: "CmV2ProductCommerceProductSkuSKU_PUT",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-product-sku-sku-delete",
          label: "CmV2ProductCommerceProductSkuSKU_DELETE",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-product-sku-sku-patch",
          label: "CmV2ProductCommerceProductSkuSKU_PATCH",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-update-product-channel-post",
          label: "CmV2ProductCommerceUpdateProductChannel_POST",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-pause-by-id-commerce-post",
          label: "CmV2ProductCommercePauseByIDCommerce_POST",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-delete-by-id-commerce-post",
          label: "CmV2ProductCommerceDeleteByIDCommerce_POST",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-inactive-by-id-commerce-post",
          label: "CmV2ProductCommerceInactiveByIDCommerce_POST",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "carga masiva excel",
      items: [
        {
          type: "doc",
          id: "T1Comercios/bulkload-commerce-by-id-commerce-get",
          label: "BulkloadCommerceByIDCommerce_GET",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/bulkload-commerce-by-id-commerce-post",
          label: "BulkloadCommerceByIDCommerce_POST",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Comercios/bulkload-store-id-log-by-store-id-and-bulk-id-get",
          label: "BulkloadStoreIdLogByStoreIdAndBulkId_GET",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/bulkload-store-id-category-by-store-id-get",
          label: "BulkloadStoreIdCategoryByStoreId_GET",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "apps y credenciales",
      items: [
        {
          type: "doc",
          id: "T1Comercios/api-clients-commerce-by-id-commerce-get",
          label: "ApiClientsCommerceByIDCommerce_GET",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/api-clients-commerce-by-id-commerce-post",
          label: "ApiClientsCommerceByIDCommerce_POST",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Comercios/api-clients-commerce-api-by-id-commerce-delete",
          label: "ApiClientsCommerceApiByIDCommerce_DELETE",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "fulfillment",
      items: [
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-fulfillment-get",
          label: "CmV2ProductCommerceFulfillment_GET",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-dropshipping-get",
          label: "CmV2ProductCommerceDropshipping_GET",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-all-by-id-commerce-get",
          label: "CmV2ProductCommerceAllByIDCommerce_GET",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-to-dropshipping-post",
          label: "CmV2ProductCommerceToDropshipping_POST",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-to-fulfillment-post",
          label: "CmV2ProductCommerceToFulfillment_POST",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-product-barcode-get",
          label: "CmV2ProductCommerceProductBarcode_GET",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/cm-v-2-product-commerce-product-volumetry-post",
          label: "CmV2ProductCommerceProductVolumetry_POST",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
