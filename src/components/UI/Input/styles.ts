import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 2rem;
  border-bottom: 2px solid var(--gray-100);

  display: flex;
  align-items: center;
  justify-content: flex-start;

  input {
    margin-left: 1rem;
  }
`

export const Input = styled.input`
  width: 100%;
  background: transparent;
  border: 0;
`
