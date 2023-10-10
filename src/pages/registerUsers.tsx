import { useState } from "react";
import { Menu } from "../components/SideBar";
import { Header } from "../components/Header";
import { StyledTitle, Title } from "../components/Title/style";
import { Container, GrayText } from "../components/Container/styles";
import { Table } from "../components/Table";
import { SearchInput } from "../components/Search";
import { StyleInputs } from "../components/Search/styles";
import SelectDays from "../components/SelectFilter";
import CardButtonFIlter from "../components/ButtonsFilter";

const tableTitle = [
  "Usuário",
  "Email",
  "WhatsApp",
  "Especialidade",
  "Cidade",
  "Estado",
  "Tipo de Usuário",
];

const RegisterUser = () => {
  const [selectedButton, setSelectedButton] = useState<string>("Todos");

  return (
    <>
      <Menu />
      <Header />
      <StyledTitle>
        <Title fontSize={32}>
          Usuários Cadastrados | <GrayText>{selectedButton}</GrayText>
        </Title>
      </StyledTitle>

      <Container>
        <CardButtonFIlter
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
        />

        <StyleInputs>
          <SearchInput
            searchParam={""}
            setSearchParam={function (): void {
              throw new Error("Function not implemented.");
            }}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />

          <SelectDays options={[]} defaultOptionText={"Estado (UF)"} />
          <SelectDays options={[]} defaultOptionText={"Cidade"} />
          <SelectDays options={[]} defaultOptionText={"Especialidade"} />
          <div className="quantity">
            <Title fontSize={16}>Total de Usuários</Title>
            <p>1.200</p>
          </div>
        </StyleInputs>
        <Table headersArray={tableTitle} children={undefined} />
      </Container>
    </>
  );
};

export default RegisterUser;
