import styled from "styled-components";
import { colors } from "../../theme";

export const MainHeaderStyle = styled.div`
  background-color: ${colors.white};
  color: black;
  border-radius: 24px;
  padding: 1rem;
  width: 74rem;
  height: 12rem;
  border-radius: 24px;
  margin-left: 5rem;
  .upperDiv {
    margin-bottom: 2.5rem;

    p {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 600;
      margin-top: -0.5rem;
    }
  }

  .cards {
    display: flex;
    justify-content: space-between;
    margin-left: 150px;
  }
  
 `;

export const StyleHeaderCards = styled.div`
  position; absolute;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  gap: 1.5rem;
  padding: 0.5rem;
  h1 {
    position: relative;
    left: -150px;
      
  }
`