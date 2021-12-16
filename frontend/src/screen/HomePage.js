import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'
import Product from '../component/Product'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Link to={`/product/${product._id}`}>
              <Product key={product._id} product={product} />
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomePage
