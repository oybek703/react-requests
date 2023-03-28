import React from 'react'
import { PointProps } from './Point.props'
import styles from './Point.module.css'
import classNames from 'classnames'

export const Point = ({ color = 'green', className }: PointProps): JSX.Element => {
  return (
    <span className={classNames(styles.point, className, { [styles.gray]: color === 'gray' })} />
  )
}
