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
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

// productTag always is made with a tag_id
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
