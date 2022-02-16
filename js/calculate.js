
function amountInput(amount){
    const incomeInput = document.getElementById(amount +'-input');
    const inputValue = parseFloat(incomeInput.value);

    return inputValue;

    
}


document.getElementById('calculate-btn').addEventListener('click',function(){
    
    const inputValue = amountInput('income');
    const foodValue = amountInput('food');
    const rentValue = amountInput('rent');
    const clothesValue = amountInput('clothes');

    const wrongInput = document.getElementById('failed');

   

    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesValue = foodValue + rentValue + clothesValue;
    totalExpenses.innerText= totalExpensesValue;

    if(totalExpensesValue > inputValue){
        const BalanceLeft = document.getElementById('balance-left');
        const balanceValue = inputValue - totalExpensesValue;
        BalanceLeft.innerText = balanceValue;
        wrongInput.style.display = 'block';
    }
   
    else{
        const BalanceLeft = document.getElementById('balance-left');
        const balanceValue = inputValue - totalExpensesValue;
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
