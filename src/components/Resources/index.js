import React from 'react';
import SimpleIcon from './SimpleIcon';
import Emoji from '../Emoji';
import './index.css';


const profiles = [
  {
    provider: 'github',
    url: 'https://github.com/Laboratoria/developers.laboratoria.la',
  },
  {
    provider: 'slack',
    url: 'https://laboratoriala.slack.com/messages/C7TE6F4G7/',
  },
  {
    provider: 'discourse',
    url: 'http://community.laboratoria.la/',
  },
  {
    provider: 'medium',
    url: 'https://medium.com/laboratoria-developers',
  },
  {
    provider: 'youtube',
    url: 'https://www.youtube.com/channel/UCuWmQYAvytwSl6tqjOxV5Ow',
  }
];


const Resources = props => (
  <section className="Resources">
    <h2><Emoji symbol={'📚'} /> Recursos</h2>
    {profiles.map(profile => (
      <a
        key={profile.url}
        href={profile.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SimpleIcon profile={profile} />
      </a>
    ))}
  </section>
);


export default Resources;
