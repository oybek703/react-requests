import { useAppContext } from '@/context/app.context'
import { BoardStatus } from '@/interfaces/card.interfaces'

export const useBoardStatus = () => {
  const { requests } = useAppContext()
  const newData = requests.filter(({ boardStatus }) => boardStatus === BoardStatus.new)
  const currentData = requests.filter(({ boardStatus }) => boardStatus === BoardStatus.current)
  const closedData = requests.filter(({ boardStatus }) => boardStatus === BoardStatus.closed)
  const archivedData = requests.filter(({ boardStatus }) => boardStatus === BoardStatus.archived)
  const deletedData = requests.filter(({ boardStatus }) => boardStatus === BoardStatus.deleted)
  return { newData, currentData, closedData, archivedData, deletedData }
}
