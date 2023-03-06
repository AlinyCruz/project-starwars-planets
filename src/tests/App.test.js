import React from 'react';
import App from '../App';
import { render, screen, act, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import dataMock from './helpers/dataMock';


describe('Testa o componente Table', () => {

  beforeEach(() => {
    jest.spyOn(global, 'fetch')
      .mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(dataMock),
    }));
  });

  afterEach(cleanup);

  it('Testa o filtro do nome', async () => {
    await act( async () => {
      render(<App />);
    });

    const planets = dataMock.results;
    for(const planetIndex in planets){
      const name = await screen.findByText(planets[planetIndex].name)
      expect(name).toBeInTheDocument();
    }
    const inputNome =  await screen.findByTestId('name-filter');
    const botaoFiltrar = await screen.findByTestId('button-filter');

    userEvent.type(inputNome, 'Tattoine');
    userEvent.click(botaoFiltrar);

    const tabela = screen.getByRole('table');
    expect(tabela).toBeInTheDocument();

    const name = await screen.findByRole('columnheader', {  name: /name/i})
    const rotation = await screen.findByRole('columnheader', { name: /rotation_period/i });
    const orbital = await screen.findByRole('columnheader', { name: /orbital_period/i });
    const diameter = await screen.findByRole('columnheader', { name: /diameter/i });
    const climete = await screen.findByRole('columnheader', { name: /climate/i });
    const gravity = await screen.findByRole('columnheader', { name: /gravity/i });
    const terrain = await screen.findByRole('columnheader', { name: /terrain/i });
    const surface = await screen.findByRole('columnheader', { name: /surface_water/i });
    const population = await screen.findByRole('columnheader', { name: /population/i });
    const films = await screen.findByRole('columnheader', { name: /films/i });
    const created = await screen.findByRole('columnheader', { name: /created/i });
    const edited = await screen.findByRole('columnheader', { name: /edited/i });
    const url = await screen.findByRole('columnheader', { name: /url/i });

    expect(name).toBeInTheDocument()
    expect(rotation).toBeInTheDocument()
    expect(orbital).toBeInTheDocument()
    expect(diameter).toBeInTheDocument()
    expect(climete).toBeInTheDocument()
    expect(gravity).toBeInTheDocument()
    expect(terrain).toBeInTheDocument()
    expect(surface).toBeInTheDocument()
    expect(population).toBeInTheDocument()
    expect(films).toBeInTheDocument()
    expect(created).toBeInTheDocument()
    expect(edited).toBeInTheDocument()
    expect(url).toBeInTheDocument()

    const todaTabela = await screen.findAllByRole('row');
    expect(todaTabela.length).toBe(1);

  });

  it('Testa o filtro de selecao, maior que', async () => {
    act(() => {
      render(<App />);
    })

    const inputNumero = await screen.findByTestId('value-filter');
    const selecaoColuna = await screen.findByTestId('column-filter');
    const selecaoComparacao = await screen.findByTestId('comparison-filter');
    const botaoFiltro = await screen.findByTestId('button-filter');

    userEvent.type(inputNumero, '2000');
    userEvent.selectOptions(selecaoColuna, 'population');
    userEvent.selectOptions(selecaoComparacao, 'maior que');
    userEvent.click(botaoFiltro);

    const tabela = await screen.findByRole('table');
    expect(tabela).toBeInTheDocument();

    const name = await screen.findByRole('columnheader', {  name: /name/i})
    const rotation = await screen.findByRole('columnheader', { name: /rotation_period/i });
    const orbital = await screen.findByRole('columnheader', { name: /orbital_period/i });
    const diameter = await screen.findByRole('columnheader', { name: /diameter/i });
    const climete = await screen.findByRole('columnheader', { name: /climate/i });
    const gravity = await screen.findByRole('columnheader', { name: /gravity/i });
    const terrain = await screen.findByRole('columnheader', { name: /terrain/i });
    const surface = await screen.findByRole('columnheader', { name: /surface_water/i });
    const population = await screen.findByRole('columnheader', { name: /population/i });
    const films = await screen.findByRole('columnheader', { name: /films/i });
    const created = await screen.findByRole('columnheader', { name: /created/i });
    const edited = await screen.findByRole('columnheader', { name: /edited/i });
    const url = await screen.findByRole('columnheader', { name: /url/i });

    expect(name).toBeInTheDocument()
    expect(rotation).toBeInTheDocument()
    expect(orbital).toBeInTheDocument()
    expect(diameter).toBeInTheDocument()
    expect(climete).toBeInTheDocument()
    expect(gravity).toBeInTheDocument()
    expect(terrain).toBeInTheDocument()
    expect(surface).toBeInTheDocument()
    expect(population).toBeInTheDocument()
    expect(films).toBeInTheDocument()
    expect(created).toBeInTheDocument()
    expect(edited).toBeInTheDocument()
    expect(url).toBeInTheDocument()

    const todaTabela = await screen.findAllByRole('row');
    expect(todaTabela.length).toBe(8);
  });

  it('Testa o filtro de selecao, menor que', async () => {
    act(() => {
      render(<App />)
    })

    const inputNumero = await screen.findByTestId('value-filter');
    const selecaoColuna = await screen.findByTestId('column-filter');
    const selecaoComparacao = await screen.findByTestId('comparison-filter');
    const botaoFiltro = await screen.findByTestId('button-filter');

    userEvent.type(inputNumero, '2000');
    userEvent.selectOptions(selecaoColuna, 'population');
    userEvent.selectOptions(selecaoComparacao, 'menor que');
    userEvent.click(botaoFiltro);


    const tabela = await screen.findByRole('table');
    expect(tabela).toBeInTheDocument();

    const name = await screen.findByRole('columnheader', {  name: /name/i})
    const rotation = await screen.findByRole('columnheader', { name: /rotation_period/i });
    const orbital = await screen.findByRole('columnheader', { name: /orbital_period/i });
    const diameter = await screen.findByRole('columnheader', { name: /diameter/i });
    const climete = await screen.findByRole('columnheader', { name: /climate/i });
    const gravity = await screen.findByRole('columnheader', { name: /gravity/i });
    const terrain = await screen.findByRole('columnheader', { name: /terrain/i });
    const surface = await screen.findByRole('columnheader', { name: /surface_water/i });
    const population = await screen.findByRole('columnheader', { name: /population/i });
    const films = await screen.findByRole('columnheader', { name: /films/i });
    const created = await screen.findByRole('columnheader', { name: /created/i });
    const edited = await screen.findByRole('columnheader', { name: /edited/i });
    const url = await screen.findByRole('columnheader', { name: /url/i });

    expect(name).toBeInTheDocument()
    expect(rotation).toBeInTheDocument()
    expect(orbital).toBeInTheDocument()
    expect(diameter).toBeInTheDocument()
    expect(climete).toBeInTheDocument()
    expect(gravity).toBeInTheDocument()
    expect(terrain).toBeInTheDocument()
    expect(surface).toBeInTheDocument()
    expect(population).toBeInTheDocument()
    expect(films).toBeInTheDocument()
    expect(created).toBeInTheDocument()
    expect(edited).toBeInTheDocument()
    expect(url).toBeInTheDocument()

    const todaTabela = await screen.findAllByRole('row');
    expect(todaTabela.length).toBe(2);
  })

  it('Testa o filtro de selecao, igual a ', async () => {
    act(() => {
      render(<App />)
    })

    const inputNumero = await screen.findByTestId('value-filter');
    const selecaoColuna = await screen.findByTestId('column-filter');
    const selecaoComparacao = await screen.findByTestId('comparison-filter');
    const botaoFiltro = await screen.findByTestId('button-filter');

    userEvent.type(inputNumero, '2000');
    userEvent.selectOptions(selecaoColuna, 'population');
    userEvent.selectOptions(selecaoComparacao, 'igual a');
    userEvent.click(botaoFiltro);

    const tabela = await screen.findByRole('table');
    expect(tabela).toBeInTheDocument();

    const name = await screen.findByRole('columnheader', {  name: /name/i})
    const rotation = await screen.findByRole('columnheader', { name: /rotation_period/i });
    const orbital = await screen.findByRole('columnheader', { name: /orbital_period/i });
    const diameter = await screen.findByRole('columnheader', { name: /diameter/i });
    const climete = await screen.findByRole('columnheader', { name: /climate/i });
    const gravity = await screen.findByRole('columnheader', { name: /gravity/i });
    const terrain = await screen.findByRole('columnheader', { name: /terrain/i });
    const surface = await screen.findByRole('columnheader', { name: /surface_water/i });
    const population = await screen.findByRole('columnheader', { name: /population/i });
    const films = await screen.findByRole('columnheader', { name: /films/i });
    const created = await screen.findByRole('columnheader', { name: /created/i });
    const edited = await screen.findByRole('columnheader', { name: /edited/i });
    const url = await screen.findByRole('columnheader', { name: /url/i });

    expect(name).toBeInTheDocument()
    expect(rotation).toBeInTheDocument()
    expect(orbital).toBeInTheDocument()
    expect(diameter).toBeInTheDocument()
    expect(climete).toBeInTheDocument()
    expect(gravity).toBeInTheDocument()
    expect(terrain).toBeInTheDocument()
    expect(surface).toBeInTheDocument()
    expect(population).toBeInTheDocument()
    expect(films).toBeInTheDocument()
    expect(created).toBeInTheDocument()
    expect(edited).toBeInTheDocument()
    expect(url).toBeInTheDocument()

    const todaTabela = await screen.findAllByRole('row');
    expect(todaTabela.length).toBe(1);
  });
});
