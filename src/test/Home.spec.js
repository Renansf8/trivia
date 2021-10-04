import React from 'react';
import Home from '../pages/Home';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Testa a página Home', () => {
  it('Testa se a página Home é renderizada em seu estado inicial', () => {
    renderWithRouter(<Home />);
    const title = screen.getByText(/welcome to trivia/i);
    expect(title).toBeInTheDocument;
  });
});
