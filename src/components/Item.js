import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'

const Item = (props) => {

    function handleDelete() {
        props.onDelete(props.id)
        console.log(props.id)
    }


    return (
        <>
            <Card className='my-3' style={{ width: '50rem' }}>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Title>User Id:  {props.userId}</Card.Title>
                        </Col>
                        <Col>
                            <Card.Title className="mb-2">Id: {props.id}</Card.Title>
                        </Col>
                    </Row>
                    <Card.Title>
                        Title: {props.title}
                    </Card.Title>
                    <Card.Text>
                        Body: {props.body}
                    </Card.Text>
                    <Card.Text>
                        Category: {props.category}
                    </Card.Text>
                    <Button variant='danger' onClick={handleDelete}>Delete</Button>
                </Card.Body>
            </Card>


        </>
    )
}

export default Item