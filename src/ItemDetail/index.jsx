import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ItemCount from '../ItemCount/itemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../context/cartContext'
export default function ItemDetail({detail}) {

    const {addItem} = useContext(CartContext)
    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        //  const item = {
        //     id, producto, precio
        // }

        addItem( quantity)
     }
    return (
        <Container fluid className="nt-4">
            <Row>
                
                    <Col key={detail.id} lg={4} className="mb-4" >
                        <Card>
                            <Card.Img variant="top" src={detail.imagen} />
                            <Card.Body>
                                <Card.Title>{detail.producto}</Card.Title>
                                <Card.Text>{detail.precio}</Card.Text>
                                
                                <div>
                                {
                                    quantityAdded > 0 ? (
                                        <link to="/cart" className="option">Terminar compra</link>
                                    ) : (
                                        <ItemCount initial={1}  onAdd={handleOnAdd} />
                                    )
                                }
                            </div>
                            </Card.Body>
                        </Card>
                    </Col>
                
            </Row>
        </Container>
       
    )
}