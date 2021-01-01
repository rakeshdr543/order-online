import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import data from '../productsAndImages/products'

const HomeScreen = () => {
    const [products,setProducts]=useState(data)

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {
                    products.map((product) =>(
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} /> 
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default HomeScreen
