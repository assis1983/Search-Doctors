import { StyledButtonAdd } from "./style";
import Add from "../../assets/icons/add";

type Props = {
  text: string;
  onClick: () => void;
};

export function ButtonAdd({ text, onClick }: Props) {
  return (
    <StyledButtonAdd type="button" onClick={onClick}>
      <Add />
      {text}
    </StyledButtonAdd>
  );
}
