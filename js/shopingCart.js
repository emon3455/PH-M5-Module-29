
function updateElementAmount(isIncrese, inputArea){
    const inputField = document.getElementById(inputArea);
    const inputValue = parseInt(inputField.value);

    let newInputValue;
    if(isIncrese === true){
        newInputValue = inputValue +1;
    }
    else{

        if(inputValue <= 0){
            inputField.value = 0;
            return 0;
        }
        newInputValue = inputValue -1;
    }

    inputField.value = newInputValue;

    return newInputValue;
}


// increment the phone:
document.getElementById("phone-Plus").addEventListener("click" , function(){

    let newInputValue=  updateElementAmount(true, "phone-input");
    
    let price = newInputValue * 1219;
    document.getElementById("phone-price").innerText = price;

});


// decrement the phone:
document.getElementById("phone-Minus").addEventListener("click" , function(){

    let newInputValue=  updateElementAmount(false, "phone-input");

    let price = newInputValue * 1219;
    document.getElementById("phone-price").innerText = price;

});


// increment the phone cover:
document.getElementById("phone-cover-plus").addEventListener("click" , function(){

    let newInputValue=  updateElementAmount(true, "phone-cover-input");

    let price = newInputValue * 59;
    document.getElementById("cover-price").innerText = price;

});

// decrement the phone cover:
document.getElementById("phone-cover-minus").addEventListener("click" , function(){

    let newInputValue=  updateElementAmount(false, "phone-cover-input");
    
    let price = newInputValue * 59;
    document.getElementById("cover-price").innerText = price;

});

