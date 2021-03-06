import Head from 'next/head'
import { Container, Content } from '@styles/pages/enterprise'
import Form from '@components/Form'

const CreateEnterprise = function () {
  return (
    <>
      <Head>
        <title>Editar Empreendimento</title>
      </Head>
      <Container>
        <Content>
          <Form editMode />
        </Content>
      </Container>
    </>
  )
}

export default CreateEnterprise
