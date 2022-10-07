import propTypes from "prop-types";
import { Wrapper } from "./styles";

const Transaction = ({ transaction: { value, label, comment, date } }) => (
  <Wrapper value={value}>
    <p>Label: {comment},</p>
    <p>Value: {value}</p>
    <p>Date: {date}</p>
    <br />
  </Wrapper>
);

Transaction.propTypes = {
  transaction: propTypes.shape({
    label: propTypes.string,
    value: propTypes.number,
  }),
};

Transaction.defaultProps = {
  transaction: {
    label: "",
    value: 0,
  },
};

export default Transaction;
