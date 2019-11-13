import { Request, Response } from "express";
//import Product from '../models/Product';
let Product = require('../models/Product');

// export let createProduct = (req: Request, res: Response) => {
//     res.send("Returns all Books");
//   };

export let createProduct = (req: Request, res: Response) => {
  let productQuery = new Product(req);
  productQuery.save(function (err, product) {
      if (product) {
          res.status(200).json({ product });
      } else {
          res.status(400).send(err);
      }
  });
};



export let getProducts = (req: Request, res: Response) => {
  Product.find(function (err, products) {
    if (products) {
        res.json(products);
    }
    else {
        res.status(400).send(err);
    }
});
};

export let edit = (req: Request, res: Response) => {
  let id = req.body.id;
    Product.findById(id, (err, products) => {
        if (products) {
            res.json(products);
        }
        else {
            res.status(400).send(err);
        }
    });
};

export let deleteProduct = (req: Request, res: Response) => {
  Product.findByIdAndRemove({ _id: req.body.id }, (err, product) => {
    if (product) {
        res.json('Product Removed Successfully');
    }
    else {
        res.status(400).send("Delete Operation Failed");
    }
});
};

export let update = (req: Request, res: Response) => {
  Product.findByIdAndUpdate(
    req.body.id,
    req.body.product,
    { new: true },
    (err, product) => {
        // Handle any possible database errors
        if (err) res.status(500).send(err);
        res.json(product);
    }
)
};