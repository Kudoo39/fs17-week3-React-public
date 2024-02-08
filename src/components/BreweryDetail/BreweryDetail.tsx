import { useParams } from 'react-router-dom'

import { BreweryDetailType } from '../../misc/type'
import useFetch from '../../hooks/useFetch'
import './BreweryDetail.css'

const BreweryDetail = () => {
  const url = 'https://api.openbrewerydb.org/v1/breweries'

  const { id } = useParams()
  const { data, loading } = useFetch<BreweryDetailType>(url)

  const brewery: BreweryDetailType | undefined = data.find((brewery) => brewery.id === id)

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div className="brewery__container">
      <h2>Brewery Detail</h2>
      <p>Brewery ID: {id}</p>
      <p>Name: {brewery?.name}</p>
      <p>Type: {brewery?.brewery_type}</p>
      <p>
        Address: {brewery?.address_1}, {brewery?.city}, {brewery?.state_province}, {brewery?.postal_code}
      </p>
      <p>Phone: {brewery?.phone}</p>
      <p>
        Website:
        <a href={brewery?.website_url} target="_blank" rel="noopener noreferrer">
          {brewery?.website_url}
        </a>
      </p>
    </div>
  )
}

export default BreweryDetail
