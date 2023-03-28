import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface PointProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  color?: 'green' | 'gray'
}
