const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'Projects.tsx');
let content = fs.readFileSync(filePath, 'utf8');

let matchCount = 0;
content = content.replace(/https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9_-]+/g, (match) => {
  matchCount++;
  // Projects images (4)
  if (matchCount >= 1 && matchCount <= 4) {
    return 'https://loremflickr.com/800/600/construction,building';
  }
  // Main expert image
  if (matchCount === 5) {
    return 'https://loremflickr.com/800/1000/architect,portrait';
  }
  // Other small team images
  if (matchCount >= 6 && matchCount <= 9) {
    return 'https://loremflickr.com/400/400/face,professional';
  }
  // Logos at the bottom
  if (matchCount >= 10 && matchCount <= 14) {
    return 'https://placehold.co/150x50/F5F5F5/888?text=Client+Logo';
  }
  return match;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed Projects.tsx');
