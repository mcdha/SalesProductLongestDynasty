function longestDynasty(dynastyReign) {
    if (dynastyReign.length === 0) return "No Data";
  
    const convertYear = (year) => {
      const numeralMap = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
      };
  
      const romanNumeralRegex = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  
      if (!romanNumeralRegex.test(year)) return { value: year, valid: false };
  
      let result = 0;
      let i = 0;
  
      while (i < year.length) {
        if (numeralMap[year[i]] < numeralMap[year[i + 1]]) {
          result += numeralMap[year[i + 1]] - numeralMap[year[i]];
          i += 2;
        } else {
          result += numeralMap[year[i]];
          i += 1;
        }
      }
  
      return { value: year, valid: true, numeric: result };
    };
  
    let longestDuration = 0;
    let longestDynastyName = "";
    let longestRomanNumeral = "";
    let longestConvertedNumber = 0;
    let invalidDynastyName = "";
    let invalidRomanNumeral = "";
  
    for (let i = 0; i < dynastyReign.length; i++) {
      const currentDynasty = dynastyReign[i];
      const endYear = convertYear(currentDynasty.year);
  
      if (!endYear.valid) {
        invalidDynastyName = currentDynasty.name;
        invalidRomanNumeral = currentDynasty.year;
        continue;
      }
  
      const startYear = i === 0 ? 1000 : convertYear(dynastyReign[i - 1].year);
      const duration = endYear.numeric - startYear.numeric;
  
      if (duration > longestDuration) {
        longestDuration = duration;
        longestDynastyName = currentDynasty.name;
        longestRomanNumeral = currentDynasty.year;
        longestConvertedNumber = endYear.numeric;
      }
    }
  
    return {
      longest: {
        name: longestDynastyName,
        roman: longestRomanNumeral,
        converted: longestConvertedNumber,
      },
      invalid: {
        name: invalidDynastyName,
        roman: invalidRomanNumeral,
      },
    };
  }
  
  const dynastyReign = [
    { name: "San Dynasty", year: "MXLI" },
    { name: "Viloria Dynasty", year: "MCCCIIII" },
    { name: "Tan Dynasty", year: "MCCCXCVIII" },
    { name: "Bon Dynasty", year: "MCDXLV" },
    { name: "Maiko Dynasty", year: "MDCLXIV" },
    { name: "Paul Dynasty", year: "MCMXLIX" },
    { name: "Andre Dynasty", year: "MMMXICX" },
  ];
  
  const result = longestDynasty(dynastyReign);
  
  console.log("Longest reigning dynasty:");
  console.log("Name:", result.longest.name);
  console.log("Roman numeral:", result.longest.roman);
  console.log("Converted number:", result.longest.converted);
  
  console.log("Invalid entry:");
  console.log("Name:", result.invalid.name);
  console.log("Roman numeral:", result.invalid.roman);
  