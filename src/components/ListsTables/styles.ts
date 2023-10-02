import styled from 'styled-components'
import { colors } from '../../theme'

export const TableStyle = styled.table`
  width: 100%;
  border-spacing: 0;
  border-radius: 30px 30px 0 0;
  overflow: hidden;

  td {
    background-color: ${colors.lightGrey};
    height: 56px;
    text-align: center;
    padding: 0 1rem;
  }

  .tableItemsHeaders {
    background-color: ${colors.blue};
    color: ${colors.grey};
    height: 56px;
  }
`
