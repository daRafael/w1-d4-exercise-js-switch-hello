console.log("Ready to go! 🚀");

// const language = prompt(
//   "In which language do you want to see the message? (Spanish, French, Italian, Portuguese, German, Dutch, Maori English)"
// );

// ------------------------------
// If ... else code
// ------------------------------
// if (language === "Spanish") {
//   console.log("Hola, mundo!");
// } else if (language === "French") {
//   console.log("Bonjour, le monde!");
// } else if (language === "Italian") {
//   console.log("Ciao, mondo!");
// } else {
//   console.log("Hello, world!");
// }

switch (language) {
  case 'Spanish':
    console.log('Hola, mundo!');
    break;
  case 'French':
    console.log('Bonjour, le monde!');
    break;
  case 'Italian':
    console.log('Ciao, mondo!');
    break;
  default:
    console.log('Hello, world!');
}