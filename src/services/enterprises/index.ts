import { api, viaCepApi } from '@services/api'
import { Enterprise } from '@typeDefs/index'

type EnterpriseResponse = Omit<Enterprise, 'id' | 'riNumber'> & {
  _id: string
  ri_number: string
}

const EnterpriseService = {
  async createEnterprise (inputEnterprise: Enterprise): Promise<Enterprise> {
    const { data } = await api.post('/enterprises', { inputEnterprise })
    return data
  },

  async updateEnterprise (enterprise: Enterprise) {
    await api.put('/enterprises/', enterprise)
  },

  async deleteEnterprise (id: string) {
    await api.delete(`/enterprises/${id}`)
  },

  async getAllEnterprises (): Promise<Enterprise[]> {
    const { data } = await api.get<EnterpriseResponse[]>('/enterprises')
    return [
      ...data.map(({ _id, ri_number, ...item }) => ({
        ...item,
        id: _id,
        riNumber: ri_number,
      })),
    ]
  },

  async consultZipCode (zipCode: string) {
    const { data } = await viaCepApi.get(`/${zipCode}/json/`)
    return data;
  }
}

export { EnterpriseService }
