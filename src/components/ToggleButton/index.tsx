import { useState } from "react";
import { ToggleButtonContainer, Ball } from "./style";

type Props = {
  onToggle: (value: boolean) => void;
};

const ToggleButton = ({ onToggle }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    const newValue = !isActive;
    setIsActive(newValue);
    onToggle(newValue);
  };
  return (
    <div>
      <ToggleButtonContainer active={isActive} onClick={handleClick}>
        <Ball active={isActive} />
      </ToggleButtonContainer>
    </div>
  );
};

export default ToggleButton;
