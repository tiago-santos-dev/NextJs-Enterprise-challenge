import { api } from '@services/api'
import { Enterprise, EnterpriseInput } from '@typeDefs/index'

const EnterpriseService = {
  async createEnterprise (inputEnterprise: EnterpriseInput) {
    const { data } = await api.post('/enterprise', { inputEnterprise })
    return data
  },
  async updateEnterprise (enterprise: Enterprise) {
    await api.put('/analogie/', enterprise)
  },
  async deleteEnterprise (id: string) {
    await api.delete(`/enterprise/${id}`)
  },
  async getAllEnterprises () {
    const { data } = await api.get('/enterprises')
    return data
  },
}

export { EnterpriseService }
