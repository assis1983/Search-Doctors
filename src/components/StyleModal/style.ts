import styled from "styled-components";
import Modal from "react-modal";
import { colors } from "../../theme";

export const CustomModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 618px;
  height: 359px;
  background-color: ${colors.light};
  border-radius: 24px;
  position: relative;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .style-deleteplan {
    display: flex;
    justify-content: center;
    background-color: blue;
  p {
    display: flex;
    justify-content: center;
    background-color: blue;
  }
  }
  
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;
