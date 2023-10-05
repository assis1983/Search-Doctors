import * as S from "../../components/Table/style";

export type TableData = {
  column1: string;
  column2: string;
  column3: string;
  column4: JSX.Element | string;
  column5: JSX.Element | string;
  
};

type TableProps = {
  data: TableData[];
  columnNames: { [key: string]: string };
};

const Table = ({ data, columnNames }: TableProps) => {
  
  const keys = Object.keys(columnNames);
  return (
    <S.TableStyle>
      <thead>
        <S.StyledTr>
          {keys.map((key) => (
            <th key={key}>{columnNames[key]}</th>
          ))}
        </S.StyledTr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            {keys.map((key) => (
              <td key={key}>{item[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </S.TableStyle>
  );
};

export default Table;



