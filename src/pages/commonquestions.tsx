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
import { Link } from "react-router-dom";
import EyeTable from "../assets/icons/eyetable";
import Pencil from "../assets/icons/pencil";
import Delete from "../assets/icons/delete";

type QuestionsTYpe = {
  id: number;
  title: string;
  action: ReactNode;
}[];

const Questions = () => {
  const [selectedButton, setSelectedButton] = useState<string>("Médicos");
  const [filterOn, setFilterOn] = useState<boolean>(false);
  const [stateFilter, setStateFilter] = useState<
    "TODOS" | "EM_ALTA" | "EM_BAIXA"
  >("TODOS");
  const TableTitle = ["Título", "Ações"];
  const [questions, setQuestions] = useState<QuestionsTYpe>(
    [] as QuestionsTYpe
  );

  const fetchQuestions = async () => {
    const result = await getQuestions();
    if (result.message) {
      alert(result.message);
    } else {
      setQuestions(result);
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

export default Questions;
