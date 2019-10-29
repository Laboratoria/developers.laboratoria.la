import React from 'react';
import ReactDOM from 'react-dom';
import Resources from './';

describe('Resources', () => {
  it('should ...', () => {
    const container = document.createElement('div');
    ReactDOM.render(<Resources />, container);
    const el = container.children[0];
    expect(el.className).toBe('Resources');
    // console.log(el);
  });
});
