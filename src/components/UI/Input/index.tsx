import { InputHTMLAttributes, useEffect, useRef } from 'react'
import { IconBaseProps } from 'react-icons/lib'
import { Container, Input as CustomInput } from './styles'
import { useField } from '@unform/core'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = function ({ name, icon: Icon, ...rest }) {
  const { fieldName, registerField } = useField(name)
  const inputRef = useRef();

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
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
  }, [fieldName, registerField])

  return (
    <Container>
      {Icon && <Icon />}
      <CustomInput
        name={name}
        ref={inputRef}
        {...rest}
      />
    </Container>
  )
}
export default Input
