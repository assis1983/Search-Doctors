import styled from "styled-components";
import { colors } from "../../theme";
import { Link } from "react-router-dom";

export const FilterStyle = styled.div`
  button {
    padding: 0.5rem;
    background-color: ${colors.colorcard};
    border: none;
    cursor: pointer;
  }

  .filterBy {
    font-weight: 600;
    border-bottom: 2px solid ${colors.grey};
    padding: 2rem 0;
  }

  .filterItem {
    display: flex;
    gap: 5px;
    padding: 0.5rem 0;
  }

  .status {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
  }

  .filterOptions {
    background-color: ${colors.white};
    font-size: 16px;
    width: 290px;
    position: absolute;
    padding: 1rem;
    top: 20px;
    left: 850px;
    border: 0.5px solid ${colors.grey};
    border-radius: 16px;
  }

  .buttonDiv {
    display: flex;
    justify-content: center;
    button {
      background-color: ${colors.deepGrey};
    }
  }
`;
export const StyleDivFilter = styled.div`
  display: flex;
  align-items: center;
`;

export const StyleLinkNewPlan = styled(Link)`
  text-decoration: none;
  margin-left: auto;
`;
