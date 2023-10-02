import styled from 'styled-components'
import { colors } from '../../theme'

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: end;
  width: calc(100% - 350px);
  height: 130px;
  align-items: center;
  padding: 0 2rem;
  background-color: ${colors.white};
  z-index: 999;
  margin-left: auto;
  margin-top: -78rem;

  .dropdown {
    border: none;
    background-color: ${colors.white};
    color: ${colors.grey};
    cursor: pointer;
  }
`
export const UserHeadStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
`

export const UserOptionsStyle = styled.div`
  align-items: baseline;
  background-color: ${colors.white};
  position: absolute;
  border-radius: 24px;
  top: calc(100% - 20px);
  right: 10px;
  > div {
    padding: 1rem 2rem;
    display: flex;
    gap: 10px;
    &:first-child {
      border-bottom: 2px solid ${colors.grey};
    }
  }

  .logout {
    background-color: ${colors.white};
    border: none;
    cursor: pointer;
    font-size: 20px;
  }
`
