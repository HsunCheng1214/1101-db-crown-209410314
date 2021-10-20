const Category_14 = require('../models/Category_14');

exports.getCategories = async(req, res)=>{
    try{
        return await Category_14.fetchAll();
    } catch (err) {
        console.log('getCategories', err)
    }
}