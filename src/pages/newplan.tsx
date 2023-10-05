import { useState } from "react";
import { CustomModal, CloseButton } from "../components/StyleModal/style";
import { Menu } from "../components/SideBar";
import { Header } from "../components/Header";
import { StyleLinkUser } from "../components/StyleInputsUser/style";
import { CardTitle2 } from "../components/Cardone";
import ChevronLeft from "../assets/icons/chevron left";
import { colors } from "../theme";
import { Container } from "../components/Container/styles";
import { Title } from "../components/Title/style";
import { StyleInputUser } from "../components/StyleInputsUser/style";
import { Input } from "../components/Input";
import ToggleButton from "../components/ToggleButton";
import { Button } from "../components/Button";

const NewPlan = () => {
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
          text={"Novo plano - contratante"}
          backgroundColor={colors.light}
        />
      </StyleLinkUser>
      <Container>
        <Title fontSize={20}>Dados do plano</Title>
        <StyleInputUser>
          <Input
            label={"Título do plano"}
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
          <Input
            label={"Período"}
            placeholder={""}
            inputState={""}
            inputSetState={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Input
            label={"Valor"}
            placeholder={""}
            inputState={""}
            inputSetState={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </StyleInputUser>
        <Button text={"Salvar"} variant={"login"} onClick={openModal} />
        <CustomModal isOpen={isModalOpen} onRequestClose={closeModal}>
          <div>
            <Title fontSize={32}>Plano Salvo com Sucesso</Title>
            <CloseButton onClick={closeModal}>X</CloseButton>
          </div>
        </CustomModal>
      </Container>
    </>
  );
};

export default NewPlan;
