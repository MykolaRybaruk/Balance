import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import { Component } from "react";
import propTypes from "prop-types";
import classes from "./styles.module.css";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      date: new Date().toISOString().substring(0, 10),
      comment: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onChange(this.state);
    this.setState({
      value: "",
      comment: "",
    });
  };

  onChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className={classes.form}>
        <input
          className={classes.date}
          type="date"
          name="date"
          value={this.state.date}
          onChange={this.onChange}
        />
        <input
          className={classes.amount}
          type="number"
          name="value"
          placeholder="Amount"
          value={this.state.value}
          onChange={this.onChange}
        />
        <textarea
          className={classes.comment}
          name="comment"
          placeholder="Comment"
          value={this.state.comment}
          onChange={this.onChange}
        />
        <button className={classes.button}>Save</button>
      </form>
    );
  }
}

Form.propTypes = {
  onChange: propTypes.func,
};

export default Form;
