import Button from '@components/UI/Button'
import { Container, Content, Text } from './styles'

const Header = function () {
  return (
    <Container>
      <Content>
        <Text> Empreendimentos</Text>
        <Button text="Adicionar" />
      </Content>
    </Container>
  )
}

export default Header
