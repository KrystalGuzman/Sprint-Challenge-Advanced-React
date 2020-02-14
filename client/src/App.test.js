import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test(`it has "Women's Soccer Players" text`, () => {
  const container = render(<App />);
  container.getByText(/Women's Soccer Players/i);
});

