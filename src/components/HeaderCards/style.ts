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
    margin-bottom: 2rem;

    p {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 600;
      margin-top: -0.5rem;
    }
  }

  .cards {
    display: flex;
    justify-content: space-around;
  }

//   .predictionsHeader {
//     padding: 1rem;
//   }

//   .predictionsHeaderTitle {
//     color: ${colors.white};
//     font-weight: 600;
//     font-family: Sora;
//     font-size: 32px;
//     align-items: baseline;
//   }

//   .predictionsHeaderSubtitle {
//     color: ${colors.white};
//     font-weight: 400;
//     font-family: Sora;
//     font-size: 16px;
//     display: flex;
//     align-items: baseline;
//     padding: 1rem;
//     gap: 20px;
//   }

//   .subtitles {
//     display: flex;
//     gap: 10px;
//   }
// `;

export const StyleHeaderCards = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  gap: 1.5rem;
  padding: 0.5rem;
`