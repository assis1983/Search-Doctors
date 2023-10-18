import { CustomCardTitle } from "./styles";
import { CardTitleVariants } from "./info";
import { Variant } from "../../types/types";

type Props = {
  variant: Variant;
  children: React.ReactNode;
};

const CardTitle = ({ variant, children }: Props) => {
  return (
    <>
      <CustomCardTitle customCardColor={CardTitleVariants[variant].color}>
        <div className="customIcone">{CardTitleVariants[variant].icon}</div>
        <div className="dateCards">{CardTitleVariants[variant].text}</div>
      </CustomCardTitle>
      {children}
    </>
  );
};

export default CardTitle;
