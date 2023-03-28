import React from 'react'
import { HTagProps } from './HTag.props'
import styles from './HTag.module.css'
import classNames from 'classnames'

export const HTag = ({ tag, children, color, className }: HTagProps): JSX.Element => {
  switch (tag) {
    case 'h1':
      return (
        <h1 className={classNames(styles.h1, className, { [styles.gray]: color === 'gray' })}>
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2 className={classNames(styles.h2, className, { [styles.gray]: color === 'gray' })}>
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3 className={classNames(styles.h3, className, { [styles.gray]: color === 'gray' })}>
          {children}
        </h3>
      )
    default:
      return <></>
  }
}
