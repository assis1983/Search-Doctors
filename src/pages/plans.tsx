import { ReactNode, useEffect, useState } from "react";
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
import { StyleLinkNewPlan } from "../components/Filter/styles";
import { getPlans } from "../services/Plans/getPlans";
import EyeTable from "../assets/icons/eyetable";
import Pencil from "../assets/icons/pencil";
import Delete from "../assets/icons/delete";
import { Link } from "react-router-dom";

type PlansType = {
  id: number;
  planTitle: string;
  enabled: boolean;
  actions: ReactNode;
  values: number;
  period: string;
}[];

const Plans = () => {
  const TableTitle = [
    "Plano",
    "Valor",
    "Preço Promocional",
    "Situação",
    "Ações",
  ];
  const [plans, setPlans] = useState<PlansType>([] as PlansType);
  const [selectedButton, setSelectedButton] = useState<string>("Médicos");
  const [filterOn, setFilterOn] = useState<boolean>(false);
  const [stateFilter, setStateFilter] = useState<
    "TODOS" | "EM_ALTA" | "EM_BAIXA"
  >("TODOS");
  // const navigate = useNavigate();

  // const goToPage = (url: string) => {
  //   navigate(url);
  // };
  const fetchPlans = async () => {
    const result = await getPlans();
    if (result.message) {
      alert(result.message);
    } else {
      setPlans(result);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

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
        <Table headersArray={TableTitle}>
          {plans.map((item) => (
            <tr className="tableItems" key={item.id}>
              <td>{item.period}</td>
              <td>{item.values}</td>
              <td>{item.values}</td>
              <td className="toogle">
                <input type="checkbox" checked={item.enabled} disabled />
                Ativo
              </td>
              <td>
                {item.actions}
                <Link to={"/typeplan"}>
                  {" "}
                  <EyeTable />
                </Link>
                <Pencil />
                <Delete />
              </td>
            </tr>
          ))}
        </Table>
      </Container>
    </>
  );
};

export default Plans;
