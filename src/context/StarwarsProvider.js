import PropTypes from 'prop-types';
// import planetsAPI from '../Services/StarwarsAPI';
import { useEffect, useMemo, useState } from 'react';
import StarwarsContext from './StarwarsContext';

function StarwarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const planet = async () => {
    const response = await fetch('https://swapi.dev/api/planets');
    const { results } = await response.json();
    setPlanets(results);
  };
  useEffect(() => {
    planet();
  }, []);

  const context = useMemo(() => ({
    planets,
  }), [planets]);

  return (
    <StarwarsContext.Provider value={ context }>
      { children }
    </StarwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default StarwarsProvider;
