import styled from "styled-components";
import { colors } from "../../theme/index";

export const Container = styled.div`
  width: 85%;
  margin-left: auto;
  box-shadow: 0px 7px 30px rgba(187, 192, 205, 0.4);
  padding: 1rem;
  border-radius: 40px;
  .input-value {
    input {
      width: 184px;
      height: 60px;
    }
  }
  .input-messenger {
    input {
      width: 850px;
      height: 200px;
    }
  }
  .buttonNavigate {
    border: none;
    background-color: transparent;  
    cursor: pointer;
  }
`;

export const MainContainer = styled.div`
  padding: 2rem;
  background: ${colors.grey};
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 75%;
  margin-left: auto;
  margin-top: -70rem;
`;
export const GrayText = styled.span`
  font-weight: 100;
`;
