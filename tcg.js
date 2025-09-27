// Select DOM elements for interaction
const form = document.getElementById("testCaseForm");
const outputSection = document.getElementById("outputSection");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copyBtn");

// Listen for form submission to generate test case
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload on submit

  // Get input values trimmed to avoid extra spaces
  const title = document.getElementById("title").value.trim();
  const preconditions = document.getElementById("preconditions").value.trim();
  const steps = document.getElementById("steps").value.trim();
  const expectedResult = document.getElementById("expectedResult").value.trim();

  // Build the formatted test case string
  const testCaseTemplate = `
Test Case Title: ${title}

Preconditions:
${preconditions || "None"}

Test Steps:
${steps}

Expected Result:
${expectedResult}
  `.trim();

  // Show the output area and set the textarea content
  outputSection.style.display = "block";
  output.value = testCaseTemplate;
});

// Copy the generated test case to clipboard
copyBtn.addEventListener("click", () => {
  output.select(); // Select textarea content
  output.setSelectionRange(0, 99999); // For mobile devices

  // Use Clipboard API to copy text
  navigator.clipboard
    .writeText(output.value)
    .then(() => {
      copyBtn.textContent = "Copied!";
      setTimeout(() => {
        copyBtn.textContent = "Copy to Clipboard";
      }, 2000);
    })
    .catch((err) => {
      alert("Failed to copy text: ", err);
    });
});
