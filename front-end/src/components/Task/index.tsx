import React, { FC, useState } from 'react'
import { CgTrash } from 'react-icons/cg'
import { Container } from './style'
import { RiCheckboxCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'

interface TaskProps {
  title: string
}

export const Task: FC<TaskProps> = ({ title }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleClick = () => setIsChecked(!isChecked)

  return (
    <Container>
      {isChecked ? (
        <RiCheckboxCircleFill onClick={handleClick} />
      ) : (
        <RiCheckboxCircleLine onClick={handleClick} />
      )}
      <div>{title}</div>
      <CgTrash />
    </Container>
  )
}
