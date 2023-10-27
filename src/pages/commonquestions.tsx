import { Menu } from "../components/SideBar";
import { Header } from "../components/Header";
import { Title } from "../components/Title/style";
import { Container } from "../components/Container/styles";
import { StyledTitle } from "../components/Title/style";
import CardButtonPlans from "../components/ButtonFilterPlans";
import { ReactNode, useEffect, useState } from "react";
import { StyleDivFilter, StyleLinkNewPlan } from "../components/Filter/styles";
import { StyleInputs } from "../components/Search/styles";
import { SearchInput } from "../components/Search";
import { FilterButton } from "../components/Filter";
import { ButtonAdd } from "../components/ButtonAdd";
import { Table } from "../components/Table";
import { getQuestions } from "../services/Questions/getQuestions";
import { deleteQuestion } from "../services/Questions/deleteQuestions";
import { useNavigate } from "react-router-dom";
import EyeTable from "../assets/icons/eyetable";
import Pencil from "../assets/icons/pencil";
import Delete from "../assets/icons/delete";
import { CustomModal } from "../components/StyleModal/style";
import { Button } from "../components/Button";

type QuestionsTYpe = {
  id: number;
  title: string;
  action: ReactNode;
}[];

const Questions = () => {
  const [selectedButton, setSelectedButton] = useState<string>("Médicos");
  const [filterOn, setFilterOn] = useState<boolean>(false);
  const [stateFilter, setStateFilter] = useState<
    "TODOS" | "MÉDICOS" | "CONTRATANTES"
  >("TODOS");
  const TableTitle = ["Título", "Ações"];
  const [questions, setQuestions] = useState<QuestionsTYpe>(
    [] as QuestionsTYpe
  );
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [planToDelete, setPlanToDelete] = useState(null);
  const [searchParam, setSearchParam] = useState<string>("");

  const navigate = useNavigate();

  const fetchQuestions = async () => {
    const result = await getQuestions();
    if (result.message) {
      alert(result.message);
    } else {
      setQuestions(result);
    }
  };

  const handleSearchClick = () => {
    const filteredUsers = questions.filter((item) =>
      item.title.toLowerCase().includes(searchParam.toLowerCase())
    );
    setQuestions(filteredUsers);
  };

  const handleDeletePlan = (id) => {
    setPlanToDelete(id);
    setIsConfirmationModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setIsConfirmationModalOpen(false);

    if (planToDelete !== null) {
      deleteQuestion(planToDelete);
      setPlanToDelete(null);
      window.location.reload();
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);
  console.log(questions);
  return (
    <>
      <Menu />
      <Header />
      <StyledTitle>
        <Title fontSize={32}>FAQ(Perguntas Frequentes)</Title>
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
          <StyleLinkNewPlan to={"/faq"}>
            <ButtonAdd
              text={"Novo FAQ"}
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </StyleLinkNewPlan>
        </StyleDivFilter>
        <Table headersArray={TableTitle}>
          {questions.map((item) => (
            <tr className="tableItems" key={item.id}>
              <td>{item.title}</td>
              <td>
                {item.action}
                <button
                  className="buttonNavigate"
                  onClick={() => navigate(`/typequestion/${item.id}`)}
                >
                  <EyeTable />
                </button>
                <button
                  className="buttonNavigate"
                  onClick={() => navigate(`/editfaq/${item.id}`)}
                >
                  <Pencil />
                </button>
                {item.action}
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

export default Questions;
