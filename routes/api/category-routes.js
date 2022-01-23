const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
Category.findAll({
  include: {
    model: Product
  }
}).then(dbProductData => res.json(dbProductData))
.catch(err => {
  console.log(err);
  res.status(500).json(err);
});
});

router.get('/:id', (req, res) => {
 Category.findOne({ 
   
     where: {
       id: req.params.id 
     },
   
   
     include: {
       model: Product
     }
   
    })
  .then(dbCatagoryData => {
    if(!dbCatagoryData) {
      res.status(404).json({message:'no catagory found with that id!'});
      return;
    }
    res.json(dbCatagoryData);
  })
   .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
 
});

router.post('/', (req, res) => {
 Category.create({
   category_name: req.body.category_name
 })
 .then(dbCatagoryData => res.json(dbCatagoryData))
 .catch(err => {
   console.log(err);
   res.status(500).json(err);
 });
});

router.put('/:id', (req, res) => {
 Category.update(
   {
     category_name: req.body.category_name
   },
  {  
    where: {
     id: req.params.id
     }
  }
  )
  .then(dbCatagoryData => {
    if(!dbCatagoryData) {
      res.status(404).json({message: 'no catagory found with that id'});
      return;
    }
    res.json(dbCatagoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.delete('/:id', (req, res) => {
   Category.destroy({
     where: {
       id: req.params.id 
     }
   }).then(dbCatagoryData => {
     if(!dbCatagoryData) {
       res.status(404).json({message: 'no category found with that id!'});
       return;
     }
     res.json(dbCatagoryData);
   })
   .catch(err => {
     console.log(err);
     res.status(500).json(err);
   })
});

module.exports = router;
