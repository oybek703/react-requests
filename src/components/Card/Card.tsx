import React, { DragEvent, Fragment, useState } from 'react'
import { CardProps } from './Card.props'
import styles from './Card.module.css'
import classNames from 'classnames'
import { HTag } from '@/components/HTag/HTag'
import { PTag } from '@/components/PTag/PTag'
import { Degree } from '@/components/Degree/Degree'
import { Avatar } from '@/components/Avatar/Avatar'
import { Status } from '@/interfaces/card.interfaces'
import { useAppContext } from '@/context/app.context'

const getStatus = (statusText: Status): 'purple' | 'blue' | 'red' => {
  switch (statusText) {
    case Status.primary:
      return 'purple'
    case Status.secondary:
      return 'blue'
    case Status.important:
      return 'red'
  }
}

export const Card = ({ className, cardData, id, ...props }: CardProps): JSX.Element => {
  const [dropTargetId, setDropTargetId] = useState<string>('')
  const { requests, setRequests } = useAppContext()
  const handleDragStart = (event: DragEvent<HTMLDivElement>, itemId: string) => {
    event.dataTransfer.setData('movingItemId', itemId)
  }

  const handleDrag = (event: DragEvent<HTMLDivElement>, itemId: string) => {
    event.dataTransfer.setData('movingItemId', itemId)
  }

  const handleDragEndAndLeave = (event: DragEvent<HTMLDivElement>) => {
    event.currentTarget.classList.remove(styles.dragHover)
  }

  const handleDragOverAndEnter = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.currentTarget.classList.add(styles.dragHover)
    setDropTargetId(event.currentTarget.id)
  }

  const handleDrop = (event: DragEvent<HTMLDivElement>, itemId: string) => {
    event.currentTarget.classList.remove(styles.dragHover)
    const movingItemId = event.dataTransfer.getData('movingItemId')
    if (movingItemId === itemId) return
    let movingItem = requests.find(({ id }) => id === movingItemId)
    let sourceItem = requests.find(({ id }) => id === itemId)
    let sourceItemIndex = requests.findIndex(({ id }) => id === itemId)
    if (movingItem && sourceItem) {
      const { boardStatus: oldStatus } = movingItem
      const { boardStatus: newStatus } = sourceItem
      let updatedRequests = requests.filter(({ id }) => id !== movingItemId)
      if (oldStatus !== newStatus) {
        movingItem.boardStatus = newStatus
        sourceItemIndex = sourceItemIndex - 1
      }
      updatedRequests = [
        ...updatedRequests.slice(0, sourceItemIndex),
        movingItem,
        ...updatedRequests.slice(sourceItemIndex)
      ]
      setRequests(updatedRequests)
    }
  }

  return (
    <Fragment>
      <div
        id={id}
        onDragEnd={handleDragEndAndLeave}
        onDragLeave={handleDragEndAndLeave}
        onDragStart={event => handleDragStart(event, id!)}
        onDrag={event => handleDrag(event, id!)}
        onDragEnter={handleDragOverAndEnter}
        onDragOver={handleDragOverAndEnter}
        onDrop={event => handleDrop(event, id!)}
        draggable
        className={classNames(styles.card, className, {
          [styles.dragHover]: dropTargetId === id
        })}
        {...props}
      >
        <div className={styles.cardHeader}>
          <div className={styles.titles}>
            <HTag className={styles.primaryTitle} tag="h2">
              {cardData.primaryTitle}
            </HTag>
            <PTag title={cardData.secondaryTitle} className={styles.secondaryTitle}>
              {cardData.secondaryTitle}
            </PTag>
          </div>
          <div className={styles.points}>
            <svg
              width="4"
              height="16"
              viewBox="0 0 4 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8.83335C2.46024 8.83335 2.83334 8.46026 2.83334 8.00002C2.83334 7.53978 2.46024 7.16669 2 7.16669C1.53977 7.16669 1.16667 7.53978 1.16667 8.00002C1.16667 8.46026 1.53977 8.83335 2 8.83335Z"
                stroke="#96A09B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 14.6667C2.46024 14.6667 2.83334 14.2936 2.83334 13.8333C2.83334 13.3731 2.46024 13 2 13C1.53977 13 1.16667 13.3731 1.16667 13.8333C1.16667 14.2936 1.53977 14.6667 2 14.6667Z"
                stroke="#96A09B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 3.00001C2.46024 3.00001 2.83334 2.62691 2.83334 2.16668C2.83334 1.70644 2.46024 1.33334 2 1.33334C1.53977 1.33334 1.16667 1.70644 1.16667 2.16668C1.16667 2.62691 1.53977 3.00001 2 3.00001Z"
                stroke="#96A09B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className={styles.status}>
          <Degree color={getStatus(cardData.statusText)}>{cardData.statusText}</Degree>
          <span className={styles.statusNumbers}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.00001 7.33333C7.47277 7.33333 8.66668 6.13943 8.66668 4.66667C8.66668 3.19391 7.47277 2 6.00001 2C4.52725 2 3.33334 3.19391 3.33334 4.66667C3.33334 6.13943 4.52725 7.33333 6.00001 7.33333Z"
                stroke="#96A09B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.6667 2.08667C11.2403 2.23354 11.7487 2.56714 12.1118 3.03488C12.4748 3.50262 12.6719 4.07789 12.6719 4.67C12.6719 5.26212 12.4748 5.83739 12.1118 6.30513C11.7487 6.77287 11.2403 7.10647 10.6667 7.25334M14 14V12.6667C13.9966 12.0781 13.7986 11.5072 13.4368 11.0429C13.0751 10.5787 12.5699 10.2471 12 10.1M2 14V12.6667C2 11.9594 2.28095 11.2811 2.78105 10.7811C3.28115 10.281 3.95942 10 4.66667 10H7.33333C8.04058 10 8.71885 10.281 9.21895 10.7811C9.71905 11.2811 10 11.9594 10 12.6667V14H2Z"
                stroke="#96A09B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {cardData.followersCount}
          </span>
          <span className={styles.statusNumbers}>
            <svg
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.00001 7.66667H8.00001M9.33334 13H2.66668C2.31305 13 1.97392 12.8595 1.72387 12.6095C1.47382 12.3594 1.33334 12.0203 1.33334 11.6667V2.33333C1.33334 1.97971 1.47382 1.64057 1.72387 1.39052C1.97392 1.14048 2.31305 1 2.66668 1H7.33334L10.6667 4.33333V11.6667C10.6667 12.0203 10.5262 12.3594 10.2762 12.6095C10.0261 12.8595 9.68697 13 9.33334 13ZM4.00001 10.3333H8.00001H4.00001Z"
                stroke="#96A09B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {cardData.messagesCount}
          </span>
        </div>
        <Avatar image={cardData.image} jobTitle={cardData.jobTitle} name={cardData.name} />
      </div>
    </Fragment>
  )
}
