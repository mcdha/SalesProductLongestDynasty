const productProfitArray = [
    { name: "Product A", profit: 1 },
    { name: "Product B", profit: -70 },
    { name: "Product C", profit: 100 },
    { name: "Product D", profit: -1 },
    { name: "Product E", profit: 500 },
    { name: "Product F", profit: 2 },
  ];
  

function topProduct(){
    if (productProfitArray.length === 0) {
      console.log("No Data");
      return;
    }
    let top = productProfitArray.reduce((back, forw) => (forw.profit > back.profit ? forw : back));
    console.log(`Top product = name: ${top.name}, profit: ${top.profit}`);
}
  
function bottomProduct() {
    if (productProfitArray.length === 0) {
      console.log("No Data");
      return;
    }
    let bottom = productProfitArray.reduce((back, forw) => (forw.profit < back.profit ? forw : back));
    console.log(`Bottom product = name: ${bottom.name}, profit: ${bottom.profit}`);
}
  
function closestToPositiveNumberProduct() {
    if (productProfitArray.length === 0) {
      console.log("No Data");
      return;
    }
  
    let closest = null;
  
    for (let i = 0; i < productProfitArray.length; i++) {
      const profit = productProfitArray[i].profit;
  
      if (profit >= 0 && (closest === null || profit < closest.profit)) {
        closest = productProfitArray[i];
      }
    }
  
    if (closest === null) {
      console.log("No product with a positive profit exists");
    } else {
      console.log(`Closest to Zero = name: ${closest.name}, profit: ${closest.profit}`);
    }
  }
  
  
  
  topProduct();
  bottomProduct();
  closestToPositiveNumberProduct();

