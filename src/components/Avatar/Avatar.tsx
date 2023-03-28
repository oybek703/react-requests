import React from 'react'
import { AvatarProps } from './Avatar.props'
import styles from './Avatar.module.css'
import classNames from 'classnames'
import Image from 'next/image'
import { PTag } from '@/components/PTag/PTag'

export const Avatar = ({ image, jobTitle, name, className }: AvatarProps): JSX.Element => {
  return (
    <div className={classNames(styles.avatar, className)}>
      <Image className={styles.image} src={image} alt={`${name}'s image`} width={28} height={28} />
      <div className={styles.info}>
        <PTag className={styles.jobTitle}>{jobTitle}</PTag>
        <PTag className={styles.name}>{name}</PTag>
      </div>
    </div>
  )
}
