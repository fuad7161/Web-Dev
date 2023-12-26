const number = 1+parseInt((100*Math.random())%10);
// console.log(number);
function checking_number(){
    gessVal = document.getElementById('number').value
    if(gessVal == ""){
        alert("Filed is empty")
        return ;
    }
    gessVal = Number(gessVal)
    if(gessVal < 0 || gessVal > 10){
        alert("Number should be inclusiv between 1 to 10")
        return
    }
    var showReport = document.getElementById('report')
    if(number > gessVal){
        showReport.innerHTML = `${gessVal} is too low`;
        showReport.style.color = 'red';
    }else if(number < gessVal){
        showReport.innerHTML = `${gessVal} is too high`;
        showReport.style.color = 'red';
    }else{
        showReport.innerHTML = `Congratulations! You guess the correct number`;
        showReport.style.color = 'Green';
    }
    document.getElementById('number').value = ''
}