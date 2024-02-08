import { Brewery } from '../../misc/type'
import useFetch from '../../hooks/useFetch'

const Breweries = () => {
  const url = 'https://api.openbrewerydb.org/v1/breweries'

  const { data, loading } = useFetch<Brewery>(url)

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      {data.map((data) => {
        console.log(data)
        return (
          <div key={data.id}>
            <div>{data.name}</div>
            <div>{data.city}</div>
            <div>-----------------------</div>
          </div>
        )
      })}
    </>
  )
}

export default Breweries
