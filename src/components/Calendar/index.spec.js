import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './';

describe('Calendar', () => {
  it('should ...', () => {
    const container = document.createElement('div');
    ReactDOM.render(<Calendar />, container);
    const el = container.children[0];
    expect(el.className).toBe('Calendar');
    // console.log(el);
  });
});
