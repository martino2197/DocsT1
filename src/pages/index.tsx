import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import { Card, Typography } from "@mui/material";

import React from "react";

const T1Logo = require("@site/static/img/T1Logo.svg").default;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "4rem",
        }}
      >
        <Card
          className={clsx("col col--4")}
          variant="elevation"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "120px",
            minHeight: "120px",
            borderRadius: "50%",
          }}
        >
          <T1Logo style={{ minWidth: 60, minHeight: 60 }} role="img" />
        </Card>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "justify",
          }}
        >
          <Typography variant="h4" component="h2">
            Digitaliza tu negocio con nuestro ecosistema Todo en 1.
          </Typography>
          <Typography variant="h6" component="h2">
            Obtén todos los beneficios: vende en múltiples canales digitales,
            optimiza tu logística, acepta pagos de manera segura, centraliza la
            administración de tus productos y potencializa tus ventas.
          </Typography>
        </div>

        {/* 
        <p className="hero__subtitle">{siteConfig.tagline}</p> */}
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
