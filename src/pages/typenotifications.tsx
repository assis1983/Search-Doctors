import { Menu } from "../components/SideBar";
import { Header } from "../components/Header";
import { StyleOptionsPlan } from "../components/Styleoptionsplan/style";
import { StyleLinkUser } from "../components/StyleInputsUser/style";
import { CardTitle2 } from "../components/Cardone";
import ChevronLeft from "../assets/icons/chevron left";
import { colors } from "../theme";
import { Input } from "../components/Input";
import { StyleInputUser } from "../components/StyleInputsUser/style";
import { Title } from "../components/Title/style";
import { Container } from "../components/Container/styles";
import Pencil from "../assets/icons/pencil";
import Delete from "../assets/icons/delete";
import { getNotification } from "../services/Notifications/getNotifications";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CloseButton, CustomModal } from "../components/StyleModal/style";
import { Button } from "../components/Button";

type NotificationType = {
  id: number;
  title: string;
  message: boolean;
  createdAt: string;
  updatedAt: string;
}[];

const TypeNotifications = () => {
  const { id } = useParams();
  const [notification, setNotification] = useState<NotificationType>(
    [] as NotificationType
  );
  console.log(notification);

  const [selectedNotification, setSelectedNotification] = useState<
    NotificationType
  >([]);

  const fetchNotification = async () => {
    const result = await getNotification();
    if (result.message) {
      alert(result.message);
    } else {
      setNotification(result);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchNotification();
  }, [id]);

  useEffect(() => {
    const selectedNotification = notification.find(
      (item) => item.id === parseInt(id)
    );
    if (selectedNotification) {
      setSelectedNotification(selectedNotification);
    }
  }, [id, notification]);

  return (
    <>
      <Menu />
      <Header />
      <StyleOptionsPlan>
        <StyleLinkUser to="/notifications">
          <CardTitle2
            icon={<ChevronLeft />}
            text={"Notificações"}
            backgroundColor={colors.light}
          />
        </StyleLinkUser>
        <div className="pencil">
          <Pencil />
          <button onClick={openModal}>
            <Delete />
          </button>
          <CustomModal isOpen={isModalOpen} onRequestClose={closeModal}>
            <div>
              <Title fontSize={25}>
                Tem certeza que deseja{" "}
                <span style={{ color: "red", textDecoration: "underline" }}>
                  excluir
                </span>{" "}
                esse item?
              </Title>
              <div className="style-deleteplan">
                <Button
                  text={"Sim, excluir item"}
                  variant={"newplan"}
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </div>
              <CloseButton onClick={closeModal}>X</CloseButton>
            </div>
          </CustomModal>
        </div>
      </StyleOptionsPlan>
      <Container>
        <Title fontSize={20}>Dados da Notificação</Title>
        <StyleInputUser>
          <Input
            label={"Título do plano"}
            placeholder={""}
            inputState={selectedNotification.title}
            inputSetState={function (): void {
              throw new Error("Function not implemented.");
            }}
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </StyleInputUser>
        <Input
          label={"Data da Criação"}
          placeholder={""}
          inputState={selectedNotification.createdAt}
          inputSetState={function (): void {
            throw new Error("Function not implemented.");
          }}
          onChange={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Input
          label={"Data da Atualização"}
          placeholder={""}
          inputState={selectedNotification.updatedAt}
          inputSetState={function (): void {
            throw new Error("Function not implemented.");
          }}
          onChange={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Input
          label={"Mensagem"}
          placeholder={""}
          inputState={selectedNotification.message}
          inputSetState={function (): void {
            throw new Error("Function not implemented.");
          }}
          onChange={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </Container>
    </>
  );
};

export default TypeNotifications;
