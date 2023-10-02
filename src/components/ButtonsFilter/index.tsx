import {
  CardContainerFilter,
  ButtonContainerFilter,
  ButtonFilter,
  ContainerFilter,
} from "./style";

type CardProps = {
  selectedButton: string;
  setSelectedButton: (buttonText: string) => void;
};

// eslint-disable-next-line no-empty-pattern
const CardButtonFIlter = ({ selectedButton, setSelectedButton }: CardProps) => {
  const handleButtonClick = (buttonText: string) => {
    setSelectedButton(buttonText);
  };

  return (
    <ContainerFilter>
      <CardContainerFilter>
        <ButtonContainerFilter>
          <ButtonFilter
            selected={selectedButton === "Todos"}
            onClick={() => handleButtonClick("Todos")}
            as="button"
          >
            Todos
          </ButtonFilter>
          <p>1200</p>
        </ButtonContainerFilter>
      </CardContainerFilter>
      <CardContainerFilter>
        <ButtonContainerFilter>
          <ButtonFilter
            selected={selectedButton === "Contratantes"}
            onClick={() => handleButtonClick("Contratantes")}
            as="button"
          >
            Contratantes
          </ButtonFilter>
          <p>200</p>
        </ButtonContainerFilter>
      </CardContainerFilter>
      <CardContainerFilter>
        <ButtonContainerFilter>
          <ButtonFilter
            selected={selectedButton === "Médicos"}
            onClick={() => handleButtonClick("Médicos")}
            as="button"
          >
            Médicos
          </ButtonFilter>
          <p>1000</p>
        </ButtonContainerFilter>
      </CardContainerFilter>
    </ContainerFilter>
  );
};

export default CardButtonFIlter;
