import { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons/lib'
import { Container } from './styles'

interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string
  icon?: React.ComponentType<IconBaseProps>
}

const Button: React.FC<ButtonProps> = function ({ text, icon: Icon, ...rest }) {
  return (
    <Container {...rest}>
      {text}
      {Icon && <Icon />}
    </Container>
  )
}
export default Button
