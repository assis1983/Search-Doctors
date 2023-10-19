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
  display: flex;
  align-items: baseline;
  background-color: ${colors.white};
  border-radius: 24px;
  top: calc(100% - 20px);
  right: 10px;
  > div {
    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 6rem;
      height: 3rem;
    }
    
  }

  .logout {
    background-color: ${colors.white};
    border: 2px solid ${colors.grey};
    border-radius: 10px;
    cursor: pointer;
    font-size: 20px;
    margin-top: 7rem;
    margin-left: -5rem;
    z-index: 999;
  }
    .button-users {
      display: flex;
      flex-direction: column;
    }
`
