import { Menu } from "../components/SideBar";
import { Header } from "../components/Header";
import { Container } from "../components/Container/styles";
import { Title, StyledTitle } from "../components/Title/style";
import { ButtonAdd } from "../components/ButtonAdd";
import { StyleDivFilter } from "../components/Filter/styles";
import { StyleInputs } from "../components/Search/styles";
import { SearchInput } from "../components/Search";
import { FilterButton } from "../components/Filter";
import { ReactNode, useEffect, useState } from "react";
import { StyleLinkNewPlan } from "../components/Filter/styles";
import { Table } from "../components/Table";
import { getSpecialties } from "../services/Especialities/getSpecialties";
import EyeTable from "../assets/icons/eyetable";
import Pencil from "../assets/icons/pencil";
import Delete from "../assets/icons/delete";
import { useNavigate } from "react-router-dom";
import { CustomModal } from "../components/StyleModal/style";
import { Button } from "../components/Button";
import { deleteSpecialties } from "../services/Especialities/deleteSpecialties";

type SpecialtiesType = {
  id: number;
  name: string;
  enabled: ReactNode;
  actions: ReactNode;
}[];

const Specialties = () => {
  const [specialties, setSpecialties] = useState<SpecialtiesType>(
    [] as SpecialtiesType
  );
  const tableTitle = ["Nome Especialidade", "Situação", "Ações"];
  const [searchParam, setSearchParam] = useState<string>("");
  const [filterOn, setFilterOn] = useState<boolean>(false);
  const [stateFilter, setStateFilter] = useState<
    "TODOS" | "EM_ALTA" | "EM_BAIXA"
  >("TODOS");
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [planToDelete, setPlanToDelete] = useState(null);

  const fetchSpecialties = async () => {
    const result = await getSpecialties();
    if (result.message) {
      alert(result.message);
    } else {
      setSpecialties(result);
    }
  };
  const navigate = useNavigate();

  const handleSearchClick = () => {
    const filteredUsers = specialties.filter((item) =>
      item.name.toLowerCase().includes(searchParam.toLowerCase())
    );
    setSpecialties(filteredUsers);
  };

  const handleDeleteSpecialtyes = (id) => {
    setPlanToDelete(id);
    setIsConfirmationModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setIsConfirmationModalOpen(false);

    if (planToDelete !== null) {
      deleteSpecialties(planToDelete);
      setPlanToDelete(null);
      window.location.reload();
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
          {specialties.map((index) => (
            <tr key={index.id}>
              <td>{index.name}</td>
              <td className="toogle">
                {index.enabled}
                {"Ativo"}
              </td>
              <td>
                {index.actions}
                <button
                  className="buttonNavigate"
                  onClick={() => navigate(`/typespecialties/${index.id}`)}
                >
                  <EyeTable />
                </button>
                <Pencil />
                <button
                  className="buttonNavigate"
                  onClick={() => handleDeleteSpecialtyes(index.id)}
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

export default Specialties;
