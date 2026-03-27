// Ask the user for the season and plant type
let season = prompt("Enter the season (summer/winter):").toLowerCase();
let plantType = prompt("Enter the plant type (flower/vegetable):").toLowerCase();

// Function to get advice based on type and value
function getAdvice(type, value) {
    let advice = "";

    if (type === "season") {
        if (value === "summer") advice = "Water your plants regularly and provide some shade.\n";
        else if (value === "winter") advice = "Protect your plants from frost with covers.\n";
        else advice = "No advice for this season.\n";
    } 
    else if (type === "plantType") {
        if (value === "flower") advice = "Use fertiliser to encourage blooms.";
        else if (value === "vegetable") advice = "Keep an eye out for pests!";
        else advice = "No advice for this type of plant.";
    }

    return advice;
}

// Get advice for the season and plant type
let advice = getAdvice("season", season) + getAdvice("plantType", plantType);

// Show the advice
console.log(advice);