document.getElementById('calculate-button').addEventListener('click', function(){
    const incomeInput = document.getElementById('income-input');
    const newIncomeText = incomeInput.value;
    const newIncome = parseInt (newIncomeText);
    console.log(newIncome);
});