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
    <h2>Próximo evento</h2>
    <div style={styles.container}>
      <h3>
        <a href="#">
          10 Nov 2017 - Laboratoria Developers Meetup Nov 2017 @ Laboratoria Lima
        </a>
      </h3>
      <ul>
        <li>4pm - Bienvenida</li>
        <li>
          4:15pm - Desde la currícula en GitHub al LMS pasando por el parser y
          algún dolor de cabeza (<a href="https://github.com/lupomontero">@lupomontero</a> / <a href="https://github.com/ivandevp">@ivandevp</a>)
        </li>
        <li>
          5pm - Arquitectura de productos en Laboratoria <a href="https://github.com/giancorzo">@giancorzo</a>
        </li>
        <li>
          5:30pm - tbd
        </li>
        <li>6pm - ... / BeerJS (en algún lugar cerca)</li>
      </ul>
    </div>
  </Section>
);


export default Events;
