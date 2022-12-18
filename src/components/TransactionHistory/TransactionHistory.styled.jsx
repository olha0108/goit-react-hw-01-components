import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  width: 400px;
  text-align: center;
  font-size: 12px;
`;
export const TransactionHistoryTableHead = styled.thead`
  background-color: ${props => `${props.theme.colors.valentine}`};
  text-transform: uppercase;
  color: ${props => `${props.theme.colors.white}`};
`;

export const TransactionHistoryTableHeadTr = styled.tr``;
export const TransactionHistoryTableHeadTh = styled.th`padding:8px`;

export const TransactionHistoryTableBody = styled.tbody``;
export const TransactionHistoryTableBodyTr = styled.tr`
  &:nth-of-type(2n) {
    background-color: ${props => `${props.theme.colors.silver}`};
  }
`;
export const TransactionHistoryTableBodyTd = styled.td`padding:8px;text-transform:capitalize`;
