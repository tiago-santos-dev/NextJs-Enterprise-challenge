import Button from '@components/UI/Button'
// import { useEnterprises } from '@hooks/useEnterprise'
import EnterpriseItem from './EnterpriseItem'
import { Container } from './styles'

const EnterpriseList = function () {
  // const { allEnterprises } = useEnterprises()
  // console.log("All Enterprises", allEnterprises)
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
