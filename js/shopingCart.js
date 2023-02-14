// remove phone:
document.getElementById("remove-phone").addEventListener("click" , function(event){
    
    event.target.parentNode.parentNode.parentNode.style.display="none";
    
});

// remove cover:
document.getElementById("remove-cover").addEventListener("click" , function(event){

    event.target.parentNode.parentNode.parentNode.style.display="none";
    
});

// set element value by id:
function setElementValueByID(elementID , value){
    const element = document.getElementById(elementID);
    element.innerText= value;
}

// update product amount:
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

// update product price depending on the amount
function updatePrice(newInputValue , singleElementPrice , displayField){

    let price = newInputValue * singleElementPrice;
    document.getElementById(displayField).innerText = price;

}

// set totall price with tax
function setTotall(){
    const phoneTotalPrice = parseInt(document.getElementById("phone-price").innerText);
    const coverTotalPrice = parseInt(document.getElementById("cover-price").innerText);

    const subTotal = phoneTotalPrice + coverTotalPrice;
    setElementValueByID("subTotal",subTotal);

    const taxString = (subTotal * 0.1).toFixed(2);
    const tax = parseFloat(taxString);
    setElementValueByID("tax",tax);

    const finalTotal = subTotal + tax;
    setElementValueByID("total",finalTotal);
}


// increment the phone:
document.getElementById("phone-Plus").addEventListener("click" , function(){

    let newInputValue=  updateElementAmount(true, "phone-input");
    
    updatePrice(newInputValue, 1219, "phone-price" );

    setTotall();

});


// decrement the phone:
document.getElementById("phone-Minus").addEventListener("click" , function(){

    let newInputValue=  updateElementAmount(false, "phone-input");
    
    updatePrice(newInputValue, 1219, "phone-price" );

    setTotall();
});


// increment the phone cover:
document.getElementById("phone-cover-plus").addEventListener("click" , function(){

    let newInputValue=  updateElementAmount(true, "phone-cover-input");

        
    updatePrice(newInputValue, 59, "cover-price" );

    setTotall();
});

// decrement the phone cover:
document.getElementById("phone-cover-minus").addEventListener("click" , function(){

    let newInputValue=  updateElementAmount(false, "phone-cover-input");
    
    updatePrice(newInputValue, 59, "cover-price" );

    setTotall();
});
