import React from 'react';
import ReactDOM from 'react-dom';
import PlayerCard from './PlayerCard';
import { render } from '@testing-library/react';



it('PlayerCard renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PlayerCard />, div);
  });