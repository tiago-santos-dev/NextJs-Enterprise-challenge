import Button from '@components/UI/Button'
import Input from '@components/UI/Input'
import {
  AdressContainer,
  AdressText,
  Container,
  InputsContainer,
  Title,
} from './styles'

const Form = function () {
  return (
    <Container>
      <InputsContainer>
        <Title>Informações</Title>
        <Input name="type" />
        <Input name="type" placeholder="Nome" />
        <Input name="type" />
        <Input name="type" placeholder="CEP" />
        <AdressContainer>
          <AdressText>Rua Doutor Messuti</AdressText>
          <AdressText>Vila Bastos</AdressText>
          <AdressText>Santo André</AdressText>
          <AdressText>SP</AdressText>
        </AdressContainer>
        <Input name="number" placeholder="Número" />
      </InputsContainer>
      <Button text="Cadastrar" />
    </Container>
  )
}

export default Form
