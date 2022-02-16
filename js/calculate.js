
function amountInput(product){
    const incomeInput = document.getElementById(product +'-input');
    const inputValue = parseFloat(incomeInput.value);
    return inputValue;

    
}


document.getElementById('calculate-btn').addEventListener('click',function(){
    
    const foodValue = amountInput('food');
    const rentValue = amountInput('rent');
    const clothesValue = amountInput('clothes');

    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesValue = foodValue + rentValue + clothesValue;
    totalExpenses.innerText= totalExpensesValue;
   


})

