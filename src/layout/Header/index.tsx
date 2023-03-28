import React from 'react'
import {HeaderProps} from './Header.props'
import classNames from 'classnames'
import styles from './Header.module.css'

export const Header = ({className, ...props}: HeaderProps): JSX.Element => {

    return <header className={classNames(className, styles.header)} {...props}/>
}

