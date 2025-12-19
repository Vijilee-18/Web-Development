function converter() {
    let value = document.getElementById("input-section").value.trim();
    let base = Number(document.getElementById("base-value").value);
    let target = Number(document.getElementById("select-field").value);
    let resultField = document.getElementById("result-section");
    if (!value || isNaN(base) || isNaN(target)) {
        resultField.value = "Select valid values";
        return;
    }
    let decimalValue;
    decimalValue = parseInt(value, base);
    if (isNaN(decimalValue)) {
        resultField.value = "Invalid number for base " + base;
        return;
    }
    let result = decimalValue.toString(target);
    resultField.value = result.toUpperCase();
}
