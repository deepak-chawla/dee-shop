import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import FormContainer from '../component/FormContainer'
import { savePaymentMethod } from '../action/cartActions'
import CheckoutSteps from '../component/CheckoutSteps'

const PaymentPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [payment, setPayment] = useState('PayPal')

  if (!shippingAddress) {
    navigate('/shipping')
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(payment))
    navigate('/placeorder')
  }

  return (
    <>
      <CheckoutSteps step3 />
      <FormContainer>
        <h1>Payment</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='PayPal or Credit Card'>
            <Form.Label as='legend'>Select Method</Form.Label>
            <Form.Check
              type='radio'
              label='PayPal'
              id='PayPal'
              name='PaymentMethod'
              value='PayPal'
              onChange={(e) => setPayment(e.target.value)}
              checked
            ></Form.Check>
          </Form.Group>

          <Button type='submit' variant='primary' className='mt-3'>
            Continue
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default PaymentPage
