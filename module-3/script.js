document.addEventListener("DOMContentLoaded", () => {
  const baseInput = document.getElementById("baseInput"); // Base input b
  const hightInput = document.getElementById("hightInput"); // Height input h
  const baseLine = document.querySelector('line[x1="50"][x2="250"]'); // Base line b
  const hightLine = document.querySelector('line[x1="100"][y1="150"]'); // Height line h
  const resultDisplay = document.getElementById("result"); // Display the result

  // Refactor the code to make it easy to reuse
  function handleLineHighlight(input, line) {
    input.addEventListener("focus", () => {
      line.setAttribute("stroke", "blue");
      line.setAttribute("stroke-width", "4"); // Make the line bold when I click on the input
    });

    input.addEventListener("blur", () => {
      line.setAttribute("stroke", "black");
      line.setAttribute("stroke-width", "2");
    });
  }

  // Call tha method to handle the line highlight
  handleLineHighlight(baseInput, baseLine);
  handleLineHighlight(hightInput, hightLine);

  // ================================= caculator start here ================================

  // Calculate the area of the triangle when the user clicks on the button
  resultBtn.addEventListener("click", () => {
    const baseValue = parseFloat(baseInput.value); // Get base value
    const heightValue = parseFloat(hightInput.value); // Get height value

    // check if the user enter valid numbers
    if (
      isNaN(baseValue) ||
      isNaN(heightValue) ||
      baseValue <= 0 ||
      heightValue <= 0
    ) {
      resultDisplay.textContent =
        "Please enter valid number and make sure it's greater than 0";
    } else {
      const area = (baseValue * heightValue) / 2; // Area formula calculater
      resultDisplay.textContent = `Area = ${area}`; // the Results
    }
  });
});
