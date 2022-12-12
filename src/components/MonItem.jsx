// import axios from "axios";
import {lazy, Suspense, useEffect, useState} from "react";
import MonType from "./MonType";
import {Link} from "react-router-dom";
import useAxios from "../hooks/useAxios"
import axios from "../api/pokemon"
// import MonImage from "./MonImage";
const MonImage = lazy(() => import('./MonImage'))

import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import Spinner from 'react-bootstrap/Spinner';



const MonItem = ({mon}) => {
    // console.log(mon)
    // const [monData, setMonData] = useState({})
    const [isLoading, setIsLoading] = useState(null)

    const [monData, error, loading] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: `/pokemon/${mon.pokemon_species.name}`,
        requestConfig: {
            params: {
                limit: 50
            }
        }
    })

    return (
        <>
            {loading &&
                <Card>
                    <Card.Header as="h5">Loading</Card.Header>
                    <Spinner animation="grow" variant="info" />
                </Card>}
            {!loading && error && <p>{error}</p>}
            {!loading && !error && monData &&
                <Card>
                    <Card.Header as="h5">#{monData.id} - {(monData.name)}</Card.Header>
                    {monData.sprites &&
                        <Suspense fallback={
                            <Figure>
                                <Figure.Image
                                    width={291}
                                    height={291}
                                    alt="291x291"
                                    src="holder.js/291x291"
                                />
                            </Figure>
                        }>
                            {/* <MonImage image={monData.sprites.front_default} /> */}
                            <Card.Img variant="top" src={monData.sprites.front_default} />
                        </Suspense>
                    }
                    <Card.Body>
                        <Card.Link href={`/pokemon/${monData.id}`} className="stretched-link"></Card.Link>
                    </Card.Body>
                    {monData.types &&
                        monData.types.map((monType) => {
                            return (
                                // <ListGroup.Item key={monType.slot}>{monType.type.name}</ListGroup.Item>
                                <MonType key={monType.slot} type={monType.type}/>
                            )
                        })
                    }
                </Card>
            }
        </>
    )
}

export default MonItem