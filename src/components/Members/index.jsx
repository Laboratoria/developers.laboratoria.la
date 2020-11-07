import { useState } from 'react';
import Member from './Member';
import Emoji from '../Emoji';
import './index.css';

const Members = ({ members }) => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="Members">
      <h2><Emoji symbol={'👪'} /> Quiénes somos?</h2>
      <div>
        {members && members.map(member => (
          <Member
            key={member}
            member={member}
            selected={member === selected}
            setSelected={setSelected}
          />
        ))}
      </div>
    </section>
  );
};

export default Members;
