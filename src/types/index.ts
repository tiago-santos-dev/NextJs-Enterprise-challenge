export enum PorposeEnum {
  'HOME',
  'BUSINESS',
}

export enum StatusEnum {
  'RELEASE',
  'SHORT RELEASE',
  'IN_WORKS',
  'READY',
}

interface Adress {
  district: string
  city: string
  street: string
  state: string
  number: number
  cep: string
}
export interface Enterprise {
  _id: string
  name: string
  status: StatusEnum
  purpose: PorposeEnum
  ri_number: number
  address: Adress
}

export type EnterpriseInput = Omit<Enterprise, 'id'>
