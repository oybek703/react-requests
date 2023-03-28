import { withLayout } from '@/layout'
import { Title } from '@/components/Title/Title'
import { CardList } from '@/components/CardList/CardList'
import styles from '../styles/Home.module.css'
import { BoardStatus } from '@/interfaces/card.interfaces'
import { useAppContext } from '@/context/app.context'
import { useBoardStatus } from '@/hooks/useByBoard'

function Home() {
  const { requests } = useAppContext()
  const { newData, currentData, deletedData, closedData, archivedData } = useBoardStatus()
  return (
    <>
      <Title tag="h1" tagTitle="Заявки" countTitle={requests.length} pointColor="green" />
      <div className={styles.cardList}>
        <CardList data={newData} board={BoardStatus.new} title="Новые" />
        <CardList data={currentData} board={BoardStatus.current} title="Текущие" />
        <CardList data={closedData} board={BoardStatus.closed} title="Закрытые" />
        <CardList data={archivedData} board={BoardStatus.archived} title="Архив" />
        <CardList data={deletedData} board={BoardStatus.deleted} title="Удаленные" />
      </div>
    </>
  )
}

export default withLayout(Home)
