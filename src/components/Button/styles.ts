import styled from 'styled-components'

export const Container = styled.button`
  width: 12.5rem;
  height: 2.5rem;

  border-radius: 5rem;
  border: 0;

  background-color: var(--purple-500);
  color: var(--white);

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  svg {
    margin-left: 1rem;
  }

  &:hover {
    filter: brightness(0.9);
  }
`
