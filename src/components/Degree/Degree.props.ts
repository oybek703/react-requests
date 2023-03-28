import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface DegreeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  color?: 'purple' | 'blue' | 'red'
}
