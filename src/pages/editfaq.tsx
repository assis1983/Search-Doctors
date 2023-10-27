import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Menu } from "../components/SideBar";
import { Header } from "../components/Header";
import { Title } from "../components/Title/style";
import { Container } from "../components/Container/styles";
import { StyledTitle } from "../components/Title/style";
import ChevronLeft from "../assets/icons/chevron left";
import { CardTitle2 } from "../components/Cardone";
import { colors } from "../theme";
import {
  StyleInputUser,
  StyleLinkUser,
} from "../components/StyleInputsUser/style";
import { getQuestions } from "../services/Questions/getQuestions";
import { putQuestion } from "../services/Questions/putQuestions";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

type PlansType = {
  id: number;
  title: string;
  message: string;
}[];

const EditFaq = () => {
  const { id } = useParams();
  const [plans, setPlans] = useState<PlansType>([] as PlansType);
  const [selectedPlan, setSelectedPlan] = useState<PlansType>([] as PlansType);
  const [planTitle, setPlanTitle] = useState("");
  const [message, setMessage] = useState("");

  const fetchPlans = async () => {
    const result = await getQuestions();
    if (result.message) {
      alert(result.message);
    } else {
      setPlans(result);
    }
  };

  const handleSave = async () => {
    const updatedPlan = {
      id,
      planTitle,
      message,
    };

    const result = await putQuestion(updatedPlan);
    if (result.message) {
      alert(result.message);
      fetchPlans();
    } else {
      alert("Plano atualizado com sucesso!");
      fetchPlans();
      setPlanTitle("");
      setMessage("");
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
      setMessage(selectedPlan.message);
    }
  }, [id, plans]);

  return (
    <>
      <Menu />
      <Header />
      <StyleLinkUser to="/questions">
        <CardTitle2
          icon={<ChevronLeft />}
          text={"FAQ"}
          backgroundColor={colors.light}
        />
      </StyleLinkUser>

      <StyledTitle>
        <Title fontSize={32}>Editar Pergunta</Title>
      </StyledTitle>
      <Container>
        <Title fontSize={20}>Dados da Pergunta</Title>
        <StyleInputUser>
          <Input
            label={"Plano"}
            placeholder={""}
            inputState={planTitle}
            inputSetState={setPlanTitle}
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Input
            label={"Valor"}
            placeholder={""}
            inputState={message}
            inputSetState={setMessage}
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

export default EditFaq;
