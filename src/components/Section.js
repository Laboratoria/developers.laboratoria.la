import React from 'react';


const styles = {
  root: {
    // display: 'flex',
    // justifyContent: 'center',
    // borderTop: '1px solid #444',
    margin: '24px 0',
    padding: 20,
    textAlign: 'center',
  },
};


const Section = ({ style, children, ...props }) => (
  <section style={{ ...styles.root, ...(style || {}) }} {...props}>
    {children}
  </section>
);


export default Section;
