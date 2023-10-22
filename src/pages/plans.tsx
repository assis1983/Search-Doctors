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
import { deletePlan } from "../services/Plans/deletePlans";
import EyeTable from "../assets/icons/eyetable";
import Pencil from "../assets/icons/pencil";
import Delete from "../assets/icons/delete";
import { useNavigate } from "react-router-dom";
import { CustomModal } from "../components/StyleModal/style";
import { Button } from "../components/Button";
import ToggleButton from "../components/ToggleButton";
import { colors } from "../theme";

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
  const [plans, setPlans] = useState<PlansType>([]);
  const [selectedButton, setSelectedButton] = useState<string>("Médicos");
  const [filterOn, setFilterOn] = useState<boolean>(false);
  const [stateFilter, setStateFilter] = useState<
    "TODOS" | "EM_ALTA" | "EM_BAIXA"
  >("TODOS");
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [planToDelete, setPlanToDelete] = useState(null);
  const [searchParam, setSearchParam] = useState<string>("");
  const navigate = useNavigate();

  const fetchPlans = async () => {
    const result = await getPlans();
    if (result.message) {
      alert(result.message);
    } else {
      setPlans(result);
    }
  };

  const handleSearchClick = () => {
    const filteredUsers = plans.filter((item) =>
      item.period.toLowerCase().includes(searchParam.toLowerCase())
    );
    setPlans(filteredUsers);
  };

  const handleDeletePlan = (id) => {
    setPlanToDelete(id);
    setIsConfirmationModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setIsConfirmationModalOpen(false);

    if (planToDelete !== null) {
      deletePlan(planToDelete);
      setPlanToDelete(null);
      window.location.reload();
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
              searchParam={searchParam}
              setSearchParam={setSearchParam}
              onClick={handleSearchClick}
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
                <ToggleButton onToggle={() => {}} enabled={item.enabled} />
                {""}
                <div className="styled-title-active">
                  <Title fontSize={16} color={colors.deepGrey}>
                    {item.enabled ? "Ativo" : "Ativo"}{" "}
                  </Title>
                </div>
              </td>
              <td>
                {item.actions}
                <button
                  className="buttonNavigate"
                  onClick={() => navigate(`/typeplan/${item.id}`)}
                >
                  <EyeTable />
                </button>
                <button
                  className="buttonNavigate"
                  onClick={() => navigate(`/editplans/${item.id}`)}
                >
                  <Pencil />
                </button>
                <button
                  className="buttonNavigate"
                  onClick={() => handleDeletePlan(item.id)}
                >
                  <Delete />
                </button>
              </td>
            </tr>
          ))}
        </Table>
        <CustomModal
          isOpen={isConfirmationModalOpen}
          onRequestClose={() => setIsConfirmationModalOpen(false)}
        >
          <Title fontSize={25}>
            Tem certeza que deseja{" "}
            <span style={{ color: "red", textDecoration: "underline" }}>
              excluir
            </span>
            esse item?
          </Title>
          <Button
            text={"Sim, Exluir Item"}
            variant={"login"}
            onClick={handleConfirmDelete}
          ></Button>
          <button
            onClick={() => setIsConfirmationModalOpen(false)}
            className="cancel"
          >
            <span style={{ color: "red" }}>Cancelar</span>
          </button>
        </CustomModal>
      </Container>
    </>
  );
};

export default Plans;
