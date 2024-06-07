import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "T1Comercios/file-upload-api-imagenes",
    },
    {
      type: "category",
      label: "Subir Imagenes",
      items: [
        {
          type: "doc",
          id: "T1Comercios/upload-file",
          label: "Carga de archivo",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
