import { Menu } from "../components/SideBar";
import { Header } from "../components/Header";
import ChevronLeft from "../assets/icons/chevron left";
import { CardTitle2 } from "../components/Cardone";
import {
  StyleInputUser,
  StyleLinkUser,
} from "../components/StyleInputsUser/style";
import { colors } from "../theme";
import { Container } from "../components/Container/styles";
import { Title } from "../components/Title/style";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { CloseButton, CustomModal } from "../components/StyleModal/style";
import { useState } from "react";

const NewNotification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Menu />
      <Header />
      <StyleLinkUser to={"/notifications"}>
        <CardTitle2
          icon={<ChevronLeft />}
          text={"Nova Notificação"}
          backgroundColor={colors.light}
        />
      </StyleLinkUser>
      <Container>
        <Title fontSize={20}>Dados da Notificação</Title>
        <StyleInputUser>
          <Input
            label={"Título"}
            placeholder={""}
            inputState={""}
            inputSetState={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Input
            label={"Data de envio"}
            placeholder={""}
            inputState={""}
            inputSetState={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </StyleInputUser>
        <div className="input-messenger">
          <Input
            label={"Mensagem"}
            placeholder={""}
            inputState={""}
            inputSetState={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
        <Button text={"Salvar"} variant={"login"} onClick={openModal} />
        <CustomModal isOpen={isModalOpen} onRequestClose={closeModal}>
          <div>
            <Title fontSize={32}>Notificação Salva com Sucesso</Title>
            <CloseButton onClick={closeModal}>X</CloseButton>
          </div>
        </CustomModal>
      </Container>
    </>
  );
};

export default NewNotification;
