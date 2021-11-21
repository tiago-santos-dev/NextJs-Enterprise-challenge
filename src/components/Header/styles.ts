import styled from 'styled-components'

export const Container = styled.header`
  height: 5.7rem;
  background-color: var(--white);
`

export const Content = styled.div`
  max-width: 1140px;
  height: 5.7rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--purple-500);
`
export const LeftContent = styled.div`
  max-width: 60%;
  display: flex;
  justify-content: flex-start;
`
export const RightContent = styled.div`
  max-width: 40%;
  display: flex;
  justify-content: flex-end;
`
export const BackButton = styled.button`
  color: var(--purple-500);
  background: transparent;
  border: 0;

  margin-right: 1rem;

  display: flex;
  align-items: center;
`

export const Title = styled.p`
  font: 700 1.2rem 'Montserrat';
`
