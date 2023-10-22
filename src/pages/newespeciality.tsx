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
import { postSpecialties } from "../services/Especialities/postSpecialties";
import { ChangeEvent, useState } from "react";
import { Button } from "../components/Button";
import { CloseButton, CustomModal } from "../components/StyleModal/style";

type NewSpecialties = {
  isModalOpen: boolean;
};

const NewEspciality = () => {
  const [state, setState] = useState<NewSpecialties>({
    isModalOpen: false,
  });

  const [name, setSpecialtiesName] = useState("");
  const [enabled, setEnabled] = useState(false);

  const openModal = () => {
    setState({ ...state, isModalOpen: true });
  };

  const closeModal = () => {
    setState({ ...state, isModalOpen: false });
  };

  const clearInputs = () => {
    setSpecialtiesName("");
    setEnabled(false);
  };

  const handleSpecialtiesNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSpecialtiesName(e.target.value);
  };

  const handleEnabledChange = () => {
    setEnabled(!enabled);
  };

  const handleSaveClick = async () => {
    if (!name || !enabled) {
      window.alert("Preencha todos os campos antes de salvar.");
    } else {
      const response = await postSpecialties(name, enabled);

      if (response) {
        openModal();
        clearInputs();
      } else {
        console.error("Erro ao salvar o plano.");
      }
    }
  };
  return (
    <>
      <Menu />
      <Header />
      <StyleLinkUser to={"/specialties"}>
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
            inputState={name}
            inputSetState={setSpecialtiesName}
            onChange={handleSpecialtiesNameChange}
          />
          <div className="styled-toogle">
            <Title fontSize={14} color={colors.deepGrey}>
              Situação
            </Title>
            <ToggleButton onToggle={() => {}} enabled={true} />
          </div>
          <div className="styled-title-active">
            <Title fontSize={16} color={colors.deepGrey}>
              Ativo
            </Title>
          </div>
        </StyleInputUser>
        <Button text={"Salvar"} variant={"login"} onClick={handleSaveClick} />
        <CustomModal isOpen={state.isModalOpen} onRequestClose={closeModal}>
          <div>
            <Title fontSize={32}>Plano Salvo com Sucesso</Title>
            <CloseButton onClick={closeModal}>X</CloseButton>
          </div>
        </CustomModal>
      </Container>
    </>
  );
};
export default NewEspciality;
