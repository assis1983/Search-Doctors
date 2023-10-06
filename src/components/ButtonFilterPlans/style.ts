import styled from "styled-components";
import { colors } from "../../theme";

export const ContainerFilter = styled.div`
  display: flex;
  justify-content: start;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primary};
    width: 55px;
    height: 28px;
    border-radius: 100px;
    color: ${colors.white};
  }
`;

export const CardContainerFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 16px;
  height: 64px;
`;

export const ButtonContainerFilter = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonFilter = styled.button<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? "#fff" : "#ccc")};
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 8px;
  cursor: pointer;
  font-size: 16px;
  font-family: Poppins;
`;

export const StyleCardButtonDuplo = styled.div`
  width: 85%;
  margin-left: auto;
`