import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "../About";
import Home from "../Home";
import Statistics from "../Statistic";
import classes from "./styles.module.css";

const App = () => {
  return (
    <div className={classes.appWrapper}>
      <Router>
        <div className={classes.navWrapper}>
          <nav>
            <ul className={classes.menu}>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/statistics">Statistics</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
