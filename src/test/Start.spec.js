import React from 'react';
import Start from '../pages/Start';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Testa a página Start', () => {
  it('Testa se a página Start é renderizada em seu estado inicial', () => {
    renderWithRouter(<Start />);
    const startTitle = screen.getByText(/are you/i);
    expect(startTitle).toBeDefined();

    const buttonStart = screen.getByRole('button', { name: 'Start' });
    expect(buttonStart).toBeDefined();

    const buttonCancel = screen.getByRole('button', { name: 'Cancel' });
    expect(buttonCancel).toBeDefined();
  });

  it('Testa a rota da página Questions', () => {
    const { history } = renderWithRouter(<Start />);

    history.push('/questions');
    const pathName = history.location.pathname;
    expect(pathName).toBe('/questions');
  });
});
