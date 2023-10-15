import { ButtonWrapper } from "./style";
import ChevronRow from "../../assets/icons/chevronRow";

type ButtonProps = {
  name: string;
  onClick: (name: string) => void;
  clicked: boolean;
};

const ArrowButton = ({ name, onClick, clicked }: ButtonProps) => {
  return (
    <ButtonWrapper isClicked={clicked} onClick={() => onClick(name)}>
      <div>{name}</div>
      <ChevronRow />
    </ButtonWrapper>
  );
};

export default ArrowButton;
