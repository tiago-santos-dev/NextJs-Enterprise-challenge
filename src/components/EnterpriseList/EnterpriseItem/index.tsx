import Tag from '@components/UI/Tag'
import { Enterprise } from '@typeDefs/index'
import router from 'next/router'
import { FiEdit2, FiTrash } from 'react-icons/fi'
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
  return (
    <Container>
      <EnterpriseDetailsContainer>
        <Content>
          <EnterpriseName>{enterpriseItem.name}</EnterpriseName>
          <ActionButtonsContainer>
            <Button onClick={() => router.push('/edit-enterprise')}>
              <FiEdit2 />
            </Button>
            <Button>
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
        <Tag text={enterpriseItem.status.toString()} />
        <Tag text={enterpriseItem.purpose.toString()} />
      </TagsContainer>
    </Container>
  )
}
export default EnterpriseItem
