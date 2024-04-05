import Sequelize, { Model } from "sequelize"

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `https://codeburger-api-copy-production.up.railway.app/${this.path}`
          },
        },
      },
      {
        sequelize,
      },
    )
    return this
  }
}

export default Category
