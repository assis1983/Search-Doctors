import { Menu } from "../components/SideBar";
import { Header } from "../components/Header";
import Information from "../components/Information";
import { StyledInformation } from "../components/Information/style";
import * as S from "../components/TableContainer/styles";
import { Table } from "../components/Table";
import Arrow from "../assets/icons/arrow";
import { useState, useEffect } from "react";
import { getUserLast } from "../services/User/getUserLast";

type LastType = {
  id: number;
  email: string;
  phone: string;
  firstName: string;
  profiles: { name: string }[];
}[];

const Dashboard = () => {
  const TableTitle = ["Usuário", "E-mail", "WhatsApp", "Tipo de Usuário"];
  const [userLast, setUserLast] = useState<LastType>([] as LastType);

  const fetchUserLast = async () => {
    const result = await getUserLast();
    if (result.message) {
      alert(result.message);
    } else {
      setUserLast(result);
    }
  };

  useEffect(() => {
    fetchUserLast();
  }, []);

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
          <S.StyleLink to={"/registeruser"}>
            Ver tudo <Arrow />
          </S.StyleLink>
        </S.StyleDateTable>
        <Table headersArray={TableTitle}>
          {userLast.map((item) => (
            <tr key={item.id}>
              <td>{item.firstName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                {item.profiles.map((profile) => profile.name).join(", ")}
              </td>{" "}
            </tr>
          ))}
        </Table>
      </S.TableContainer>
    </>
  );
};
export default Dashboard;
