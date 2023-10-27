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
import { postNotifications } from "../services/Notifications/postNotifications";
import { ChangeEvent, useState } from "react";
import { Button } from "../components/Button";
import { CloseButton, CustomModal } from "../components/StyleModal/style";

type NewNotificationState = {
  isModalOpen: boolean;
};

const NewNotification = () => {
  const [state, setState] = useState<NewNotificationState>({
    isModalOpen: false,
  });

  const [title, setTitle] = useState<string>("");
  const [sendingDate, setSendingDate] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const openModal = () => {
    setState({ ...state, isModalOpen: true });
  };

  const closeModal = () => {
    setState({ ...state, isModalOpen: false });
  };

  const clearInputs = () => {
    setTitle("");
    setSendingDate("");
    setMessage("");
  };

  const handleNotificatonsTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSendingDate = (e: ChangeEvent<HTMLInputElement>) => {
    setSendingDate(e.target.value);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSaveClick = async () => {
    if (!title || !sendingDate || message === null) {
      window.alert("Preencha todos os campos antes de salvar.");
    } else {
      const response = await postNotifications(title, sendingDate, message);

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
            inputState={title}
            inputSetState={setTitle}
            onChange={handleNotificatonsTitleChange}
          />
          <Input
            label={"Data de envio"}
            placeholder={""}
            inputState={sendingDate}
            inputSetState={setSendingDate}
            onChange={handleSendingDate}
          />
        </StyleInputUser>
        <div className="input-messenger">
          <Input
            label={"Mensagem"}
            placeholder={""}
            inputState={message}
            inputSetState={setMessage}
            onChange={handleMessageChange}
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

export default NewNotification;
