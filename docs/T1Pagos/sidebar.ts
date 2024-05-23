import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "T1Pagos/t-1-pagos",
    },
    {
      type: "category",
      label: "tarjeta",
      items: [
        {
          type: "doc",
          id: "T1Pagos/crear-nueva-tarjeta",
          label: "Crear nueva tarjeta",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Pagos/consultar-listado-de-tarjetas",
          label: "Consultar listado de Tarjetas",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Pagos/consultar-tarjeta",
          label: "Consultar tarjeta",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Pagos/actualiza-datos-de-tarjeta",
          label: "Actualiza datos de tarjeta",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "T1Pagos/borrar-tarjeta",
          label: "Borrar tarjeta",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "cargo",
      items: [
        {
          type: "doc",
          id: "T1Pagos/crear-nuevo-cargo",
          label: "Crear nuevo cargo",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Pagos/consultar-un-cargo",
          label: "Consultar un cargo",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Pagos/cancelar-un-cargo-antes-del-final-del-dia",
          label: "Cancelar un cargo antes del final del día.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Pagos/reembolso-de-una-transaccion",
          label: "Reembolso de una transacción",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Pagos/captura-de-una-transaccion",
          label: "Captura de una transacción",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "cliente",
      items: [
        {
          type: "doc",
          id: "T1Pagos/crear-un-cliente",
          label: "Crear un Cliente",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Pagos/consultar-listado-de-clientes",
          label: "Consultar listado de Clientes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Pagos/consultar-un-cliente-por-id-de-cliente-en-comercio",
          label: "Consultar un cliente por Id de cliente en comercio",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Pagos/consultar-un-cliente",
          label: "Consultar un Cliente",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Pagos/actualizar-cliente",
          label: "Actualizar Cliente",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "T1Pagos/borrar-el-registro-de-un-cliente",
          label: "Borrar el registro de un Cliente",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "T1Pagos/consultar-suscripciones-de-cliente",
          label: "Consultar Suscripciones de Cliente",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Pagos/consultar-tarjetas-asociadas-a-cliente",
          label: "Consultar Tarjetas Asociadas a Cliente",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Pagos/consultar-un-cliente-por-correo-electronico",
          label: "Consultar un cliente por correo electrónico",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "plan",
      items: [
        {
          type: "doc",
          id: "T1Pagos/crear-plan-de-suscripcion",
          label: "Crear Plan de Suscripcion",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Pagos/consultar-listado-de-planes",
          label: "Consultar listado de Planes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Pagos/consultar-un-plan",
          label: "Consultar un Plan",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Pagos/actualizar-plan",
          label: "Actualizar Plan",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "T1Pagos/borrar-el-plan",
          label: "Borrar el plan",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "T1Pagos/consultar-un-plan-por-medio-de-id-externo",
          label: "Consultar un Plan por medio de id_externo",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Pagos/muestra-lista-de-suscripciones-al-plan",
          label: "Muestra lista de suscripciones al plan",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Pagos/cancelar-usuarios-suscritos-a-plan",
          label: "Cancelar usuarios suscritos a plan",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Pagos/cancelar-plan",
          label: "Cancelar Plan",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "suscripcion",
      items: [
        {
          type: "doc",
          id: "T1Pagos/crear-suscripcion",
          label: "Crear Suscripción",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Pagos/consultar-listado-de-suscripciones",
          label: "Consultar listado de Suscripciones",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Pagos/consultar-una-suscripcion",
          label: "Consultar una Suscripción",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Pagos/actualizar-suscripcion",
          label: "Actualizar Suscripcion",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "T1Pagos/cancelar-suscripcion",
          label: "Cancelar Suscripción",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "notificacion",
      items: [
        {
          type: "doc",
          id: "T1Pagos/consultar-listado-de-eventos-generados-en-el-sistema-en-las-ultimas-48-horas",
          label: "Consultar listado de Eventos generados en el sistema en las últimas 48 horas",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "conciliacion",
      items: [
        {
          type: "doc",
          id: "T1Pagos/consultar-listado-de-operaciones-y-su-estado-de-conciliacion",
          label: "Consultar listado de operaciones y su estado de conciliación",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Pagos/consultar-detalle-de-conciliacion-de-transaccion",
          label: "Consultar detalle de conciliación de transacción",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Pagos/consultar-detalle-de-conciliacion-usando-el-id-de-pedido",
          label: "Consultar detalle de conciliación usando el id de pedido",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "antifraude",
      items: [
        {
          type: "doc",
          id: "T1Pagos/evaluacion-antifraude",
          label: "Evaluacion antifraude",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Pagos/consultar-listado-de-evaluaciones",
          label: "Consultar listado de evaluaciones",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Pagos/consultar-evaluacion",
          label: "Consultar evaluación",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "cliente cuenta spei",
      items: [
        {
          type: "doc",
          id: "T1Pagos/crear-una-cuenta-para-cliente-spei",
          label: "Crear una cuenta para cliente SPEI",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Pagos/consultar-listado-de-cuenta-cliente",
          label: "Consultar listado de cuenta cliente",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Pagos/consultar-depositos-de-cliente",
          label: "Consultar depositos de Cliente",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "deposito Sears - Sanborns",
      items: [
        {
          type: "doc",
          id: "T1Pagos/validar-referencia-de-deposito",
          label: "Validar referencia de depósito",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "T1Pagos/registar-un-pago-a-una-referencia",
          label: "Registar un pago a una referencia",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Pagos/cancelar-un-pago-a-una-referencia",
          label: "Cancelar un pago a una referencia",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "recarga",
      items: [
        {
          type: "doc",
          id: "T1Pagos/crear-recarga",
          label: "Crear Recarga",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "T1Pagos/consultar-listado-de-recargas",
          label: "Consultar listado de Recargas",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
