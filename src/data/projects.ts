import type { Project } from '@/types/project'
import { Technology } from '@/types/technologies'

import NetworksOnTheGoPreview from '/img/networks-on-the-go.png'
import MayaPreview from '/img/maya.png'
import XStorePreview from '/img/x-store.png'
import MacePreview from '/img/mace.png'
import BeproPreview from '/img/bepro.png'
import TaikaiPreview from '/img/taikai.png'
import GardenPreview from '/img/garden.png'
import RaytradePreview from '/img/raytrade.png'
import SuperColonyPreview from '/img/supercolony.png'

export const projects: Project[] = [
  {
    name: 'Mace',
    shortDescription: {
      en: 'DEX aggregator on Monad.',
      pt: 'Agregador de DEX na Monad.'
    },
    longDescription: {
      en: '',
      pt: ''
    },
    repository: '',
    techs: [
      Technology.Lit,
      Technology.Typescript,
      Technology.WebComponents,
      Technology.SASS,
      Technology.Vite,
      Technology.Vitest,
      Technology.GithubActions,
      Technology.Figma,
      Technology.DesignSystem,
      Technology.Storybook,
      Technology.RESTAPI,
    ],
    preview: MacePreview,
    appUrl: 'https://mace.ag',
    figmaUrl: 'figma.com/design/Jeg6Mn89ovqnAiyOfVeEgC/Mace',
  },
  {
    name: 'TAIKAI',
    shortDescription: {
      en: 'Hackathon platform trusted by companies like Microsoft, TikTok, Pfizer, and more.',
      pt: 'Plataforma de hackathons confiável por empresas como Microsoft, TikTok, Pfizer e mais.'
    },
    longDescription: {
      en: '',
      pt: ''
    },
    repository: '',
    techs: [
      Technology.ReactJS,
      Technology.NextJS,
      Technology.Javascript,
      Technology.Typescript,
      Technology.NodeJS,
      Technology.ExpressJS,
      Technology.RESTAPI,
      Technology.Storybook,
      Technology.GraphQL,
      Technology.Figma,
      Technology.DesignSystem,
      Technology.Docker,
      Technology.Jenkins,
      Technology.PostgreSQL,
      Technology.Jest,
    ],
    preview: TaikaiPreview,
    appUrl: 'https://taikai.network',
  },
  {
    name: 'The Garden',
    shortDescription: {
      en: 'Platform for builders to launch their projects, tokens, find mentors and raise funds.',
      pt: 'Plataforma para desenvolvedores lançarem seus projetos, tokens, encontrar mentores e levantar fundos.'
    },
    longDescription: {
      en: '',
      pt: ''
    },
    repository: '',
    techs: [
      Technology.ReactJS,
      Technology.NextJS,
      Technology.Typescript,
      Technology.NodeJS,
      Technology.ExpressJS,
      Technology.RESTAPI,
      Technology.GraphQL,
      Technology.Figma,
      Technology.Docker,
      Technology.Jenkins,
      Technology.PostgreSQL,
    ],
    preview: GardenPreview,
    appUrl: 'https://garden.taikai.network'
  },
  {
    name: 'Raytrade',
    shortDescription: {
      en: 'Market making platform that enables users to run market making strategies on three clicks.',
      pt: 'Plataforma de market making que permite aos usuários executar estratégias de market making em três cliques.'
    },
    longDescription: {
      en: '',
      pt: ''
    },
    repository: '',
    techs: [
      Technology.ReactJS,
      Technology.NextJS,
      Technology.Typescript,
      Technology.Bun,
      Technology.RESTAPI,
      Technology.ExpressJS,
      Technology.GraphQL,
      Technology.Figma,
      Technology.Docker,
      Technology.Jenkins,
      Technology.PostgreSQL,
    ],
    preview: RaytradePreview,
    appUrl: 'https://raytrade.studio'
  },
  {
    name: 'Supercolony',
    shortDescription: {
      en: 'The place where users can join digital communities and build around shared interests and goals.',
      pt: 'O lugar onde os usuários podem se juntar a comunidades digitais e construir em torno de interesses e objetivos compartilhados.'
    },
    longDescription: {
      en: '',
      pt: ''
    },
    repository: '',
    techs: [
      Technology.ReactJS,
      Technology.NextJS,
      Technology.Typescript,
      Technology.Bun,
      Technology.GraphQL,
      Technology.Figma,
      Technology.Docker,
      Technology.Jenkins,
      Technology.PostgreSQL,
    ],
    preview: SuperColonyPreview,
    appUrl: 'https://supercolony.xyz'
  },
  {
    name: 'BEPRO',
    shortDescription: {
      en: 'Decentralized task-based marketplace.',
      pt: 'Mercado de tarefas descentralizado.'
    },
    longDescription: {
      en: '',
      pt: ''
    },
    techs: [
      Technology.ReactJS,
      Technology.NextJS,
      Technology.Javascript,
      Technology.Typescript,
      Technology.NodeJS,
      Technology.ExpressJS,
      Technology.RESTAPI,
      Technology.SASS,
      Technology.GraphQL,
      Technology.Figma,
      Technology.DesignSystem,
      Technology.Docker,
      Technology.Jenkins,
      Technology.PostgreSQL,
      Technology.Jest,
      Technology.Playwright,
    ],
    preview: BeproPreview,
    appUrl: 'https://bepro.network',
    repository: 'https://github.com/layerx-labs/web-network',
  },
  {
    name: 'Networks on the go',
    shortDescription: {
      en: 'Utility tool created for the first LayerX internal hackathon.',
      pt: 'Ferramenta utilitária criada no primeiro hackathon interno da LayerX.'
    },
    longDescription: {
      en:
        'The marketing and sales team had a need for custom versions of our application with customer branding (logo, colors and token).' +
        ' And for each potential customer, they had to ask the design team to create custom version.\n\n Networks on the go app was designed' +
        ' to improve this process by allowing the marketing and sales team to create a custom version themselves, resulting in an improved' +
        ' process speed and more time savings for both teams.',
      pt:
        'Marketing e vendas precisavam de versões customizadas do nosso aplicativo com branding do cliente (logo, cores e token).' +
        ' Para cada cliente potencial, era preciso envolver o time de design.\n\nO Networks on the go foi pensado para deixar marketing e vendas' +
        ' criarem essas versões sozinhos, acelerando o fluxo e liberando tempo dos dois times.'
    },
    repository: 'https://github.com/vhcsilva/networks-on-the-go',
    appUrl: 'https://networks-on-the-go.vercel.app/',
    preview: NetworksOnTheGoPreview,
    techs: [
      Technology.NextJS,
      Technology.SASS,
      Technology.ReactJS,
      Technology.Typescript,
      Technology.Git,
      Technology.HTML,
      Technology.CSS
    ]
  },
  {
    name: 'Maya',
    shortDescription: {
      en: 'AI assistant created for the second LayerX internal hackathon.',
      pt: 'Assistente de IA criada no segundo hackathon interno da LayerX.'
    },
    longDescription: {
      en:
        "Running a bounty or hackathon can be a challenge if you have never done it before. Defining prize amounts, deadlines, " +
        "judging criteria, and deliverable types that meet organization needs requires some experience.\n\nMaya was developed " +
        "with the goal of combining the LayerX team's expertise in running bounties and hackathons, with AI to deliver a tool" +
        ' that helps customers to run their own bounties and hackathons.',
      pt:
        'Organizar bounty ou hackathon é difícil sem prática: prêmios, prazos, critérios de julgamento e tipos de entrega precisam ' +
        'calar com o contexto da empresa.\n\nA Maya une a experiência da LayerX em bounties e hackathons com IA para ajudar ' +
        'clientes a rodarem os próprios programas com mais clareza e menos atrito.'
    },
    repository: 'https://github.com/vhcsilva/maya',
    appUrl: 'https://maya-amber.vercel.app/',
    preview: MayaPreview,
    techs: [
      Technology.NextJS,
      Technology.ReactJS,
      Technology.Git,
      Technology.Typescript,
      Technology.Javascript,
      Technology.HTML,
      Technology.CSS
    ]
  },
  {
    name: 'X-Store',
    shortDescription: {
      en: 'Crypto-based store created for the third LayerX internal hackathon.',
      pt: 'Loja com base em crypto criada no terceiro hackathon interno da LayerX.'
    },
    longDescription: {
      en:
        'Project created for the first internal LayerX hackathon. The goal was to make it easier for the marketing team to have a custom appearance of the BEPRO platform.',
      pt:
        'Projeto do hackathon interno da LayerX com foco em facilitar para o marketing uma aparência customizada da plataforma BEPRO.'
    },
    repository: 'https://github.com/vhcsilva/x-store',
    appUrl: 'https://x-store-theta.vercel.app/',
    preview: XStorePreview,
    techs: [
      Technology.NextJS,
      Technology.ReactJS,
      Technology.Git,
      Technology.Typescript,
      Technology.Javascript,
      Technology.HTML,
      Technology.CSS
    ]
  }
]
