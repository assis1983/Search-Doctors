import { MainHeaderStyle } from "../../components/HeaderCards/style";
import CardTitle from "../Card";

type Props = {
  title: string;
  children: React.ReactNode;
};

export function MainHeader({ children, title }: Props) {
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
