import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { EyeShut } from "../../assets/icons/shut";
import { InputCheckbox } from "../Input/style";

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
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    inputSetState(event.target.value);
  };

  return (
    <InputCheckbox className={inputState ? "success" : ""}>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        value={inputState}
        placeholder={placeholder}
        onChange={handleInput}
        type={password ? "password" : "text"}
      />
      {password && (
        <div className="eyeIconDiv">
          <EyeShut />
        </div>
      )}
    </InputCheckbox>
  );
}
