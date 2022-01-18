import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { getUserDetails } from '../action/userActions'
import Message from '../component/Message'
import Loader from '../component/Loader'
import FormContainer from '../component/FormContainer'

const UserEditPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState('')

  const dispatch = useDispatch()
  const { userId } = useParams()
  const userDetails = useSelector((state) => state.userDetails)
  const { user, loading, error } = userDetails

  useEffect(() => {
    if (!user.name || user._id !== userId) {
      dispatch(getUserDetails(userId))
    } else {
      setName(user.name)
      setEmail(user.email)
      setIsAdmin(user.isAdmin)
    }
  }, [dispatch, user, userId])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('update user')
  }

  return (
    <>
      <Link to='/admin/userlist' className='btn btn-light py-3'>
        Go back
      </Link>
      <FormContainer>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <h1>Edit User</h1>
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
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='isadmin'>
            <Form.Check
              type='checkbox'
              label='is Admin'
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            ></Form.Check>
          </Form.Group>
          <Button className='mt-3' type='submit' variant='primary'>
            Update
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default UserEditPage
