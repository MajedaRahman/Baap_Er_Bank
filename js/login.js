document.getElementById('btn-submit').addEventListener('click', function () {

    // step 1 : Get user-email value //

    const userEmailElement = document.getElementById('user-email');
    const userEmail = userEmailElement.value;

    // step 2 : Get user-password value //

    const userPasswordElement = document.getElementById('user-password');
    const userPassword = userPasswordElement.value;

    // step 3 : Check whether the email and password value match wth the default value //

    if (userEmail == 'kemonBanalam@firstClass.com' && userPassword == 'topSecret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Please provide valid User-email and Password!!!')
    }
})