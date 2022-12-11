import {lazy, Suspense, useTransition} from "react";
import useAxios from "../hooks/useAxios"
import axios from "../api/pokemon"
import {useParams} from 'react-router-dom'

const MonItem = lazy(() => import('./MonItem'))

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'



const PokedexDetail = () => {
    const {name} = useParams()
    const [pending, startTransition] = useTransition()

    const [pokedex, error, loading] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: `/pokedex/${name}`,
        requestConfig: {
            params: {
                limit: 50
            }
        }
    })

    return (
        <Container>
            {loading && <p>Loading</p>}
            {!loading && error && <p>{error}</p>}
            {!loading && !error && pokedex.pokemon_entries &&
                <Row xs={2} md={4} lg={6}>
                    {pokedex.pokemon_entries.map((mon) => {
                    
                        return (
                            <Suspense fallback={<div>Loading</div>}>
                                <MonItem key={mon.name} mon={mon} />
                            </Suspense>
                            
                        )
                    })}
                </Row>
            }
        </Container>
    )
}

export default PokedexDetail