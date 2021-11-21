import Input from '@components/UI/Input'
import { FiSearch } from 'react-icons/fi'
import { Container } from './styles'

const SearchBox = function () {
  return (
    <Container>
      <Input name="search" type="text" placeholder="Buscar" icon={FiSearch} />
    </Container>
  )
}

export default SearchBox
