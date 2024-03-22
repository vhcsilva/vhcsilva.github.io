import { BootstrapIcon } from '@/assets/icons/bootstrap'
import { CSSIcon } from '@/assets/icons/css'
import { DjangoIcon } from '@/assets/icons/django'
import { FigmaIcon } from '@/assets/icons/figma'
import { GitIcon } from '@/assets/icons/git'
import { HTMLIcon } from '@/assets/icons/html'
import { JavascriptIcon } from '@/assets/icons/javascript'
import { JestIcon } from '@/assets/icons/jest'
import { MySQLIcon } from '@/assets/icons/mysql'
import { NextJSIcon } from '@/assets/icons/nextjs'
import { NodeJSIcon } from '@/assets/icons/nodejs'
import { PlaceholderIcon } from '@/assets/icons/placeholder'
import { PlaywrightIcon } from '@/assets/icons/playwright'
import { PostgreSQLIcon } from '@/assets/icons/postgresql'
import { PythonIcon } from '@/assets/icons/python'
import { ReactIcon } from '@/assets/icons/react'
import { SassIcon } from '@/assets/icons/sass'
import { SolidityIcon } from '@/assets/icons/solidity'
import { SQLIcon } from '@/assets/icons/sql'
import { TailwindIcon } from '@/assets/icons/tailwind'
import { TypescriptIcon } from '@/assets/icons/typescript'
import { Web3JSIcon } from '@/assets/icons/web3js'
import { Technology } from '@/types/technologies'

type TechnologyIcon = {
  technology: Technology
  variant?: 'small' | 'big'
}

export function TechnologyIcon({ technology, variant = 'small' }: TechnologyIcon) {
  const icon =
    {
      [Technology.CSS]: CSSIcon,
      [Technology.Git]: GitIcon,
      [Technology.HTML]: HTMLIcon,
      [Technology.Javascript]: JavascriptIcon,
      [Technology.Jest]: JestIcon,
      [Technology.NextJS]: NextJSIcon,
      [Technology.ReactJS]: ReactIcon,
      [Technology.SASS]: SassIcon,
      [Technology.Solidity]: SolidityIcon,
      [Technology.Tailwind]: TailwindIcon,
      [Technology.Typescript]: TypescriptIcon,
      [Technology.Bootstrap]: BootstrapIcon,
      [Technology.SQL]: SQLIcon,
      [Technology.NodeJS]: NodeJSIcon,
      [Technology.PostgreSQL]: PostgreSQLIcon,
      [Technology.MySQL]: MySQLIcon,
      [Technology.Playwright]: PlaywrightIcon,
      [Technology.Figma]: FigmaIcon,
      [Technology.Python]: PythonIcon,
      [Technology.Django]: DjangoIcon,
      [Technology.Web3JS]: Web3JSIcon
    }[technology] || PlaceholderIcon

  const size = {
    small: 30,
    big: 60
  }[variant]

  return <span title={technology}>{icon({ width: size, height: size })}</span>
}
