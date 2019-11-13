import React from 'react';
import Emoji from '../Emoji';
import './index.css';


const Calendar = () => (
  <section className="Calendar">
    <h2><Emoji symbol={'💬'} /> Próximo hangout</h2>
    <div>
      <h3>
        <a href="https://calendar.google.com/calendar/r/week/2019/11/15?eid=NXQ0MjhjOGllaTdzanA2YjdnOHR2dHQ3YmMgbGFib3JhdG9yaWEubGFfdmhyMmowZ2VycTJvaWRmZm0xNGZvM3R1aW9AZw&ctz=America/Lima&sf=true">
          15 de Noviembre 2019 14:30h (Lima)
        </a>
      </h3>
      <ul>
        <li>14:00 - 14:10: Bienvenida / Intro (<a href="https://github.com/bouli">@bouli</a> / <a href="https://github.com/lupomontero">@lupomontero</a>)</li>
        <li>14:10 - 14:35: Cómo no ir de A -&gt; B, Grafos (<a href="https://github.com/lizzie136">@lizzie136</a>)</li>
        <li>14:35 - 15:00: Don't worry yourself about DRY (<a href="https://github.com/raulingg">@raulingg</a>)</li>
        <li>15:00 - 15:25: Experimento de backend en Bootcamp (<a href="https://github.com/merunga">@merunga</a>)</li>
        <li>15:25 - 15:30: Cierre</li>
      </ul>
      {/*
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
      */}
    </div>
  </section>
);


export default Calendar;
