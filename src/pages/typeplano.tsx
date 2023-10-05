import { Menu } from "../components/SideBar";
import { Header } from "../components/Header";
import { Container } from "../components/Container/styles";
import {
  StyleInputUser,
  StyleLinkUser,
} from "../components/StyleInputsUser/style";
import { StyleOptionsPlan } from "../components/Styleoptionsplan/style";
import { CardTitle2 } from "../components/Cardone";
import ChevronLeft from "../assets/icons/chevron left";
import { colors } from "../theme";
import { Title } from "../components/Title/style";
import { Input } from "../components/Input";
import ToggleButton from "../components/ToggleButton";
import Pencil from "../assets/icons/pencil";
import Delete from "../assets/icons/delete";

const TypePlan = () => {
  return (
    <>
      <Menu />
      <Header />
      <StyleOptionsPlan>
        <StyleLinkUser to={"/dashboard"}>
          <CardTitle2
            icon={<ChevronLeft />}
            text={"Planos"}
            backgroundColor={colors.light}
          />
        </StyleLinkUser>
        <div className="pencil">
          <Pencil />
          <Delete />
        </div>
      </StyleOptionsPlan>
      <Container>
        <Title fontSize={20}>Dados do Plano</Title>
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
        </StyleInputUser>
        <div className="input-value">
          <Input
            label={"Valor"}
            placeholder={""}
            inputState={""}
            inputSetState={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </Container>
    </>
  );
};

export default TypePlan;
