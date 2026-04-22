import type { Localized } from '@/i18n/locale'
import { Technology } from '@/types/technologies'

export type StackGroup = {
  id: string
  name: Localized
  tag: Localized
  width: 4 | 6 | 8 | 12
  items: { tech: Technology; primary?: boolean }[]
}

export const stackGroups: StackGroup[] = [
  {
    id: 'languages-core',
    name: {
      en: 'languages & core',
      pt: 'linguagens & núcleo'
    },
    tag: {
      en: 'daily',
      pt: 'diário'
    },
    width: 6,
    items: [
      { tech: Technology.Typescript, primary: true },
      { tech: Technology.Javascript, primary: true },
      { tech: Technology.HTML, primary: true },
      { tech: Technology.CSS, primary: true },
      { tech: Technology.Python },
      { tech: Technology.SQL },
      { tech: Technology.Solidity }
    ]
  },
  {
    id: 'frameworks-ui',
    name: {
      en: 'frameworks & UI',
      pt: 'frameworks & UI'
    },
    tag: {
      en: 'productive',
      pt: 'produtivo'
    },
    width: 6,
    items: [
      { tech: Technology.ReactJS, primary: true },
      { tech: Technology.NextJS, primary: true },
      { tech: Technology.Lit },
      { tech: Technology.ExpressJS },
      { tech: Technology.NestJS },
      { tech: Technology.SASS },
      { tech: Technology.Tailwind },
      { tech: Technology.Bootstrap },
      { tech: Technology.Figma }
    ]
  },
  {
    id: 'runtime-data',
    name: {
      en: 'runtime, data & quality',
      pt: 'runtime, dados & qualidade'
    },
    tag: {
      en: 'shipping',
      pt: 'entrega'
    },
    width: 6,
    items: [
      { tech: Technology.NodeJS, primary: true },
      { tech: Technology.PostgreSQL },
      { tech: Technology.MySQL },
      { tech: Technology.Jest },
      { tech: Technology.Playwright },
      { tech: Technology.Vite },
      { tech: Technology.Vitest },
      { tech: Technology.Git, primary: true },
      { tech: Technology.Django },
      { tech: Technology.Web3JS }
    ]
  },
  {
    id: 'devops',
    name: {
      en: 'devops',
      pt: 'devops'
    },
    tag: {
      en: 'infrastructure',
      pt: 'infraestrutura'
    },
    width: 6,
    items: [
      { tech: Technology.Docker },
      { tech: Technology.Jenkins },
      { tech: Technology.GithubActions },
      { tech: Technology.Railway },
      { tech: Technology.Vercel },
    ]
  }
]
