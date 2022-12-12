import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const Searchbar = ({searchValue, setSearchValue, pokemon}) => {
    

    const handleInputChange = (e) => {
        setSearchValue(e.target.value)
    } 

    const handleClearClick = () => {
        setSearchValue("")
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Search</Form.Label>
                <Form.Control onChange={handleInputChange} type="search" placeholder="Search Pokemon" />
            </Form.Group>
            <Button onClick={handleClearClick}>clear</Button>
        </Form>
    )
}

export default Searchbar