import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { BsMicFill } from 'react-icons/bs';
import { IoChevronBack } from 'react-icons/io5';
import './navBar.css';

const Header = () => (
  <>
    <header className="">
      <NavLink to="/">
        <div className="see-all-container">
          <IoChevronBack className="arrow-left" />
          <p>SEE ALL</p>
        </div>
      </NavLink>
      <h1 className="main-title">Goverment List</h1>
      <div className="icons-container">
        <BsMicFill />
        <FiSettings />
      </div>
    </header>
  </>
);

export default Header;
