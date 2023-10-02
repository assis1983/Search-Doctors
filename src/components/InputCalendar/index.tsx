import { StlyleCalendar } from "./style";
import Calendar from "../../assets/icons/calendar";

const NewDate = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const month = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  const formattedDate = `${day} de ${month} de ${year}`;

  return (
    <>
      <StlyleCalendar>
        <Calendar />
        <p>{formattedDate}</p>
      </StlyleCalendar>

    </>
  );
};

export default NewDate;
