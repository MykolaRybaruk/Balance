import classes from "./styles.module.css";

const Footer = () => {
  return (
    <div className={classes.footerWrapper}>
      <p className={classes.owner}>Mykola Rybaruk</p>
      <p className={classes.copyright}>Copyright © 2022</p>
    </div>
  );
};

export default Footer;
