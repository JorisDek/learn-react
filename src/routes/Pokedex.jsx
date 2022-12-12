import useAxios from '../hooks/UseAxios.jsx'
import axios from '../api/pokemon'
import DexItem from "../components/DexItem"
import PokedexDetail from "./PokedexDetail"

const Pokedex = () => {
    const [pokedex, error, loading] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: '/pokedex',
        requestConfig: {
            params: {
                limit: 50
            }
        }
    })

    


    return (
        <>
            <main>
                <h1>Pokedexes</h1>
                {loading && <p>Loading</p>}

                {!loading && error && <p>{error}!!</p>}

                {!loading && !error && pokedex.results &&
                    pokedex.results.map((dex) => {
                        return (
                            <DexItem key={dex.name} dex={dex} />
                        )
                    })
                }
            </main>
        </>
    )
}

export default Pokedex