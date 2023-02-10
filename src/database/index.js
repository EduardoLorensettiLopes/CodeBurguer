import  Sequelize  from "sequelize";
import Product from "../app/Models/Product";
import User from '../app/Models/User'
import configDatabase from '../config/database'


const Models = [User, Product]
class Database {
    constructor(){
        this.init()
    }

    init(){
        this.connection = new Sequelize(configDatabase)
        Models.map( model => model.init(this.connection))
    }
}

export default new Database()