const mongoose = require("mongoose")
const {Db_Uri} = require("./config")
const {connectionOptions} = require("./constants")

const callback = () => console.log(`mongoose connected ${Db_Uri}`)

const connect = async () => {
  return await mongoose.connect(Db_Uri, {...connectionOptions}, callback)
}

module.exports = connect
