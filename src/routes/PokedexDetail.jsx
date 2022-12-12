import {lazy, Suspense, useTransition, useState} from "react";
import useAxios from "../hooks/useAxios"
import axios from "../api/pokemon"
import {useParams} from 'react-router-dom'

import MonItem from "../components/MonItem"
import Searchbar from "../components/Searchbar"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const PokedexDetail = () => {
    const {name} = useParams()
    const [pending, startTransition] = useTransition()
    const [searchValue, setSearchValue] = useState("");

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

    let filtered

    if  (!loading && !error && pokedex.pokemon_entries) {
        filtered = pokedex.pokemon_entries.filter((mon) => {
            // console.log((mon.pokemon_species.name).includes(searchValue))
            return (mon.pokemon_species.name).includes(searchValue)
        })
    }

    return (
        <>
            {loading && <p>Loading</p>}
            {!loading && error && <p>{error}</p>}
            {!loading && !error && filtered &&
                <>
                    <Row>
                        <Col>
                            <Searchbar searchValue={searchValue} setSearchValue={setSearchValue} pokemon={pokedex.pokemon_entries} />
                        </Col>
                    </Row>
                    <Row xs={3} md={4} lg={6}>
                        {filtered.map((mon) => {    
                            // console.log(mon)                   
                            return (
                                <Col className="mb-4" key={mon.name}>
                                    <Suspense fallback={<div>Loading</div>}>
                                        <MonItem mon={mon} />
                                    </Suspense>
                                </Col>
                                
                            )
                        })}
                    </Row>
                </>
            }
        </>
    )
}

export default PokedexDetail