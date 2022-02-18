function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    //error text/////////
    if (amountValue < 0){
        alert('Entered number cannot be negative');
    }
    //clear input field
    //inputField.value = '';
        return amountValue;
}

document.getElementById('calculate-button').addEventListener('click',function(){

    const foodInput = getInputValue('food-input');
    const rentInput = getInputValue('rent-input');
    const clothInput = getInputValue('cloth-input');
    let incomeInput = getInputValue('income-input');//inputfield

    const totalExpense = document.getElementById('total-expense');
    const previousExpenseText = totalExpense.innerText;
    const previousTotalExpense = parseInt(previousExpenseText);
    const totalCost = previousTotalExpense + foodInput + rentInput + clothInput;
    totalExpense.innerText = totalCost;

   //error text
   ////////////////////////////
   if(totalCost > incomeInput){
       alert ('your cost is higher than your income');
   }

   //balance input///////
    let balance = document.getElementById('balance');
    const previousBlanceText = balance.innerText;
    const previousBalance = parseInt(previousBlanceText);
    let remainingBalance = previousBalance + (incomeInput - totalCost);

    // const newBalance = previousBalance + remainingBalance;
    /////////////////////////////////////
    balance.innerText = remainingBalance;
}); 

document.getElementById('savings-button').addEventListener('click',function(){
    const totalSave = document.getElementById('savings-amount');
    const previousSaveText = totalSave.innerText;
    const previousTotalSave = parseInt(previousSaveText);
    let incomeInput2 = getInputValue('income-input');
    const saveInput = getInputValue('savings-input');//inputfield
    const saveCalculate = previousTotalSave+(incomeInput2 * saveInput)/100;
    totalSave.innerText = saveCalculate;
    
    // if(saveCalculate > remainingBalance){
    //     alert ('saving limit exceeded');
    // }
    //

    debugger;
    const totalBalance = document.getElementById('remaining-balance');
    const previousBalanceText = totalBalance.innerText;
    const previousTotalSave1 = parseInt(previousBalanceText);
    const remBalance = parseInt(balance.innerText) - saveCalculate ;
    totalBalance.innerText = remBalance
});