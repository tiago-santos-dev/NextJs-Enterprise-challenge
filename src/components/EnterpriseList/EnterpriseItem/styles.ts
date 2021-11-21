import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 8.1rem;

  display: flex;

  background-color: var(--white);

  margin-bottom: 2.5rem;

  box-shadow: 0px 2px 4px rgba(48, 46, 69, 0.06);
  border-radius: 0.5rem;
`
export const EnterpriseDetailsContainer = styled.div`
  width: 60%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 2rem;
`
export const Content = styled.div`
  width: 100%;
  display: flex;
`

export const EnterpriseName = styled.p`
  font-size: 1.5rem;
`

export const ActionButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 0.5rem;
`

export const Button = styled.button`
  color: var(--purple-500);
  background: transparent;
  border: 0;
  margin-left: 0.4rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const EnterpriseAdress = styled.p`
  font-weight: 400;
  margin-top: 1rem;
`
export const TagsContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
