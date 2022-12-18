import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TransactionHistoryTableHead,
  TransactionHistoryTableBody,
  TransactionHistoryTableHeadTr,
  TransactionHistoryTableBodyTr,
  TransactionHistoryTableBodyTd, TransactionHistoryTableHeadTh,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionHistoryTable>
      <TransactionHistoryTableHead>
        <TransactionHistoryTableHeadTr>
          <TransactionHistoryTableHeadTh>Type</TransactionHistoryTableHeadTh>
          <TransactionHistoryTableHeadTh>Amount</TransactionHistoryTableHeadTh>
          <TransactionHistoryTableHeadTh>Currency</TransactionHistoryTableHeadTh>
        </TransactionHistoryTableHeadTr>
      </TransactionHistoryTableHead>

      <TransactionHistoryTableBody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionHistoryTableBodyTr key={id}>
            <TransactionHistoryTableBodyTd>
              {type}
            </TransactionHistoryTableBodyTd>
            <TransactionHistoryTableBodyTd>
              {amount}
            </TransactionHistoryTableBodyTd>
            <TransactionHistoryTableBodyTd>
              {currency}
            </TransactionHistoryTableBodyTd>
          </TransactionHistoryTableBodyTr>
        ))}
      </TransactionHistoryTableBody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};
