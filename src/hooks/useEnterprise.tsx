import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from 'react'
import { EnterpriseService } from '@services/enterprises'
import { Enterprise } from '@typeDefs/index'

import Swal from 'sweetalert2'

interface EnterpriseProviderProps {
  children: ReactNode
}
interface EnterpriseContextData {
  loading: boolean
  allEnterprises: Enterprise[]
  enterpriseToBeEdited: Enterprise
  handleSetEnterpriseToBeEdited: (enterprise: Enterprise) => void
  handleCreateEnterprise: (enterprise: Enterprise) => Promise<void>
  handleUpdateEnterprise: (enterprise: Enterprise) => Promise<void>
  handleDeleteEnterprise: (id: string) => Promise<void>
}

export const EnterprisesContext = createContext<EnterpriseContextData>(
  {} as EnterpriseContextData
)

export var EnterpriseProvider: React.FC<EnterpriseProviderProps> = function ({
  children,
}) {
  const [allEnterprises, setAllEnterprises] = useState<Enterprise[]>([])
  const [enterpriseToBeEdited, setEnterpriseToBeEdited] = useState<Enterprise>()
  const [loading, setLoading] = useState(false)

  const GenericModal = ({
    customIcon,
    customText = ' ',
    customTitle = 'Pronto',
  }) =>
    Swal.fire({
      title: customTitle,
      text: customText,
      icon: customIcon,
      confirmButtonText: 'Ok',
      confirmButtonColor: ' #4F46BB',
    })

  const handleSetEnterpriseToBeEdited = (enterprise: Enterprise) => {
    setEnterpriseToBeEdited(enterprise)
  }

  const getEnterprises = async () => {
    setLoading(true)
    const EnterprisesResponse = await EnterpriseService.getAllEnterprises()
    setAllEnterprises(EnterprisesResponse)
    setLoading(false)
  }

  useEffect(() => {
    getEnterprises()
  }, [])

  const handleCreateEnterprise = async (enterprisesInput: Enterprise) => {
    try {
      await EnterpriseService.createEnterprise(enterprisesInput)
      setAllEnterprises([...allEnterprises, enterprisesInput])
      GenericModal({
        customText: 'Empreendimento criado com sucesso!',
        customIcon: 'success',
      })
    } catch {
      GenericModal({
        customTitle: 'Erro',
        customText: 'Não foi possível concluir essa ação, tente novamente!',
        customIcon: 'error',
      })
    }
  }

  const handleUpdateEnterprise = async (updatedEnterprise: Enterprise) => {
    try {
      await EnterpriseService.updateEnterprise(updatedEnterprise)

      const updatedEnterprises = allEnterprises.map((enterprise) => {
        if (enterprise.id === updatedEnterprise.id) {
          return updatedEnterprise
        }
        return enterprise
      })

      setAllEnterprises(updatedEnterprises)

      GenericModal({
        customText: 'Suas alterações foram salvas com sucesso!',
        customIcon: 'success',
      })
    } catch {
      GenericModal({
        customTitle: 'Erro',
        customText: 'Suas alterações não foram salvas, tente novamente!',
        customIcon: 'error',
      })
    }
  }

  const handleDeleteEnterprise = async (id: string): Promise<void> => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: true,
    })

    swalWithBootstrapButtons
      .fire({
        title: 'Excluir esse Empreendimento?',
        text: 'Esta ação não pode ser desfeita.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Excluir',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          EnterpriseService.deleteEnterprise(id)
            .then(() => {
              const updatedEnterprises = allEnterprises.filter((enterprise) => {
                if (enterprise.id !== id) {
                  return enterprise
                }
              })
              setAllEnterprises(updatedEnterprises)

              GenericModal({
                customText: 'Empreendimento excluido com sucesso!',
                customIcon: 'success',
              })
            })
            .catch(() => {
              GenericModal({
                customTitle: 'Erro',
                customText:
                  'Suas alterações não foram salvas, tente novamente!',
                customIcon: 'error',
              })
            })
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire('Cancelado!')
        }
      })
  }

  return (
    <EnterprisesContext.Provider
      value={{
        loading,
        allEnterprises,
        enterpriseToBeEdited,
        handleSetEnterpriseToBeEdited,
        handleCreateEnterprise,
        handleDeleteEnterprise,
        handleUpdateEnterprise,
      }}
    >
      {children}
    </EnterprisesContext.Provider>
  )
}

export function useEnterprises() {
  const context = useContext(EnterprisesContext)
  return context
}
