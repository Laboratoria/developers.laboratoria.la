import React from 'react';
import logo from '../img/logo.svg';
import Events from './Events';
import Resources from './Resources';
import Members from './Members';


const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    textAlign: 'center',
  },
  logo: {
    width: 200,
  },
  h1: {
    fontFamily: 'monospace',
  },
};


const App = props => (
  <div style={styles.root}>
    <header style={styles.header}>
      <img src={logo} style={styles.logo} alt="logo" />
      <h1 style={styles.h1}>&lt;developers&gt;</h1>
    </header>
    <Resources />
    <Events />
    <Members />
  </div>
);


export default App;
