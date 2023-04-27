import axios from 'axios'
import { useState, useEffect, useCallback } from 'react'

const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const response = await axios.get(url)
      const axiosData = response.data
      setData(axiosData)
      setLoading(false)
      setError(false)
    } catch (error) {
      setLoading(false)
      setError(true)
      console.log(error.response)
    }
  }, [url])

  useEffect(() => {
    fetchData()
  }, [url, fetchData])

  return { loading, error, data }
}

export default useFetch
