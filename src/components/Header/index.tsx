import User from "../../assets/icons/user";
import { ChevronDown } from "../../assets/icons/chevron";
import * as S from "../../components/Header/style";
import { Title } from "../Title/style";
import { Subtitle } from "../Subtitle/styles";
import { colors } from "../../theme";
import { getUserInfo } from "../../services/User/getuser";
// import { useNavigate } from "react-router-dom";
import {  useEffect, useState } from "react";

type UserInfoType = {
  email: string
  id: number
  firstName: string
}

export function Header() {
  const [showOptions, setShowOptions] = useState(false)
  const [userInfo, setUserInfo] = useState<UserInfoType>({} as UserInfoType)

  // const logout = () => {
  //   localStorage.clear()
  //   api.defaults.headers.common.Authorization = ``
  //   navigate(`/login`, { replace: true })
  // }
  useEffect(() => {
    (async () => {
      const result = await getUserInfo()
      if (result.message) {
        alert(result.message)
      } else {
        setUserInfo(result)
      }
    })()
  }, [])
  

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
        <button className="dropdown" type="button"  onClick={() => setShowOptions(!showOptions)}>
          <ChevronDown />
        </button>
      </S.UserHeadStyle>
    </S.HeaderStyle>
  );
}
