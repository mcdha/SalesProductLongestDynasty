const productProfitArray = [
    // { name: "Product A", profit: -75 },
    // { name: "Product B", profit: -70 },
    // { name: "Product C", profit: 100 },
    // { name: "Product D", profit: 200 },
    // { name: "Product E", profit: 500 },
    // { name: "Product F", profit: -1 },
  ];
  

function topProduct(){
    if (productProfitArray.length === 0) {
      console.log("No Data");
      return;
    }
    let top = productProfitArray.reduce((prev, curr) => (curr.profit > prev.profit ? curr : prev));
    console.log(`Top product = name: ${top.name}, profit: ${top.profit}`);
}
  
function bottomProduct() {
    if (productProfitArray.length === 0) {
      console.log("No Data");
      return;
    }
    let bottom = productProfitArray.reduce((prev, curr) => (curr.profit < prev.profit ? curr : prev));
    console.log(`Bottom product = name: ${bottom.name}, profit: ${bottom.profit}`);
}
  
function closestToZeroProfitProduct() {
    if (productProfitArray.length === 0) {
      console.log("No Data");
      return;
    }
    let zero = productProfitArray.reduce((prev, curr) => (Math.abs(curr.profit) < Math.abs(prev.profit) ? curr : prev));
    console.log(`Zero Profit product = name: ${zero.name}, profit: ${zero.profit}`);
}
  

  topProduct();
  bottomProduct();
  closestToZeroProfitProduct();
