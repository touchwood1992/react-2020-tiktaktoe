import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// All page components
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import Home from "./components/pages/Home/Home";
import Todos from "./components/pages/Todos/Todos";
import Tiktak from "./components/pages/Tiktak/Tiktak";
import About from "./components/pages/About/About";
import Persons from "./components/pages/Persons/Persons";
import Letters from "./components/pages/Letters/Letters";
// Import toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header></Header>
      <div id="site-content" className="p-2">
        <Switch>
          <Route path="/todos" component={Todos} />
          <Route path="/tiktak" component={Tiktak}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/persons" component={Persons}></Route>
          <Route
            path="/letters"
            render={(props) => <Letters {...props}></Letters>}
          ></Route>
          <Route path="/" component={Home} />
        </Switch>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
