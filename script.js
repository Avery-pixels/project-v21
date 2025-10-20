/*document.addEventListener('DOMContentLoaded', () => {
  const consoleDiv = document.getElementById('console');
  const lines = [
    '> Initializing birthday protocol...',
    '> Scanning for user: Vutlhari',
    '> Connection established with Big Brother 👾',
    '> Choose your path below:',
  ];

  const hasPlayed = localStorage.getItem('hasPlayedTyping');

  // Show everything instantly (no typing)
  function showStaticConsole() {
    consoleDiv.innerHTML = `
      <div class="line">${lines[0]}</div>
      <div class="line">${lines[1]}</div>
      <div class="line">${lines[2]}</div>
      <div class="line">${lines[3]}</div>
    `;
    showOptions();
  }

  // Typing animation for first visit
  function playTypingAnimation() {
    consoleDiv.innerHTML = '';
    let lineIndex = 0;

    function typeLine(text, callback) {
      const lineEl = document.createElement('div');
      lineEl.className = 'line';
      consoleDiv.appendChild(lineEl);

      let charIndex = 0;
      const typingSpeed = 50;

      const interval = setInterval(() => {
        lineEl.textContent = text.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex >= text.length) {
          clearInterval(interval);
          lineEl.textContent = text;
          if (callback) setTimeout(callback, 400);
        }
      }, typingSpeed);
    }

    function typeAllLines() {
      if (lineIndex < lines.length) {
        typeLine(lines[lineIndex], () => {
          lineIndex++;
          typeAllLines();
        });
      } else {
        showOptions();
        // Mark animation as played
        localStorage.setItem('hasPlayedTyping', 'true');
      }
    }

    typeAllLines();
  }

  // Show options under the lines
  function showOptions() {
    const options = document.createElement('div');
    options.className = 'options';
    options.innerHTML = `
      <button class="btn primary" onclick="choosePath('debug')"> Debug the System</button>
      <button class="btn primary" onclick="choosePath('chill')"> Run Birthday.exe</button>
      <button class="btn primary" onclick="choosePath('level')"> Start Level 21</button>
    `;
    consoleDiv.appendChild(options);
  }

  // Only play animation if not played before
  if (hasPlayed) {
    showStaticConsole();
  } else {
    playTypingAnimation();
  }
});

function choosePath(path) {
  if (path === 'debug') {
    window.location.href = 'debug.html';
  } else if (path === 'chill') {
    window.location.href = 'chill.html';
  } else if (path === 'level') {
    window.location.href = 'level.html';
  }
}*/

document.addEventListener('DOMContentLoaded', () => {
  const consoleDiv = document.getElementById('console');
  const lines = [
    '> Initializing birthday protocol...',
    '> Scanning for user: Vutlhari',
    '> Connection established with Big Brother 👾',
    '> Choose your path below:',
  ];

  const hasPlayed = localStorage.getItem('hasPlayedTyping');

  function showOptions() {
    const options = document.createElement('div');
    options.className = 'options';
    options.innerHTML = `
      <button class="btn primary" onclick="choosePath('debug')">Debug the System</button>
      <button class="btn primary" onclick="choosePath('chill')">Run Birthday.exe</button>
      <button class="btn primary" onclick="choosePath('level')">Start Level 21</button>
    `;
    consoleDiv.appendChild(options);
  }

  function showStaticConsole() {
    consoleDiv.innerHTML = '';
    lines.forEach((line) => {
      const div = document.createElement('div');
      div.className = 'line';
      div.textContent = line;
      consoleDiv.appendChild(div);
    });
    showOptions();
  }

  function playTypingAnimation() {
    consoleDiv.innerHTML = '';
    let lineIndex = 0;

    function typeLine(text, callback) {
      const lineEl = document.createElement('div');
      lineEl.className = 'line';
      consoleDiv.appendChild(lineEl);

      let charIndex = 0;
      const interval = setInterval(() => {
        lineEl.textContent = text.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex >= text.length) {
          clearInterval(interval);
          if (callback) setTimeout(callback, 400);
        }
      }, 50);
    }

    function typeAllLines() {
      if (lineIndex < lines.length) {
        typeLine(lines[lineIndex], () => {
          lineIndex++;
          typeAllLines();
        });
      } else {
        showOptions();
        localStorage.setItem('hasPlayedTyping', 'true');
      }
    }

    typeAllLines();
  }

  if (hasPlayed) {
    showStaticConsole();
  } else {
    playTypingAnimation();
  }
});

function choosePath(path) {
  if (path === 'debug') window.location.href = 'debug.html';
  else if (path === 'chill') window.location.href = 'chill.html';
  else if (path === 'level') window.location.href = 'level.html';
}
