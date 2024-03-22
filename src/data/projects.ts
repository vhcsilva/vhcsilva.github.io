import { Project } from "@/types/project";
import { Technology } from "@/types/technologies";

import NetworksOnTheGoPreview from '/img/networks-on-the-go.png'
import MayaPreview from '/img/maya.png'
import XStorePreview from '/img/x-store.png'

export const projects: Project[] = [
  {
    name: 'Networks on the go',
    shortDescription: 'Utility tool created for the first LayerX internal hackathon.',
    longDescription:
      'The marketing and sales team had a need for custom versions of our application with customer branding (logo, colors and token).' +
      ' And for each potential customer, they had to ask the design team to create custom version.\n\n Networks on the go app was designed' +
      ' to improve this process by allowing the marketing and sales team to create a custom version themselves, resulting in an improved' +
      ' process speed and more time savings for both teams.',
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
    shortDescription: 'AI assistant created for the second LayerX internal hackathon.',
    longDescription:
      'Running a bounty or hackathon can be a challenge if you have never done it before. Defining prize amounts, deadlines, ' +
      'judging criteria, and deliverable types that meet organization needs requires some experience.\n\nMaya was developed ' +
      'with the goal of combining the LayerX team\'s expertise in running bounties and hackathons, with AI to deliver a tool' +
      ' that helps customers to run their own bounties and hackathons.',
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
    shortDescription: 'Crypto-based store created for the third LayerX internal hackathon.',
    longDescription:
      'Project created for the first internal LayerX hackathon. The goal was to make it easier for the marketing team to have a custom appearance of the BEPRO platform.',
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
