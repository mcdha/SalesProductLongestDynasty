let dynastyReign = [
    // { name: "San Dynasty", year: "MXLI",},
    // { name: "Viloria Dynasty", year: "MCCCIIII",},
    // { name: "Tan Dynasty", year: "MCCCXCVIII",},
    // { name: "Bon Dynasty", year: "MCDXLV",},
    // { name: "Maiko Dynasty", year: "MDCLXIV",},
    // { name: "Paul Dynasty", year: "MCMXLIX",},
    // { name: "Andre Dynasty", year: "MMMXICX", },
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
            return "Invalid";
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


