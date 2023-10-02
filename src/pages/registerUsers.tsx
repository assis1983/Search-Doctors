import { useState } from "react";
import { Menu } from "../components/SideBar";
import { Header } from "../components/Header";
import { Title } from "../components/Title/style";
import { Container } from "../components/Container/styles";
import Table from "../components/Table";
import { SearchInput } from "../components/Search";
import { StyleInputs } from "../components/Search/styles";
import SelectDays from "../components/SelectFilter";
import CardButtonFIlter from "../components/ButtonsFilter";

const columnNames = {
  column1: "Usuário",
  column2: "Email",
  column3: "WhatsApp",
  column4: "Especialidade",
  column5: "Tipo de Usuário",
};

const data = [
  { column1: "A", column2: "B", column3: "C", column4: "D", column5: "E" },
  { column1: "E", column2: "F", column3: "G", column4: "H", column5: "E" },
  { column1: "E", column2: "F", column3: "G", column4: "H", column5: "E" },
];

const RegisterUser = () => {
  const [selectedButton, setSelectedButton] = useState("Todos");
  return (
    <>
      <Menu />
      <Header />
      <Container>
        <Title fontSize={32}>
          Usuários Cadastrados | {selectedButton}
        </Title>
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
        <Table data={data} columnNames={columnNames} />
      </Container>
    </>
  );
};

export default RegisterUser;
