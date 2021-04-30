import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { AudioOutlined, SearchOutlined } from '@ant-design/icons';
import Button from './Button';
import { useForm } from '../hooks';

const SearchBar = ({ className, type, voice }) => {
  console.log('SearchBar.jsx');
  const history = useHistory();
  const [{ search }, handleInputChange] = useForm({ search: '' });
  const [btnactive, setBtnActive] = useState(true);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({
      pathname: '/items/',
      search: `?search=${search}`,
    });
  };

  const handleFocus = (e) => {
    const valueLenght = inputRef.current.value.length;
    handleInputChange(e);
    if (valueLenght > 3) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
  };

  return (
    <div
      className={`search-bar search-bar--${type} ${
        voice && 'search-bar--voice'
      } ${className}`}
    >
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          name="search"
          placeholder="Buscar productos, marcas y más..."
          autoComplete="off"
          value={search}
          onChange={handleFocus}
        />
        <Button
          className={`search-bar__btn ${btnactive && 'active'}`.trim()}
          type="submit"
          click={handleSubmit}
          styleBtn="in-form"
        >
          <SearchOutlined />
        </Button>
        {voice && (
          <Button
            className="search-bar__btn voice-btn"
            type="submit"
            styleBtn="in-form"
          >
            <AudioOutlined />
          </Button>
        )}
      </form>
    </div>
  );
};

SearchBar.defaultProps = {
  className: '',
  type: 'rounded',
  voice: false,
};

SearchBar.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['rounded', 'borderless']),
  voice: PropTypes.bool,
};

export default SearchBar;
