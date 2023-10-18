import {
  CardContainerFilter,
  ButtonContainerFilter,
  ButtonFilter,
  ContainerFilter,
} from "./style";
import { getCount } from "../../services/User/getCount";
import { useState, useEffect } from "react";

type CardProps = {
  selectedButton: string;
  setSelectedButton: (buttonText: string) => void;
};

const CardButtonFIlter = ({ selectedButton, setSelectedButton }: CardProps) => {
  const [totalContractor, setTotalContractor] = useState<number>(0);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [totalDoctors, seetTotalDoctors] = useState<number>(0);

  const handleButtonClick = (buttonText: string) => {
    setSelectedButton(buttonText);
  };

  useEffect(() => {
    getCount().then((result) => {
      if (result) {
        setTotalContractor(result.totalContractor);
        setTotalUsers(result.total);
        seetTotalDoctors(result.totalDoctors);
      }
    });
  }, []);

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
          <p>{totalUsers}</p>
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
          <p>{totalContractor}</p>
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
          <p>{totalDoctors}</p>
        </ButtonContainerFilter>
      </CardContainerFilter>
    </ContainerFilter>
  );
};

export default CardButtonFIlter;
