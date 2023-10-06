import { Menu } from "../components/SideBar";
import { Header } from "../components/Header";
import { CardTitle2 } from "../components/Cardone";
import {
  StyleInputUser,
  StyleLinkUser,
} from "../components/StyleInputsUser/style";
import ChevronLeft from "../assets/icons/chevron left";
import { colors } from "../theme";
import { Container } from "../components/Container/styles";
import { Title } from "../components/Title/style";
import { Input } from "../components/Input";
import ToggleButton from "../components/ToggleButton";
import { Button } from "../components/Button";
import { CloseButton, CustomModal } from "../components/StyleModal/style";
import { useState } from "react";

const NewEspciality = () => {
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
          text={"Nova Especialidade"}
          backgroundColor={colors.light}
        />
      </StyleLinkUser>
      <Container>
        <Title fontSize={20}>Dados da Especialidade</Title>
        <StyleInputUser>
          <Input
            label={"Nome"}
            placeholder={""}
            inputState={""}
            inputSetState={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <div className="styled-toogle">
            <Title fontSize={14} color={colors.deepGrey}>
              Situação
            </Title>
            <ToggleButton onToggle={() => {}} />
          </div>
          <div className="styled-title-active">
            <Title fontSize={16} color={colors.deepGrey}>
              Ativo
            </Title>
          </div>
        </StyleInputUser>
        <Button text={"Salvar"} variant={"login"} onClick={openModal} />
        <CustomModal isOpen={isModalOpen} onRequestClose={closeModal}>
          <div>
            <Title fontSize={32}>Especialidade Salva com Sucesso</Title>
            <CloseButton onClick={closeModal}>X</CloseButton>
          </div>
        </CustomModal>
      </Container>
    </>
  );
};
export default NewEspciality;
