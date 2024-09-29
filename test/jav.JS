const reset = document.getElementById("ResetButton");
const icrease = document.getElementById("IncreaseButton")
const label = document.getElementById("Label");
let count = 1;
label.textContent = count;
increase.onclick = function()
{
    count ++;
    label.textContent = count;
}
reset.onclick = function()
{
    count = 0;
    label.textContent = count;
}
