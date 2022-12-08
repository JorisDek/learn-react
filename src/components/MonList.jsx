import {useState, useEffect} from "react";
import api from '../api/pokemon'
import MonItem from "./MonItem";
import axios from "axios";

const MonList = () => {
    const [mons, setMons] = useState([])
    const [fetchError, setFetchError] = useState(null)
    const [isLoadingMons, setIsLoadingMons] = useState(null)
    const [nextUrl, setNexturl] = useState('')

    const fetchMons = async (url) => {
        setIsLoadingMons(true)

        try {
            const response = await axios.get(url)
            setMons(response.data.results)
            console.log(response.data)
            setNexturl(response.data.next)

        } catch (err) {
            console.log(err.message)
            setFetchError(err.message)
            setMons([])
        } finally {
            setIsLoadingMons(false)
        }
    }

    useEffect(() => {
        fetchMons('https://pokeapi.co/api/v2/pokemon')
    }, [])

    return (
        <div className="mon-list">
            {!isLoadingMons &&
                mons.map((mon) => {
                    return (
                        <MonItem key={mon.name} mon={mon} />
                    )
                })
            }
            <button onClick={(e) => {
                fetchMons(nextUrl)
            }}>Meer</button>
        </div>
    )
}

export default MonList