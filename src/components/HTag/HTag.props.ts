import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface HTagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tag: 'h1' | 'h2' | 'h3'
  color?: 'black' | 'gray'
  children: ReactNode
}
