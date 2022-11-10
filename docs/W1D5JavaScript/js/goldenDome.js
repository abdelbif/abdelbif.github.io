"use strict";

let numberInput = {};
let nameInput = {};
let priceInput = {};

let quantityInput = {};
let supplierInput = {};
let dateInput = {};

window.onload = () => {
  numberInput = document.getElementById("productNumber");
  nameInput = document.getElementById("productName");
  priceInput = document.getElementById("unitPrice");
  quantityInput = document.getElementById("quantityInStock");
  supplierInput = document.getElementById("supplier");
  dateInput = document.getElementById("dateSupplied");
};

function handleClick() {
  alert(
    "Number: "+ numberInput.value +
      ", " +
      "Name: "+ nameInput.value +
      ", " +
      "Unit Price: "+ priceInput.value +
      ", " +
      "Quantity in stock: "+ quantityInput.value +
      ", " +
      "Supplier: "+ supplierInput.value +
      ", " +
      "Date: "+ dateInput.value
  );
}
