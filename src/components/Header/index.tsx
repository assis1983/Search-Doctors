import User from "../../assets/icons/user";
import { ChevronDown } from "../../assets/icons/chevron";
import * as S from "../../components/Header/style";
import { Title } from "../Title/style";
import { Subtitle } from "../Subtitle/styles";
import { colors } from "../../theme";

export function Header() {
  return (
    <S.HeaderStyle>
      <S.UserHeadStyle>
        <User />
        <div>
          <Title fontSize={20} color={colors.black}>
            Eder
          </Title>
          <Subtitle>assis.ederjd@gmail.com</Subtitle>
        </div>
        <button className="dropdown" type="button">
          <ChevronDown />
        </button>
      </S.UserHeadStyle>
    </S.HeaderStyle>
  );
}
