import Woman from "../../assets/icons/woman";
import { StyleHeaderCards } from "../HeaderCards/style";
import * as S from "./style";
import NewDate from "../InputCalendar";
import { MainHeader } from "../HeaderCards";

export default function Information() {
  return (
    <>
      <S.StyledRetangle>
        <S.StyledWoman>
          <Woman />
        </S.StyledWoman>
        <p>Seja bem vinda!</p>
        <p className="phrase">Neste painel você poderá administrar <br/>seu site de forma simples e prática.</p>
      </S.StyledRetangle>
      <NewDate />
      <StyleHeaderCards>
        <MainHeader title={"Médicos"} children={undefined} />
        <MainHeader title={"Contratantes"} children={undefined} />
      </StyleHeaderCards>
    </>
  );
}
