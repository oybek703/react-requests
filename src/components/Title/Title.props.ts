import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface TitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tagTitle: string
  countTitle: number
  pointColor: 'gray' | 'green'
  tag: 'h1' | 'h2' | 'h3'
}
