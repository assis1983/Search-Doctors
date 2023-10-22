import React, { useState, ChangeEvent } from "react";
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
import { postPlan } from "../services/Plans/postPlans";

type NewPlanState = {
  isModalOpen: boolean;
};

const NewPlan: React.FC = () => {
  const [state, setState] = useState<NewPlanState>({
    isModalOpen: false,
  });

  const [planTitle, setPlanTitle] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [period, setPeriod] = useState("");
  const [values, setValues] = useState<number | null>(null);

  const openModal = () => {
    setState({ ...state, isModalOpen: true });
  };

  const closeModal = () => {
    setState({ ...state, isModalOpen: false });
  };

  const clearInputs = () => {
    setPlanTitle("");
    setEnabled(false);
    setPeriod("");
    setValues(null);
  };

  const handlePlanTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlanTitle(e.target.value);
  };

  const handleEnabledChange = () => {
    setEnabled(!enabled);
  };

  const handlePeriodChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPeriod(e.target.value);
  };

  const handleValuesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setValues(value);
    } else {
      console.error("Valor inválido");
    }
  };

  const handleSaveClick = async () => {
    if (!planTitle || !period || values === null) {
      window.alert("Preencha todos os campos antes de salvar.");
    } else {
      const response = await postPlan(
        planTitle,
        enabled,
        period,
        "type",
        values || 0
      );

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
      <StyleLinkUser to={"/plans"}>
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
            inputState={planTitle}
            inputSetState={setPlanTitle}
            onChange={handlePlanTitleChange}
          />
          <div className="styled-toogle">
            <Title fontSize={14} color={colors.deepGrey}>
              Situação
            </Title>
            <ToggleButton onToggle={handleEnabledChange} />
          </div>
          <div className="styled-title-active">
            <Title fontSize={16} color={colors.deepGrey}>
              Ativo
            </Title>
          </div>
          <Input
            label={"Período"}
            placeholder={""}
            inputState={period}
            inputSetState={setPeriod}
            onChange={handlePeriodChange}
          />
        </StyleInputUser>
        <div>
          <Input
            label={"Valor"}
            placeholder={""}
            inputState={values?.toString() || ""}
            inputSetState={(value) => setValues(parseFloat(value) || null)}
            onChange={handleValuesChange}
          />
        </div>
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

export default NewPlan;
