import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShopContext } from "../../../context/shopcontext"


 function Carrito() {
    const {productos} = useContext(ShopContext)
    const [items, sentItems] = useState([])
    const [carrito, setCarrito] = useState([])
     const {id} = useParams()
    
    
    useEffect(() => {
        const getProducto = async () => {
            // const response = await fetch("/data/base.json")
            // const productos = await response.json()
            
            const filtroProducto = productos.filter(producto => producto.categoria === id)
            
            if (filtroProducto.length > 0) return sentItems(filtroProducto)

            sentItems(productos)
            setCarrito(... + filtroProducto )
            console.log (carrito)
        }
        getProducto()
        
    }, [id])

    return (
        <Container fluid className="nt-4">
            <Row>
                
                    <Col key={carrito.id} lg={4} className="mb-4" >
                        <Card>
                            <Card.Img variant="top" src={carrito.imagen} />
                            <Card.Body>
                                <Card.Title>{carrito.producto}</Card.Title>
                                <Card.Text>{carrito.precio}</Card.Text>
                                <Button variant="dark"> comprar </Button> 
                                
                            </Card.Body>
                        </Card>
                    </Col>
                
            </Row>
        </Container>
       
    )
}
export default Carrito