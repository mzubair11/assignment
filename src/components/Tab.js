import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form } from 'react-bootstrap'
import Item from './Item'
import Spinner from './Spinner'

const Tab = () => {

    const [items, setItems] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        let data = await fetch(url);
        let parsedData = await data.json()
        setItems(parsedData)
        setFilteredItems(parsedData)
        setLoading(false)
    };

    items.map((item) => { item.id % 5 === 0 && item.id % 3 === 0 ? item.category = "magic" : item.id % 5 === 0 ? item.category = "fifths" : item.id % 3 === 0 ? item.category = "thirds" : item.category = "NA" })
    // console.log(items)

    useEffect(() => { fetchData() }, [])

    function handleChange(e) {
        setSearch(e.target.value)
        // console.log(search)
    }

    useEffect(() => {
        console.log(search)
        const searchResult = items.filter((item) => { return Object.values(item).join(" ").toLowerCase().includes(search.toLowerCase()) })
        setFilteredItems(searchResult)
    }, [search,items])


    function handleThirds() {
        const thirds = items.filter((item) => { return item.category === "thirds" })
        setFilteredItems(thirds)
    }

    function handleFifths() {
        const fifths = items.filter((item) => { return item.category === "fifths" })
        setFilteredItems(fifths)
    }

    function handleMagic() {
        const magic = items.filter((item) => { return item.category === "magic" })
        setFilteredItems(magic)
    }

    

    function handleRefresh() {
        setFilteredItems(items)
    }


    function onDelete(id) {
        // console.log(id)
        const d = filteredItems.filter((item) => { return item.id !== id })
        setFilteredItems(d)
        // setItems(d)
    }

    return (
        <Container style={{ width: '50rem' }}>
            <Form >
                <Form.Group className="mb-3" controlId="search">
                    <Form.Label>Search</Form.Label>
                    <Form.Control onChange={handleChange} value={search} type="text" placeholder="Enter here to start searching." />
                </Form.Group>
            </Form>
            <Col>
                <Button className=' px-4' variant="outline-warning" onClick={handleThirds}>thirds</Button>
                <Button className='mx-4 px-4' variant="outline-secondary" onClick={handleFifths}>Fifths</Button>
                <Button className='mx-3 px-4' variant="outline-success" onClick={handleMagic}>Magic</Button>
                <Button className='mx-3 px-4' variant="outline-danger" onClick={handleRefresh}>Refresh</Button>
            </Col>
            {loading ? <Spinner /> : filteredItems.map((item) => {
                return <Item
                    key={item.id}
                    userId={item.userId}
                    id={item.id}
                    title={item.title}
                    body={item.body}
                    category={item.category}
                    onDelete={onDelete}
                />
            })}
        </Container>
    )
}

export default Tab