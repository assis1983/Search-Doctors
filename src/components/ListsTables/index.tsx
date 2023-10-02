import { TableStyle } from './styles'

type Props = {
  headersArray: string[]
  children: React.ReactNode
}

export function TableList({ headersArray, children }: Props) {
  return (
    <TableStyle>
      <tr className="tableItemsHeaders">
        {headersArray.map((headers, index) => (
          <th key={index}>{headers}</th>
        ))}
      </tr>
      {children}
    </TableStyle>
  )
}
