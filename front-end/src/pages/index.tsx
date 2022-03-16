import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>TODO-LIST</title>
      </Head>

      <h1>TODO-LIST</h1>
    </Container>
  )
}

export default Home
