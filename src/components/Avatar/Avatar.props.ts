import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { StaticImageData } from 'next/image'

export interface AvatarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  image: string | StaticImageData
  jobTitle: string
  name: string
}
