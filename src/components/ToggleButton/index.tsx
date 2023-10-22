import { useState } from "react";
import { ToggleButtonContainer, Ball } from "./style";

type Props = {
  onToggle: (value: boolean) => void;
  enabled: boolean;
};

const ToggleButton = ({ onToggle, enabled }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    const newValue = !isActive;
    setIsActive(newValue);
    onToggle(newValue);
  };
  return (
    <div>
      <ToggleButtonContainer active={enabled} onClick={handleClick}>
        <Ball active={enabled} />
      </ToggleButtonContainer>
    </div>
  );
};

export default ToggleButton;
