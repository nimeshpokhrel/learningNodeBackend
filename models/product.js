const fs = require("fs");
const path = require("path");
const rootDir = require("../helpers/path");

const productsDataFile = path.join(rootDir, "data", "products.json");
const getProductsFromFile = (callback) => {
  fs.readFile(productsDataFile, (error, fileContent) => {
    if (error) {
      return callback([]);
    }
    callback(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title, price, description) {
    this.title = title;
    this.price = price;
    this.description = description;
  }
  saveData() {
    this.id = Math.random().toString();
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(productsDataFile, JSON.stringify(products), (error) => {
        console.log(error);
      });
    });
  }
  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
};