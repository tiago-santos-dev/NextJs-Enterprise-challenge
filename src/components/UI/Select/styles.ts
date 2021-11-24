import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  height: 2rem;
  border-bottom: 2px solid var(--gray-100);

  display: flex;
  align-items: center;
  justify-content: flex-start;

  select {
    width: 100%;
    background: transparent;
    border: 0;
    font-weight: 400;
    font-size: 1rem;
    margin-left: -0.1rem;
  }
`
