import { CardTitleStyle } from "./styles";

type Props = {
  icon: JSX.Element;
  text: string;
  backgroundColor: string;
  textColor?: string;
};

export function CardTitle2({
  icon,
  text,
  backgroundColor,
  textColor = "#000",
}: Props) {
  return (
    <CardTitleStyle backgroundColor={backgroundColor} textColor={textColor}>
      <div className="iconDiv">{icon}</div>
      <div className="titleDiv">{text}</div>
    </CardTitleStyle>
  );
}
