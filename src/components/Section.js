import React from 'react';


const styles = {
  root: {
    // display: 'flex',
    // justifyContent: 'center',
    borderTop: '1px solid #444',
    margin: '24px 0',
    textAlign: 'center',
  },
};


const Section = props => (
  <section style={{ ...styles.root, ...(props.style || {}) }}>
    {props.children}
  </section>
);


export default Section;
