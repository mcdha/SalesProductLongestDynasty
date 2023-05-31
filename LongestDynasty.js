let dynastyReign = [
    { name: "San Dynasty", year: "MXLIA",},
    { name: "Viloria Dynasty", year: "MCCCIIIIA",},
    { name: "Tan Dynasty", year: "MCCCXCVIIIA",},
    { name: "Bon Dynasty", year: "MCDXLVA",},
    { name: "Maiko Dynasty", year: "MDCLXIVA",},
    { name: "Paul Dynasty", year: "MCMXLIXA",},
    { name: "Andre Dynasty", year: "MMMXICXA", },
];

function longestDynasty()  {
    if (dynastyReign.length === 0) {
        return "No Data";
    }

    let longestReign = 0;
    let longestDynastyName = "";

    dynastyReign.forEach((currentDynasty) => {
        let endYear = convertYear(currentDynasty.year);

        if (endYear === "Invalid") {
            return longestReign;
        }

    let reignDuration = endYear - 1000;

        if (reignDuration > longestReign) {
            longestReign = reignDuration;
            longestDynastyName = currentDynasty.name;
        }
    });

    return longestDynastyName;
};


function convertYear(romanYear){
    const romanNumerals = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
    };

    let year = 0;
    for (let i = 0; i < romanYear.length; i++) {
        const currentSymbol = romanYear[i];
        const nextSymbol = romanYear[i + 1];
            if (romanNumerals[currentSymbol] < romanNumerals[nextSymbol]) {
                year -= romanNumerals[currentSymbol];
            } else {
                year += romanNumerals[currentSymbol];
            }
    }
    return year;
};

console.log("Longest reigning dynasty is:", longestDynasty());