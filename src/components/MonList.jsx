import {useState, useEffect, lazy, Suspense} from "react";
import api from '../api/pokemon'
// import MonItem from "./MonItem";
import axios from "axios";

const MonItem = lazy(() => import('./MonItem'))

const MonList = () => {
    const [mons, setMons] = useState([])
    const [fetchError, setFetchError] = useState(null)
    const [isLoadingMons, setIsLoadingMons] = useState(null)
    const [nextUrl, setNexturl] = useState('')
    const [prevUrl, setPrevUrl] = useState('')

    const fetchMons = async (url) => {
        setIsLoadingMons(true)

        try {
            const response = await axios.get(url)
            setMons(response.data.results)
            setNexturl(response.data.next)
            setPrevUrl(response.data.previous)
            console.log(response.data)

        } catch (err) {
            console.log(err.message)
            setFetchError(err.message)
            setMons([])
        } finally {
            setIsLoadingMons(false)
        }
    }

    useEffect(() => {
        fetchMons('https://pokeapi.co/api/v2/pokemon?limit=48')
    }, [])

    return (
        <>
            <div className="mon-list">
                {!isLoadingMons &&
                    mons.map((mon) => {
                        return (
                            <Suspense fallback={<div>Loading</div>}>
                                <MonItem key={mon.name} mon={mon} />
                            </Suspense>
                        )
                    })
                }
            </div>
            <div style={{display: "flex",justifyContent: 'center'}}>
                {prevUrl &&
                    <button onClick={(e) => {
                        fetchMons(prevUrl)}}>
                        Minder
                    </button>
                }
                {nextUrl &&
                    <button onClick={(e) => {
                        fetchMons(nextUrl)
                    }}>
                        Meer
                    </button>
                }
            </div>
        </>
    )
}

export default MonList