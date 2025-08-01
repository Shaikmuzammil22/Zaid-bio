// Typing Effect (Cycles through roles)
const roles = ["College Student", "Android Developer", "YouTuber"];
let roleIndex = 0;
let charIndex = 0;
let typingForward = true;

function type() {
  const text = roles[roleIndex];
  const typingEl = document.getElementById("typing-text");

  if (typingForward) {
    if (charIndex < text.length) {
      typingEl.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      typingForward = false;
      setTimeout(type, 2000);
    }
  } else {
    if (charIndex > 0) {
      typingEl.textContent = text.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, 50);
    } else {
      typingForward = true;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 300);
    }
  }
}

window.onload = type;
