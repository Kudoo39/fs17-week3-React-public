import axios from 'axios'
import { useState, useEffect } from 'react'

interface Brewery {
  id: string
  name: string
  city: string
}

const Breweries = () => {
  const [breweries, setBreweries] = useState<Brewery[]>([])
  const [loading, setLoading] = useState(true)

  const url = 'https://api.openbrewerydb.org/v1/breweries'

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setBreweries(response.data)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      {breweries.map((brewery) => {
        console.log(brewery)
        return (
          <div key={brewery.id}>
            <div>{brewery.name}</div>
            <div>{brewery.city}</div>
            <div>-----------------------</div>
          </div>
        )
      })}
    </div>
  )
}

export default Breweries
