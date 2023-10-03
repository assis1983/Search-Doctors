import styled from "styled-components";
import { colors } from "../../theme";

export const CardTitleStyle = styled.div<{
  backgroundColor: string;
  textColor?: string;
  round?: "yes";
}>`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 85%;
  margin-left: auto;
  margin-bottom: 30px;
  .iconDiv {
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border-radius: ${({ round }) => (round === "yes" ? "40px" : "50%")};
    background-color: ${({ backgroundColor }) => backgroundColor};
    cursor: pointer;
  }

  .titleDiv {
    color: ${({ textColor }) =>
      textColor === colors.warning && `${colors.warning}`};
    font-family: Poppins;
    font-size: 20px;
    font-weight: 500;
  }
`;
