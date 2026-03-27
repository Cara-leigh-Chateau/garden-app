// Ask the user for the season and plant type
let season = prompt("Enter the season (summer/winter):").toLowerCase();
let plantType = prompt("Enter the plant type (flower/vegetable):").toLowerCase();

// Object to hold advice for seasons and plant types
const adviceData = {
    season: {
        summer: "Water your plants regularly and provide some shade.\n",
        winter: "Protect your plants from frost with covers.\n"
    },
    plantType: {
        flower: "Use fertiliser to encourage blooms.",
        vegetable: "Keep an eye out for pests!"
    }
};

// Function to get advice from the object
function getAdvice(type, value) {
    if (adviceData[type] && adviceData[type][value]) {
        return adviceData[type][value];
    } else {
        return type === "season" ? "No advice for this season.\n" : "No advice for this type of plant.";
    }
}

// Get advice for the season and plant type
let advice = getAdvice("season", season) + getAdvice("plantType", plantType);

// Show the advice
console.log(advice);