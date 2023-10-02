import { Menu } from "../components/SideBar";
import { Header } from "../components/Header";
import Information from "../components/Information";
import { StyledInformation } from "../components/Information/style";
import * as S from "../components/TableContainer/styles";
import Table from "../components/Table";
import Arrow from "../assets/icons/arrow";

const Dashboard = () => {
  const columnNames = {
    column1: "Usuário",
    column2: "Email",
    column3: "WhatsApp",
    column4: "Tipo de Usuário",
  };
  const data = [
    { column1: "A", column2: "B", column3: "C", column4: "D" },
    { column1: "E", column2: "F", column3: "G", column4: "H" },
    { column1: "E", column2: "F", column3: "G", column4: "H" },
    { column1: "E", column2: "F", column3: "G", column4: "H" },
  ];
  return (
    <>
      <Menu />
      <Header />
      <StyledInformation>
        <Information />
      </StyledInformation>
      <S.TableContainer>
        <S.StyleDateTable>
          <p>Últimos Usuários Cadastrados</p>
          <S.StyleLink to={""}>
            Ver tudo <Arrow />
          </S.StyleLink>
        </S.StyleDateTable>
        <Table data={data} columnNames={columnNames} />
      </S.TableContainer>
    </>
  );
};
export default Dashboard;
