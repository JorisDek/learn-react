import axios from "axios";
import {lazy, Suspense, useEffect, useState} from "react";
import MonType from "./MonType";
import {Link} from "react-router-dom";
// import MonImage from "./MonImage";
const MonImage = lazy(() => import('./MonImage'))


const MonItem = ({mon}) => {
    const [monData, setMonData] = useState({})
    const [isLoading, setIsLoading] = useState(null)
    const [fetchError, setFetchError] = useState(null)


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
                        <Suspense fallback={<div></div>}>
                            <MonImage image={monData.sprites.front_default} />
                        </Suspense>
                    }

                    <Link to={`/pokemon/${monData.id}`}>{monData.id} - {monData.name}</Link>

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