function getPin(){
    const pin  = generatePin();
    const randomString = pin + "";

    if(randomString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random; 
}


// display-pin:
document.getElementById("get-pin").addEventListener("click" , function(){
    const pin = getPin();
    const displayField = document.getElementById("pin-display");
    displayField.value=pin;
});


// display calculator digit:
document.getElementById("calculator").addEventListener("click" , function(event){

        const numbers = event.target.innerText;

        const inputField = document.getElementById("calc-input");
        const prevNum = inputField.value;

        if(isNaN(numbers)){
            if(numbers=="C"){
                inputField.value="";
            }
            else if(numbers == "<"){
                let ar = prevNum.split("");
                ar.pop();
                let remain = ar.join("");
                inputField.value = remain;
            }
        }
        else{
            const newNumber = prevNum + numbers;
            inputField.value = newNumber;
        }

});