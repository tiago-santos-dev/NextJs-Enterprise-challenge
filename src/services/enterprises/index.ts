import { api, viaCepApi } from '@services/api'
import { Enterprise } from '@typeDefs/index'

type EnterpriseResponse = Omit<Enterprise, 'id' | 'riNumber'> & {
  _id: string
  ri_number: string
}

const EnterpriseService = {
  async createEnterprise(inputEnterprise: Enterprise): Promise<Enterprise> {
    const { id, riNumber } = inputEnterprise
    delete inputEnterprise.id
    delete inputEnterprise.riNumber
    const { data } = await api.post('/enterprises', {
      ...inputEnterprise,
      _id: id,
      ri_number: riNumber,
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
      ...enterprise,
      _id: enterprise.id,
    })
  },

  async deleteEnterprise(id: string) {
    await api.delete(`/enterprises/${id}`)
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
