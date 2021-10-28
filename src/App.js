import React, { useState } from "react";

//components imports
import Routes from "./components/Routes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100">app</div>
    </div>
  );
};

export default App;
