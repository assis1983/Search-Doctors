import styled from "styled-components";
import { colors } from "../../theme";

export const ButtonWrapper = styled.button<{ isClicked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 330px;
  height: 69px;
  background-color: ${(props) => (props.isClicked ? colors.primary : colors.deepGrey)};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-size: 20px;
  margin-top: 10px;
  position: relative; 
  
 `;

 export const StyledBfore = styled.div`
    position: absolute;
    top: 160px;
    left: 650px;
    font-weight: 700;
    p {
        font-size: 30px;
    }
    .name-edit {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 150%;
    }
    

 `
