import  Sequelize  from "sequelize";
import Product from "../app/Models/Product";
import User from '../app/Models/User'
import Category from "../app/Models/Category";
import configDatabase from '../config/database'


const Models = [User, Product, Category]
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