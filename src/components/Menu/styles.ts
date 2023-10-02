import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../theme";

export const MenuItemStyle = styled(Link)`
  display: flex;
  align-items: center;
  width: 90%;
  text-decoration: none;
  color: ${colors.white};
  display: flex;
  padding: 1rem 0.5rem;
  gap: 20px;
  border-radius: 8px;
  font-family: "poppins";
  &:hover {
    background-color: ${colors.Highlight};
  }
  
`;
export const StyledRetangle = styled.div`
  position: absolute;
` 
export const StyleWoman = styled.div`
  position: relative;
  margin-top: 1rem;
  margin-left: 7rem;
`