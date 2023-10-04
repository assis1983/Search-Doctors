import styled from 'styled-components'
import { colors } from '../../theme'
export const StyledButton = styled.button<{ variant: 'login' | 'newplain' }>`
  background-color: #046639;
  color: #ffffff;
  border-radius: ${({ variant }) => (variant === 'login' ? '16px' : '20px')};
  width: ${({ variant }) => (variant === 'login' ? '25rem' : '10rem')};
  height: ${({ variant }) => (variant === 'login' ? '56px' : '40px')};
  font-size: 18px;
  cursor: pointer;
  border: none;
  margin: 10px;
  .style-buttonplans {
    button {
      background-color: ${colors.deepGrey};
    }
  }
`
