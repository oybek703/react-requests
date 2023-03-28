import { StaticImageData } from 'next/image'

export enum BoardStatus {
  new,
  current,
  closed,
  archived,
  deleted
}

export enum Status {
  primary = 'В приоритете',
  secondary = 'Второстепенная',
  important = 'Срочная заявка'
}

export interface ICardData {
  id: string
  boardStatus: BoardStatus
  primaryTitle: string
  secondaryTitle: string
  statusText: Status
  followersCount: number
  messagesCount: number
  jobTitle: string
  name: string
  image: string | StaticImageData
}
