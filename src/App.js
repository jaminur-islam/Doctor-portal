import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Appointment from "./component/Appointment/Appointment/Appointment";
import ContextProvider from "./component/Context/ContextProvider";
import Dashbord from "./component/Dashbord/Dashbord/Dashbord";
import Home from "./component/HOMe/Home/Home";
import Login from "./component/Login/Login/Login";
import PrivetRouter from "./component/Login/PrivetRouter/PrivetRouter";
import Ragister from "./component/Login/Ragister/Ragister";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivetRouter path="/appointment">
            <Appointment></Appointment>
          </PrivetRouter>
          <PrivetRouter path="/dashboard">
            <Dashbord></Dashbord>
          </PrivetRouter>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register/:location">
            <Ragister> </Ragister>
          </Route>
        </Switch>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
