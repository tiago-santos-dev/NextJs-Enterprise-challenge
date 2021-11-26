import Button from '@components/UI/Button'
import Input from '@components/UI/Input'
import Select from '@components/UI/Select'
import { OptionsProps } from '@typeDefs/index'
import { Form } from '@unform/web'
import { useRef } from 'react'
import {
  AdressContainer,
  AdressText,
  Container,
  FormContainer,
  Title,
} from './styles'

const EnterpriseForm: React.FC = function () {
  const formRef = useRef()

  const statusOptions: OptionsProps[] = [
    { label: 'Breve Lançamento', value: 'SHORT_RELEASE' },
    { label: ' Lançamento', value: 'RELEASE' },
    { label: 'Em obras', value: 'IN_WORKS' },
    { label: 'Pronto pra morar ', value: 'READY' },
  ]

  const porposeOptions: OptionsProps[] = [
    { label: 'Residencial', value: 'HOME' },
    { label: 'Comercial', value: 'BUSINESS' }]

  // const [cep, setCep] = useState('');
  // const [adress, setAdress] = useState<Adress>();

  const handleFormSubmit = data => {
    // console.log({ data })
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <FormContainer>
          <Title>Informações</Title>
          <Select
            name="status"
            options={statusOptions}
          />
          <Input name="name" placeholder="Nome do Empreendimento" />
          <Select name="porpose" options={porposeOptions} />
          <Input name="cep" placeholder="CEP" />
          <AdressContainer>
            <AdressText>Rua Doutor Messuti</AdressText>
            <AdressText>Vila Bastos</AdressText>
            <AdressText>Santo André</AdressText>
            <AdressText>SP</AdressText>
          </AdressContainer>
          <Input name="number" placeholder="Número" />
        </FormContainer>
        <Button
          type='submit'
          text="Cadastrar"
        />
      </Form>
    </Container >
  )
}

export default EnterpriseForm
