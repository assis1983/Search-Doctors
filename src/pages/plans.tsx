import { useState } from "react";
import { Menu } from "../components/SideBar";
import { Header } from "../components/Header";
import { Container } from "../components/Container/styles";
import { Title } from "../components/Title/style";
import CardButtonPlans from "../components/ButtonFilterPlans";
import { SearchInput } from "../components/Search";
import { StyleInputs } from "../components/Search/styles";
import { FilterButton } from "../components/Filter";
import { StyleDivFilter } from "../components/Filter/styles";
import Table from "../components/Table";

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

const Plans = () => {
  const [selectedButton, setSelectedButton] = useState<string>("Médicos");
  const [filterOn, setFilterOn] = useState<boolean>(false);
  const [stateFilter, setStateFilter] = useState<
    "TODOS" | "EM_ALTA" | "EM_BAIXA"
  >("TODOS");

  function fetchProducts(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <Menu />
      <Header />
      <Container>
        <Title fontSize={32}>Planos</Title>
        <CardButtonPlans
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
        />
        <StyleDivFilter>
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
          </StyleInputs>
          <FilterButton
            openOrClosed={filterOn}
            button={setFilterOn}
            stateFilter={stateFilter}
            setStateFilter={setStateFilter}
            getFilter={fetchProducts}
          />
        </StyleDivFilter>
        <Table data={data} columnNames={columnNames} />
      </Container>
    </>
  );
};

export default Plans;
