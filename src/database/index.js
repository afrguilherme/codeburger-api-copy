import Sequelize from "sequelize"
import mongoose from "mongoose"

import User from "../app/models/Users"
import Product from "../app/models/Product"
import Category from "../app/models/Category"

import configDatabase from "../config/database"

const models = [User, Product, Category]

class Database {
  constructor() {
    this.init()
    this.mongo()
  }

  init() {
    this.connection = new Sequelize(
      "postgresql://postgres:-D43*-EDcD5DFBF2B*5B53g3*2fB-aA6@viaduct.proxy.rlwy.net:49623/railway",
    )
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      )
  }
  mongo() {
    this.mongoConnection = mongoose.connect(
      "mongodb://localhost:27017/codeburger",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
  }
}

export default new Database()
