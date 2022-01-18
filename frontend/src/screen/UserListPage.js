import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { getUserList, userDelete } from '../action/userActions'
import Loader from '../component/Loader'
import Message from '../component/Message'
import { useNavigate } from 'react-router-dom'

const UserListPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userList = useSelector((state) => state.userList)
  const { loading, users, error } = userList
  const { userInfo } = useSelector((state) => state.userLogin)
  const { success } = useSelector((state) => state.deleteUser)

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getUserList())
    } else {
      navigate('/login')
    }
  }, [dispatch, navigate, success, userInfo])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(userDelete(id))
    }
  }

  return (
    <>
      <h2>User List</h2>
      {/* {deleteLoading && <Loader />} */}
      {/* {success && <Message>{message}</Message>} */}
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
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.isAdmin ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/user/${user._id}/edit`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(user._id)}
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

export default UserListPage
