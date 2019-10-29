import React from 'react';
import ReactDOM from 'react-dom';
import Emoji from './';

describe('Emoji', () => {
  it('should ...', () => {
    const container = document.createElement('div');
    ReactDOM.render(<Emoji />, container);
    const el = container.children[0];
    expect(el instanceof HTMLSpanElement).toBe(true);
    // console.log(el);
  });
});
