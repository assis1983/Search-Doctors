import styled from "styled-components";
import { colors } from "../../theme";

export const ToggleButtonContainer = styled.button<{ active: boolean }>`
  background-color: ${(props) => (props.active ? colors.success : 'gray')};
  width: 58px;
  height: 28px;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 16px;
  position: relative;
  outline: none;
  overflow: hidden;
`;

export const Ball = styled.div<{ active: boolean }>`
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  transform: translateY(-50%);
  left: ${(props) => (props.active ? "32.5px" : "2.5px")};
  transition: left 0.3s ease-in-out;
  top: 50%;
`;

export const ActionButton = styled.button`
  background-color: ${colors.white};
  border: none;
  cursor: pointer;

`