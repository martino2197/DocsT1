import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "T1Comercios/insomnia",
    },
    {
      type: "category",
      label: "APIV2",
      items: [
        {
          type: "doc",
          id: "T1Comercios/sellers-lyde",
          label: "Sellers Lyde",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Comercios/active-request",
          label: "Active Request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Comercios/stock-view",
          label: "Stock View",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Comercios/apiv-2-productcreate",
          label: "APIV2 PRODUCT CREATE",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "T1Comercios/apiv-2-productputsizecolor",
          label: "APIV2 PRODUCT PUT SIZE COLOR",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Comercios/apiv-2-productputedit",
          label: "APIV2 PRODUCT PUT EDIT",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "T1Comercios/apiv-2-productall",
          label: "APIV2 PRODUCT ALL",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
