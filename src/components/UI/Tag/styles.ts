import styled from 'styled-components'

export const Container = styled.button`
  width: 9rem;
  height: 2.5rem;

  border-radius: 5rem;
  border: 1px solid var(--purple-500);
  color: var(--gray-900);
  background: transparent;

  font-weight: 400;

  cursor: default;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
