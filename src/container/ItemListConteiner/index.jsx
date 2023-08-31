
import Items from "../../components/Item"
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function ItemListContainer() {
    const [items, sentItems] = useState([])

    const getProducto = async () => {
        const response = await fetch("/data/base.json")
        const productos = await response.json()
        sentItems(productos)
    }
    useEffect(() => {
        getProducto()
    }, [])
    return (
        <Container fluid className="nt-4">
            <Row>
                {items.map(item => (
                    <Col key={item.id} lg={4} className="mb-4" >
                        <Card>
                            <Card.img variant="top" src={item.imagen} />
                            <Card.body>
                                <Card.Title>{item.producto}</Card.Title>
                                <Card.Text>{item.precio}</Card.Text>
                                <Button variant="dark"> ver mas</Button>
                            </Card.body>
                        </Card>
                    </Col>
                ))
                }
            </Row>
        </Container>
    )
}