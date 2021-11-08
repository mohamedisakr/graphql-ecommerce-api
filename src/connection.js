const mongoose = require("mongoose")
const {Db_Uri} = require("./config")

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

const callback = () => console.log("mongoose connected")

const connect = async () => {
  return await mongoose.connect(Db_Uri, {...options}, callback)
}

module.exports = connect

// const url = Db_Uri //"mongodb://localhost:27017/gql-ecommerce"
// console.log(`database connection string : ${url}`)
