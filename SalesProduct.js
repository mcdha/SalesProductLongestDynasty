const productProfitArray = [
    { name: "Product A", profit: -75 },
    { name: "Product B", profit: -70 },
    { name: "Product C", profit: 93 },
    { name: "Product D", profit: 5 },
    { name: "Product E", profit: 88 },
    { name: "Product F", profit: 29 },
];

    const topProduct=()=>{
        let top = productProfitArray.reduce((prev,curr)=> curr.profit > prev.profit ? curr : prev)
        console.log(`Top product = name: ${top.name}, profit: ${top.profit}`);
    };
    topProduct();

    const bottomProduct=()=>{
        let bottom = productProfitArray.reduce((prev,curr)=> curr.profit < prev.profit ? curr : prev)
        console.log(`Bottom product = name: ${bottom.name}, profit: ${bottom.profit}`);
    };
    bottomProduct();

    const zeroProfitProduct=()=>{
        let zero = productProfitArray.reduce((prev,curr)=> Math.abs(curr.profit) < Math.abs(prev.profit) ? curr : prev)
        console.log(`Zero Profit product = name: ${zero.name}, profit: ${zero.profit}`);
    };
    zeroProfitProduct();