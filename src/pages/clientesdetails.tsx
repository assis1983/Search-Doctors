import { Header } from "../components/Header";
import { Menu } from "../components/SideBar";
import { Container } from "../components/Container/styles";
import { CardTitle2 } from "../components/Cardone";
import ChevronLeft from "../assets/icons/chevron left";
import { colors } from "../theme";
import { Title } from "../components/Title/style";
import { Input } from "../components/Input";
import {
  StyleInputUser,
  StyledCheckbox,
  StyleLinkUser,
} from "../components/StyleInputsUser/style";
import CheckBoxUser from "../components/CheckBoxUser";
import Line from "../assets/icons/line";

const ClientesDetails = () => {
  return (
    <>
      <Menu />
      <Header />
      <StyleLinkUser to="/dashboard">
          <CardTitle2
            icon={<ChevronLeft />}
            text={"Usuário"}
            backgroundColor={colors.light}
          />
      </StyleLinkUser>
      <Container>
        <Title fontSize={20}>Dados Pessoais</Title>
        <StyleInputUser>
          <Input
            label={"Primeiro Nome"}
            placeholder={""}
            inputState={""}
            inputSetState={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Input
            label={"Sobrenome"}
            placeholder={""}
            inputState={""}
            inputSetState={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </StyleInputUser>
        <StyleInputUser>
          <Input
            label={"Email"}
            placeholder={""}
            inputState={""}
            inputSetState={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Input
            label={"WhatsApp"}
            placeholder={""}
            inputState={""}
            inputSetState={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </StyleInputUser>
        <Title fontSize={20}>Endereço</Title>
        <StyleInputUser>
          <Input
            label={"CEP"}
            placeholder={""}
            inputState={""}
            inputSetState={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Input
            label={"Rua"}
            placeholder={""}
            inputState={""}
            inputSetState={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Input
            label={"Número"}
            placeholder={""}
            inputState={""}
            inputSetState={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </StyleInputUser>
        <StyleInputUser>
          <Input
            label={"Bairro"}
            placeholder={""}
            inputState={""}
            inputSetState={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Input
            label={"Cidade"}
            placeholder={""}
            inputState={""}
            inputSetState={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Input
            label={"Estado"}
            placeholder={""}
            inputState={""}
            inputSetState={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </StyleInputUser>
        <StyleInputUser>
          <Input
            label={"Complemento"}
            placeholder={""}
            inputState={""}
            inputSetState={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </StyleInputUser>

        <Title fontSize={20}>Dados do currículo</Title>
        <StyleInputUser>
          <Input
            label={"Especialidades"}
            placeholder={""}
            inputState={""}
            inputSetState={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Input
            label={"Cidades que deseja trabalhar"}
            placeholder={""}
            inputState={""}
            inputSetState={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Input
            label={"Locais de Trabalho"}
            placeholder={""}
            inputState={""}
            inputSetState={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </StyleInputUser>
        <Title fontSize={14} color={colors.deepGrey}>
          Disponibilidade de dia e horário
        </Title>
        <StyledCheckbox>
          <CheckBoxUser
            label={"Domingo"}
            checked={false}
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </StyledCheckbox>
        <Line />

        <StyledCheckbox>
          <CheckBoxUser
            label={"Segunda"}
            checked={false}
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </StyledCheckbox>
        <Line />
        <StyledCheckbox>
          <CheckBoxUser
            label={"Sabado"}
            checked={false}
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </StyledCheckbox>
        <StyleInputUser>
          <div className="teste">
            <Input
              label={"Sobre"}
              placeholder={""}
              inputState={""}
              inputSetState={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <Input
              label={"Observações"}
              placeholder={""}
              inputState={""}
              inputSetState={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </StyleInputUser>
        <Title fontSize={20}>Plano</Title>
        <span>Plano X - R$200,00</span>
      </Container>
    </>
  );
};

export default ClientesDetails;
