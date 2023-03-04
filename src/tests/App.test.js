import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import mockFetch from '../../cypress/mocks/fetch';
// import StarwarsProvider from '../context/StarwarsProvider';

describe('Testa o componente Table', () => {
  beforeEach(() => {
    global.fetch = jest.fn(mockFetch)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Testa se os componentes renderizam na tela', () => {
    render(
      <App />
    )
    const inputName = screen.getByRole('textbox')
    expect(inputName).toBeInTheDocument();

    // const inputNumber = screen.getByRole('spinbutton')
    // expect(inputNumber).toBeInTheDocument();

    // const buttonFiltrar = screen.getByRole('button', {  name: /filtrar/i})
    // expect(buttonFiltrar).toBeInTheDocument();

    // const name = screen.getByRole('columnheader', {  name: /name/i})
    // expect(name).toBeInTheDocument();


  });
});
