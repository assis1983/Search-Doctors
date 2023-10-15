import * as S from "../../components/Table/style";

type Props = {
  headersArray: string[];
  children: React.ReactNode;
};

export function Table({ headersArray, children }: Props) {
  return (
    <S.StyldeDivTable>
      <S.TableStyle>
        <tr>
          {headersArray.map((headers, index) => (
            <th key={index}>{headers}</th>
          ))}
        </tr>
        {children}
      </S.TableStyle>
    </S.StyldeDivTable>
  );
}
