import { Link } from 'react-router-dom'

import { Brewery } from '../../misc/type'
import useFetch from '../../hooks/useFetch'
import './Breweries.css'

const Breweries = () => {
  const url = 'https://api.openbrewerydb.org/v1/breweries'

  const { data, loading } = useFetch<Brewery>(url)

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
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
              <span className="breweries__container__brewery-property">Website: </span>
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
  )
}

export default Breweries
