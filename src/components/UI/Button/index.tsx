import { FiPlus } from 'react-icons/fi'
import { Container } from './styles'

interface ButtonProps {
  text: string
}
const Button = function ({ text }: ButtonProps) {
  return (
    <Container>
      {text}
      <FiPlus />
    </Container>
  )
}
export default Button
