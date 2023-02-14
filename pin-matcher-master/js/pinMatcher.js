function getPin(){
    const random  = generatePin();
    const randomString = random + "";

    if(randomString.length === 4){
        return random;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random*1000);
    return random; 
}

