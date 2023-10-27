import { Menu } from "../components/SideBar";
import { Header } from "../components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getQuestions } from "../services/Questions/getQuestions";
import { StyleOptionsPlan } from "../components/Styleoptionsplan/style";
import {
  StyleInputUser,
  StyleLinkUser,
} from "../components/StyleInputsUser/style";
import { CardTitle2 } from "../components/Cardone";
import ChevronLeft from "../assets/icons/chevron left";
import Pencil from "../assets/icons/pencil";
import { CloseButton, CustomModal } from "../components/StyleModal/style";
import Delete from "../assets/icons/delete";
import { Title } from "../components/Title/style";
import { Container } from "../components/Container/styles";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { colors } from "../theme";

type QuestionsTYpe = {
  id: number;
  title: string;
  messsage: string;
}[];

const TypeQuestion = () => {
  const { id } = useParams();
  const [plans, setPlans] = useState<QuestionsTYpe>([] as QuestionsTYpe);
  const [selectedPlan, setSelectedPlan] = useState<QuestionsTYpe>([]);

  const fetchPlans = async () => {
    const result = await getQuestions();
    if (result.message) {
      alert(result.message);
    } else {
      setPlans(result);
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
    fetchPlans();
  }, [id]);

  useEffect(() => {
    const selectedPlan = plans.find((plan) => plan.id === parseInt(id));
    if (selectedPlan) {
      setSelectedPlan(selectedPlan);
    }
  }, [id, plans]);

  return (
    <>
      <Menu />
      <Header />
      <StyleOptionsPlan>
        <StyleLinkUser to="/questions">
          <CardTitle2
            icon={<ChevronLeft />}
            text={"FAQ Perguntas Frequentes"}
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
        <Title fontSize={20}>Dados da Pergunta</Title>
        <StyleInputUser>
          <Input
            label={"Título"}
            placeholder=""
            inputState={selectedPlan.title}
            inputSetState={function (): void {
              throw new Error("Function not implemented.");
            }}
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Input
            label={"Mensagem"}
            placeholder=""
            inputState={selectedPlan.message}
            inputSetState={function (): void {
              throw new Error("Function not implemented.");
            }}
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </StyleInputUser>
      </Container>
    </>
  );
};

export default TypeQuestion;
