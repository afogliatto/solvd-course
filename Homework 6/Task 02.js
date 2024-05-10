function highlightKeywords(template, keywords) {
  const highlighted = keywords.reduce((result, keyword, index) => {
    return result.replace(
      new RegExp(`\\$\\{${index}\\}`, 'g'),
      `<span class='highlight'>${keyword}</span>`,
    );
  }, template);

  return highlighted;
}

const keywords = ['JavaScript', 'template', 'tagged'];
const template =
  'Learn ${0} tagged templates to create custom ${1} literals for ${2} manipulation.';

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);
// Expected: "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation."
