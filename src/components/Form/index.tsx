import Button from '@components/UI/Button'
import Input from '@components/UI/Input'
import Select from '@components/UI/Select'
import { useEnterprises } from '@hooks/useEnterprise'
import { EnterpriseService } from '@services/enterprises'
import { Address, OptionsProps } from '@typeDefs/index'
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
  const [cep, setCep] = useState('')
  const [address, setAddress] = useState<Address>()
  const { handleCreateEnterprise } = useEnterprises()

  const statusOptions: OptionsProps[] = [
    { label: 'Breve Lançamento', value: 'SHORT_RELEASE' },
    { label: ' Lançamento', value: 'RELEASE' },
    { label: 'Em obras', value: 'IN_WORKS' },
    { label: 'Pronto pra morar ', value: 'READY' },
  ]

  const purposeOptions: OptionsProps[] = [
    { label: 'Residencial', value: 'HOME' },
    { label: 'Comercial', value: 'BUSINESS' },
  ]

  const handleFormSubmit = async (data, { reset }) => {
    delete data.cep
    try {
      if (address) {
        await handleCreateEnterprise({
          ...data,
          address: {
            ...address,
            cep,
            number: data.number,
          },
        })
        reset()
      }
    } catch (error) {
      // console.error(error)
    }
  }
  const handleConsultZipCode = async () => {
    const zipCode = cep.replace('/-/g', '')

    try {
      const adressResponse = await EnterpriseService.consultZipCode(zipCode)

      if (adressResponse?.erro !== true) {
        setAddress({
          cep,
          city: adressResponse.localidade,
          district: adressResponse.bairro,
          number: 0,
          state: adressResponse.uf,
          street: adressResponse.logradouro,
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
          <Select name="status" options={statusOptions} />
          <Input name="name" required placeholder="Nome do Empreendimento" />
          <Select name="purpose" options={purposeOptions} />
          <Input
            name="cep"
            required
            placeholder="CEP"
            maxLength={8}
            onChange={(e) => setCep(e.target.value)}
          />
          <AdressContainer>
            {address ? (
              <>
                <AdressText>{address.street}</AdressText>
                <AdressText>{address.district}</AdressText>
                <AdressText>{address.city}</AdressText>
                <AdressText>{address.state}</AdressText>
              </>
            ) : (
              <Button
                text="Consultar CEP"
                type="button"
                onClick={handleConsultZipCode}
              />
            )}
          </AdressContainer>
          {address && <Input name="number" required placeholder="Número" />}
        </FormContainer>
        <Button type="submit" text="Cadastrar" />
      </Form>
    </Container>
  )
}

export default EnterpriseForm
