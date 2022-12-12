import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const Searchbar = ({searchValue, setSearchValue}) => {


  const handleInputChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleClearClick = () => {
    setSearchValue("")
  }

  const shouldDisplayButton = searchValue.length > 0

  return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search</Form.Label>
          <Form.Control onChange={handleInputChange} value={searchValue} type="search" placeholder="Search Pokemon"/>
        </Form.Group>
        {shouldDisplayButton && <Button onClick={handleClearClick}>clear</Button>}
      </Form>
  )
}

export default Searchbar