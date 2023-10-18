import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { InputCheckbox } from "../Input/style";
import Eye from "../../assets/icons/eye";

type Props = {
  label: string;
  placeholder: string;
  inputState: string;
  inputSetState: Dispatch<SetStateAction<string>>;
  password?: boolean;
};

export function Input({
  label,
  placeholder,
  inputState,
  inputSetState,
  password,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    inputSetState(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <InputCheckbox className={inputState ? "success" : ""}>
        <label htmlFor={label}>{label}</label>
        <input
          id={label}
          value={inputState}
          placeholder={placeholder}
          onChange={handleInput}
          type={showPassword ? "text" : password ? "password" : "text"}
        />
        {password && (
          <div className="eyeIconDiv" onClick={togglePasswordVisibility}>
            <Eye />
          </div>
        )}
      </InputCheckbox>
    </>
  );
}
