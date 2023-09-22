import styled from 'styled-components'

export const StyledButton = styled.button<{ variant: 'login' | 'faleConosco' }>`
  background-color: #046639;
  color: #ffffff;
  border-radius: ${({ variant }) => (variant === 'login' ? '16px' : '20px')};
  width: ${({ variant }) => (variant === 'login' ? '25rem' : '10rem')};
  height: ${({ variant }) => (variant === 'login' ? '56px' : '40px')};
  font-size: 18px;
  cursor: pointer;
  border: none;
  margin: 10px;
`
