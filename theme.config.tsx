import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Valorant Esports API v1.0.2</span>,
  project: {
    link: 'https://github.com/Orloxx23/vlrscraper-docs',
  },
  /*chat: {
    link: 'https://discord.com',
  },*/
  docsRepositoryBase: 'https://github.com/Orloxx23/vlrscraper-docs/tree/main',
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://orlandomm.me" target="_blank">
          Orloxx
        </a>
        .
      </span>
    )
  },
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  useNextSeoProps() {
      return {
        titleTemplate: '%s | Valorant Esports API',
      }
  },
}

export default config
