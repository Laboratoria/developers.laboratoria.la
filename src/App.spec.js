import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const container = document.createElement('div');
    ReactDOM.render(<App members={[]} />, container);
    const el = container.children[0];
    expect(el.className).toBe('App');
    expect(el.children.length).toBe(5);
    expect(el.children[0].tagName).toBe('HEADER');
    expect(el.children[1].className).toBe('Intro');
    expect(el.children[2].className).toBe('Calendar');
    expect(el.children[3].className).toBe('Resources');
    expect(el.children[4].className).toBe('Members');
  });
});
