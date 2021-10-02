import React from 'react';
import Home from '../pages/Home';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import userEvent from '@testing-library/user-event';

describe('Testa a página Home', () => {
  it('Testa se a página Home é renderizada em seu estado inicial', () => {
    renderWithRouter(<Home />);
    const title = screen.getByText(/welcome to trivia/i);
    expect(title).toBeInTheDocument;
  });

  it('Testa se a página é redirecioanada para a página start', () => {
    renderWithRouter(<Home />);
    const startLink = screen.getByRole('link', { name: '1' });
    userEvent.click(startLink);

    const title = screen.getByText(/question/i);
    expect(title).toBeDefined();
  });
});
