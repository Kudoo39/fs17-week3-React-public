import axios, { AxiosResponse, AxiosError } from 'axios'
import { useEffect, useState } from 'react'

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(url)
      .then((response: AxiosResponse) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((error: AxiosError) => {
        console.log(error)
        setLoading(false)
      })
  }, [url])

  return { data, loading }
}

export default useFetch
