import React, { useEffect } from 'react'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getOrderDetails, updateToDelivered } from '../action/orderActions'
import Message from '../component/Message'
import Loader from '../component/Loader'
import { UPDATE_ORDER_DELIVERED_RESET } from '../constant/orderConstants'

const OrderDetailsPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { orderId } = useParams()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const { order, loading, error } = useSelector((state) => state.orderDetails)
  const { success } = useSelector((state) => state.updateOrderDelivered)

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      if (success) {
        dispatch({ type: UPDATE_ORDER_DELIVERED_RESET })
      } else {
        dispatch(getOrderDetails(orderId))
      }
    }
    // eslint-disable-next-line
  }, [dispatch, orderId, success, userInfo])

  const updateHandler = () => {
    dispatch(updateToDelivered(orderId))
  }

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <>
      <h1>Order {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>Shipping</h3>
              <p>
                <strong>Name: {order.user.name}</strong>
              </p>
              <p>
                <strong>
                  Email:{' '}
                  <a href={`mailto:${order.user.name}`}>{order.user.email}</a>
                </strong>
              </p>
              <p>
                <strong>Address: </strong>
                {order.shippingAddress.address}, {order.shippingAddress.city},{' '}
                {order.shippingAddress.country}
              </p>
              {order.isDelivered ? (
                <Message variant='success'>
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant='danger'>Not Delivered</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Payment Method</h3>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
                {order.isPaid ? (
                  <Message variant='success'>Paid on {order.paidAt}</Message>
                ) : (
                  <Message variant='danger'>Not Paid</Message>
                )}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Order Items</h3>
              <ListGroup variant='flush'>
                {order.orderItems.map((item, index) => (
                  <ListGroup.Item key={index}>
                    <Row>
                      <Col md={1}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col md={4}>
                        {item.qty} x ${item.price} = ${item.qty * item.price}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            <Card>
              <ListGroup.Item>
                <h3>Order Summary</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {userInfo && userInfo.isAdmin && !order.isDelivered && (
                <ListGroup.Item>
                  <Row>
                    <Button className='btn' onClick={updateHandler}>
                      Update To Delivered
                    </Button>
                  </Row>
                </ListGroup.Item>
              )}
            </Card>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}

export default OrderDetailsPage
