import React from 'react';
import Emoji from '../Emoji';
import './index.css';


const Calendar = () => (
  <section className="Calendar">
    <h2><Emoji symbol={'💬'} /> Próximo hangout</h2>
    <div>
      <h3>
        <a href="#">
          15 de Noviembre 2019
        </a>
      </h3>
      <p>
        La agenda todavía está por confirmar. En estos momentos estamos
        aceptando propuestas de <em>charla</em> si alguien se anima a compartir.
        Para enviar sus propuestas escriban directamente a&nbsp;
        <a href="https://github.com/bouli">@bouli</a> o&nbsp;
        <a href="https://github.com/lupomontero">@lupomontero</a> a través del
        canal&nbsp;
        <a href="https://laboratoriala.slack.com/messages/C7TE6F4G7/">
          #equipo-developers en Slack
        </a>.
      </p>
    </div>
  </section>
);


export default Calendar;
