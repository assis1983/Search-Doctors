import { CustomCardTitle } from "./styles";
import { CardTitleVariants } from "./info";
import { Variant } from "../../types/types";

type Props = {
  variant: Variant;
  // content?: number;
};

const CardTitle = ({ variant }: Props) => {
  return (
    <>
      <CustomCardTitle customCardColor={CardTitleVariants[variant].color}>
        <div className="customIcone">
          {CardTitleVariants[variant].icon}{" "}
          {/* {content !== undefined && <p>{content}</p>} */}
        </div>
        <div className="dateCards">
          {CardTitleVariants[variant].text}{" "}
          {/* {content !== undefined && <p>{content}</p>} */}
        </div>
      </CustomCardTitle>
    </>
  );
};

export default CardTitle;
