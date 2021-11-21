import Head from 'next/head'
import { Container, Content } from '@styles/pages'
import SearchBox from '@components/SearchBox'
import EnterpriseList from '@components/EnterpriseList'

const Home = function () {
  return (
    <>
      <Head>
        <title>Desafio NextJs</title>
      </Head>
      <Container>
        <Content>
          <SearchBox />
          <EnterpriseList />
        </Content>
      </Container>
    </>
  )
}

export default Home
