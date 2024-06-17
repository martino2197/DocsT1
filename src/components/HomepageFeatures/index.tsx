import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  buttonLabel: string;
  route: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Aumenta tus ventas.",
    Svg: require("@site/static/img/T1ComerciosLogo.svg").default,
    description: (
      <>
        Alcanzando a millones de clientes en los mejores marketplaces, con fácil
        gestión de inventarios, fulfillment y logística integrada, todo desde un
        mismo lugar.
      </>
    ),
    buttonLabel: "Documentación T1Comercio",
    route: "/docs/T1Comercios/claro-authentication-api",
  },
  {
    title: "Tu socio de pagos todo en uno",
    Svg: require("@site/static/img/T1PagosLogos.svg").default,
    description: (
      <>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          <li>Acepta pagos con tarjetas de Crédito y Debito </li>
          <li>Aumenta tu aprobación</li>
          <li>Reduce el fraude</li>
        </ul>
      </>
    ),
    buttonLabel: "Documentación T1Pagos",
    route: "/docs/T1Pagos/t-1-pagos",
  },
  {
    title: "Realiza todos tus envíos",
    Svg: require("@site/static/img/T1EnviosLogo.svg").default,
    description: (
      <>
        Maneja tus envíos desde un solo lugar con las mejores paqueterías, los
        mejores costos y el mejor servicio, de manera simple y segura.
      </>
    ),
    buttonLabel: "Documentación T1Envios",
    route: "/docs/T1Envíos/t-1-envios",
  },
  {
    title: "La mejor solución omnicanal para tu e-commerce.",
    Svg: require("@site/static/img/T1PaginasLogos.svg").default,
    description: (
      <>
        Haz crecer tu negocio con nuestra plataforma fácil de usar. Administra
        todos los aspectos de tu negocio y aumenta tus ventas de manera
        efectiva.
      </>
    ),
    buttonLabel: "Documentación T1Paginas",
    route: "/docs/T1Pagos/t-1-pagos",
  },
];

function Feature({ title, Svg, description, buttonLabel, route }: FeatureItem) {
  return (
    <div
      className={clsx("col col--4")}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className="button button--secondary button--lg" to={route}>
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
