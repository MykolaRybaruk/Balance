import classes from "./styles.module.css";

const Balance = ({ balance }) => {
  return (
    <div className={classes.balanceWrapper}>
      <p className={classes.current}>Current balance: {balance}</p>
      <p className={classes.status}>
        {balance === 0
          ? " You have no transactions at this time. Create your first transaction."
          : balance < 0
          ? " Your balance is negative :("
          : " Your balance is positive :)"}
      </p>
      <div className={classes.underline}></div>
    </div>
  );
};

export default Balance;
