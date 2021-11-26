import Tag from '@components/UI/Tag'
import { Enterprise, PorposeEnum, StatusEnum } from '@typeDefs/index'
import router from 'next/router'
import { FiEdit2, FiTrash } from 'react-icons/fi'
import { useEnterprises } from '@hooks/useEnterprise'
import {
  Container,
  EnterpriseDetailsContainer,
  Content,
  EnterpriseName,
  ActionButtonsContainer,
  EnterpriseAdress,
  TagsContainer,
  Button,
} from './styles'

interface EnterpriseItemProps {
  enterpriseItem: Enterprise
}
const EnterpriseItem: React.FC<EnterpriseItemProps> = function ({
  enterpriseItem,
}) {
  const { handleDeleteEnterprise } = useEnterprises()

  return (
    <Container>
      <EnterpriseDetailsContainer>
        <Content>
          <EnterpriseName>{enterpriseItem.name}</EnterpriseName>
          <ActionButtonsContainer>
            <Button onClick={() => router.push('/edit-enterprise')}>
              <FiEdit2 />
            </Button>
            <Button onClick={() => handleDeleteEnterprise(enterpriseItem.id)}>
              <FiTrash />
            </Button>
          </ActionButtonsContainer>
        </Content>
        <EnterpriseAdress>
          {`${enterpriseItem.address.street},
            ${enterpriseItem.address.number} -
            ${enterpriseItem.address.district},
            ${enterpriseItem.address.city}
          `}
        </EnterpriseAdress>
      </EnterpriseDetailsContainer>
      <TagsContainer>
        <Tag text={StatusEnum[enterpriseItem.status]} />
        <Tag text={PorposeEnum[enterpriseItem.purpose]} />
      </TagsContainer>
    </Container>
  )
}
export default EnterpriseItem
