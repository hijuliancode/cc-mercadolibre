import React from 'react'
import PropTypes from 'prop-types'
import { AudioOutlined, SearchOutlined } from '@ant-design/icons'
import Button from './Button'

const submitForm = (e) => {
  e.preventDefault()
  console.log('submitForm')
}

const SearchBar = ({ type, voice }) => {
  return (
    <form className={`search-bar search-bar--${type} ${voice && 'search-bar--voice'}`} onSubmit={submitForm} >
      <Button
        className="search-bar__btn"
        type="submit"
        click={submitForm}
        styleBtn="in-form"
      >
        <SearchOutlined />
      </Button>
      <input
        type="search"
        placeholder="Buscar productos, marcas y más..."
      />
      { 
        voice && (
          <Button
            className="search-bar__btn"
            type="submit"
            styleBtn="form"
          >
            <AudioOutlined />
          </Button>
        )
      }
    </form>
  )
}

SearchBar.propTypes = {
  type: PropTypes.oneOf(['fill', 'outline']).isRequired
}

export default SearchBar