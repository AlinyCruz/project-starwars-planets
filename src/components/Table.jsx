import React, { useContext, useState } from 'react';
import StarwarsContext from '../context/StarwarsContext';

function Table() {
  const { planets } = useContext(StarwarsContext);
  const [buscaNome, setBuscaNome] = useState('');
  const [selecao, setselecao] = useState({
    colunas: 'population',
    condicao: 'maior que',
    valor: 0,
  });
  const [selecaoFiltro, setSelecaoFiltro] = useState([]);

  const tratarDados = () => {
    const filtraNome = planets
      .filter(({ name }) => name.toLowerCase().includes(buscaNome.toLowerCase()));
      // console.log(filtraNome);

    const filtrarTudo = filtraNome.filter((nome) => {
      const filtroPlanetas = selecaoFiltro.map(({
        colunas, condicao, valor }) => {
        if (condicao === 'maior que') {
          return Number(nome[colunas]) > Number(valor);
        } if (condicao === 'menor que') {
          return Number(nome[colunas]) < Number(valor);
        } if (condicao === 'igual a') {
          return Number(nome[colunas]) === Number(valor);
        }
        return true;
      });
      return filtroPlanetas.every((planeta) => planeta);
    });
    return filtrarTudo;
  };

  const nomeColunas = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];

  const naoRetepeSelecao = () => nomeColunas.filter((coluna) => !selecaoFiltro
    .find((coluna2) => coluna === coluna2.colunas));
  // console.log(naoRetepeSelecao());

  const removeFiltro = (param) => {
    const upDate = selecaoFiltro.filter((filtro) => filtro.colunas !== param);
    setSelecaoFiltro(upDate);
  };

  return (
    <div>
      <h1>
        Star Wars Planets
      </h1>
      <input
        type="text"
        className="inputPlanet"
        placeholder="Digite o nome do planeta"
        data-testid="name-filter"
        value={ buscaNome }
        onChange={ (event) => setBuscaNome(event.target.value) }
      />
      <br />
      <br />
      <select
        data-testid="column-filter"
        value={ selecao.colunas }
        onChange={ (e) => setselecao({ ...selecao, colunas: e.target.value }) }
      >
        {
          naoRetepeSelecao().map((coluna) => (
            <option key={ coluna } value={ coluna }>{ coluna }</option>
          ))
        }
      </select>

      <select
        data-testid="comparison-filter"
        value={ selecao.condicao }
        onChange={ (e) => setselecao({ ...selecao, condicao: e.target.value }) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        className="inputNumber"
        value={ selecao.valor }
        onChange={ (e) => setselecao({ ...selecao, valor: e.target.value }) }
      />

      <button
        data-testid="button-filter"
        className="botaoFiltrar"
        type="button"
        onClick={ () => {
          setSelecaoFiltro([...selecaoFiltro, selecao]);
          setselecao({
            colunas: 'population',
            condicao: 'maior que',
            valor: 0,
          });
        } }
      >
        Filtrar
      </button>

      <button
        data-testid="button-remove-filters"
        className="botaoRemoverFiltros"
        onClick={ (() => setSelecaoFiltro([])) }
      >
        Remover todas filtragens
      </button>
      {
        selecaoFiltro.map((userSelecao, index) => (
          <div key={ index } className="spanFiltro" data-testid="filter">
            <span>
              {userSelecao.colunas}
              {' '}
              {userSelecao.condicao}
              {' '}
              {userSelecao.valor}
            </span>
            <button
              onClick={ () => removeFiltro(userSelecao.colunas) }
            >
              X
            </button>
          </div>
        ))
      }
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          { tratarDados().map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
