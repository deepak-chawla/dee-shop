import connectDB from '../config/db.js'
import Product from '../models/product.js'
import User from '../models/user.js'
import userss from './dammyUsers.js'
import products from './products.js'
import dotenv from 'dotenv'
dotenv.config()
connectDB()

const importData = async () => {
  try {
    await User.deleteMany()
    await Product.deleteMany()
    const users = await User.insertMany(userss)
    const adminUser = users[0]._id
    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      }
    })
    await Product.insertMany(sampleProducts)
    console.log('Data Imported')
    process.exit()
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Product.deleteMany()
    await User.deleteMany()
    console.log('Data Imported')
    process.exit()
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
