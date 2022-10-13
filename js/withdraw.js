document.getElementById('btn-withdraw').addEventListener('click', function () {

    // step 1 : Get new withdraw amount //

    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldAmount = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawFieldAmount);
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number.')
        return;
    }

    // step 2 : Get current withdraw amount //

    const currentWithdraw = document.getElementById('current-withdraw');
    const currentWithdrawValue = currentWithdraw.innerText;
    const currentWithdrawAmount = parseFloat(currentWithdrawValue);

    // step 4 : Get current balance amount //

    const currentBalance = document.getElementById('current-balance');
    const currentBalanceValue = currentBalance.innerText;
    const currentBalanceAmount = parseFloat(currentBalanceValue);

    if (newWithdrawAmount > currentBalanceAmount) {
        alert('Tumar bap er eto taka nai. Tum gareeb ho, tumhari ma-baap ne tumhe gareeb janam diye.... Shala fokirni !!!');
        return;
    }

    // step 3 : Calculate total deposit amount //

    const totalWithdrawAmount = currentWithdrawAmount + newWithdrawAmount;
    currentWithdraw.innerText = totalWithdrawAmount;

    // step 5 : Calculate total balance amount //

    const totalBalanceAmount = currentBalanceAmount - newWithdrawAmount;
    currentBalance.innerText = totalBalanceAmount;

})