

function getDiscount(){
var priceVal = document.getElementById('price').value;
var discountVal = document.getElementById('percent').value; 
parseFloat(priceVal);
parseFloat(discountVal);  
var calculatedDiscount = priceVal * discountVal;
var endResult = priceVal - calculatedDiscount;

document.getElementById('finalPriceDiv').innerHTML = 'Your Final Price: $' + endResult;
document.getElementById('finalPriceDiv').classList.add("fade-in");


}