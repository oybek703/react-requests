import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { ICardData } from '@/interfaces/card.interfaces'

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: 'white' | 'blue'
  cardData: ICardData
}
