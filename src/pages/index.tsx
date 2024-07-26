import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Navbar from '@theme/Navbar';


import styles from "./index.module.css";
import { Button, Card, IconButton, Typography } from "@mui/material";

import React from "react";

const T1Logo = require("@site/static/img/T1Logo.svg").default;
const T1EnviosLogo = require("@site/static/img/T1EnviosLogo.svg").default;
const T1PagosLogo = require("@site/static/img/T1PagosLogos.svg").default;
const T1ComerciosLogo = require("@site/static/img/T1ComerciosLogo.svg").default;
const T1PaginasLogo = require("@site/static/img/T1PaginasLogos.svg").default;

const FacebookIcon = require("@site/static/img/facebookIcon.svg").default;
const InstagramIcon = require("@site/static/img/instagramIcon.svg").default;
const LinkedinIcon = require("@site/static/img/linkedinIcon.svg").default;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (<>
    <Navbar /> 
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
    </>
  );
}

function HomepageFooter() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div
        className="container"
        style={{
          display: "flex",
          gap: "4rem",
        }}
      >
        <div
          className={clsx("col col--2")}
          style={{
            display: "flex",
            maxWidth: "120px",
            minHeight: "120px",
            borderRadius: "50%",
          }}
        >
          <T1Logo style={{ minWidth: 60, minHeight: 60 }} role="img" />
        </div>
        <div
          className={clsx("col col--2")}
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "justify",
          }}
        >
          <Typography sx={{ color: "#DB3B2B" }} variant="subtitle1">
            Documentación
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Button
              sx={{
                fontSize: 14,
                borderRadius: 3,
                textTransform: "none",
                padding: 0,
              }}
              size="small"
              variant="text"
            >
              <Link
                to="/docs/T1Pagos/t-1-pagos"
                color="#333333"
                style={{ color: "#333333" }}
              >
                T1Pagos
              </Link>
            </Button>
            <Button
              sx={{
                fontSize: 14,
                borderRadius: 3,
                textTransform: "none",
                padding: 0,
              }}
              size="small"
              variant="text"
            >
              <Link
                to="/docs/T1Comercios/claro-authentication-api"
                color="#333333"
                style={{ color: "#333333" }}
              >
                T1Comercios
              </Link>
            </Button>
            <Button
              sx={{
                fontSize: 14,
                borderRadius: 3,
                textTransform: "none",
                padding: 0,
              }}
              size="small"
              variant="text"
            >
              <Link
                to="/docs/T1Envíos/t-1-envios"
                color="#333333"
                style={{ color: "#333333" }}
              >
                T1Envios
              </Link>
            </Button>
          </div>
        </div>
        <div
          className={clsx("col col--1")}
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "justify",
          }}
        >
          <Typography sx={{ color: "#DB3B2B" }} variant="subtitle1">
            Blog
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Button
              sx={{
                fontSize: 14,
                borderRadius: 3,
                textTransform: "none",
                padding: 0,
                display: "flex",
                justifyContent: "start",
              }}
              size="small"
              variant="text"
            >
              <Link to="/blog " color="#333333" style={{ color: "#333333" }}>
                Blog
              </Link>
            </Button>
          </div>
        </div>
        <div
          className={clsx("col col--1")}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            sx={{
              fontSize: 14,
              textTransform: "none",
              padding: "4px",
              display: "flex",
              justifyContent: "start",
            }}
            aria-label="T1Envios"
          >
            <Link to="https://t1envios.com/">
              <T1EnviosLogo style={{ maxWidth: 62, minHeight: 15.2 }} />
            </Link>
          </IconButton>

          <div
            style={{
              display: "flex",
            }}
          >
            <IconButton
              sx={{
                fontSize: 14,
                textTransform: "none",
                padding: "4px",
                display: "flex",
                justifyContent: "start",
              }}
              aria-label="facebook"
            >
              <Link
                to="https://www.facebook.com/t1envios"
                color="#333333"
                style={{ color: "#333333" }}
              >
                <FacebookIcon style={{ width: 16, height: 16 }} />
              </Link>
            </IconButton>
            <IconButton
              sx={{
                fontSize: 14,
                textTransform: "none",
                padding: "4px",
                display: "flex",
                justifyContent: "start",
              }}
              aria-label="instagram"
            >
              <Link
                to="https://www.instagram.com/t1envios"
                color="#333333"
                style={{ color: "#333333" }}
              >
                <InstagramIcon style={{ width: 16, height: 16 }} />
              </Link>
            </IconButton>
            <IconButton
              sx={{
                fontSize: 14,
                textTransform: "none",
                padding: "4px",
                display: "flex",
                justifyContent: "start",
              }}
              aria-label="linkedin"
            >
              <Link
                to="https://www.linkedin.com/company/t1envios/"
                color="#333333"
                style={{ color: "#333333" }}
              >
                <LinkedinIcon style={{ width: 16, height: 16 }} />
              </Link>
            </IconButton>
          </div>
        </div>
        <div
          className={clsx("col col--1")}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            sx={{
              fontSize: 14,
              textTransform: "none",
              padding: "4px",
              display: "flex",
              justifyContent: "start",
            }}
            aria-label="T1Pagos"
          >
            <Link to="https://www.t1pagos.com/">
              <T1PagosLogo style={{ maxWidth: 62, minHeight: 18.7 }} />
            </Link>
          </IconButton>
          <div
            style={{
              display: "flex",
            }}
          >
            <IconButton
              sx={{
                fontSize: 14,
                textTransform: "none",
                padding: "4px",
                display: "flex",
                justifyContent: "start",
              }}
              aria-label="facebook"
            >
              <Link
                to="https://www.facebook.com/profile.php?id=100086226317597"
                color="#333333"
                style={{ color: "#333333" }}
              >
                <FacebookIcon style={{ width: 16, height: 16 }} />
              </Link>
            </IconButton>
            <IconButton
              sx={{
                fontSize: 14,
                textTransform: "none",
                padding: "4px",
                display: "flex",
                justifyContent: "start",
              }}
              aria-label="instagram"
            >
              <Link
                to="https://www.instagram.com/t1pagos_/"
                color="#333333"
                style={{ color: "#333333" }}
              >
                <InstagramIcon style={{ width: 16, height: 16 }} />
              </Link>
            </IconButton>
            <IconButton
              sx={{
                fontSize: 14,
                textTransform: "none",
                padding: "4px",
                display: "flex",
                justifyContent: "start",
              }}
              aria-label="linkedin"
            >
              <Link
                to="https://www.linkedin.com/company/t1pagos/"
                color="#333333"
                style={{ color: "#333333" }}
              >
                <LinkedinIcon style={{ width: 16, height: 16 }} />
              </Link>
            </IconButton>
          </div>
        </div>
        <div
          className={clsx("col col--1")}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            sx={{
              fontSize: 14,
              textTransform: "none",
              padding: "4px",
              display: "flex",
              justifyContent: "start",
            }}
            aria-label="T1Comercios"
          >
            <Link to="https://www.t1comercios.com/">
              <T1ComerciosLogo style={{ width: 87.5, minHeight: 15.5 }} />
            </Link>
          </IconButton>
          <div
            style={{
              display: "flex",
            }}
          >
            <IconButton
              sx={{
                fontSize: 14,
                textTransform: "none",
                padding: "4px",
                display: "flex",
                justifyContent: "start",
              }}
              aria-label="facebook"
            >
              <Link
                to="https://www.facebook.com/t1comercios"
                color="#333333"
                style={{ color: "#333333" }}
              >
                <FacebookIcon style={{ width: 16, height: 16 }} />
              </Link>
            </IconButton>
            <IconButton
              sx={{
                fontSize: 14,
                textTransform: "none",
                padding: "4px",
                display: "flex",
                justifyContent: "start",
              }}
              aria-label="instagram"
            >
              <Link
                to="https://www.instagram.com/t1comercios/"
                color="#333333"
                style={{ color: "#333333" }}
              >
                <InstagramIcon style={{ width: 16, height: 16 }} />
              </Link>
            </IconButton>
            <IconButton
              sx={{
                fontSize: 14,
                textTransform: "none",
                padding: "4px",
                display: "flex",
                justifyContent: "start",
              }}
              aria-label="linkedin"
            >
              <Link
                to="https://www.linkedin.com/company/t1comercios/"
                color="#333333"
                style={{ color: "#333333" }}
              >
                <LinkedinIcon style={{ width: 16, height: 16 }} />
              </Link>
            </IconButton>
          </div>
        </div>
        <div
          className={clsx("col col--1")}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            sx={{
              fontSize: 14,
              textTransform: "none",
              padding: "4px",
              display: "flex",
              justifyContent: "start",
            }}
            aria-label="T1Paginas"
          >
            <Link to="https://t1paginas.com/">
              <T1PaginasLogo style={{ width: 72, minHeight: 15.5 }} />
            </Link>
          </IconButton>
          <div
            style={{
              display: "flex",
            }}
          >
            <IconButton
              sx={{
                fontSize: 14,
                textTransform: "none",
                padding: "4px",
                display: "flex",
                justifyContent: "start",
              }}
              aria-label="facebook"
            >
              <Link
                to="https://www.facebook.com/t1paginas"
                color="#333333"
                style={{ color: "#333333" }}
              >
                <FacebookIcon style={{ width: 16, height: 16 }} />
              </Link>
            </IconButton>
            <IconButton
              sx={{
                fontSize: 14,
                textTransform: "none",
                padding: "4px",
                display: "flex",
                justifyContent: "start",
              }}
              aria-label="instagram"
            >
              <Link
                to="https://www.instagram.com/t1paginas/"
                color="#333333"
                style={{ color: "#333333" }}
              >
                <InstagramIcon style={{ width: 16, height: 16 }} />
              </Link>
            </IconButton>
            <IconButton
              sx={{
                fontSize: 14,
                textTransform: "none",
                padding: "4px",
                display: "flex",
                justifyContent: "start",
              }}
              aria-label="linkedin"
            >
              <Link
                to="https://www.linkedin.com/company/t1paginas/"
                color="#333333"
                style={{ color: "#333333" }}
              >
                <LinkedinIcon style={{ width: 16, height: 16 }} />
              </Link>
            </IconButton>
          </div>
        </div>
      </div>
    </header>
  );
}
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Docs`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <HomepageFooter />
    </Layout>
  );
}
