import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='m-3 p-3 rounded'>
      <Card.Img src={product.image} variant='top' />
      <Card.Body>
        <Card.Title as='div'>{product.name}</Card.Title>

        <Card.Text as='div'>
          <Rating
            key={product._id}
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
