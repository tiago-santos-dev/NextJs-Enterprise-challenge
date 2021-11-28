import { InputHTMLAttributes, useEffect, useRef } from 'react'
import { IconBaseProps } from 'react-icons/lib'
import { useField } from '@unform/core'
import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = function ({
  name,
  icon: Icon,
  onChange,
  ...rest
}) {
  const { fieldName, registerField } = useField(name);
  const inputRef = useRef()

  useEffect(() => {

    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => ref.current.value,
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: (ref) => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
    <Container>
      {Icon && <Icon />}
      <input
        onChange={onChange}
        ref={inputRef}
        {...rest}
      />
    </Container>
  )
}
export default Input
