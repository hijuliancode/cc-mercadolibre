import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { AudioOutlined, SearchOutlined } from '@ant-design/icons'
import Button from './Button'
import { useForm } from '../hooks'

const SearchBar = ({ type, voice }) => {
  console.log('SearchBar.jsx')
  const history = useHistory()

  const [ formValues, handleInputChange ] = useForm({
    search: ''
  })
  
  const { search } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push({
      pathname: '/items/',
      search: `?search=${search}`
    })
  }

  return (
    <form
      className={ `search-bar search-bar--${type} ${voice && 'search-bar--voice'}` }
      onSubmit={ handleSubmit}  >
        <h1>{search}</h1>
      <Button
        className="search-bar__btn"
        type="submit"
        click={ handleSubmit }
        styleBtn="in-form"
      >
        <SearchOutlined />
      </Button>
      <input
        type="text"
        name="search"
        placeholder="Buscar productos, marcas y más..."
        autoComplete="off"
        value={ search }
        onChange={ handleInputChange }
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