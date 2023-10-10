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
import { Table } from "../components/Table";
// import ToggleButton from "../components/ToggleButton";
// import { ActionButton } from "../components/ToggleButton/style";
// import EyeTable from "../assets/icons/eyetable";
// import Pencil from "../assets/icons/pencil";
// import Delete from "../assets/icons/delete";
import { StyleLinkNewPlan } from "../components/Filter/styles";
// import { Link } from "react-router-dom";
// import { getPlans } from "../services/Plans/getPlans";
// import EyeTable from "../assets/icons/eyetable";
// import Pencil from "../assets/icons/pencil";

// type PlansType = {
//   id: number;
//   values: number;
//   planTitle: string;
//   period: string;
//   type: string;
// }[];

const TableTitle = ["", "Valor", "Preço Promocional", "Situação", "Ações"];

const Plans = () => {
  // const [plans, setPlans] = useState<PlansType>([] as PlansType);
  const [selectedButton, setSelectedButton] = useState<string>("Médicos");
  const [filterOn, setFilterOn] = useState<boolean>(false);
  const [stateFilter, setStateFilter] = useState<
    "TODOS" | "EM_ALTA" | "EM_BAIXA"
  >("TODOS");

  // const fetchPlans = async () => {
  //   const result = await getPlans();
  //   if (result.message) {
  //     alert(result.message);
  //   } else {
  //     setPlans(result);
  //   }
  // };

  // useEffect(() => {
  //   fetchPlans();
  // }, []);

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
            getFilter={function (): void {
              throw new Error("Function not implemented.");
            }}
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
        <Table headersArray={TableTitle} children={undefined}>
          {/* {plans.map((item) => (
            <tr
              // className="tableItems"
              // onClick={() => goToPage(`/produto/${item.id}`)}
              key={item.id}
              style={{ cursor: "pointer" }}
            >
              <td>{item.planTitle}</td>
              <td>{item.type}</td>
              <td>
                <EyeTable />
                <Pencil />
              </td>
            </tr>
          ))} */}
        </Table>
      </Container>
    </>
  );
};

export default Plans;
