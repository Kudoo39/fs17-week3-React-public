import { useState } from 'react'
import { Link } from 'react-router-dom'

import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import useFetch from '../../hooks/useFetch'
import { Brewery } from '../../misc/type'
import CircularProgress from '@mui/material/CircularProgress/CircularProgress'
import './Breweries.css'

const Breweries = () => {
  const url = 'https://api.openbrewerydb.org/v1/breweries'

  const [searchValue, setSearchValue] = useState('')
  const { data, loading } = useFetch<Brewery>(url)

  if (loading) {
    return <CircularProgress />
  }

  const newData = data.filter((brewery) => brewery.name.toLowerCase().includes(searchValue.toLowerCase()))

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
              <SearchIcon sx={{ color: 'black' }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <CloseIcon
                onClick={() => setSearchValue('')}
                fontSize="small"
                sx={{ color: 'black', cursor: 'pointer', display: searchValue.length <= 0 ? 'none' : 'block' }}
              />
            </InputAdornment>
          )
        }}
        sx={{
          'position': 'absolute',
          'right': '10px',
          'top': '10px',
          '& label': { color: 'black' },
          '& input': { color: 'black' },
          '& label.Mui-focused': { color: 'black' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'black'
            },
            '&:hover fieldset': {
              borderColor: 'black'
            },
            '&.Mui-focused fieldset': {
              borderColor: 'black'
            }
          }
        }}
      />
      <div className="breweries__title">List of breweries</div>
      {newData.length === 0 ? (
        <h2 style={{ padding: '40px' }}>No breweries can be found!!</h2>
      ) : (
        <div className="breweries__container">
          {newData.map((brewery) => (
            <div key={brewery.id} className="breweries__container__brewery">
              <div>
                <span className="breweries__container__brewery-property">Name: </span>
                {brewery.name}
              </div>
              <div>
                <span className="breweries__container__brewery-property">Type: </span>
                {brewery.brewery_type}
              </div>
              <div>
                <span className="breweries__container__brewery-property">Address: </span>
                {brewery.address_1}
              </div>
              <div>
                <span className="breweries__container__brewery-property">Phone: </span>
                {brewery.phone}
              </div>
              <div>
                <span className="breweries__container__brewery-property">Website: </span>
                {brewery.website_url}
              </div>
              <Link to={`/breweries/${brewery.id}`}>
                <button>
                  <span>Detail</span>
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Breweries
