var displayVal="";
var clickedButtonVal='';
var clickedOperatorVal ='';
var previousValue='';
var nextValue='';

function clearButton(){      
    displayVal= document.getElementById("display").value = document.getElementById("display").value.slice(0,-1)
}
function allclearButton(){      
    displayVal=document.getElementById("display").value = 0;
    previousValue=0;
    nextValue=0;
}
function numberButton(id){
   clickedButtonVal=document.getElementById(id).innerHTML
   displayVal+=clickedButtonVal
   document.getElementById("display").value=displayVal
   nextValue+= clickedButtonVal
}
function operatorClicked(operatorId){
    clickedOperatorVal=document.getElementById(operatorId).value
    displayVal+=clickedOperatorVal
    document.getElementById("display").value=displayVal

    if(previousValue==""){previousValue=0}
    if(nextValue==""){nextValue=0}
       

    switch (clickedOperatorVal) {
        case "-":
            var minus = 0;
            if (previousValue == 0) {
                minus = parseFloat(nextValue) - parseFloat(previousValue)
            }

            else {
                minus = parseFloat(previousValue) - parseFloat(nextValue)
            }
            previousValue = minus.toString()
            nextValue = ''
            break;
        default:
            var operation = parseFloat(previousValue) + parseFloat(nextValue)
            previousValue = operation.toString()
            nextValue = ''
    }
        
}
function Buttonequalsto() {
        
    switch (clickedOperatorVal) {
        case "+":
            var sum = parseFloat(previousValue) + parseFloat(nextValue);
            document.getElementById("display").value = sum;
            displayVal = sum;
            previousValue=sum;
            nextValue=''
            break;

        case "-":
            var difference = parseFloat(previousValue) - parseFloat(nextValue);
            document.getElementById("display").value = difference
            displayVal = difference;
            previousValue=difference;
            nextValue=''
            break;
        case "/":
            var divide = parseFloat(previousValue) / parseFloat(nextValue);
            document.getElementById("display").value = divide
            displayVal=divide;
            previousValue=divide
            nextValue=''
            break;

        case "*":
            var multiply = parseFloat(previousValue) * parseFloat(nextValue);
            document.getElementById("display").value = multiply
            displayVal=multiply;
            previousValue=multiply
            nextValue=''

    }
 
}
