import { Menu } from "../components/SideBar";
import { Header } from "../components/Header";
import { StyledTitle, Title } from "../components/Title/style";
import { Container } from "../components/Container/styles";
import { useState } from "react";
import CardButtonPlans from "../components/ButtonFilterPlans";
import { StyleCardButtonDuplo } from "../components/ButtonFilterPlans/style";
import { StyleDivFilter, StyleLinkNewPlan } from "../components/Filter/styles";
import { StyleInputs } from "../components/Search/styles";
import { SearchInput } from "../components/Search";
import { FilterButton } from "../components/Filter";
import { ButtonAdd } from "../components/ButtonAdd";
import Table from "../components/Table";
import { ActionButton } from "../components/ToggleButton/style";
import Delete from "../assets/icons/delete";
import { Link } from "react-router-dom";
import EyeTable from "../assets/icons/eyetable";
import Pencil from "../assets/icons/pencil";
import ToggleButton from "../components/ToggleButton";

const columnNames = {
  column1: "Nome Especialidade",
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
      </>
    ),
  },
  {
    column1: "Odontologia",
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
      </>
    ),
  },
  {
    column1: "Neurologia",
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
      </>
    ),
  },
];

const Notifications = () => {
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
        <Title fontSize={32}>Notificações</Title>
      </StyledTitle>
      <StyleCardButtonDuplo>
        <CardButtonPlans
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
        />
      </StyleCardButtonDuplo>
      <Container>
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
          <StyleLinkNewPlan to={"/newnotification"}>
            <ButtonAdd
              text={"Nova Notificação"}
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

export default Notifications;
