import Button from '@components/UI/Button'
import { useEnterprises } from '@hooks/useEnterprise'
import EnterpriseItem from './EnterpriseItem'
import { Container } from './styles'

const EnterpriseList: React.FC = function () {
  const { allEnterprises } = useEnterprises()

  return (
    <Container>
      {allEnterprises.map((item) => (
        <EnterpriseItem key={item.id} enterpriseItem={item} />
      ))}

      <Button text="Carregar mais" />
    </Container>
  )
}
export default EnterpriseList
