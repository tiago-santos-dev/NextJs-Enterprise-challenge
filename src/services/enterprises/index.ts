import { api, viaCepApi } from '@services/api'
import { Enterprise } from '@typeDefs/index'

type EnterpriseResponse = Omit<Enterprise, 'id' | 'riNumber'> & {
  _id: string
  ri_number: string
}

const EnterpriseService = {
  async createEnterprise(inputEnterprise: Enterprise): Promise<Enterprise> {
    const { data } = await api.post('/enterprises', {
      _id: inputEnterprise.id,
      name: inputEnterprise.name,
      status: inputEnterprise.status,
      purpose: inputEnterprise.purpose,
      ri_number: inputEnterprise.riNumber,
      address: {
        ...inputEnterprise.address,
      },
    })

    const { _id: enterpriseId } = data
    return {
      id: enterpriseId,
      name: data.name,
      status: data.status,
      purpose: data.purpose,
      riNumber: data.ri_number,
      address: {
        ...data.address,
      },
    }
  },

  async updateEnterprise(enterprise: Enterprise) {
    await api.put(`/enterprises/${enterprise.id}`, {
      _id: enterprise.id,
      name: enterprise.name,
      status: enterprise.status,
      purpose: enterprise.purpose,
      ri_number: enterprise.riNumber,
      address: {
        ...enterprise.address,
      },
    })
  },

  async deleteEnterprise(id: string) {
    await api.delete(`/enterprises/${id}`)
  },

  async getEnterprises(page = 1): Promise<Enterprise[]> {
    const { data } = await api.get<EnterpriseResponse[]>(
      `/enterprises?_page=${page}`
    )
    return [
      ...data.map(({ _id, ri_number, ...item }) => ({
        ...item,
        id: _id,
        riNumber: ri_number,
      })),
    ]
  },
  async getAllEnterprises(): Promise<Enterprise[]> {
    const { data } = await api.get<EnterpriseResponse[]>('/enterprises')
    return [
      ...data.map(({ _id, ri_number, ...item }) => ({
        ...item,
        id: _id,
        riNumber: ri_number,
      })),
    ]
  },

  async consultZipCode(zipCode: string) {
    const { data } = await viaCepApi.get(`/${zipCode}/json/`)
    return data
  },
}

export { EnterpriseService }
