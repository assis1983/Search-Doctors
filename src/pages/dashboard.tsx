import { Menu } from "../components/SideBar";
import { Header } from "../components/Header";
import Information from "../components/Information";
import { StyledInformation } from "../components/Information/style";
import * as S from "../components/TableContainer/styles";
import { Table } from "../components/Table";
import Arrow from "../assets/icons/arrow";
// import { useEffect, useState } from "react";
// import { getDashboarUsers } from "../services/Dashboard/getDashboardClients";

// type UserType = {
//   id: number;
//   email: string;
//   phone: number;
//   firstName: string;
//   lastName: string;
// }[];

const TableTitle = ["Usuário", "E-mail", "WhatsApp", "Tipo de Usuário"];

const Dashboard = () => {
  // const [users, setUsers] = useState<UserType>([] as UserType);
  // const [selectedButton, setSelectedButton] = useState<string>("Médicos");
  // const [filterOn, setFilterOn] = useState<boolean>(false);
  // const [stateFilter, setStateFilter] = useState<
  //   "TODOS" | "EM_ALTA" | "EM_BAIXA"
  // >("TODOS");

  // const fetchUsers = async () => {
  //   const result = await getDashboarUsers();
  //   console.log(result);

  //   if (result.message) {
  //     alert(result.message);
  //   } else {
  //     setUsers(result);
  //   }
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

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
        <Table headersArray={TableTitle} children={undefined}>
          {/* {users.map((item) => (
            <tr
              // className="tableItems"
              // onClick={() => goToPage(`/produto/${item.id}`)}
              key={item.id}
              style={{ cursor: "pointer" }}
            >
              <td>{item.email}</td>
              <td>{item.firstName}</td>
            </tr>
          ))} */}
        </Table>
      </S.TableContainer>
    </>
  );
};
export default Dashboard;
