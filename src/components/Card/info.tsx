import { Variant } from "../../types/types";
import { colors } from "../../theme";
import IconeTotal from "../../assets/icons/iconetotal";
import IconAvailable from "../../assets/icons/iconavailable";
import IconUnavailable from "../../assets/icons/iconunavailable";
import IconTotalYellow from "../../assets/icons/icontotalyellow";
import IconActive from "../../assets/icons/iconactive";
import IconUnavoidable from "../../assets/icons/iconunavoidable";

type CardTitleInfo = Record<
  Variant,
  {
    text: string;
    icon: JSX.Element;
    color: string;
  }
>;

export const CardTitleVariants: CardTitleInfo = {
  total: {
    text: "Total",
    icon: <IconeTotal />,
    color: colors.colorcard,
  },
  available: {
    text: "Disponíveis",
    icon: <IconAvailable />,
    color: colors.colorcard,
  },
  unavailable: {
    text: "Indisponíveis",
    icon: <IconUnavailable />,
    color: colors.colorcard,
  },
  totalcontracts: {
    text: "Total",
    icon: <IconTotalYellow />,
    color: colors.lightGrey,
  },
  active: {
    text: "Ativos",
    icon: <IconActive />,
    color: colors.success,
  },
  inactive: {
    text: "Inativos",
    icon: <IconUnavoidable />,
    color: colors.warning,
  },
};
