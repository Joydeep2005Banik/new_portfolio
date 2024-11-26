const commands = {
  help: "Available commands: about, skills, projects, contact, resume, clear",
  about: "Hi, I'm Joydeep Banik, a passionate developer with experience in Linux, Python, C, C++, and Bash scripting.",
  skills: "Skills: Linux, Python, C, C++, DSA, Bash scripting.",
  projects: "GitHub Projects: \n1. Educational Ransomware \n2. Web Scraper \n3. Face Detection \n4. AI Chatbot for DoJ",
  contact: "Email: joydeep.banik@example.com\nLinkedIn: linkedin.com/in/joydeepbanik\nGitHub: github.com/joydeepbanik",
  resume: "Fetching resume details...",
  clear: "",
};

const terminalOutput = document.getElementById("output");
const commandInput = document.getElementById("commandInput");

let commandHistory = [];
let historyIndex = -1;

// Welcome Message with Typing Animation
const welcomeMessage = "Welcome to my portfolio. Type 'help' for available commands.";
typeText(welcomeMessage, terminalOutput, () => {
  addNewLine(); // Add a new input line after welcome message
});

// Event Listener for Enter Key
commandInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const input = commandInput.value.trim();
    if (input) {
      commandHistory.push(input);
      historyIndex = commandHistory.length;
    }
    commandInput.value = ""; // Clear input field
    processCommand(input);
  }
});

// Event Listener for Arrow Keys
commandInput.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    if (historyIndex > 0) {
      historyIndex--;
      commandInput.value = commandHistory[historyIndex];
    }
  } else if (e.key === "ArrowDown") {
    if (historyIndex < commandHistory.length - 1) {
      historyIndex++;
      commandInput.value = commandHistory[historyIndex];
    } else {
      commandInput.value = "";
    }
  }
});

// Process Commands
function processCommand(input) {
  if (input === "clear") {
    terminalOutput.innerHTML = "";
    addNewLine();
    return;
  }

  if (input === "resume") {
    displayResumeSection();
    return;
  }

  const response = commands[input] || `Command not found: ${input}\nType "help" for a list of commands.`;
  typeText(response, terminalOutput, () => {
    addNewLine();
  });
}

// Typing Text Animation
function typeText(text, element, callback) {
  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text[index];
      index++;
    } else {
      clearInterval(interval);
      element.innerHTML += "\n";
      if (callback) callback();
    }
  }, 50); // Adjust typing speed
}

// Add New Input Line
function addNewLine() {
  terminalOutput.innerHTML += '\n$ ';
  terminalOutput.scrollTop = terminalOutput.scrollHeight; // Auto-scroll to bottom
}

// Display Resume Section
function displayResumeSection() {
  const resumeFileName = "joydeep-banik.pdf";
  const resumeFileSize = "150 KB"; // Replace with the actual file size if needed

  const resumeInfo = `Resume: ${resumeFileName}\nSize: ${resumeFileSize}\n\n`;
  typeText(resumeInfo, terminalOutput, () => {
    // Add download link
    const downloadLink = document.createElement("a");
    downloadLink.href = "https://joydeep2005banik.github.io/new_portfolio/assets/joydeep-banik.pdf"; // Replace with the actual path to your PDF file
    downloadLink.download = resumeFileName;
    downloadLink.textContent = "Click here to download.";
    downloadLink.style.color = "#0f0"; // Green color for the link
    downloadLink.style.textDecoration = "none";
    terminalOutput.appendChild(downloadLink);
    addNewLine();
  });
}
