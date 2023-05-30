function topProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let maxProfit = Number.NEGATIVE_INFINITY;
  let topProduct = "";

  for (let i = 0; i < productProfitArray.length; i++) {
    const { name, profit } = productProfitArray[i];
    if (profit > maxProfit) {
      maxProfit = profit;
      topProduct = name;
    }
  }

  return topProduct;
}

function bottomProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let minProfit = Number.POSITIVE_INFINITY;
  let bottomProduct = "";

  for (let i = 0; i < productProfitArray.length; i++) {
    const { name, profit } = productProfitArray[i];
    if (profit < minProfit) {
      minProfit = profit;
      bottomProduct = name;
    }
  }

  return bottomProduct;
}

function zeroProfitProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let closestToZero = Number.POSITIVE_INFINITY;
  let zeroProfitProduct = "";

  for (let i = 0; i < productProfitArray.length; i++) {
    const { name, profit } = productProfitArray[i];
    if (Math.abs(profit) < Math.abs(closestToZero) || (profit > 0 && closestToZero === Math.abs(closestToZero))) {
      closestToZero = profit;
      zeroProfitProduct = name;
    }
  }

  return zeroProfitProduct;
}

// Test code
const productProfitArray = [
    { name: "Product A", profit: -75 },
    { name: "Product B", profit: -70 },
    { name: "Product C", profit: 93 },
    { name: "Product D", profit: 29 },
    { name: "Product E", profit: 88 },
    { name: "Product F", profit: 5 },
  ];

console.log("Highest sales profit: 93",topProduct(productProfitArray));
console.log("Lowest sales profit: -75", bottomProduct(productProfitArray));
console.log("Closest to 0: 5", zeroProfitProduct(productProfitArray));