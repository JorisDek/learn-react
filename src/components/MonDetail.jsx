import {useParams} from "react-router-dom";
import {useEffect, useState} from 'react'
import axios from "axios";

const MonDetail = () => {
  const {id} = useParams()
  const [isLoading, setIsLoading] = useState()
  const [fetchError, setFetchError] = useState()
  const [monData, setMonData] = useState()

  useEffect(() => {
    let isMounted = true
    const source = axios.CancelToken.source()

    const fetchMon = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`+id, {
          cancelToken: source.token
        })

        if (isMounted) {
          setMonData(response.data)
          setFetchError(null)
        }
        // console.log(response.data)
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message)
          setMonData({})
        }
        // console.log(err.message)

      } finally {
        isMounted && setIsLoading(false)
        // console.log('finally')
      }
    }

    fetchMon()

  }, [])

  return (
      <>
        {monData &&
          monData.name}
      </>
  )
}

export default MonDetail