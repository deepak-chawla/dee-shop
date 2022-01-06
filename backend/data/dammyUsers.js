import bcrypt from 'bcryptjs'

const userss = [
  {
    name: 'Deepak Chawla',
    email: 'deepakchawla@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Wick',
    email: 'johnwick@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Vin Diesel',
    email: 'vindiesel@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default userss
