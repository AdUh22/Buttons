function isNumeric(n) {
  return !isNaN(n);
}

document.addEventListener("DOMContentLoaded", function () 
{
  const getItButton = document.getElementById("getit");
  const lowNumberInput = document.getElementById("MaleCislo");
  const highNumberInput = document.getElementById("VelkeCislo");
  const randomNumberOutput = document.getElementById("NahodneCislo");

  if (getItButton) 
  {
    getItButton.addEventListener("click", function (event) 
    {
      event.preventDefault(); // Equivalent to `return false;` for links/buttons

      const numLow = lowNumberInput.value;
      const numHigh = highNumberInput.value;

      const lowFloat = parseFloat(numLow);
      const highFloat = parseFloat(numHigh);
      const adjustedHigh = highFloat - lowFloat + 1;
      const numRand = Math.floor(Math.random() * adjustedHigh) + lowFloat;

      if 
      (
        isNumeric(numLow) &&
        isNumeric(numHigh) &&
        lowFloat <= highFloat &&
        numLow !== "" &&
        numHigh !== ""
      )
        randomNumberOutput.textContent = numRand;
      else
        randomNumberOutput.textContent = "Careful now...";
    });
  }

  const textInputs = document.querySelectorAll('input[type="text"]');

  textInputs.forEach(function (input) 
  {
    input.dataset.firstClick = "true";

    input.addEventListener("focus", function () 
    {
      if (input.dataset.firstClick === "true") 
      {
        input.value = "";
        input.dataset.firstClick = "false";
        input.style.color = "black";
      }
    });
  });
});