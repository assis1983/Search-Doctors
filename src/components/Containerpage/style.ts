import styled from "styled-components";
import ImageLogin from "../../assets/icons/Login.png";

export const ContainerLogin = styled.div`
  height: 100vh;
  background-image: url(${ImageLogin});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .leftContainer {
    width: 100%; 
    max-width: 500px; 
    background-color: #fff;
    border-radius: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 3rem; 

    .textLoginContainer {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1rem 0rem;
    }
  }

  #checkbox-remember {
    margin: 1rem 0rem;
  }

  .checkboxDiv {
    margin: 5px;
    display: flex;
    gap: 10px;
  }

  .rememberDiv {
    margin: 5px;
    gap: 10px;
  }

  @media (max-width: 768px) {
    .leftContainer {
      width: 90%;
    }
  }
`;
