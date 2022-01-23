// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
   foreignKey: 'category_id'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey:'category_id'
});

// Each productTag is made with a product_id
// this block will allow you to ask for tag model info while querying products like which tags belong to a given product through the productTag model
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

// productTag always is made with a tag_id
// this block allows you to get product model information when quering tags like which products belong to a given tag through productTag model
Tag.belongsToMany(Product,{
  through: ProductTag,
  foreignKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
