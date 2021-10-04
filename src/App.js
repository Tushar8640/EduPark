
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Instructors from "./Components/Instructors/Instructors";
import Services from "./Components/Services/Services";
import Notfound from "./Components/NotFound/Notfound";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
 <Switch>
    <Route exact path="/">
      <Home></Home>
    </Route>
    <Route path="/home">
      <Home></Home>
    </Route>
    <Route path="/about">
      <About></About>
    </Route>
    <Route path="/instructors">
      <Instructors></Instructors>
    </Route>
    <Route path="/services">
      <Services></Services>
    </Route>
    <Route  path="*">
      <Notfound></Notfound>
    </Route>

  </Switch>
  <Footer></Footer>
    </Router>
   
  );
}

export default App;
