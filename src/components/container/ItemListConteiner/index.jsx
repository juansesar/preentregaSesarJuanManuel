import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link, Form } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


import { getDocs, collection, query, where, doc, getDoc } from 'firebase/firestore'
import { db } from '../../../firebase/client'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [productsAdapted, setProductsAdapted] = useState([])

    const { categoryId } = useParams()

    const collectionRef = categoryId
        ? query(collection(db, "items"), where('categoryId', '==', categoryId))
        : collection(db, "items")

    useEffect(() => {
        getDocs(collectionRef)
            .then(response => {
                setProductsAdapted(response.docs.map(doc => {
                    const data = { ...doc.data(), id: doc.id }
                    return data
                }))
            })
    }, [categoryId])

    return (
        <Container fluid className='mt-4'>
            <Row>
                {productsAdapted.map(item => (
                    <Col key={item.id} lg={4} className='mb-4'>
                        <Card>
                            <Card.Img variant='top' src={item.image} style={{ width : 30 +'%'}} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Link to={`/item/${item.id}`} >Ver más</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ItemListContainer