import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../theme";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  border-radius: 24px;
  margin-top: 1rem;
  box-shadow: 0px 7px 30px rgba(187, 192, 205, 0.4);
`;
export const StyleDateTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 2rem;
  p {
    font-size: 20px;
    font-weight: 600;
    margin-left: 0.5rem;
  }
  span {

  }
`;

export const StyleLink  = styled(Link)`
  display: flex;
  text-decoration: none;
  color: ${colors.sisteme};
`