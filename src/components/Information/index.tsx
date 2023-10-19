import Woman from "../../assets/icons/woman";
import { StyleHeaderCards } from "../HeaderCards/style";
import * as S from "./style";
import NewDate from "../InputCalendar";
import { MainHeader } from "../HeaderCards";
import CardTitle from "../Card";
import { getCards } from "../../services/Dashboard/getCardsDashboard";
import { useState, useEffect } from "react";

type UserType = {
  doctor: { total: string; available: string; unavailable: string };
  contractor: { total: string; available: string; unavailable: string };
};

const Information = () => {
  const [cardsData, setCardsData] = useState<UserType>();

  // Fetch and store the data from getCards
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCards(); // Assuming getCards returns the data you need
        setCardsData(data);
      } catch (error) {
        // Handle error here
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <S.StyledRetangle>
        <S.StyledWoman>
          <Woman />
        </S.StyledWoman>
        <p>Seja bem vinda!</p>
        <p className="phrase">
          Neste painel você poderá administrar <br />
          seu site de forma simples e prática.
        </p>
      </S.StyledRetangle>
      <NewDate />
      <StyleHeaderCards>
        <MainHeader title="Médicos">
          {cardsData && (
            <CardTitle variant={"total"}>
              <h1>{cardsData.doctor.total}</h1>
            </CardTitle>
          )}
          {cardsData && (
            <CardTitle variant={"available"}>
              <h1>{cardsData.doctor.available}</h1>
            </CardTitle>
          )}
          {cardsData && (
            <CardTitle variant={"unavailable"}>
              <h1>{cardsData.doctor.unavailable}</h1>
            </CardTitle>
          )}
        </MainHeader>
        <MainHeader title="Contratantes">
          {cardsData && (
            <CardTitle variant={"totalcontracts"}>
              <h1>{cardsData.contractor.total}</h1>
            </CardTitle>
          )}
          {cardsData && (
            <CardTitle variant={"active"}>
              <h1>{cardsData.contractor.available}</h1>
            </CardTitle>
          )}
          {cardsData && (
            <CardTitle variant={"inactive"}>
              <h1>{cardsData.contractor.unavailable}</h1>
            </CardTitle>
          )}
        </MainHeader>
      </StyleHeaderCards>
    </>
  );
};
export default Information;
