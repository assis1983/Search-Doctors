import { useState } from "react";
import { Menu } from "../components/SideBar";
import { Header } from "../components/Header";
import { Container } from "../components/Container/styles";
import { StyledTitle, Title } from "../components/Title/style";
import CardButtonPlans from "../components/ButtonFilterPlans";
import { SearchInput } from "../components/Search";
import { StyleInputs } from "../components/Search/styles";
import { FilterButton } from "../components/Filter";
import { StyleDivFilter } from "../components/Filter/styles";
import { ButtonAdd } from "../components/ButtonAdd";
import Table from "../components/Table";
import ToggleButton from "../components/ToggleButton";
import { ActionButton } from "../components/ToggleButton/style";
import EyeTable from "../assets/icons/eyetable";
import Pencil from "../assets/icons/pencil";
import Delete from "../assets/icons/delete";
import { StyleLinkNewPlan } from "../components/Filter/styles";
import { Link } from "react-router-dom";

const columnNames = {
  column1: "",
  column2: "Valor",
  column3: "Preço Promocional",
  column4: "Situação",
  column5: "Ações",
};

const data = [
  {
    column1: <Link to={"/typeplan"}>Teste</Link>,
    column2: "B",
    column3: "C",
    column4: (
      <>
        <ToggleButton onToggle={() => {}} /> Ativo
      </>
    ),
    column5: (
      <>
        <ActionButton>
          <EyeTable />
        </ActionButton>
        <ActionButton>
          <Pencil />
        </ActionButton>
        <ActionButton>
          <Delete />
        </ActionButton>
      </>
    ),
  },
  {
    column1: "E",
    column2: "F",
    column3: "G",
    column4: (
      <>
        <ToggleButton onToggle={() => {}} /> Ativo
      </>
    ),
    column5: (
      <>
        <ActionButton>
          <EyeTable />
        </ActionButton>
        <ActionButton>
          <Pencil />
        </ActionButton>
        <ActionButton>
          <Delete />
        </ActionButton>
      </>
    ),
  },
  {
    column1: "E",
    column2: "F",
    column3: "G",
    column4: (
      <>
        <ToggleButton onToggle={() => {}} /> Ativo
      </>
    ),
    column5: (
      <>
        <ActionButton>
          <EyeTable />
        </ActionButton>
        <ActionButton>
          <Pencil />
        </ActionButton>
        <ActionButton>
          <Delete />
        </ActionButton>
      </>
    ),
  },
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
      <StyledTitle>
        <Title fontSize={32}>Planos</Title>
      </StyledTitle>
      <Container>
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
          <StyleLinkNewPlan to={"/newplan"}>
            <ButtonAdd
              text={"Novo Plano"}
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </StyleLinkNewPlan>
        </StyleDivFilter>
        <Table data={data} columnNames={columnNames} />
      </Container>
    </>
  );
};

export default Plans;
