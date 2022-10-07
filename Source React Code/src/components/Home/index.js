import { Component } from "react";
import Balance from "../Balance";
import Form from "../Form";
import Transaction from "../Transaction";
import Transactions from "../Transactions";
import ErrorBoundary from "../ErrorBoundary/index";
import classes from "./styles.module.css";
import Footer from "../Footer";

let id = 0;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      transactions: [],
    };

    this.onChange = this.onChange.bind(this);
    console.log("constructor");
  }

  onChange = ({ value, date, comment }) => {
    this.setState((state) => ({
      balance: state.balance + Number(value),
      transactions: [
        {
          value: +value,
          comment,
          date,
          id: ++id,
        },
        ...state.transactions,
      ],
    }));
  };

  render() {
    console.log("render");
    return (
      <ErrorBoundary>
        <div className={classes.homeWrapper}>
          <Balance balance={this.state.balance} />
          <Form onChange={this.onChange} />
          <hr />

          <Transactions transactions={this.state.transactions} />
          <Footer />
        </div>
      </ErrorBoundary>
    );
  }
}

export default Home;
