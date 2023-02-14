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

document.getElementById("submit-pin").addEventListener("click" , function(){

    const generatedPins = document.getElementById("pin-display").value;
    const typedPin = document.getElementById("calc-input").value;

    if( generatedPins === typedPin){
        document.getElementById("pin-Matched").style.display="block";
        document.getElementById("pin-missmatched").style.display="none";

        document.getElementById("pin-display").value = "";
        document.getElementById("calc-input").value = "";
    }
    else{
        document.getElementById("pin-Matched").style.display="none";
        document.getElementById("pin-missmatched").style.display="block";

        const tryRemain = document.getElementById("try");
        let count = document.getElementById("try").innerText;

        if(count <= 0){
            document.getElementById("pin-display").value = "";
            document.getElementById("calc-input").value = "";
            tryRemain.innerText="0";
            return;
        }
        else{
            count--;
            tryRemain.innerText= count;
        }

    }

});