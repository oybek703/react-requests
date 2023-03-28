import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface AddItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  title: string
}
