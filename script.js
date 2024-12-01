const commands = {
  help: `Available commands:
  - about
  - skills
  - projects
  - contact
  - resume
  - clear`,

  about: `🚀 Aspiring Cybersecurity Specialist | Software Developer | Electronics & Communication Engineering Student
👨‍🎓 2nd Year, RCC Institute of Information Technology | GDSC Member
🌐 Passionate about Technology, Cybersecurity, and Problem-Solving

I am a highly motivated electronics and communication engineering student at RCCIIT with a strong passion for technology, software development, and cybersecurity. 
With a knack for learning and applying new concepts, I am actively exploring fields like Linux, Python, C, C++, DSA, and Bash scripting to build a solid foundation for my cybersecurity career.`,

  skills: `Skills:
  ├─ Programming Languages:
  │   ├─ Python
  │   ├─ C
  │   ├─ C++
  ├─ Tools & Platforms:
  │   ├─ Linux
  │   ├─ Bash scripting
  |   ├─ Github
  |   ├─ OpenCV
  |   ├─ NPM (Node Package Manager)
  |   ├─ TTS (Text-to-Speech)
  └─ Concepts:
      ├─ DSA (Data Structures and Algorithms)
      ├─ Docker
      ├─ Git
      ├─ Linux System Usage and Administration
      ├─ Operating Systems
      ├─ Web Scraping
      ├─ Kivy
      ├─ APK conversion and debugging`,

  projects: `GitHub Projects:
  ├─ Educational Ransomware : https://github.com/Joydeep2005Banik/ransomware
  ├─ Web Scraper : https://github.com/Joydeep2005Banik/Web_Scraper
  ├─ Face Detection : https://github.com/Joydeep2005Banik/Face-Detection
  └─ AI Chatbot for DoJ : Currently under further development...`,

  contact: `Contact Information:
  ├─ Email: joydeepbanik41@gmail.com
  ├─ LinkedIn: https://www.linkedin.com/in/joydeep-banik-21aa80275/
  ├─ GitHub: https://github.com/Joydeep2005Banik
  ├─ Instagram: https://www.instagram.com/lone.wolf521/
  └─ YouTube: https://www.youtube.com/@JoydeepBanik-o1b`,

  resume: `Fetching resume details...`,

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
  const resumeFileSize = "65.0 KB"; // Replace with the actual file size if needed

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
