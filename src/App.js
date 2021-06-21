import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Webinar from './components/pages/Webinar'
import Workshop from './components/pages/Workshop'
import Competition from './components/pages/Competition'
import Acara from './components/pages/Acara'
import Footer from './components/Footer'

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/webinar' exact component={Webinar} />
        <Route path='/workshop' exact component={Workshop} />
        <Route path='/competition' exact component={Competition} />
        <Route path='/acara' exact component={Acara} />
      </Switch>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
