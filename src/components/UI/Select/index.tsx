import { SelectHTMLAttributes } from 'react'
import { Container } from './styles'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  options: string[]
}

var Select: React.FC<SelectProps> = function ({ name, options }) {
  return (
    <Container>
      <select name={name}>
        {options.map((item) => [
          <option key={item} value="01">
            {item}
          </option>,
        ])}
      </select>
    </Container>
  )
}
export default Select
