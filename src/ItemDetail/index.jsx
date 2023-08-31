import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function ItemDetail({ detail }) {
    return (
        <Container fluid className="nt-4">
            <Row>
                
                    <Col key={detail.id} lg={4} className="mb-4" >
                        <Card>
                            <Card.Img variant="top" src={detail.imagen} />
                            <Card.Body>
                                <Card.Title>{detail.producto}</Card.Title>
                                <Card.Text>{detail.precio}</Card.Text>
                                {/* <Button variant="dark"> ver mas</Button> */}
                                
                            </Card.Body>
                        </Card>
                    </Col>
                
            </Row>
        </Container>
       
    )
}