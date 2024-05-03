const translations = {
  en: {
    greet: 'Hello',
    intro: 'Welcome to our website',
  },
  fr: {
    greet: 'Bonjour',
    intro: 'Bienvenue sur notre site web',
  },
};

function localize(strings, ...keys) {
  // Get translations for the selected language
  const translation = translations[language] || translations['en'];

  // Replace placeholders with translations
  let result = '';
  keys.forEach((key, i) => {
    result += strings[i];
    result += translation[key];
  });
  result += strings[strings.length - 1]; // Add the last string part

  return result;
}

// Example usage:
const language = 'fr'; // Change to "en" for English
const greeting = 'greet';
const introduction = 'intro';

const localizedGreeting = localize`${greeting}`;
const localizedIntroduction = localize`${introduction}`;

console.log(localizedGreeting); // Expected: "Bonjour" (for language "fr")
console.log(localizedIntroduction); // Expected: "Bienvenue sur notre site web" (for language "fr")
