import "./App.css";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  let changeMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#0a1e3c";
      showAlert("dark Mode is Enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          link="Links"
          mode={mode}
          changeMode={changeMode}
        />
        <Alert alert={alert} showAlert={showAlert} />
        <div className="container">
          <Switch>
            <Route path="/about">
              <About mode={mode}/>
            </Route>

            <Route path="/">
              <TextForm
                heading="Write some text to convert"
                mode={mode}
                showAlert={showAlert}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
