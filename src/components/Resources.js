import React from 'react';
import Section from './Section';

const profiles = [
  {
    provider: 'github',
    url: 'https://github.com/Laboratoria/developers',
    // color: '#181717',
    color: '#f0f0f0',
  },
  {
    provider: 'slack',
    url: 'https://laboratoriala.slack.com/messages/C7TE6F4G7/',
    color: '#56B68B',
  },
];


const SimpleIcon = ({ profile }) => (
  <img
    style={{ width: 32, backgroundColor: profile.color, padding: 8 }}
    src={`https://simpleicons.org/icons/${profile.provider}.svg`}
    alt={profile.provider}
  />
);


const Resources = props => (
  <Section>
    <h2>Dónde encontrarnos</h2>
    {profiles.map(profile => (
      <a key={profile.url} href={profile.url} target="_blank">
        <SimpleIcon profile={profile} />
      </a>
    ))}
  </Section>
);


export default Resources;
