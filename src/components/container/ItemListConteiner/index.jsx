import React, { useState, useEffect} from 'react'
import { useParams, Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import style from './style.module.css'
import { getDocs, collection, query, where} from 'firebase/firestore'
import { db } from '../../../firebase/client'


const ItemListContainer = () => {
    
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
                        <Card >
                            <div className={style['cart_data']}>
                                <div className={style['img_conteiner']}>
                                    <Card.Img variant='top' src={item.image} className={style['img']} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>
                                    <Link to={`/item/${item.id}`} >Ver más</Link>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )}

export default ItemListContainer