export enum PurposeEnum {
  HOME = 'Residencial',
  BUSINESS = 'Comercial',
}

export enum StatusEnum {
  RELEASE = 'Lançamento',
  SHORT_RELEASE = 'Breve lançamento',
  IN_WORKS = 'Em Obras',
  READY = 'Pronto pra morar',
}

export interface Address {
  district: string
  city: string
  street: string
  state: string
  number: number
  cep: string
}
export interface Enterprise {
  id: string
  name: string
  status: StatusEnum
  purpose: PurposeEnum
  riNumber: string
  address: Address
}

export interface OptionsProps {
  label: string
  value: string
}
