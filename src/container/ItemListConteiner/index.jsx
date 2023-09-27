
import Items from "../../components/Item"
import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { ShopContext } from "../../context/shopcontext"
import ItemCount from "../../ItemCount/itemCount"


function ItemListContainer() {
    const {productos} = useContext(ShopContext)
    const [item, setItem] = useState([])
     const {id} = useParams()
    
    
    useEffect(() => {
        const getProducto = async () => {
            // const response = await fetch("/data/base.json")
            // const productos = await response.json()
            
            const filtroProducto = productos.filter(producto => producto.categoria === id)
            
            if (filtroProducto.length > 0) return setItem(filtroProducto)

            setItem(productos)
        }
        getProducto()
    }, [id])
    
    

    return (
        <Container fluid className="nt-4">
            <Row>
                {productos.map(item => (
                    <Col key={item.id} lg={4} className="mb-4" >
                        <Card>
                            <Card.Img variant="top" src={item.imagen} />
                            <Card.Body>
                                <Card.Title>{item.producto}</Card.Title>
                                <Card.Text>{item.precio}</Card.Text>
                                {/* <Button variant="dark"> ver mas</Button> */}
                                <Link to={`/item/${item.id}`}>ver mas</Link> 
                                
                            
                            </Card.Body>
                        </Card>
                    </Col>
                ))
                }
            </Row>
        </Container>
    )
}

export default ItemListContainer