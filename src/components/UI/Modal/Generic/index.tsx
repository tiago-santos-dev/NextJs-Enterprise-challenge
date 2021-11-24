import Swal from 'sweetalert2'

interface GenericModalProps {
  customTitle?: string
  customText?: string
  customIcon: 'warning' | 'error' | 'success' | 'info' | 'question'
}

const GenericModal: React.FC<GenericModalProps> = function ({
  customIcon,
  customText = ' ',
  customTitle = 'Pronto',
}) {
  return (
    <>
      {Swal.fire({
        title: customTitle,
        text: customText,
        icon: customIcon,
        confirmButtonText: 'Ok',
        confirmButtonColor: ' #4F46BB',
      })}
    </>
  )
}
export default GenericModal
