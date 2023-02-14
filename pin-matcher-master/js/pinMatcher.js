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