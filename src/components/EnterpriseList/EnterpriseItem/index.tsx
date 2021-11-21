import Tag from '@components/UI/Tag'
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

const EnterpriseItem = function () {
  return (
    <Container>
      <EnterpriseDetailsContainer>
        <Content>
          <EnterpriseName>Villega Vila Velha</EnterpriseName>
          <ActionButtonsContainer>
            <Button>
              <FiEdit2 />
            </Button>
            <Button>
              <FiTrash />
            </Button>
          </ActionButtonsContainer>
        </Content>
        <EnterpriseAdress>
          Rua Dório Silva, 100 - Vila Guaranhuns, Vila Velha
        </EnterpriseAdress>
      </EnterpriseDetailsContainer>
      <TagsContainer>
        <Tag text="Lançamento" />
        <Tag text="Residencial" />
      </TagsContainer>
    </Container>
  )
}
export default EnterpriseItem
