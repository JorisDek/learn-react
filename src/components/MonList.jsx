import {useState, useEffect} from "react";
import api from '../api/pokemon'
import MonItem from "./MonItem";

const MonList = () => {
    const [mons, setMons] = useState([])
    const [fetchError, setFetchError] = useState(null)
    const [isLoadingMons, setIsLoadingMons] = useState(null)


    useEffect(() => {
        const fetchMons = async () => {
            setIsLoadingMons(true)

            try {
                const response = await api.get('/pokemon')
                setMons(response.data.results)
            } catch (err) {
                console.log(err.message)
                setFetchError(err.message)
                setMons([])
            } finally {
                setIsLoadingMons(false)
            }
        }

        fetchMons()
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
        </div>
    )
}

export default MonList