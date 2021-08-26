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
import RegistInfest from './components/pages/RegistInfest';

function App() {
  return (
    <div style={{ width: "100%", backgroundImage: "url(/background4.webp)" }}>
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
            <Route path='/registinfest' exact component={RegistInfest} />
          </Switch>
        </ScrollToTop>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
