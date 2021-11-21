import Head from 'next/head'
import { Container, Content } from '@styles/pages'
import Form from '@components/Form'

const CreateEnterprise = function () {
  return (
    <>
      <Head>
        <title>Criar Empreendimento</title>
      </Head>
      <Container>
        <Content>
          <Form />
        </Content>
      </Container>
    </>
  )
}

export default CreateEnterprise
