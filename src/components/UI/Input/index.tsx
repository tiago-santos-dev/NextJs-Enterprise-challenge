import { InputHTMLAttributes, useEffect, useRef } from 'react'
import { IconBaseProps } from 'react-icons/lib'
import { Container } from './styles'
import { useField } from '@unform/core'
import InputMask from "react-input-mask";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon?: React.ComponentType<IconBaseProps>
  mask?: string
}

const Input: React.FC<InputProps> = function ({
  name,
  icon: Icon,
  mask = '',
  onChange,
  ...rest
}) {
  const { fieldName, registerField, defaultValue } = useField(name)
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
      <InputMask
        mask={mask}
        onChange={onChange}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </Container>
  )
}
export default Input
