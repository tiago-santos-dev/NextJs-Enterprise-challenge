import Button from '@components/UI/Button'
import EnterpriseItem from './EnterpriseItem'
import { Container } from './styles'

const EnterpriseList = function () {
  return (
    <Container>
      <EnterpriseItem />
      <EnterpriseItem />
      <EnterpriseItem />
      <EnterpriseItem />
      <Button text="Carregar mais" />
    </Container>
  )
}
export default EnterpriseList
