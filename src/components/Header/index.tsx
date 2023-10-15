import User from "../../assets/icons/user";
import { ChevronDown } from "../../assets/icons/chevron";
import Boneco from "../../assets/icons/boneco";
import Exit from "../../assets/icons/exit";
import * as S from "../../components/Header/style";
import { Title } from "../Title/style";
import { Subtitle } from "../Subtitle/styles";
import { colors } from "../../theme";
import { getUserInfo } from "../../services/User/getuser";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/Api/apiservice";
import { UserOptionsStyle } from "../../components/Header/style";

type UserInfoType = {
  email: string;
  id: number;
  firstName: string;
};

export function Header() {
  const [showOptions, setShowOptions] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfoType>({} as UserInfoType);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    api.defaults.headers.common.Authorization = ``;
    navigate(`/`, { replace: true });
  };

  const goToPage = (url: string) => {
    navigate(url);
  };

  useEffect(() => {
    (async () => {
      const result = await getUserInfo();
      if (result.message) {
        alert(result.message);
      } else {
        setUserInfo(result);
      }
    })();
  }, []);

  return (
    <S.HeaderStyle>
      <S.UserHeadStyle>
        <User />
        <div>
          <Title fontSize={20} color={colors.black}>
            {userInfo.firstName}
          </Title>
          <Subtitle>{userInfo.email}</Subtitle>
        </div>
        <button
          className="dropdown"
          type="button"
          onClick={() => setShowOptions(!showOptions)}
        >
          <ChevronDown />
        </button>
      </S.UserHeadStyle>
      <div className="button-users">
        {showOptions && (
          <UserOptionsStyle>
            <div className="button-users">
              <button
                className="logout"
                type="button"
                onClick={() => goToPage(`/editprofile`)}
              >
                <Boneco />
                Usuário
              </button>
              <button className="logout" type="button" onClick={logout}>
                <Exit />
                Sair
              </button>
            </div>
          </UserOptionsStyle>
        )}
      </div>
    </S.HeaderStyle>
  );
}
