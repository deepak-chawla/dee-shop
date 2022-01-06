import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../component/Product'
import { Link } from 'react-router-dom'
import { listProducts } from '../action/productActions'

const HomePage = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(async () => {
    dispatch(listProducts())
  }, [dispatch])

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
