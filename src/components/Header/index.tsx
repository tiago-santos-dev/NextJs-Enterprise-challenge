import { useRouter } from 'next/router'
import Button from '@components/UI/Button'
import { FiChevronLeft, FiPlus } from 'react-icons/fi'
import {
  BackButton,
  Container,
  Content,
  LeftContent,
  RightContent,
  Title,
} from './styles'

const Header = function () {
  const router = useRouter()

  const getCurrentHeaderTitle = () => {
    let route
    switch (router.pathname) {
      case '/create-enterprise':
        route = 'Criar empreendimento'
        break
      case '/edit-enterprise':
        route = 'Editar empreendimento'
        break
      default:
        route = 'Empreendimentos'
        break
    }
    return route
  }

  return (
    <Container>
      <Content>
        <LeftContent>
          {router.pathname !== '/' && (
            <BackButton onClick={() => router.push('/')}>
              <FiChevronLeft />
            </BackButton>
          )}
          <Title> {getCurrentHeaderTitle()} </Title>
        </LeftContent>
        <RightContent>
          {router.pathname === '/' && (
            <Button
              text="Adicionar"
              icon={FiPlus}
              onClick={() => router.push('/create-enterprise')}
            />
          )}
        </RightContent>
      </Content>
    </Container>
  )
}

export default Header
