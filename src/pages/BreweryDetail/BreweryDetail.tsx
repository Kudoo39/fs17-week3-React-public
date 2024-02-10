import { memo } from 'react'
import { Link, useParams } from 'react-router-dom'

import { BreweryDetailType } from '../../misc/type'
import useFetch from '../../hooks/useFetch'
import Box from '@mui/material/Box/Box'
import ReplyIcon from '@mui/icons-material/Reply'
import CircularProgress from '@mui/material/CircularProgress/CircularProgress'
import './BreweryDetail.css'

const BreweryDetail = () => {
  const url = 'https://api.openbrewerydb.org/v1/breweries'

  const { id } = useParams()
  const { data, loading } = useFetch<BreweryDetailType>(url)

  const brewery: BreweryDetailType | undefined = data.find((brewery) => brewery.id === id)

  if (loading) {
    return <CircularProgress />
  }

  return (
    <div className="brewery__container">
      <Box>
        <h2>Brewery Detail</h2>
        <p>
          <span className="brewery__container__text">Brewery ID:</span> {id}
        </p>
        <p>
          <span className="brewery__container__text">Name:</span> {brewery?.name}
        </p>
        <p>
          <span className="brewery__container__text">Type:</span> {brewery?.brewery_type}
        </p>
        <p>
          <span className="brewery__container__text">Address:</span> {brewery?.address_1}, {brewery?.city},{' '}
          {brewery?.state_province}, {brewery?.postal_code}
        </p>
        <p>
          <span className="brewery__container__text">Phone:</span> {brewery?.phone}
        </p>
        <p>
          <span className="brewery__container__text">Website: </span>
          <a href={brewery?.website_url} target="_blank" rel="noopener noreferrer">
            {brewery?.website_url}
          </a>
        </p>
      </Box>
      <Link to="/breweries">
        <ReplyIcon className="brewery__container__icon" />
      </Link>
    </div>
  )
}

export default memo(BreweryDetail)
