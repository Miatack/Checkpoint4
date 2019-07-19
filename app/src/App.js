import React from 'react';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import Header from './Component/Header'
import './App.css';
import Footer from './Component/Footer';
import Performance from './Component/Performance';
import Program from './Component/Program';
import Maps from './Component/Maps';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Performance} />
          <Route path="/Program/" component={Program} />
          <Route path="/Maps/" component={Maps} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
