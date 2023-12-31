import { Menu } from "../components/SideBar";
import { Header } from "../components/Header";
import { StyledTitle, Title } from "../components/Title/style";
import { Container } from "../components/Container/styles";
import { useEffect, useState } from "react";
import CardButtonPlans from "../components/ButtonFilterPlans";
import { StyleCardButtonDuplo } from "../components/ButtonFilterPlans/style";
import { StyleDivFilter, StyleLinkNewPlan } from "../components/Filter/styles";
import { StyleInputs } from "../components/Search/styles";
import { SearchInput } from "../components/Search";
import { FilterButton } from "../components/Filter";
import { ButtonAdd } from "../components/ButtonAdd";
import { Table } from "../components/Table";
import EyeTable from "../assets/icons/eyetable";
import Pencil from "../assets/icons/pencil";
import { getNotification } from "../services/Notifications/getNotifications";
import { useNavigate } from "react-router-dom";

type NotificationsType = {
  id: number;
  title: string;
  sendingDate: string;
  updatedAt: string;
  message: string;
}[];

const Notifications = () => {
  const [notifications, setNotifications] = useState<NotificationsType>(
    [] as NotificationsType
  );
  const [searchParam, setSearchParam] = useState<string>("");
  const navigate = useNavigate();
  const productTableTitle = ["Título", "Data de Envio", "Ações"];
  const [selectedButton, setSelectedButton] = useState<string>("Médicos");
  const [filterOn, setFilterOn] = useState<boolean>(false);
  const [stateFilter, setStateFilter] = useState<
    "TODOS" | "MÉDICOS" | "CONTRATANTES"
  >("TODOS");

  const fetchNotifications = async () => {
    const result = await getNotification();
    if (result.message) {
      alert(result.message);
    } else {
      setNotifications(result);
    }
  };

  const handleSearchClick = () => {
    const fiterNotification = notifications.filter((item) =>
      item.title.toLowerCase().includes(searchParam.toLowerCase())
    );
    setNotifications(fiterNotification);
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <>
      <Menu />
      <Header />
      <StyledTitle>
        <Title fontSize={32}>Notificações</Title>
      </StyledTitle>
      <StyleCardButtonDuplo>
        <CardButtonPlans
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
        />
      </StyleCardButtonDuplo>
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
            getFilter={fetchNotifications}
          />
          <StyleLinkNewPlan to={"/newnotification"}>
            <ButtonAdd
              text={"Nova Notificação"}
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </StyleLinkNewPlan>
        </StyleDivFilter>
        <Table headersArray={productTableTitle}>
          {notifications.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.updatedAt}</td>
              <td>
                <button
                  className="buttonNavigate"
                  onClick={() => navigate(`/typenotifications/${item.id}`)}
                >
                  <EyeTable />
                </button>
                <button
                  className="buttonNavigate"
                  onClick={() => navigate(`/editnotification/${item.id}`)}
                >
                  <Pencil />
                </button>
              </td>
            </tr>
          ))}
        </Table>
      </Container>
    </>
  );
};

export default Notifications;
