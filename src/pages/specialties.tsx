import { Menu } from "../components/SideBar";
import { Header } from "../components/Header";
import { Container } from "../components/Container/styles";
import { Title, StyledTitle } from "../components/Title/style";
import { ButtonAdd } from "../components/ButtonAdd";
import { StyleDivFilter } from "../components/Filter/styles";
import { StyleInputs } from "../components/Search/styles";
import { SearchInput } from "../components/Search";
import { FilterButton } from "../components/Filter";
import { useEffect, useState } from "react";
import { StyleLinkNewPlan } from "../components/Filter/styles";
import { Table } from "../components/Table";
import ToggleButton from "../components/ToggleButton";
import { getSpecialties } from "../services/Especialities/getSpecialties";
import EyeTable from "../assets/icons/eyetable";
import Pencil from "../assets/icons/pencil";
import Delete from "../assets/icons/delete";

type SpecialtiesType = {
  name: string;
  active: true;
}[];

const tableTitle = ["Nome Especialidade", "Situação", "Ações"];

const Specialties = () => {
  const [specialties, setSpecialties] = useState<SpecialtiesType>(
    [] as SpecialtiesType
  );
  const [filterOn, setFilterOn] = useState<boolean>(false);
  const [stateFilter, setStateFilter] = useState<
    "TODOS" | "EM_ALTA" | "EM_BAIXA"
  >("TODOS");

  const fetchSpecialties = async () => {
    const result = await getSpecialties();
    if (result.message) {
      alert(result.message);
    } else {
      setSpecialties(result);
    }
  };

  useEffect(() => {
    fetchSpecialties();
  }, []);

  return (
    <>
      <Menu />
      <Header />
      <StyledTitle>
        <Title fontSize={32}>Especialidades</Title>
      </StyledTitle>
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
            getFilter={fetchSpecialties}
          />
          <StyleLinkNewPlan to={"/newspeciality"}>
            <ButtonAdd
              text={"Nova Especialidade"}
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </StyleLinkNewPlan>
        </StyleDivFilter>
        <Table headersArray={tableTitle}>
          {specialties.map((item) => (
            <tr
              // className="tableItems"
              // onClick={() => goToPage(`/produto/${item.id}`)}
              style={{ cursor: "pointer" }}
            >
              <td>{item.name}</td>
              <td>
                {item.active}
                <ToggleButton
                  onToggle={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </td>
              <td>
                <EyeTable />
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

export default Specialties;
