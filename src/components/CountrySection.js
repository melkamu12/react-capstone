import React from 'react';
import PropTypes from 'prop-types';
import GovermentalList from './GovermenList';

function CountrySection({ geonameId }) {
  return (
    <div>
      <GovermentalList geonameId={geonameId} />
    </div>
  );
}

CountrySection.propTypes = {
  geonameId: PropTypes.string.isRequired,
};

export default CountrySection;
