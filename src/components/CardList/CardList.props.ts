import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { BoardStatus, ICardData } from '@/interfaces/card.interfaces'

export interface CardListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  board: BoardStatus
  data: ICardData[]
}
