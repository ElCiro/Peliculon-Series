import React from 'react';
import './components.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDragon } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <div className="top-section d-flex justify-content-center align-items-center">
    <h3 className='titulo'>
      <FontAwesomeIcon icon={faDragon} /> {/* Ícono de dragón al inicio */}
      ElDragon2024
      <FontAwesomeIcon icon={faDragon} /> {/* Ícono de dragón al final */}
    </h3>
  </div>
);

export default Header;
