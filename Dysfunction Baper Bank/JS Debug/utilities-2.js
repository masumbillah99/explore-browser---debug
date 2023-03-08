function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = "";
    return inputFieldValue;
}

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;

    // string are not concatenate
    // const textElementValue = textElementValueString;
    const textElementValue = parseFloat(textElementValueString);

    // NaN, undefined : because function has no return
    // textElementValue;
    return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    
    // set text element by innerText method
    // textElement.value = newValue;
    textElement.innerText = newValue;
}
