import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";

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
    buttonLabel: "Ver documentación",
    route: "/docs/T1Comercios/claro-authentication-api",
  },
  {
    title: "Tu socio de pagos todo en uno",
    Svg: require("@site/static/img/T1PagosLogos.svg").default,
    description: (
      <ul style={{ paddingLeft: 0, textAlign: "justify" }}>
        <li>Acepta pagos con tarjetas de Crédito y Debito </li>
        <li>Aumenta tu aprobación</li>
        <li>Reduce el fraude</li>
      </ul>
    ),
    buttonLabel: "Ver documentación",
    route: "/docs/T1Pagos/t-1-pagos",
  },
  {
    title: "Realiza todos tus envíos",
    Svg: require("@site/static/img/T1EnviosLogo.svg").default,
    description: (
      <p>
        Maneja tus envíos desde un solo lugar con las mejores paqueterías, los
        mejores costos y el mejor servicio, de manera simple y segura.
      </p>
    ),
    buttonLabel: "Ver documentación",
    route: "/docs/T1Envíos/t-1-envios",
  },
  {
    title: "La mejor solución omnicanal para tu e-commerce.",
    Svg: require("@site/static/img/T1PaginasLogos.svg").default,
    description: (
      <p>
        Haz crecer tu negocio con nuestra plataforma fácil de usar. Administra
        todos los aspectos de tu negocio y aumenta tus ventas de manera
        efectiva.
      </p>
    ),
    buttonLabel: "Ver documentación",
    route: "https://ayuda.t1paginas.com/",
  },
];

function Feature({ title, Svg, description, buttonLabel, route }: FeatureItem) {
  return (
    <Card
      className={clsx("col col--4")}
      variant="elevation"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "5px",
        maxWidth: "340px",
        minHeight: "415px",
        padding: "2rem",
        borderRadius: 12,
      }}
    >
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
      </div>
      <div className="text--center padding-horiz--md">
        <div style={{ fontSize: 14 }}>{description}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Button
          sx={{
            color: "#DB3B2B",
            borderRadius: 3,
            textTransform: "inherit",
            border: "1px solid rgba(219, 59, 43, 1)",
          }}
          size="large"
          variant="outlined"
          color="error"
        >
          <Link to={route}>{buttonLabel}</Link>
        </Button>
      </div>
    </Card>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.cardRowContainer}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
