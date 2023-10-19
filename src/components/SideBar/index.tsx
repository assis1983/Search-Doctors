import { SideBarMenu } from "./style";
import { MenuItem } from "../Menu";
import Logo from "../../assets/icons/logo";
import PieTwo from "../../assets/icons/pie-two";
import EveryUser from "../../assets/icons/every-user";
import Dollar from "../../assets/icons/dollar";
import Composition from "../../assets/icons/composition";
import Remind from "../../assets/icons/remind";
import Help from "../../assets/icons/help";

const Itens = [
  {
    icon: <PieTwo />,
    text: "Dashboard",
    url: "/dashboard",
  },
  {
    icon: <EveryUser />,
    text: "Usuários Cadastrados",
    url: "/registeruser",
  },
  {
    icon: <Dollar />,
    text: "Planos",
    url: "/plans",
  },
  {
    icon: <Composition />,
    text: "Especialidades",
    url: "/specialties",
  },
  {
    icon: <Remind />,
    text: "Notificações",
    url: "/notifications",
  },
  {
    icon: <Help />,
    text: "FAQ",
    url: "/questions",
  },
];

export function Menu() {
  return (
    <SideBarMenu>
      <div className="imagelogo">
        <Logo />
      </div>
      {Itens.map((index) => (
        <MenuItem icon={index.icon} text={index.text} url={index.url} />
      ))}
    </SideBarMenu>
  );
}
