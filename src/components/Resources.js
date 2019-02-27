import React from 'react';
import Section from './Section';

const profiles = [
  {
    provider: 'github',
    url: 'https://github.com/Laboratoria/developers.laboratoria.la',
    // color: '#181717',
    // color: '#f0f0f0',
  },
  {
    provider: 'slack',
    url: 'https://laboratoriala.slack.com/messages/C7TE6F4G7/',
    // color: '#56B68B',
  },
  {
    provider: 'discourse',
    url: 'http://community.laboratoria.la/',
    // color: '#ffffff',
  },
  {
    provider: 'medium',
    url: 'https://medium.com/laboratoria-developers',
    // color: '#12100E',
  },
  {
    provider: 'youtube',
    url: 'https://www.youtube.com/channel/UCuWmQYAvytwSl6tqjOxV5Ow',
  }
];


const SimpleIcon = ({ profile }) => (
  <img
    style={{ width: 32, backgroundColor: profile.color, padding: 8 }}
    src={`https://simpleicons.org/icons/${profile.provider}.svg`}
    alt={profile.provider}
  />
);


const Resources = props => (
  <Section className="resources">
    <h2>Recursos</h2>
    {profiles.map(profile => (
      <a key={profile.url} href={profile.url} target="_blank" style={{ display: 'inline-block', width: 48, height: 48 }}>
        <SimpleIcon profile={profile} />
      </a>
    ))}
  </Section>
);


export default Resources;
