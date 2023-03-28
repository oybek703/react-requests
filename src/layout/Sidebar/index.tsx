import React from 'react'
import { SidebarProps } from './Sidebar.props'
import classNames from 'classnames'
import styles from './Sidebar.module.css'

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return <div className={classNames(className, styles.sidebar)} {...props} />
}
