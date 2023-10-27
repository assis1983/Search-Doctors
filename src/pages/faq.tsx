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
import { ChangeEvent, useState } from "react";
import { postFaq } from "../services/Questions/postfaq";

type NewPlanState = {
  isModalOpen: boolean;
};

const Faq = () => {
  const [state, setState] = useState<NewPlanState>({
    isModalOpen: false,
  });

  const [planTitle, setPlanTitle] = useState("");
  const [message, setMessage] = useState("");

  const openModal = () => {
    setState({ ...state, isModalOpen: true });
  };

  const closeModal = () => {
    setState({ ...state, isModalOpen: false });
  };

  const clearInputs = () => {
    setPlanTitle("");
    setMessage("");
  };

  const handlePlanTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlanTitle(e.target.value);
  };

  const handleMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSaveClick = async () => {
    if (!planTitle || !message === null) {
      window.alert("Preencha todos os campos antes de salvar.");
    } else {
      const response = await postFaq(planTitle, message);

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
      <StyleLinkUser to={"/questions"}>
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
            inputState={planTitle}
            inputSetState={setPlanTitle}
            onChange={handlePlanTitleChange}
          />
        </StyleInputUser>
        <div className="input-messenger">
          <Input
            label={"Mensagem"}
            placeholder={""}
            inputState={message}
            inputSetState={setMessage}
            onChange={handleMessage}
          />
        </div>
        <Button text={"Salvar"} variant={"login"} onClick={handleSaveClick} />
        <CustomModal isOpen={state.isModalOpen} onRequestClose={closeModal}>
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
