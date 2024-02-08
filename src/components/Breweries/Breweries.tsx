import { useState } from 'react'
import { Link } from 'react-router-dom'

import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import useFetch from '../../hooks/useFetch'
import { Brewery } from '../../misc/type'
import './Breweries.css'

const Breweries = () => {
  const url = 'https://api.openbrewerydb.org/v1/breweries'

  const [searchValue, setSearchValue] = useState('')
  const { data, loading } = useFetch<Brewery>(url)

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <TextField
        label="Search..."
        type="text"
        size="small"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: 'white' }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <CloseIcon
                onClick={() => setSearchValue('')}
                fontSize="small"
                sx={{ color: 'white', cursor: 'pointer', display: searchValue.length <= 0 ? 'none' : 'block' }}
              />
            </InputAdornment>
          )
        }}
        sx={{
          'position': 'absolute',
          'right': '10px',
          'top': '10px',
          '& label': { color: 'white' },
          '& input': { color: 'white' },
          '& label.Mui-focused': { color: 'WHITE' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white'
            },
            '&:hover fieldset': {
              borderColor: '#bdc3c7'
            },
            '&.Mui-focused fieldset': {
              borderColor: '#bdc3c7'
            }
          }
        }}
      />
      <div className="breweries__container">
        {data.map((data) => {
          console.log(data)
          return (
            <div key={data.id} className="breweries__container__brewery">
              <div>
                <span className="breweries__container__brewery-property">Name: </span>
                {data.name}
              </div>
              <div>
                <span className="breweries__container__brewery-property">Type: </span>
                {data.brewery_type}
              </div>
              <div>
                <span className="breweries__container__brewery-property">Address: </span>
                {data.address_1}
              </div>
              <div>
                <span className="breweries__container__brewery-property">Phone: </span>
                {data.phone}
              </div>
              <div>
                <span
                  className="
              "
                >
                  Website:
                </span>
                {data.website_url}
              </div>
              <Link to={`/breweries/${data.id}`}>
                <button>
                  <span>Detail</span>
                </button>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Breweries
