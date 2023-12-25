function calculateBMI() {
    // Get weight and height input values
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    // Check if both weight and height are provided
    if (weight && height) {
        // Calculate BMI
        var bmi = weight / (height * height);

        // Display the result
        displayResult(bmi);
    } else {
        alert("Please enter both weight and height.");
    }
}

function displayResult(bmi) {
    var resultDiv = document.getElementById("result");

    // Round BMI to two decimal places
    bmi = bmi.toFixed(2);

    // Display the result
    resultDiv.innerHTML = "Your BMI is: " + bmi;

    // Additional interpretation of BMI categories
    if (bmi < 18.5) {
        resultDiv.innerHTML += "<br>Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        resultDiv.innerHTML += "<br>Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        resultDiv.innerHTML += "<br>Overweight";
    } else {
        resultDiv.innerHTML += "<br>Obese";
    }
}
