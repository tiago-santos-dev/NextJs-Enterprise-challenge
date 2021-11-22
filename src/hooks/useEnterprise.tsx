import { EnterpriseService } from '@services/enterprises'
// import { EnterpriseInput } from '@typeDefs/index'
import { Enterprise } from '@typeDefs/index'
import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
  useCallback
} from 'react'

// import Swal from 'sweetalert2'

interface EnterpriseProviderProps {
  children: ReactNode
}
interface EnterpriseContextData {
  loading: boolean
  allEnterprises: Enterprise[]
  enterpriseToBeEdited: Enterprise
  handleSetEnterpriseToBeEdited: (enterprise: Enterprise) => void
  // handleCreateEnterprise: (enterprise: EnterpriseInput) => Promise<void>
  // handleUpdateEnterprise: (enterprise: Enterprise) => Promise<void>
  // handleDeleteEnterprise: (id: string) => Promise<void>
}

export const EnterprisesContext = createContext<EnterpriseContextData>(
  {} as EnterpriseContextData
)

export function EnterpriseProvider ({ children }: EnterpriseProviderProps) {
  const [allEnterprises, setAllEnterprises] = useState<Enterprise[]>([])
  const [enterpriseToBeEdited, setEnterpriseToBeEdited] = useState<Enterprise>()
  const [loading, setLoading] = useState(false)


  const handleSetEnterpriseToBeEdited = (enterprise: Enterprise) => {
    setEnterpriseToBeEdited(enterprise);
  }

  const getEnterprises = useCallback(async () => {
    setLoading(true)
    const EnterprisesResponse = await EnterpriseService.getAllEnterprises()
    setAllEnterprises(EnterprisesResponse)
    setLoading(false)
  }, [])

  useEffect(() => {
    getEnterprises()
  }, [getEnterprises])

  // async function handleCreateEnterprise (enterprisesInput: EnterpriseInput) {
  //   try {
  //     await EnterpriseService.createEnterprise(enterprisesInput);
  //     setAllEnterprises([...allEnterprises, enterprisesInput]);

  //     Swal.fire({
  //       title: 'Pronto',
  //       text: 'Empreendimento criado com sucesso!',
  //       icon: 'success',
  //       confirmButtonText: 'Ok',
  //       confirmButtonColor: '#257DB4'
  //     })
  //   } catch (error) {
  //     Swal.fire({
  //       title: 'Erro',
  //       text: 'Não foi possível concluir essa ação, tente novamente!',
  //       icon: 'error',
  //       confirmButtonText: 'Ok',
  //       confirmButtonColor: '#257DB4'
  //     })
  //   }
  // }

  // async function handleUpdateEnterprise (updatedEnterprise: Enterprise) {
  //   try {
  //     await EnterpriseService.updateEnterprise(updatedEnterprise)

  //     const updatedEnterprises = allEnterprises.map(enterprise => {
  //       if (enterprise._id === updatedEnterprise._id) {
  //         return updatedEnterprise
  //       }
  //       return enterprise;
  //     })

  //     setAllEnterprises(updatedEnterprises)

  //     Swal.fire({
  //       title: 'Pronto',
  //       text: 'Suas alterações foram salvas com sucesso!',
  //       icon: 'success',
  //       confirmButtonText: 'Ok',
  //       confirmButtonColor: '#257DB4'
  //     })
  //   } catch (error) {
  //     Swal.fire({
  //       title: 'Erro',
  //       text: 'Suas alterações não foram salvas, tente novamente!',
  //       icon: 'error',
  //       confirmButtonText: 'Ok',
  //       confirmButtonColor: '#257DB4'
  //     })
  //   }
  // }

  // async function handleDeleteEnterprise (id: string) {
  //   const swalWithBootstrapButtons = Swal.mixin({
  //     customClass: {
  //       confirmButton: 'btn btn-success',
  //       cancelButton: 'btn btn-danger'
  //     },
  //     buttonsStyling: true
  //   })

  //   swalWithBootstrapButtons
  //     .fire({
  //       title: 'Excluir esse Empreendimento?',
  //       text: 'Esta ação não pode ser desfeita.',
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonText: 'Excluir',
  //       cancelButtonText: 'Cancelar',
  //       reverseButtons: true
  //     })
  //     .then((result) => {
  //       if (result.isConfirmed) {
  //         EnterpriseService.deleteEnterprise(id)
  //           .then(() => {
  //             const updatedEnterprises = allEnterprises.filter((enterprise) => {
  //               if (enterprise._id !== id) {
  //                 return enterprise
  //               }
  //             })
  //             setAllEnterprises(updatedEnterprises)

  //             swalWithBootstrapButtons.fire(
  //               'Pronto!',
  //               'Empreendimento excluido com sucesso!',
  //               'success'
  //             )
  //           })
  //           .catch(() => {
  //             Swal.fire({
  //               title: 'Erro',
  //               text: 'Suas alterações não foram salvas, tente novamente!',
  //               icon: 'error',
  //               confirmButtonText: 'Ok',
  //               confirmButtonColor: '#257DB4'
  //             })
  //           })
  //       } else if (result.dismiss === Swal.DismissReason.cancel) {
  //         swalWithBootstrapButtons.fire('Cancelado!')
  //       }
  // })
  // }

  return (
    <EnterprisesContext.Provider
      value={{
        loading,
        allEnterprises,
        enterpriseToBeEdited,
        handleSetEnterpriseToBeEdited,
        // handleCreateEnterprise,
        // handleDeleteEnterprise,
        // handleUpdateEnterprise
      }}
    >
      {children}
    </EnterprisesContext.Provider>
  )
}

export function useEnterprises () {
  const context = useContext(EnterprisesContext)
  return context
}
