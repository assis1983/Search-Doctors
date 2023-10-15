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
import { useNavigate } from "react-router-dom";

type UserType = {
  id: number;
  lastName: string;
  email: string;
  phone: string;
  specialties: { name: string }[];
  address: { city: string };
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
  const navigate = useNavigate();

  const goToPage = (url: string) => {
    navigate(url);
  };

  const fetchUsers = async () => {
    const result = await getUser();
    if (result.message) {
      alert(result.message);
    } else {
      setCad(result);
    }
  };

  useEffect(() => {
    fetchUsers();
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
            searchParam={""}
            setSearchParam={function (): void {
              throw new Error("Function not implemented.");
            }}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />

          <div className="quantity">
            <Title fontSize={16}>Total de Usuários</Title>
            <p>{}</p>
          </div>
        </StyleInputs>
        <Table headersArray={tableTitle}>
          {cad.map((item) => (
            <tr
              key={item.id}
              onClick={() => goToPage(`/clientesdetails`)}
              style={{ cursor: "pointer" }}
            >
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                {item.specialties.map((specialty) => specialty.name).join(", ")}
              </td>{" "}
              <td>teste</td>
              <td>teste</td>
              <td>{item.profiles.map((perfil) => perfil.name).join(", ")}</td>
            </tr>
          ))}
        </Table>
      </Container>
    </>
  );
};

export default RegisterUser;
