import { Technology } from "@/types/technologies"

export type Project = {
  name: string
  shortDescription: string
  longDescription: string
  repository: string
  appUrl?: string
  techs: Technology[]
  preview: string
}
