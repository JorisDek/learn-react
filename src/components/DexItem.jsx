import {Link} from 'react-router-dom'

const DexItem = ({dex}) => {
    

    return (
        <h4><Link to={`/pokedex/${dex.name}`}>{dex.name}</Link></h4>
    )
}

export default DexItem