import { Menu } from "../components/SideBar";
import { Header } from "../components/Header";
import { StyledTitle, Title } from "../components/Title/style";
import ArrowButton from "../components/ArrowButton";
import { Container } from "../components/Container/styles";
import { useState } from "react";
import { StyledBfore } from "../components/ArrowButton/style";
import Pencil from "../assets/icons/pencil";
import Line from "../assets/icons/line";

const EditProfile = () => {
  const [clickedButton, setClickedButton] = useState("Dados");

  const handleButtonClick = (name: string) => {
    setClickedButton(name);
  };

  return (
    <>
      <Menu />
      <Header />
      <StyledTitle>
        <Title fontSize={32}>Edição de Perfil</Title>
      </StyledTitle>
      <Container>
        <div>
          <ArrowButton
            name={"Dados"}
            onClick={handleButtonClick}
            clicked={clickedButton === "Dados"}
          />
          <ArrowButton
            name={"Alterar Senha"}
            onClick={handleButtonClick}
            clicked={clickedButton === "Alterar Senha"}
          />
          <ArrowButton
            name={"Administradores"}
            onClick={handleButtonClick}
            clicked={clickedButton === "Administradores"}
          />
        </div>
        <StyledBfore>
          {clickedButton && <p>{clickedButton}</p>}
          <div className="name-edit">
            <span>Nome</span>
            <span>Eder</span>
            <Pencil />
          </div>
          <Line />
          <div className="name-edit">
            <span>Email</span>
            <span>assis.ederjd@gmail.com</span>
            <Pencil />
          </div>
          <Line />
        </StyledBfore>
      </Container>
    </>
  );
};

export default EditProfile;
