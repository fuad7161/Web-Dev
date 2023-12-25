function generateText(value){
    const text = document.getElementById("result");
    text.innerHTML = 'BMI is : '+value
    const suggestion = document.getElementById("suggestion");
    if(value < 18.5){
        suggestion.innerHTML = "Your condition is Under Weight"
    }else if(value >= 18.5 && value < 25){
        suggestion.innerHTML = "Your condition is Normal Weight"
    }else if(value >= 25 && value < 30){
        suggestion.innerHTML = "Your condition is Over Weight"
    }else{
        suggestion.innerHTML = "Your condition is Obese"
    }
}
function calculateBMI(){
    console.log('Yes');
    const height = document.getElementById('height').value
    const weight = document.getElementById('weight').value
    if(height && weight){
        const bmi = weight / (height**2)
        generateText(bmi.toFixed(2))
    }else{
        alert('Please enter both weight and height')
    }
}