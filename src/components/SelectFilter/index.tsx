import PropTypes from "prop-types";
import { SelectDaysStyle } from "./styles";

type SelectProps = {
  options: string[];
  defaultOptionText: string;
};

const SelectDays = ({ options, defaultOptionText }: SelectProps) => {
  return (
    <div>
      <SelectDaysStyle>
        <option>{defaultOptionText}</option>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </SelectDaysStyle>
    </div>
  );
};

SelectDays.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultOptionText: PropTypes.string.isRequired,
};

export default SelectDays;
