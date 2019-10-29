import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './';

describe('Intro', () => {
  it('should ...', () => {
    const container = document.createElement('div');
    ReactDOM.render(<Intro />, container);
    const el = container.children[0];
    expect(el.className).toBe('Intro');
    // console.log(el);
  });
});
