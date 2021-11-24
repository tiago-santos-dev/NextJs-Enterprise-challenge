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
  id: string
  name: string
  status: StatusEnum
  purpose: PorposeEnum
  riNumber: string
  address: Adress
}
