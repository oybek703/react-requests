import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { data } from '../../data'
import { ICardData } from '@/interfaces/card.interfaces'

export interface IAppContext {
  requests: ICardData[]
  setRequests: (value: ((prevState: ICardData[]) => ICardData[]) | ICardData[]) => void
}

const AppContext = createContext<IAppContext>({
  requests: [],
  setRequests: () => {}
})

export const useAppContext = () => useContext(AppContext)

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [requests, setRequests] = useState<ICardData[]>(data)
  return <AppContext.Provider value={{ requests, setRequests }}>{children}</AppContext.Provider>
}
