// DRY ---> Do Not Repeat Yourself
// ({[()]})  if any bracket start first then this bracket is end last

document.getElementById("btn-deposit").addEventListener("click", function () {
    /* 
      1. get the element by id
      2. get the value from the element
      3. convert string value to a number
    */
    const newDepositAmount = getInputFieldValueById("deposit-field");
    /* 
      1. get previous deposit total by id
  
    */
    const previousDepositTotal = getTextElementValueById("deposit-total");

    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    console.log(newDepositTotal, previousDepositTotal, newDepositAmount);
    // set deposit total value
    setTextElementValueById("deposit-total", newDepositTotal);

    // get previous balance by using the function
    // error - reference error
    // const previousBalanceTotal = getextElementValueById("balance-total");
    const previousBalanceTotal = getTextElementValueById("balance-total");
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById("balance-total", newBalanceTotal);

    // error - syntax error
    // );
});