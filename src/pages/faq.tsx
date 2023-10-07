import { Menu } from "../components/SideBar";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import ChevronLeft from "../assets/icons/chevron left";
import { Button } from "../components/Button";
import { CardTitle2 } from "../components/Cardone";
import { Container } from "../components/Container/styles";
import {
  StyleLinkUser,
  StyleInputUser,
} from "../components/StyleInputsUser/style";
import { CustomModal, CloseButton } from "../components/StyleModal/style";
import { Title } from "../components/Title/style";
import { colors } from "../theme";
import { useState } from "react";

const Faq = () => {
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
      <StyleLinkUser to={"/dashboard"}>
        <CardTitle2
          icon={<ChevronLeft />}
          text={"Novo FAQ"}
          backgroundColor={colors.light}
        />
      </StyleLinkUser>
      <Container>
        <Title fontSize={20}>Dados da Pergunta</Title>
        <StyleInputUser>
          <Input
            label={"Título da pergunta"}
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
            <Title fontSize={32}>Pergunta Salva com Sucesso</Title>
            <CloseButton onClick={closeModal}>X</CloseButton>
          </div>
        </CustomModal>
      </Container>
    </>
  );
};

export default Faq;
