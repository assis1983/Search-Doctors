import { Menu } from "../components/SideBar";
import { Header } from "../components/Header";
import { useParams } from "react-router-dom";
import {
  StyleInputUser,
  StyleLinkUser,
} from "../components/StyleInputsUser/style";
import { CardTitle2 } from "../components/Cardone";
import ChevronLeft from "../assets/icons/chevron left";
import { colors } from "../theme";
import { StyledTitle, Title } from "../components/Title/style";
import { Container } from "../components/Container/styles";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { getNotification } from "../services/Notifications/getNotifications";
import { putNotification } from "../services/Notifications/putNotifications";
import { useEffect, useState } from "react";

type EditNotificationType = {
  title: string;
  sendingDate: string;
  message: string;
}[];

const EditNotification = () => {
  const { id } = useParams();
  const [plans, setPlans] = useState<EditNotificationType>(
    [] as EditNotificationType
  );
  const [selectedPlan, setSelectedPlan] = useState<EditNotificationType>(
    [] as EditNotificationType
  );
  const [planTitle, setPlanTitle] = useState("");
  const [sendingDate, setSendigDate] = useState("");
  const [messageNotification, setMessageNotification] = useState("");

  const fetchPlans = async () => {
    const result = await getNotification();
    if (result.message) {
      alert(result.message);
    } else {
      setPlans(result);
    }
  };

  const handleSave = async () => {
    const updatedPlan = {
      id: selectedPlan.id,
      planTitle,
      sendingDate,
      messageNotification,
    };

    const result = await putNotification(updatedPlan);
    if (result.message) {
      alert(result.message);
      fetchPlans();
    } else {
      alert("Plano atualizado com sucesso!");
      fetchPlans();
      setPlanTitle("");
      setSendigDate("");
      setMessageNotification("");
    }
  };

  useEffect(() => {
    fetchPlans();
  }, [id]);

  useEffect(() => {
    const selectedPlan = plans.find((plan) => plan.id === parseInt(id));
    if (selectedPlan) {
      setSelectedPlan(selectedPlan);
      setPlanTitle(selectedPlan.title);
      setSendigDate(selectedPlan.sendingDate);
      setMessageNotification(selectedPlan.message);
    }
  }, [id, plans]);
  return (
    <>
      <Menu />
      <Header />
      <StyleLinkUser to="/notifications">
        <CardTitle2
          icon={<ChevronLeft />}
          text={"Notificações"}
          backgroundColor={colors.light}
        />
      </StyleLinkUser>
      <StyledTitle>
        <Title fontSize={32}>Editar Notificações</Title>
      </StyledTitle>
      <Container>
        <Title fontSize={20}>Dados da Notificação</Title>
        <StyleInputUser>
          <Input
            label={"Título"}
            placeholder={""}
            inputState={planTitle}
            inputSetState={setPlanTitle}
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Input
            label={"Data da Criação"}
            placeholder={""}
            inputState={sendingDate}
            inputSetState={setSendigDate}
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Input
            label={"Mensagem"}
            placeholder={""}
            inputState={messageNotification}
            inputSetState={setMessageNotification}
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </StyleInputUser>
        <Button text={"Salvar"} variant={"login"} onClick={handleSave} />
      </Container>
    </>
  );
};

export default EditNotification;
