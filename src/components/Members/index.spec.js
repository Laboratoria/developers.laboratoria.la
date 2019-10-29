import React from 'react';
import ReactDOM from 'react-dom';
import Members from './';

describe('Members', () => {
  it('should ...', () => {
    const container = document.createElement('div');
    ReactDOM.render(<Members members={[]} />, container);
    const el = container.children[0];
    expect(el.className).toBe('Members');
    // console.log(el);
  });
});
