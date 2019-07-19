import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Component/Header'
import './App.css';
import Footer from './Component/Footer';
import Performance from './Component/Performance'

function App() {
  return (
    <div className="App">
      <Header />
      <Performance />
      {/* <Switch>
        <Route exact path="/" component={Performance} />
        <Route path="/Program/" component={Program} />
        <Route path="/Location/" component={Location} />
        <Route path="/Shop/" component={Shop} />
        <Route path="/About/" component={About} />
      </Switch> */}
      <Footer />
    </div>
  );
}

export default App;
