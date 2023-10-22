import { useEffect, useState } from "react";
import { Menu } from "../components/SideBar";
import { Header } from "../components/Header";
import { StyledTitle, Title } from "../components/Title/style";
import { Container, GrayText } from "../components/Container/styles";
import { Table } from "../components/Table";
import { SearchInput } from "../components/Search";
import { StyleInputs } from "../components/Search/styles";
import CardButtonFIlter from "../components/ButtonsFilter";
import { getUser } from "../services/User/getUsersDetails";
import { getCount } from "../services/User/getCount";
import { useNavigate } from "react-router-dom";

type UserType = {
  id: number;
  lastName: string;
  email: string;
  phone: string;
  specialties: { name: string }[];
  profiles: { name: string }[];
}[];

const RegisterUser = () => {
  const tableTitle = [
    "Usuário",
    "Email",
    "WhatsApp",
    "Especialidade",
    "Cidade",
    "Estado",
    "Tipo de Usuário",
  ];
  const [cad, setCad] = useState<UserType>([] as UserType);
  const [selectedButton, setSelectedButton] = useState<string>("Todos");
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [searchParam, setSearchParam] = useState<string>("");

  const navigate = useNavigate();

  const fetchUsers = async () => {
    const result = await getUser();
    if (result.message) {
      alert(result.message);
    } else {
      setCad(result);
    }
  };

  const handleSearchClick = () => {
    const filteredUsers = cad.filter((item) =>
      item.lastName.toLowerCase().includes(searchParam.toLowerCase())
    );
    setCad(filteredUsers);
  };

  useEffect(() => {
    fetchUsers();
    getCount().then((result) => {
      if (result) {
        setTotalUsers(result.total);
      }
    });
  }, []);

  return (
    <>
      <Menu />
      <Header />
      <StyledTitle>
        <Title fontSize={32}>
          Usuários Cadastrados | <GrayText>{selectedButton}</GrayText>
        </Title>
      </StyledTitle>

      <Container>
        <CardButtonFIlter
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
        />

        <StyleInputs>
          <SearchInput
            searchParam={searchParam}
            setSearchParam={setSearchParam}
            onClick={handleSearchClick}
          />

          <div className="quantity">
            <Title fontSize={16}>Total de Usuários</Title>
            <p>{totalUsers}</p>
          </div>
        </StyleInputs>
        <Table headersArray={tableTitle}>
          {cad.map((item) => (
            <tr
              key={item.id}
              onClick={() => navigate(`/clientesdetails/${item.id}`)}
              style={{ cursor: "pointer" }}
            >
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                {item.specialties.map((specialty) => specialty.name).join(", ")}
              </td>{" "}
              <td>Adamantina</td>
              <td>SP</td>
              <td>{item.profiles.map((perfil) => perfil.name).join(", ")}</td>
            </tr>
          ))}
        </Table>
      </Container>
    </>
  );
};

export default RegisterUser;
