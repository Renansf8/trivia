import React from 'react';
import Home from '../pages/Home';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';

describe('Testa a página Home', () => {
  it('Testa se a página Home é renderizada em seu estado inicial', () => {
    renderWithRouter(<Home />);
    const title = screen.getByText(/welcome to trivia/i);
    expect(title).toBeInTheDocument();

    const button1 = screen.getByRole('link', { name: '1' });
    expect(button1).toBeInTheDocument();
  });

  it('Testa se a página contém 5 botões', () => {
    renderWithRouter(<Home />);
    const allButtons = screen.getAllByRole('button');
    expect(allButtons).toHaveLength(5);
  });

  it('Testa a rota da página Start', () => {
    const { history } = renderWithRouter(<Home />);

    const button1 = screen.getByRole('link', { name: '1' });
    userEvent.click(button1);

    const { pathname } = history.location;
    expect(pathname).toBe('/start');
  });
});
