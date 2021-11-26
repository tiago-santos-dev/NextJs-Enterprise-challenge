import { OptionsProps } from '@typeDefs/index';
import { useField } from '@unform/core';
import { SelectHTMLAttributes, useEffect, useRef } from 'react'
import { Container } from './styles'
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  options: OptionsProps[]
}

var Select: React.FC<SelectProps> = function ({ name, options, ...rest }) {
  const { fieldName, registerField } = useField(name)
  const selectRef = useRef();

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  })

  return (
    <Container>
      <select name={name} ref={selectRef} {...rest}>
        {options.map((item) => [
          <option key={item.label} value={item.value}>
            {item.label}
          </option>
        ])}
      </select>
    </Container>
  )
}
export default Select
