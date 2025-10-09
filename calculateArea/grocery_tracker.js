let grocery1;
let grocery2;
let grocery3;

function calculateTotalAmount() {
    grocery1 = parseFloat(document.getElementById('grocery1').value);
    grocery2 = parseFloat(document.getElementById('grocery2').value);
    grocery3 = parseFloat(document.getElementById('grocery3').value);
    let totalAmount = grocery1 + grocery2 + grocery3;
    document.getElementById('result').innerText = `The total amount is: ${totalAmount}`;
}

const groceryCalculation = function calculateAmount(groceryValue1, groceryValue2, groceryValue3) {
    console.log(groceryValue1);
    
    let totalAmount = groceryValue1 + groceryValue2 + groceryValue3;
    document.getElementById('result').innerText = `The new total amount is ${totalAmount}`;
}

const groceryCalculationArrowFunction = (groceryParameter1, groceryParameter2, groceryParameter3) => {
    let totalAmount = groceryParameter1 + groceryParameter2 + groceryParameter3;
    document.getElementById('result').innerText = `The new value by arrow function ${totalAmount}`
}