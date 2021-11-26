export enum PorposeEnum {
  HOME = 'Residencial',
  BUSINESS = 'Comercial',
}

export enum StatusEnum {
  RELEASE = 'Lançamento',
  SHORT_RELEASE = 'Breve lançamento',
  IN_WORKS = 'Em Obras',
  READY = 'Pronto pra morar',
}

export interface Adress {
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
  purpose: PorposeEnum
  riNumber: string
  address: Adress
}

export interface OptionsProps {
  label: string
  value: string
}
