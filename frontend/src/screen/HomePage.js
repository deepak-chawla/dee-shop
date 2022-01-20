import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../component/Product'
import { Link } from 'react-router-dom'
import { listProducts } from '../action/productActions'
import Loader from '../component/Loader'
import Message from '../component/Message'
import { useSearchParams } from 'react-router-dom'

const HomePage = () => {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') ? searchParams.get('q') : ''
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts(query))
  }, [dispatch, query])

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant={'danger'}>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Link to={`/product/${product._id}`}>
                <Product key={product._id} product={product} />
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomePage
