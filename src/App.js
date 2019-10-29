import React from 'react';
import logo from './img/logo.png';
import Intro from './components/Intro';
import Calendar from './components/Calendar';
import Resources from './components/Resources';
import Members from './components/Members';
import './App.css';


const App = ({ members }) => (
  <main className="App">
    <header>
      <img src={logo} alt="Laboratoria Developers Logo" />
      <h1>Developers</h1>
    </header>
    <Intro />
    <Calendar />
    <Resources />
    <Members members={members} />
  </main>
);


export default App;
