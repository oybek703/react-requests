import React, { DragEvent } from 'react'
import { CardListProps } from './CardList.props'
import styles from './CardList.module.css'
import classNames from 'classnames'
import { Title } from '@/components/Title/Title'
import { useAppContext } from '@/context/app.context'
import { AddItem } from '@/components/AddItem/AddItem'
import { Card } from '@/components/Card/Card'

export const CardList = ({
  children,
  title,
  board,
  data,
  ...props
}: CardListProps): JSX.Element => {
  const { requests, setRequests } = useAppContext()
  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    if (data.length === 0) {
      const movingItemId = event.dataTransfer.getData('movingItemId')
      const movingItem = requests.find(({ id }) => id === movingItemId)
      if (movingItem) {
        const updatedRequests = requests.filter(({ id }) => id !== movingItemId)
        movingItem.boardStatus = board
        updatedRequests.push(movingItem)
        setRequests(updatedRequests)
      }
    }
  }
  const handleDragOverAndEnter = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }
  return (
    <div
      onDragEnter={handleDragOverAndEnter}
      onDragOver={handleDragOverAndEnter}
      onDrop={handleDrop}
      className={classNames(styles.cardList)}
      {...props}
    >
      <div className={styles.cardTitle}>
        <Title pointColor="gray" tagTitle={title} countTitle={data.length} tag="h2" />
      </div>
      <div className={styles.cards}>
        {data.length === 0 ? (
          <AddItem title="Если есть подходящие заявки, перетащите их сюда 🤓" />
        ) : (
          data.map(d => <Card draggable id={d.id} key={d.id} cardData={d} />)
        )}
      </div>
    </div>
  )
}
