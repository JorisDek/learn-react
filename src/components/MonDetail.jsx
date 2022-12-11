import {useParams} from "react-router-dom";
import {useEffect, useState} from 'react'
import useAxios from "../hooks/useAxios"
import axios from "../api/pokemon"
// import MonImage from "./MonImage";
import Image from 'react-bootstrap/Image'

const MonDetail = () => {
  const {id} = useParams()
  const [isLoading, setIsLoading] = useState()
  const [fetchError, setFetchError] = useState()

  const [mon, error, loading] = useAxios({
    axiosInstance: axios,
    method: 'GET',
    url: `/pokemon/${id}`,
    requestConfig: {
        params: {
            limit: 50
        }
    }
})

  return (
      <>
        {loading && <p>Loading</p>}
        {!loading && error && <p>{error}</p>}

        {!loading && !error && mon.name && mon.sprites &&
          <>
            <h1>{mon.name}</h1>
            <Image src={mon.sprites.other.home.front_default} />
          </>
        }
      </>
  )
}

export default MonDetail