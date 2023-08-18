import { Outlet, useLocation } from 'react-router-dom';
import Header from './NavBar';
import SearchForm from './SearchForm';

const Layout = () => {
  const location = useLocation();

  const isSpecificCountryRoute = location.pathname.includes('/country/');

  return (
    <div className="layout">
      <Header />
      {!isSpecificCountryRoute && <SearchForm />}
      <Outlet />
    </div>
  );
};

export default Layout;
