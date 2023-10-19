import styled from "styled-components";

export const StyledHamburguer = styled.div`
  margin-left: auto;
`

export const HamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  outline: none;

  div {
    width: 23px;
    height: 3px;
    background-color: #333;
    transition: transform 0.3s ease-in-out;
  }

  &.open {
    div:nth-child(1) {
      transform: translateY(9px) rotate(45deg);
    }
    div:nth-child(2) {
      opacity: 0;
    }
    div:nth-child(3) {
      transform: translateY(-9px) rotate(-45deg);
    }
  }
`;