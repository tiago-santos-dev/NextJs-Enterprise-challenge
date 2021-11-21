import { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons/lib'
import { Container, Input as CustomInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = function ({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon />}
      <CustomInput {...rest} />
    </Container>
  )
}
export default Input
