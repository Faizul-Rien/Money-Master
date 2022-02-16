
function amountInput(amount){
    
    const inputAmount = document.getElementById(amount +'-input');
    const inputValue = parseFloat(inputAmount.value);
    inputAmount.value = inputValue;
    return inputValue;
}
document.getElementById('calculate-btn').addEventListener('click',function(){
    
    const incomeValue = amountInput('income');
    const foodValue = amountInput('food');
    const rentValue = amountInput('rent');
    const clothesValue = amountInput('clothes');
    const negativeValue = document.getElementById('negative');

    if ((incomeValue<0 || foodValue <0 || rentValue <0 || clothesValue <0) ) {
        negativeValue.style.display = 'block';
    }
    else if(isNaN(incomeValue)|| isNaN(foodValue)|| isNaN(rentValue)|| isNaN(clothesValue)){
        negativeValue.style.display = 'block';
    }

    else{
        negativeValue.style.display = 'none';
    }
   
    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesValue = foodValue + rentValue + clothesValue;
    totalExpenses.innerText= totalExpensesValue;

    const wrongInput = document.getElementById('failed');

    if(totalExpensesValue > incomeValue){
        const BalanceLeft = document.getElementById('balance-left');
        const balanceValue = incomeValue - totalExpensesValue;
        BalanceLeft.innerText = balanceValue;
        wrongInput.style.display = 'block';
    }
   
    else{
        const BalanceLeft = document.getElementById('balance-left');
        const balanceValue = incomeValue - totalExpensesValue;
        BalanceLeft.innerText = balanceValue;
        wrongInput.style.display = 'none';

    }
})

document.getElementById('save-btn').addEventListener('click',function(){
    const saveMoney = amountInput('save');
    const inputValue = amountInput('income')

    const savingAmount = document.getElementById('saving-amount');
    const saveBalanceAmount = (saveMoney/100)* inputValue ;
    savingAmount.innerText = saveBalanceAmount;

    const balanceLeft = document.getElementById('balance-left');
    const balanceValue = balanceLeft.innerText;
    balanceLeft.innerText = balanceValue;

    const balanceRemaining = document.getElementById('remaining-balance');
    const worngInput = document.getElementById('money-short');

    if( balanceValue > saveBalanceAmount ){
        const remainingBalanceValue = balanceValue - saveBalanceAmount;
        balanceRemaining.innerText = remainingBalanceValue;
        worngInput.style.display = 'none';
    
    }
    else{
        const remainingBalanceValue = balanceValue - saveBalanceAmount;
        balanceRemaining.innerText = remainingBalanceValue;
        worngInput.style.display = 'block';
    }
   
})
