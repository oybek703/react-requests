import React from 'react'
import { PTagProps } from './PTag.props'
import styles from './PTag.module.css'
import classNames from 'classnames'

export const PTag = ({ className, children, ...props }: PTagProps): JSX.Element => {
  return (
    <p className={classNames(styles.pTag, className)} {...props}>
      {children}
    </p>
  )
}
