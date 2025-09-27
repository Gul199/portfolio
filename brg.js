// Get references to elements we need
const form = document.getElementById("bugForm");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copyBtn");

// When the form is submitted
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload

  // Get all form values, trimmed to remove extra spaces
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const severity = document.getElementById("severity").value;
  const steps = document.getElementById("steps").value.trim();
  const environment = document.getElementById("environment").value.trim();

  // Create the formatted bug report text
  const report = `
🪲 Bug Title: ${title}

📋 Description:
${description}

🛑 Severity: ${severity}

🖥️ Environment: ${environment}

🔁 Steps to Reproduce:
${steps}
`;

  // Show the report in the textarea and reveal copy button
  output.value = report;
  output.style.display = "block";
  copyBtn.style.display = "inline-block";
});

// Copy button copies report text to clipboard and gives feedback
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(output.value).then(() => {
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy to Clipboard"), 2000);
  });
});

