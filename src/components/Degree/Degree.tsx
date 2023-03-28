import React from 'react'
import { DegreeProps } from './Degree.props'
import styles from './Degree.module.css'
import classNames from 'classnames'

export const Degree = ({ color, className, children }: DegreeProps): JSX.Element => {
  return (
    <button
      className={classNames(styles.degree, className, {
        [styles.blue]: color === 'blue',
        [styles.red]: color === 'red'
      })}
    >
      {children}
    </button>
  )
}
