function checkAge() {
    const ageField = document.getElementById('age-field');
    const ageValue = ageField.value;
    const errorTag = document.getElementById('error');

    try {
        const age = parseInt(ageValue);
        if (isNaN(age)) {
            throw "Please enter a number";
        } else if (age < 18) {
            throw 'Baccha kaccha not allowed';
        }
        ageField.value = '';
        errorTag.innerHTML = "You are a Young man. Please try to convence your parents for marriage. Because marriage is the key to success";
        errorTag.classList.remove('error-msg');
        errorTag.classList.add('success-msg');
    }
    catch (err) {
        console.log('ERROR:', err);
        errorTag.innerHTML = 'ERROR: ' + err;
        errorTag.classList.add('error-msg')
    }
    finally {
        console.log('all done inside try catch');
    }
    console.log(6544334);
}