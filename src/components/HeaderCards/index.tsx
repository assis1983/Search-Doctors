import { MainHeaderStyle } from "../../components/HeaderCards/style";

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
        <div className="cards">{children}</div>
      </MainHeaderStyle>
    </>
  );
}
