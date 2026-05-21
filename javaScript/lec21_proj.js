const quotes = [
  "The best way to predict the future is to create it. — Peter Drucker",

  "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",

  "Dream big and dare to fail. — Norman Vaughan",

  "Do something today that your future self will thank you for.",

  "Push yourself, because no one else is going to do it for you.",

  "Hard work beats talent when talent doesn’t work hard.",

  "Great things never come from comfort zones.",

  "Believe you can and you're halfway there. — Theodore Roosevelt",

  "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",

  "Your only limit is your mind.",

  "Small steps every day lead to big results."
];

const colors = ["red", "blue", "green", "orange", "purple"];

function generateQuote() {

  const text = document.getElementById("quotes");
  const box = document.getElementById("quote-box");

  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const colorIndex = Math.floor(Math.random() * colors.length);

  text.textContent = quotes[quoteIndex];

  box.style.backgroundColor = colors[colorIndex];
}

setInterval(generateQuote, 2000);