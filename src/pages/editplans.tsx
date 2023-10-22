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
import { getPlans } from "../services/Plans/getPlans";
import { putPlan } from "../services/Plans/putPlans";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

type PlansType = {
  id: number;
  planTitle: string;
  values: number;
}[];

const EditPlans = () => {
  const { id } = useParams();
  const [plans, setPlans] = useState<PlansType>([] as PlansType);
  const [selectedPlan, setSelectedPlan] = useState<PlansType>([] as PlansType);
  const [planTitle, setPlanTitle] = useState("");
  const [values, setValues] = useState("");

  const fetchPlans = async () => {
    const result = await getPlans();
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
      values: parseFloat(values),
    };

    const result = await putPlan(updatedPlan);
    if (result.message) {
      alert(result.message);
      fetchPlans();
    } else {
      alert("Plano atualizado com sucesso!");
      fetchPlans();
      setPlanTitle("");
      setValues("");
    }
  };

  useEffect(() => {
    fetchPlans();
  }, [id]);

  useEffect(() => {
    const selectedPlan = plans.find((plan) => plan.id === parseInt(id));
    if (selectedPlan) {
      setSelectedPlan(selectedPlan);
      setPlanTitle(selectedPlan.planTitle);
      setValues(selectedPlan.values.toString());
    }
  }, [id, plans]);

  return (
    <>
      <Menu />
      <Header />
      <StyleLinkUser to="/plans">
        <CardTitle2
          icon={<ChevronLeft />}
          text={"Planos"}
          backgroundColor={colors.light}
        />
      </StyleLinkUser>

      <StyledTitle>
        <Title fontSize={32}>Editar Plano</Title>
      </StyledTitle>
      <Container>
        <Title fontSize={20}>Dados do Plano</Title>
        <StyleInputUser>
          <Input
            label={"Plano"}
            placeholder={""}
            inputState={planTitle}
            inputSetState={setPlanTitle}
          />
          <Input
            label={"Valor"}
            placeholder={""}
            inputState={values}
            inputSetState={setValues}
          />
        </StyleInputUser>
        <Button text={"Salvar"} variant={"login"} onClick={handleSave} />
      </Container>
    </>
  );
};

export default EditPlans;
