import type { Localized } from '@/i18n/locale'

export type PersonSocial = {
  channelKey: 'github' | 'linkedin' | 'email'
  label: string
  href: string
}

export type BannerBlock = {
  id: string
  label: Localized
  text: Localized
}

export const person = {
  givenName: 'vitor',
  familyName: 'hugo',

  introHtml: {
    en: '<b>Frontend engineer</b> focused on product interfaces, design systems, and maintainable TypeScript + React delivery.',
    pt: '<b>Engenheiro frontend</b> focado em interfaces de produto, design systems e entrega sustentável com TypeScript + React.'
  } satisfies Localized,

  bannerHugeHtml: {
    en: 'building<br>things that<br><span class="accent">feel</span> <span class="strike">fast</span> <span class="accent">right.</span>',
    pt: 'construindo<br>coisas que<br><span class="accent">parecem</span> <span class="strike">rápidas</span> <span class="accent">certas.</span>'
  } satisfies Localized,

  bannerBlocks: [
    {
      id: 'who',
      label: { en: 'who', pt: 'quem' },
      text: {
        en: 'Vitor Hugo — frontend engineer, based in Brazil.',
        pt: 'Vitor Hugo — engenheiro frontend, morando no Brasil.'
      }
    },
    {
      id: 'focus',
      label: { en: 'focus', pt: 'foco' },
      text: {
        en: 'Product UI, design systems, performance, and clear handoffs with design.',
        pt: 'UI de produto, design systems, performance e alinhamento claro com design.'
      }
    },
    {
      id: 'stack',
      label: { en: 'stack', pt: 'stack' },
      text: {
        en: 'TypeScript, React, Next.js, Node, testing with Jest & Playwright.',
        pt: 'TypeScript, React, Next.js, Node, testes com Jest e Playwright.'
      }
    },
    {
      id: 'status',
      label: { en: 'status', pt: 'status' },
      text: {
        en: 'Actively seeking new opportunities — reach out by email or LinkedIn.',
        pt: 'Procurando novas oportunidades — fale por e-mail ou LinkedIn.'
      }
    }
  ] satisfies BannerBlock[],

  contactHeadlinePrefix: {
    en: 'Let’s build',
    pt: 'Vamos construir'
  } satisfies Localized,

  contactHeadlineAccent: {
    en: 'something',
    pt: 'algo'
  } satisfies Localized,

  contactHeadlineSuffix: {
    en: 'worth shipping.',
    pt: 'valioso para entregar.'
  } satisfies Localized,

  contactIntroHtml: {
    en: 'If you’re hiring, collaborating, or just want to compare notes on frontend tooling, <b>say hello</b>. I read everything; I reply when I can.',
    pt: 'Se você está contratando, quer colaborar ou só trocar ideia sobre ferramentas de frontend, <b>manda um oi</b>. Eu leio tudo e respondo quando der.'
  } satisfies Localized,

  socials: [
    { channelKey: 'github', label: 'vhcsilva', href: 'https://github.com/vhcsilva' },
    { channelKey: 'linkedin', label: 'in/vhcsilva', href: 'https://www.linkedin.com/in/vhcsilva/' },
    { channelKey: 'email', label: 'vhcsilvadev@gmail.com', href: 'mailto:vhcsilvadev@gmail.com' }
  ] satisfies PersonSocial[]
}
