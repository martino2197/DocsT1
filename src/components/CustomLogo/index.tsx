// src/components/CustomLogo.tsx

import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

const CustomLogo: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Selecciona la imagen del logo utilizando un selector de clase
    const logoImg = document.querySelector<HTMLImageElement>('.navbar__logo img');
    if (logoImg) {
      let logoSrc;
      if (location.pathname.startsWith('/docs/T1Comercios')) {
        logoSrc = "/img/T1ComerciosLogo.svg";
      } else if (location.pathname.startsWith('/docs/T1Pagos')) {
        logoSrc = "/img/T1PagosLogos.svg";
      } else {
        logoSrc = "/img/t1envios-logo.svg";
      }
      logoImg.src = logoSrc;
    }
  }, [location.pathname]);

  return null;
};

export default CustomLogo;