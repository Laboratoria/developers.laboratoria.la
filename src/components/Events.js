import React from 'react';
import Section from './Section';


const styles = {
  container: {
    maxWidth: 500,
    margin: 'auto',
    textAlign: 'left',
  },
};


const Events = props => (
  <Section>
    <h2>Próximo hangout</h2>
    <div style={styles.container}>
      <h3>
        <a href="#">
          TBD
        </a>
      </h3>
      <ul>
        <li>Agenda por confirmar</li>
      </ul>
    </div>
  </Section>
);


export default Events;
