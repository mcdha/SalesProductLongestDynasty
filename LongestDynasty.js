function longestDynasty(dynastyReign) {
    if (dynastyReign.length === 0) {
      return "No Data";
    }
  
    let longestDuration = 0;
    let longestDynastyName = "";
  
    for (const [name, romanNumeral] of dynastyReign) {
      const endYear = convertYear(romanNumeral);
      if (endYear === "Invalid") {
        continue;
      }
  
      const duration = endYear - 1000 + 1;
  
      if (duration > longestDuration) {
        longestDuration = duration;
        longestDynastyName = name;
      }
    }
  
    return longestDynastyName;
  }
  
  function convertYear(romanNumeral) {
    const numeralValues = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
  
    let year = 0;
    let numeral = romanNumeral;
  
    for (const [numeralKey, numeralValue] of Object.entries(numeralValues)) {
      while (numeral.startsWith(numeralKey)) {
        year += numeralValue;
        numeral = numeral.slice(numeralKey.length);
      }
    }
  
    if (numeral.length > 0) {
      return "Invalid";
    }
  
    return year;
  }
  
  // Test code
  const dynastyReign = [
    ["San Dynasty", "MXLI"],
    ["Viloria Dynasty", "MCCCIIII"],
    ["Tan Dynasty", "MCCCXCVIII"],
    ["Bon Dynasty", "MCDXLV"],
    ["Maiko Dynasty", "MDCLXIV"],
    ["Andre Dynasty", "MCMXLIX"],
    ["Paul Dynasty", "MMMXICX"]
  ];
  
  const longestDynastyName = longestDynasty(dynastyReign);
  console.log(longestDynastyName);