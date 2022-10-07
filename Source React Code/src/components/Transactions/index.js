import Transaction from "../Transaction";
import propTypes from "prop-types";

const Transactions = ({ transactions = [] }) =>
  transactions.map((transaction) => (
    <Transaction key={transaction.id} transaction={transaction} />
  ));

Transactions.propTypes = {
  transactions: propTypes.array,
};

Transactions.defaultProps = {
  transactions: [],
};

export default Transactions;
