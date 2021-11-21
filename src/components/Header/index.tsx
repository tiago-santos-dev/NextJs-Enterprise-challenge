import Button from '@components/UI/Button'
import { FiPlus } from 'react-icons/fi'
import { Container, Content, Text } from './styles'

const Header = function () {
  return (
    <Container>
      <Content>
        <Text> Empreendimentos</Text>
        <Button text="Adicionar" icon={FiPlus} />
      </Content>
    </Container>
  )
}

export default Header
