import { MainHeaderStyle } from "../../components/HeaderCards/style";
import CardTitle from "../Card";
// import { getCards } from "../../services/Dashboard/getCardsDashboard";
// import { useState, useEffect } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export function MainHeader({ children, title }: Props) {
  // const [doctorTotal, setDoctorTotal] = useState<number>();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getCards();
  //       if (data.doctor) {
  //         setDoctorTotal(data.doctor.total);
  //       }
  //     } catch (error) {
  //       console.error("Erro ao buscar os dados da API:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <MainHeaderStyle>
        <div className="upperDiv">
          <p>{title}</p>
        </div>
        <div className="cards">
          {children}
          <CardTitle variant={"total"} />
          <CardTitle variant={"available"} />
          <CardTitle variant={"unavailable"} />
        </div>
      </MainHeaderStyle>
    </>
  );
}
