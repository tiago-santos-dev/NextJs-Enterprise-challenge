import Button from '@components/UI/Button'
import Input from '@components/UI/Input'
import Select from '@components/UI/Select'
import { useEnterprises } from '@hooks/useEnterprise'
import { EnterpriseService } from '@services/enterprises'
import { Address, OptionsProps } from '@typeDefs/index'
import { Form } from '@unform/web'
import router from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
  AdressContainer,
  AdressText,
  Container,
  FormContainer,
  Title,
} from './styles'

interface EnterpriseFormProps {
  editMode: boolean
}

const EnterpriseForm: React.FC<EnterpriseFormProps> = function ({ editMode }) {
  const formRef = useRef()
  const [cep, setCep] = useState('')
  const [address, setAddress] = useState<Address>()
  const {
    handleCreateEnterprise,
    allEnterprises,
    handleUpdateEnterprise,
    enterpriseToBeEdited,
  } = useEnterprises()

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
    try {
      if (address) {
        if (editMode) {
          await handleUpdateEnterprise({
            ...enterpriseToBeEdited,
            name: data.name,
            status: data.status,
            purpose: data.purpose,
            address: {
              ...address,
              cep: data.cep,
              number: data.number,
            },
          })
          router.push('/')
        } else {
          await handleCreateEnterprise({
            id: `PA0${allEnterprises.length + 1}`,
            name: data.name,
            status: data.status,
            purpose: data.purpose,
            riNumber: '123456',
            address: {
              ...address,
              cep: data.cep,
              number: data.number,
            },
          })
        }
        reset()
        setAddress(null)
      }
    } catch (error) {
      // console.error(error)
    }
  }
  const handleConsultZipCode = useCallback(async () => {
    const adressResponse = await EnterpriseService.consultZipCode(cep)

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
  }, [cep])

  useEffect(() => {
    if (cep.length === 8) handleConsultZipCode()
    else setAddress(null)
  }, [cep, handleConsultZipCode])

  useEffect(() => {
    if (editMode && enterpriseToBeEdited && formRef.current) {
      formRef.current?.setData({
        status: enterpriseToBeEdited.status,
        name: enterpriseToBeEdited.name,
        purpose: enterpriseToBeEdited.purpose,
        number: enterpriseToBeEdited.address.number,
        cep: enterpriseToBeEdited.address.cep,
      })
      setCep(enterpriseToBeEdited.address.cep)
      setAddress(enterpriseToBeEdited.address)
    }
  }, [editMode, enterpriseToBeEdited])

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <FormContainer>
          <Title>Informações</Title>
          <Select required name="status" options={statusOptions} />
          <Input name="name" required placeholder="Nome do Empreendimento" />
          <Select required name="purpose" options={purposeOptions} />
          <Input
            name="cep"
            required
            placeholder="CEP"
            maxLength={8}
            onChange={(e) => setCep(e.target.value)}
          />
          {address && (
            <AdressContainer>
              <AdressText>{address.street}</AdressText>
              <AdressText>{address.district}</AdressText>
              <AdressText>{address.city}</AdressText>
              <AdressText>{address.state}</AdressText>
            </AdressContainer>
          )}
          <Input name="number" required placeholder="Número" />
        </FormContainer>
        <Button type="submit" text={`${editMode ? 'Editar' : 'Cadastrar'}`} />
      </Form>
    </Container>
  )
}

export default EnterpriseForm
