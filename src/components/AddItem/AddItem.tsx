import React from 'react'
import { AddItemProps } from './AddItem.props'
import styles from './AddItem.module.css'
import Image from 'next/image'
import { PTag } from '@/components/PTag/PTag'

export const AddItem = ({ title }: AddItemProps): JSX.Element => {
  return (
    <div className={styles.addFiles}>
      <Image priority src={'/add-files.svg'} alt={'Add files'} width={150} height={150} />
      <PTag className={styles.title}>{title}</PTag>
    </div>
  )
}
