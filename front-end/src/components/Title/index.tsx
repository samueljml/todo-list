import React, { FC } from 'react'
import { Content } from './style'

interface TitleProps {
  text: string
}

export const Title: FC<TitleProps> = ({ text }) => {
  return <Content>{text}</Content>
}
