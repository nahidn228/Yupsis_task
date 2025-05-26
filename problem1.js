function calculateMojoConsumption(initialMojos) {
    let mojos = initialMojos;
    let mutkis = 0;
    let totalMojosEaten = 0;

    // First, eat all initial mojos to get mutkis
    totalMojosEaten += mojos;
    mutkis += mojos;
    mojos = 0;

    // Continue exchanging until we can't get more mojos
    while (mutkis >= 3) {
        // Exchange mutkis for mojos (3 mutkis → 1 mojo)
        const exchangedMojos = Math.floor(mutkis / 3);
        const remainingMutkis = mutkis % 3;

        mojos += exchangedMojos;
        mutkis = remainingMutkis;

        // Eat the newly acquired mojos
        totalMojosEaten += mojos;
        mutkis += mojos;
        mojos = 0;
    }

    return {
        totalMojosEaten: totalMojosEaten,
        leftoverMutkis: mutkis
    };
}

// Test with initial 10 mojos
const initialMojos = 7;
const result = calculateMojoConsumption(initialMojos);
console.log(`Total Mojos eaten: ${result.totalMojosEaten}, and Leftover Mutkis are: ${result.leftoverMutkis}`); 
 