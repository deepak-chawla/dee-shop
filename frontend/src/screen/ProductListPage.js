import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import Loader from '../component/Loader'
import Message from '../component/Message'
import { useNavigate } from 'react-router-dom'
import {
  createProduct,
  deleteProduct,
  listProducts,
} from '../action/productActions'
import {
  PRODUCT_CREATE_RESET,
  PRODUCT_DELETE_RESET,
} from '../constant/productConstants'

const ProductListPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const productList = useSelector((state) => state.productList)
  const { loading, products, error } = productList
  const { userInfo } = useSelector((state) => state.userLogin)
  const { message } = useSelector((state) => state.productDelete)
  const { product, success } = useSelector((state) => state.productCreate)

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET })
    dispatch({ type: PRODUCT_DELETE_RESET })
    if (!userInfo.isAdmin) {
      navigate('/login')
    }
    if (success) {
      navigate(`/product/edit/${product._id}`)
    } else {
      dispatch(listProducts())
    }
    // eslint-disable-next-line
  }, [dispatch, navigate, userInfo, message, success])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteProduct(id))
    }
  }

  const createProductHandler = () => {
    dispatch(createProduct())
  }

  return (
    <>
      <Row className='align-items-center'>
        <Col md={9}>
          <h2>Product List</h2>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createProductHandler}>
            <i className='fas fa-plus'></i> Create Product
          </Button>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <LinkContainer to={`/product/edit/${product._id}`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(product._id)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default ProductListPage
