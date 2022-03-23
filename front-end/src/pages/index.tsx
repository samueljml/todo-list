import React from 'react'
import { Task, Title, Button } from '../components'

import { Container, Content } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <header>
          <Title text="Todo-list" />
        </header>
        <Button text="Adicionar tarefa" />
        <Task title={'Exemplo'} />
      </Content>
    </Container>
  )
}

export default Home
