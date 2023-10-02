import { styled } from "styled-components";
import { colors } from "../../theme";

export const StyledInformation = styled.div`
  display: flex;
  background-color: ${colors.colorcard};
  width: calc(100% - 280px);
  height: 49vh;
  margin-left: auto;
  margin-top: -2rem;
  border-radius: 25px;
`;

export const StyledRetangle = styled.div`
  background-color: ${colors.primary};
  border-radius: 24px;
  width: 25rem;
  p {
    color: ${colors.white};
    font-size: 25px;
    margin-top: 4rem;
    margin-left: 1rem;

  }
  .phrase {
    color: ${colors.grey};
    font-size: 20px;
    margin-top: 3rem;
  }
`;
export const StyledWoman = styled.div`
  margin-left: 37%;
  margin-top: 0.5rem;
`;
