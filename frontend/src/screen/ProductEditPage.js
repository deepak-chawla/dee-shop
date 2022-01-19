import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import Message from '../component/Message'
import Loader from '../component/Loader'
import FormContainer from '../component/FormContainer'
import { listProductsDetails, updateProduct } from '../action/productActions'
import {
  PRODUCT_UPDATE_RESET,
  PRODUCT_DETAILS_RESET,
} from '../constant/productConstants'
import axios from 'axios'

const ProductEditPage = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [brand, setBrand] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [price, setPrice] = useState(0)
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()
  const { productId } = useParams()
  const navigate = useNavigate()
  const productDetails = useSelector((state) => state.productDetails)
  const { product, loading, error } = productDetails
  const productUpdate = useSelector((state) => state.productUpdate)
  const { success, loading: updateLoading } = productUpdate

  useEffect(() => {
    if (success) {
      dispatch({ type: PRODUCT_UPDATE_RESET })
      navigate('/admin/productlist')
    }
    if (!product.name || product._id !== productId) {
      dispatch(listProductsDetails(productId))
    } else {
      setName(product.name)
      setDescription(product.description)
      setImage(product.image)
      setCategory(product.category)
      setBrand(product.brand)
      setPrice(product.price)
      setCountInStock(product.countInStock)
    }
  }, [dispatch, product, productId, success, navigate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateProduct({
        _id: productId,
        name,
        image,
        description,
        category,
        price,
        countInStock,
        brand,
      })
    )
  }

  const uploadHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      const { data } = await axios.post(
        'http://localhost:2000/api/upload',
        formData,
        config
      )
      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  return (
    <>
      <Link to='/admin/productlist' className='btn btn-light py-3'>
        Go back
      </Link>
      <FormContainer>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        {updateLoading && <Loader />}
        <h1>Edit Product</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='image'>
            <Form.Label>image</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Image'
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></Form.Control>
            <Form.Control
              type='file'
              id='image'
              label='Choose File'
              custom
              onChange={uploadHandler}
            ></Form.Control>
            {uploading && <Loader />}
          </Form.Group>
          <Form.Group controlId='description'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='category'>
            <Form.Label>Category</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='brand'>
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Brand'
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='countInStock'>
            <Form.Label>Count IN Stock</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter CountInStock'
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='price'>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button className='mt-3' type='submit' variant='primary'>
            Update
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default ProductEditPage
