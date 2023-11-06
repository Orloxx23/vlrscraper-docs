import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img src="https://i.imgur.com/ZSMbOPL.png" width={64} height={64} />
      <span>Valorant Esports API v1.0.3</span>
    </div>
  ),
  project: {
    link: "https://github.com/Orloxx23/vlresports",
  },
  /*chat: {
    link: 'https://discord.com',
  },*/
  docsRepositoryBase: "https://github.com/Orloxx23/vlresports",
  footer: {
    text: (
      <span>
        Apache 2.0 {new Date().getFullYear()} ©{" "}
        <a href="https://orlandomm.net" target="_blank">
          Orloxx
        </a>
        .
      </span>
    ),
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s | Valorant Esports API",
    };
  },
};

export default config;
