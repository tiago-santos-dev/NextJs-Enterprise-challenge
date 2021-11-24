import Button from '@components/UI/Button'
import Input from '@components/UI/Input'
import Select from '@components/UI/Select'
import {
  AdressContainer,
  AdressText,
  Container,
  InputsContainer,
  Title,
} from './styles'

const Form: React.FC = function () {
  return (
    <Container>
      <InputsContainer>
        <Title>Informações</Title>
        <Select
          name="type"
          options={[
            'Breve Lançamento',
            ' Lançamento',
            'Em obras',
            'Pronto pra morar ',
          ]}
        />
        <Input name="type" placeholder="Nome do Empreendimento" />
        <Select name="type" options={['Residencial', 'Comercial']} />
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
