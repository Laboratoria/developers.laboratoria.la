import React from 'react';

const SimpleIcon = ({ profile }) => (
  <img
    className="SimpleIcon"
    src={`https://simpleicons.org/icons/${profile.provider}.svg`}
    alt={profile.provider}
  />
);

export default SimpleIcon;
