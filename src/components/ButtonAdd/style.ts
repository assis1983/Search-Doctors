import styled from "styled-components";
import { colors } from "../../theme";

export const StyledButtonAdd = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 20px;
  width: 262px;
  height: 52px;
  border-radius: 16px;
  background-color: ${colors.success};
  color: ${colors.white};
  border: none;
  cursor: pointer;
  margin-left: auto;
`;
