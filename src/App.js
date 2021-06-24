import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Webinar from './components/pages/Webinar'
import Workshop from './components/pages/Workshop'
import Competition from './components/pages/Competition'
import Acara from './components/pages/Acara'
import Footer from './components/Footer'
import Home from './components/pages/Home'

function App() {
  return (
    <div style={{backgroundImage: "url(/background.svg)", backgroundSize: "100%"}}>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
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
