import React, { useContext, useState } from 'react';
import StarwarsContext from '../context/StarwarsContext';

function Table() {
  const { planets } = useContext(StarwarsContext);
  const [buscaNome, setBuscaNome] = useState('');
  const [selected, setSelected] = useState({
    colunas: 'population',
    condicao: 'maior que',
    valor: 0,
  });
  const [selectedFilter, setSelectedFilter] = useState([]);

  // const planetsFilter = () => planets
  //   .filter((p) => p.name.toLowerCase().includes(buscaNome.toLowerCase()));
  // console.log(planets);

  const tratarDados = () => {
    // filtro por nome
    const filtraNome = planets
      .filter(({ name }) => name.toLowerCase().includes(buscaNome.toLowerCase()));

    const filtrarTudo = filtraNome.filter((nome) => {
      const filtroPlanetas = selectedFilter.map(({
        colunas, condicao, valor }) => {
        switch (condicao) {
        case 'maior que':
          return Number(nome[colunas]) > Number(valor);
        case 'menor que':
          return Number(nome[colunas]) < Number(valor);
        case 'igual a':
          return Number(nome[colunas]) === Number(valor);
        default:
          return true;
        }
      });
      return filtroPlanetas.every((el) => el);
    });
    return filtrarTudo;
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ buscaNome }
        onChange={ (event) => setBuscaNome(event.target.value) }
      />
      <br />
      <br />
      <select
        data-testid="column-filter"
        value={ selected.colunas }
        onChange={ (e) => setSelected({ ...selected, colunas: e.target.value }) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        value={ selected.condicao }
        onChange={ (e) => setSelected({ ...selected, condicao: e.target.value }) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        value={ selected.valor }
        onChange={ (e) => setSelected({ ...selected, valor: e.target.value }) }
      />

      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => setSelectedFilter([...selectedFilter, selected]) }
      >
        Filtrar
      </button>

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
