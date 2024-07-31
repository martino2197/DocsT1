import React, { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';
import BrowserOnly from '@docusaurus/BrowserOnly';

const CustomLogo: React.FC = () => {
  const location = useLocation();

  return (
    <BrowserOnly>
      {() => {
        const [theme, setTheme] = useState(
          document.documentElement.getAttribute('data-theme') || 'light'
        );

        useEffect(() => {
          // Función para manejar el cambio de tema
          const handleThemeChange = () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            setTheme(currentTheme || 'light');
          };

          // Añade un observador de mutaciones para detectar cambios en el atributo de tema
          const observer = new MutationObserver(handleThemeChange);
          observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme'],
          });

          // Inicializa el tema al montar el componente
          handleThemeChange();

          // Limpia el observador cuando el componente se desmonta
          return () => {
            observer.disconnect();
          };
        }, []); // Solo se ejecuta una vez al montar

        useEffect(() => {
          // Selecciona la imagen del logo utilizando un selector de clase
          const logoImg = document.querySelector<HTMLImageElement>('.navbar__logo img');
          if (logoImg) {
            let logoSrc;
            if (location.pathname.startsWith('/docs/T1Comercios')) {
              theme === 'light'
                ? (logoSrc = '/img/T1ComerciosLogo.svg')
                : (logoSrc = '/img/T1ComerciosLogoDark.svg');
            } else if (location.pathname.startsWith('/docs/T1Pagos')) {
              theme === 'light'
                ? (logoSrc = '/img/T1PagosLogos.svg')
                : (logoSrc = '/img/T1PagosLogoDark.svg');
            } else {
              theme === 'light'
                ? (logoSrc = '/img/t1envios-logo.svg')
                : (logoSrc = '/img/T1EnviosLogoDark.svg');
            }
            logoImg.src = logoSrc;
          }
        }, [location.pathname, theme]); // Ejecuta cuando cambia la ruta o el tema

        return null;
      }}
    </BrowserOnly>
  );
};

export default CustomLogo;
