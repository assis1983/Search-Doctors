import { Title } from "../Title/style";
import { colors } from "../../theme";

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const CheckBoxUser = ({ label, checked, onChange }: CheckboxProps) => {
  const handleCheckboxChange = () => {
    onChange(!checked);
  };
  return (
    <>
    <input 
    type="checkbox"
    checked={checked}
    onChange={handleCheckboxChange}
    />
    <Title fontSize={14} color={colors.lightWhite}>{label}</Title>
    </>
  )
};

export default CheckBoxUser;
