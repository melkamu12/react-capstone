import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import CountriesList from '../components/CountriesList';
import StatusType from '../components/StatusTypes';

const mockStore = configureStore([]);

test('CountriesList component snapshot', () => {
  const initialState = {
    countries: {
      countriesArr: [
        {
          geonameId: 1,
          countryName: 'Andorra',
          countryCode: 'AD',
          currencyCode: 'EUR',
          areaInSqKm: '468.0',
          continentName: 'EU',
          population: '77006',
        },
      ],
      searchString: 'United',
      status: StatusType.SUCCESS,
    },
  };
  const store = mockStore(initialState);

  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter>
          <CountriesList />
        </MemoryRouter>
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
