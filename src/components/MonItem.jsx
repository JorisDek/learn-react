// import axios from "axios";
import {lazy, Suspense, useEffect, useState} from "react";
import MonType from "./MonType";
import {Link} from "react-router-dom";
import useAxios from "../hooks/useAxios"
import axios from "../api/pokemon"
// import MonImage from "./MonImage";
const MonImage = lazy(() => import('./MonImage'))

import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import ListGroup from 'react-bootstrap/ListGroup';



const MonItem = ({mon}) => {
    // const [monData, setMonData] = useState({})
    const [isLoading, setIsLoading] = useState(null)
    const [fetchError, setFetchError] = useState(null)

    const [monData, error, loading] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: `/pokemon/${mon.entry_number}`,
        requestConfig: {
            params: {
                limit: 50
            }
        }
    })
    // useEffect(() => {
    //     let isMounted = true
    //     const source = axios.CancelToken.source()

    //     const fetchMon = async () => {
    //         setIsLoading(true)
    //         try {
    //             const response = await axios.get(mon.pokemon_species.url, {
    //                 cancelToken: source.token
    //             })

    //             if (isMounted) {
    //                 setMonData(response.data)
    //                 setFetchError(null)
    //             }
    //             // console.log(response.data)
    //         } catch (err) {
    //             if (isMounted) {
    //                 setFetchError(err.message)
    //                 setMonData({})
    //             }
    //             // console.log(err.message)

    //         } finally {
    //             isMounted && setIsLoading(false)
    //             // console.log('finally')
    //         }
    //     }

    //     fetchMon()

    // }, [])

    return (
        <>
            {!isLoading && monData &&
                <Col>
                    <Card>
                        {monData.sprites &&
                            <Suspense fallback={
                                <Figure>
                                    <Figure.Image
                                        width={180}
                                        height={180}
                                        alt="180x180"
                                        src="holder.js/180x180"
                                    />
                                </Figure>
                            }>
                                {/* <MonImage image={monData.sprites.front_default} /> */}
                                <Card.Img variant="top" src={monData.sprites.front_default} />
                            </Suspense>
                        }
                        <Card.Body>
                            <Card.Title>{monData.id} - {monData.name}</Card.Title>
                            {/* <Link to={`/pokemon/${monData.id}`}></Link> */}
                            <Card.Text> 
                                
                                <Button href={`/pokemon/${monData.id}`} variant="primary" className="stretched-link">Go somewhere</Button>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            {monData.types &&
                                    monData.types.map((monType) => {
                                        return (
                                            <ListGroup.Item key={monType.slot}>{monType.type.name}</ListGroup.Item>
                                            // <MonType  type={monType.type}/>
                                        )
                                    })
                                }
                        </ListGroup>
                    </Card>
                </Col>
            }
        </>
    )
}

export default MonItem