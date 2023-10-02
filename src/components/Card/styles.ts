import styled from "styled-components";

export const CustomCardTitle = styled.div<{ customCardColor: string }>`
  display: flex;
  justify-content: space-around;
  .customIcone {
    position: absolute;
    height: 115px;
    width: 250px;
    display: flex;
    align-items: center;
    margin-top: -2rem;
    padding: 0.5rem;
    border-radius: 24px;
    background-color: ${({ customCardColor }) => customCardColor};
  }
  .dateCards {
    position: relative;
    font-size: 1rem;
    font-weight: 400;
    top: -1rem;
  }
`;
