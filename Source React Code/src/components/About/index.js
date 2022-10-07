import classes from "./styles.module.css";

const About = () => {
  return (
    <div className={classes.aboutWrapper}>
      <h1>About</h1>
      <p className={classes.about}>
        This is the demo project that shows how can I works with the states. It
        does not include any local storage. Just add any transaction and enjoy
        the changes. Thank you.
      </p>
    </div>
  );
};

export default About;
