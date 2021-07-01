import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Webinar from './components/pages/Webinar'
import Workshop from './components/pages/Workshop'
import Competition from './components/pages/Competition'
import Acara from './components/pages/Acara'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import ScrollToTop from './components/ScrollToTop';
import RegistCompetition from './components/pages/RegistCompetition';

function App() {
  return (
    <div style={{ backgroundImage: "url(/background4.webp)" }}>
      <Router>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/webinar' exact component={Webinar} />
            <Route path='/workshop' exact component={Workshop} />
            <Route path='/competition' exact component={Competition} />
            <Route path='/acara' exact component={Acara} />
            <Route path='/registrasicompetition' exact component={RegistCompetition} />
          </Switch>
        </ScrollToTop>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
