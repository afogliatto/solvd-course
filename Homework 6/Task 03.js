function multiline(strings, ...values) {
  const str = strings.reduce((result, string, i) => {
    return result + string + (values[i] || '');
  }, '');

  const lines = str.split('\n');

  let lineNumber = 1;
  const numberedLines = lines.map((line) => {
    if (line.trim() !== '') {
      const indentation = line.match(/^\s*/)[0];
      const trimmedLine = line.trim();
      const numberedLine = `${lineNumber} ${indentation} ${trimmedLine}`;
      lineNumber++;
      return numberedLine;
    } else {
      return '';
    }
  });

  // Join the lines back together with newline characters
  return numberedLines.join('\n');
}

// Example usage:
const code = multiline`
function add(a, b) {
    return a + b;
}
`;

console.log(code);
// Expected output:
// "1 function add(a, b) {
// 2     return a + b;
// 3 }"
