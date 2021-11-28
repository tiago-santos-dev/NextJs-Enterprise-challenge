import Input from '@components/UI/Input'
import { Form } from '@unform/web'
import { FiSearch } from 'react-icons/fi'
import { Container } from './styles'

const SearchBox: React.FC = () => {
  return (
    <Container>
      <Form onSubmit={() => { }}>
        <Input name='search' type="text" placeholder="Buscar" icon={FiSearch} />
      </Form>
    </Container>
  )
}

export default SearchBox
