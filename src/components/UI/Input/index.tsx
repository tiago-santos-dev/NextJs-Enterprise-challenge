import { FiSearch } from 'react-icons/fi'
import { Container, Input as CustomInput } from './styles'

const Input = function () {
  return (
    <Container>
      <FiSearch />
      <CustomInput placeholder="Buscar" />
    </Container>
  )
}
export default Input
