import React from 'react'; 
import './App.css';
import Art from './components/Art'; 
import Navigation from './components/Navigation';
import Market from './Market';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { Navbar, Nav, Container, Button, Form, NavDropdown, FormControl } from 'react-bootstrap';


function App() {
  const me = 1;
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Container fluid = "md">
        <Switch> 
          <Route path="/" exact component = {Market} />
          <Route path ="/art" component={Art} />
          
        </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
