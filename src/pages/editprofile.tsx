import { useEffect, useState } from "react";
import { getUserInfo } from "../services/User/getuser";
import { Menu } from "../components/SideBar";
import { Header } from "../components/Header";
import { StyledTitle, Title } from "../components/Title/style";
import ArrowButton from "../components/ArrowButton";
import { Container } from "../components/Container/styles";
import { StyledBfore } from "../components/ArrowButton/style";
import Pencil from "../assets/icons/pencil";
import Line from "../assets/icons/line";
import { Subtitle } from "../components/Subtitle/styles";
import Delete from "../assets/icons/delete";
import { ButtonAdd } from "../components/ButtonAdd";
import { CloseButton, CustomModal } from "../components/StyleModal/style";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

type UserInfoType = {
  email: string;
  id: number;
  firstName: string;
};

const EditProfile = () => {
  const [clickedButton, setClickedButton] = useState("Dados");
  const [userInfo, setUserInfo] = useState<UserInfoType>({} as UserInfoType);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (name: string) => {
    setClickedButton(name);
  };

  useEffect(() => {
    (async () => {
      const result = await getUserInfo();
      if (result.message) {
        alert(result.message);
      } else {
        setUserInfo(result);
      }
    })();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderComponent = () => {
    if (clickedButton === "Dados") {
      return (
        <>
          <div className="name-edit">
            <Title fontSize={15}>Nome</Title>
            <Subtitle>{userInfo.firstName}</Subtitle>
            <Pencil />
          </div>
          <Line />
          <div className="name-edit">
            <Title fontSize={15}>E-mail</Title>
            <Subtitle>{userInfo.email}</Subtitle>
            <Pencil />
          </div>
          <Line />
        </>
      );
    } else if (clickedButton === "Alterar Senha") {
      // Renderizar o componente "Alterar Senha" aqui
    } else if (clickedButton === "Administrar Perfis") {
      return (
        <>
          <div className="name-edit">
            <Title fontSize={15}>{userInfo.firstName}</Title>
            <Subtitle>{userInfo.email}</Subtitle>
            <div className="line">
              <Pencil />
              <Delete />
            </div>
          </div>
          <Line />
          <ButtonAdd text={"Novo Perfil"} onClick={openModal} />
        </>
      );
    }
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
            onClick={() => handleButtonClick("Dados")}
            clicked={clickedButton === "Dados"}
          />
          <ArrowButton
            name={"Alterar Senha"}
            onClick={() => handleButtonClick("Alterar Senha")}
            clicked={clickedButton === "Alterar Senha"}
          />
          <ArrowButton
            name={"Administrar Perfis"}
            onClick={() => handleButtonClick("Administrar Perfis")}
            clicked={clickedButton === "Administrar Perfis"}
          />
        </div>
        <StyledBfore>
          {clickedButton && <p>{clickedButton}</p>}
          {renderComponent()}
        </StyledBfore>
      </Container>
      {isModalOpen && (
        <CustomModal isOpen={isModalOpen} onRequestClose={closeModal}>
          <Title fontSize={20}>Novo Perfil</Title>
          <div className="modal-new-perfil">
            <Input
              label={"Nome"}
              placeholder={"Nome completo"}
              inputState={""}
              inputSetState={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <Input
              label={"Email"}
              placeholder={"Email"}
              inputState={""}
              inputSetState={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <Input
              label={"Senha"}
              placeholder={"Senha"}
              inputState={""}
              inputSetState={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <Input
              label={"Confirmar Senha"}
              placeholder={"Confirmar Senha"}
              inputState={""}
              inputSetState={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <CloseButton onClick={closeModal}>X</CloseButton>
            <Button
              text={"Salvar alterações"}
              variant={"login"}
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </CustomModal>
      )}
    </>
  );
};

export default EditProfile;
