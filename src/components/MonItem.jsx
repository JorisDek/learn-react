import axios from "axios";
import {useEffect, useState} from "react";
import MonType from "./MonType";
import MonImage from "./MonImage.jsx";


const MonItem = ({mon}) => {
    const [monData, setMonData] = useState({})
    const [isLoading, setIsLoading] = useState(null)
    const [fetchError, setFetchError] = useState(null)
    const [types, setTypes] = useState([])


    useEffect(() => {
        let isMounted = true
        const source = axios.CancelToken.source()

        const fetchMon = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get(mon.url, {
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
            {!isLoading && monData &&
                <div className="mon">
                    {monData.sprites &&
                        <MonImage image={monData.sprites.front_default} />
                    }

                    <h5>{monData.id} - {monData.name}</h5>

                    {monData.types &&
                        <div className="mon-types">
                            {monData.types.map((monType) => {
                                return (
                                    <MonType key={monType.slot} type={monType.type}/>
                                )
                            })}
                        </div>
                    }
                </div>
            }
        </>
    )
}

export default MonItem