import styled from "styled-components";
import { colors } from "../../theme";

export const SearchInputStyle = styled.div`
  position: relative;
  padding: 1rem;
  input {
    font-size: 20px;
    width: 400px;
    height: 56px;
    padding: 1rem;
    border-radius: 16px;
    border: 1px solid ${colors.grey};
    padding-right: 40px;
    outline: none;
  }

  .icon {
    position: aboslute;
    background-color: ${colors.white};
    margin-left: -13%;
    border: none;
    cursor: pointer;
  }
`;

export const StyleInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  .quantity {
    display: flex;
    flex-direction: column;
    margin-left: auto;
  }
  p {
    margin-top: 0.1rem;
    font-family: Sora;
    font-size: 22px;
    font-weight: bold;

  }
`;
