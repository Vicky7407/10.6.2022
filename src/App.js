import logo from './logo.svg';
import './App.css';
import Header from './Container/Header';
import Home from './Container/Home';
import Department from './Container/Department';
import Footer from './Container/Footer';
import { Switch, Route } from 'react-router-dom';
import Doctors from './Container/Doctors';
import About from './Container/About';
import Contact from './Container/Contact';
import Appoinment from './Container/Appoinment';
import Login from './Container/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        
        <Route exact path={"/"} ><Home/></Route>
        <Route exact path="/department" ><Department/></Route>
        <Route exact path="/doctors" ><Doctors/></Route>
        <Route exact path="/about" ><About/></Route>
        <Route exact path="/contact" ><Contact/></Route>
        <Route exact path="/appointment" ><Appoinment/></Route>
        <Route exact path="/login" ><Login/></Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
