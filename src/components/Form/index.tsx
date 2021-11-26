import Button from '@components/UI/Button'
import Input from '@components/UI/Input'
import Select from '@components/UI/Select'
import { EnterpriseService } from '@services/enterprises'
import { Adress, OptionsProps } from '@typeDefs/index'
import { Form } from '@unform/web'
import { useRef, useState } from 'react'
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

  const [cep, setCep] = useState('');
  const [adress, setAdress] = useState<Adress>();

  const handleFormSubmit = data => {
    // console.log({ data })
  }

  const handleConsultZipCode = async () => {

    let zipCode = cep.replace('/-/g', '')

    try {
      const adressResponse = await EnterpriseService.consultZipCode(zipCode);

      if (!adressResponse.erro) {
        setAdress({
          cep,
          city: adressResponse.localidade,
          district: adressResponse.bairro,
          number: 1,
          state: adressResponse.uf,
          street: adressResponse.logradouro
        })
      }
    } catch (error) {
      // console.error(error)
    }
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
          <Input
            name="name"
            placeholder="Nome do Empreendimento"
          />
          <Select name="porpose" options={porposeOptions} />
          <Input
            name="cep"
            mask={"99999-999"}
            placeholder="CEP"
            onChange={e => setCep(e.target.value)}
          />
          <AdressContainer>
            {
              adress
                ? <>
                  <AdressText>{adress.street}</AdressText>
                  <AdressText>{adress.district}</AdressText>
                  <AdressText>{adress.city}</AdressText>
                  <AdressText>{adress.state}</AdressText>
                </>
                : <Button
                  text='Consultar CEP'
                  type='button'
                  onClick={handleConsultZipCode}
                />
            }
          </AdressContainer>
          {
            adress && <Input
              name="number"
              placeholder="Número"
            />
          }
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
