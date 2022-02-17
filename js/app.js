document.getElementById('calculate-button').addEventListener('click', function(){
   //income input
    const incomeInput = document.getElementById('income-input');
    const newIncomeText = incomeInput.value;
    const newIncome = parseInt (newIncomeText);
    // console.log(newIncome);

    //Expenses input

    //food
    const foodInput = document.getElementById('food-input');
    const newFoodText = foodInput.value;
    const newFood = parseInt(newFoodText);

    //rent
    const rentInput = document.getElementById('rent-input');
    const newRentText = rentInput.value;
    const newRent = parseInt(newRentText);

    //clothes
    const clothInput = document.getElementById('cloth-input');
    const newClothText = clothInput.value;
    const newCloth = parseInt(newClothText);

    //total amount
    const totalExpense = document.getElementById('total-expense');
    const previousExpenseText = totalExpense.innerText;
    const previousTotalExpense = parseInt(previousExpenseText);
    const totalCost = newFood + newRent + newCloth;
    const newTotalExpense = previousTotalExpense + totalCost;
    totalExpense.innerText = newTotalExpense;

    //balance input
    const balance = document.getElementById('balance');
    const previousBlanceText = balance.innerText;
    const previousBalance = parseInt(previousBlanceText);
    const remainingBalance = newIncome - totalCost;
    const newBalance = previousBalance + remainingBalance;
    balance.innerText = newBalance;

    //remove input values
    foodInput.value = '';
    rentInput.value = '';
    clothInput.value = '';
    incomeInput.value = '';
    
});