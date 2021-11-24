import { api } from '@services/api'
import { Enterprise } from '@typeDefs/index'

type EnterpriseResponse = Omit<Enterprise, 'id' | 'riNumber'> & {
  _id: string,
  ri_number: string
}

const EnterpriseService = {

  async createEnterprise (inputEnterprise: Enterprise): Promise<Enterprise> {
    const { data } = await api.post('/enterprise', { inputEnterprise })
    return data
  },

  async updateEnterprise (enterprise: Enterprise) {
    await api.put('/analogie/', enterprise)
  },

  async deleteEnterprise (id: string) {
    await api.delete(`/enterprise/${id}`)
  },

  async getAllEnterprises (): Promise<Enterprise[]> {
    const { data } = await api.get<EnterpriseResponse[]>('/enterprises')
    return [...data.map(
      ({ _id, ri_number, ...item }) => (
        { ...item, id: _id, riNumber: ri_number }
      ))]
  },
}

export { EnterpriseService }
