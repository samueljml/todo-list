import React, { FC } from 'react'
import { Content } from './style'

interface ButtonProps {
  text: string
}

export const Button: FC<ButtonProps> = ({ text }) => {
  return <Content>{text}</Content>
}
