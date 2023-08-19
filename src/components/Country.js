import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import getFlagImageUrl from './Flags';

function Country({
  geonameId,
  countryCode,
  countryName,
  currencyCode,
  areaInSqKm,
  continentName,
  population,
  index,
}) {
  const differentStyle = index % 4 === 1 || index % 4 === 2;
  const style = differentStyle ? 'bg-1' : 'bg-2';

  const flagImageUrl = getFlagImageUrl(countryCode);

  const countryLink = (
    <div className="information">
      <div className="country-info">
        <img className="country-image" src={flagImageUrl} alt={countryName} />
        <p className="country-name">{countryName}</p>
        <p className="currency-code">{currencyCode}</p>
      </div>
      <div />
    </div>
  );

  const countryDetails = (
    <div className="country-details">
      <NavLink className="arrowLink" to={`country/${geonameId}`}>
        <BsFillArrowRightCircleFill />
      </NavLink>
      <p className="area">
        Sureface Area:
        {areaInSqKm}
        km²
      </p>
      <p className="continent">
        Continent:
        {continentName}
      </p>
      <p className="population">
        Population:
        {population}
      </p>
    </div>
  );

  return (
    <li>
      <div className={`country-card ${style}`}>
        {countryLink}
        {countryDetails}
      </div>
    </li>
  );
}

Country.propTypes = {
  countryCode: PropTypes.string,
  countryName: PropTypes.string.isRequired,
  currencyCode: PropTypes.string.isRequired,
  areaInSqKm: PropTypes.string.isRequired,
  continentName: PropTypes.string.isRequired,
  population: PropTypes.string,
  geonameId: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

Country.defaultProps = {
  countryCode: 0,
  population: 'not specificed',
};

export { Country, getFlagImageUrl };
