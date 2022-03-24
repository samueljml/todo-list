import React, { FC, useState } from 'react'
import { CgTrash } from 'react-icons/cg'
import { Title, Child, Container, CheckedText } from './style'
import { RiCheckboxCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'

interface TaskProps {
  title: string
}

export const Task: FC<TaskProps> = ({ title }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleClick = () => setIsChecked(!isChecked)

  return (
    <Container>
      <Child>
        {isChecked ? (
          <RiCheckboxCircleFill onClick={handleClick} />
        ) : (
          <RiCheckboxCircleLine onClick={handleClick} />
        )}
        <Title>
          {(isChecked && <CheckedText>{title}</CheckedText>) || title}
        </Title>
      </Child>
      <CgTrash />
    </Container>
  )
}
