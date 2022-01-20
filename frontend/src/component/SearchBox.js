import React, { useState } from 'react'
import { Form, FormGroup, Button, Row, Col } from 'react-bootstrap'

const SearchBox = () => {
  const [keyword, setKeyword] = useState('')

  const submitHandle = (e) => {
    e.preventDefault()
  }
  return (
    <Form onChange={submitHandle}>
      <FormGroup style={{ display: 'flex' }}>
        <Form.Control
          type='text'
          placeholder='Search Products..'
          name='q'
          onChange={(e) => setKeyword(keyword)}
        ></Form.Control>
        <Button
          type='submit'
          variant='outline-success'
          className='mr-sm-2 ml-sm-5 inline'
        >
          Search
        </Button>
      </FormGroup>
    </Form>
  )
}

export default SearchBox
