import styled from "styled-components";
import { colors } from "../../theme";

export const StyldeDivTable = styled.div`
  width: 100%;
`

export const TableStyle = styled.table`
  width: 100%;
  border-spacing: 0;
  border-radius: 30px 30px 0 0;
  overflow: hidden;
  td {
    background-color: ${colors.lightGrey};
    height: 56px;
    padding: 0 1rem;
    text-align: center; 
  }
  th {
    background-color: ${colors.primary};
    color: ${colors.white};
    height: 56px;
    padding: 0 1rem;
  }
  .toogle {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

