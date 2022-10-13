document.getElementById('btn-deposit').addEventListener('click', function () {

    // step 1 : Get new deposited amount //

    const depositField = document.getElementById('deposit-field');
    const depositFieldAmount = depositField.value;
    const newDepositedAmount = parseFloat(depositFieldAmount);
    depositField.value = '';

    if (isNaN(newDepositedAmount)) {
        alert('Please provide a valid number.')
        return;
    }

    // step 2 : Get current deposit amount //

    const currentDeposit = document.getElementById('current-deposit');
    const currentDepositValue = currentDeposit.innerText;
    const currentDepositedAmount = parseFloat(currentDepositValue);

    // step 3 : Calculate total deposit amount //

    const totalDepositAmount = currentDepositedAmount + newDepositedAmount;
    currentDeposit.innerText = totalDepositAmount;

    // step 4 : Get current balance amount //

    const currentBalance = document.getElementById('current-balance');
    const currentBalanceValue = currentBalance.innerText;
    const currentBalanceAmount = parseFloat(currentBalanceValue);

    // step 5 : Calculate total balance amount //

    const totalBalanceAmount = currentBalanceAmount + newDepositedAmount;
    currentBalance.innerText = totalBalanceAmount;

})