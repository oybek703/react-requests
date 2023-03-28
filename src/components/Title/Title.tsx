import React from 'react'
import { TitleProps } from './Title.props'
import { HTag } from '@/components/HTag/HTag'
import { Point } from '@/components/Point/Point'
import classNames from 'classnames'
import styles from './Title.module.css'

export const Title = ({
  tagTitle,
  countTitle,
  pointColor,
  tag = 'h1'
}: TitleProps): JSX.Element => {
  return (
    <div className={classNames(styles.title)}>
      <HTag color={pointColor === 'gray' ? 'gray' : 'black'} tag={tag}>
        {tagTitle}
      </HTag>{' '}
      <Point color={pointColor} />{' '}
      <HTag color="gray" tag={tag}>
        {countTitle}
      </HTag>
    </div>
  )
}
