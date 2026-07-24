const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

const replacements = {
  'Header.tsx': { pattern: /https:\/\/lh3.googleusercontent.com\/[a-zA-Z0-9_-]+/g, replacement: 'https://placehold.co/150x50/FF6B00/FFF?text=Screw+Wood' },
  'Footer.tsx': { pattern: /https:\/\/lh3.googleusercontent.com\/[a-zA-Z0-9_-]+/g, replacement: 'https://placehold.co/150x50/FF6B00/FFF?text=Screw+Wood' },
  'Hero.tsx': { pattern: /https:\/\/lh3.googleusercontent.com\/[a-zA-Z0-9_-]+/g, replacement: 'https://loremflickr.com/800/1200/construction,site' },
  'Stats.tsx': { pattern: /https:\/\/lh3.googleusercontent.com\/[a-zA-Z0-9_-]+/g, replacement: 'https://loremflickr.com/600/800/architecture,building' },
  'FAQ.tsx': { pattern: /https:\/\/lh3.googleusercontent.com\/[a-zA-Z0-9_-]+/g, replacement: 'https://loremflickr.com/600/800/house,construction' },
  'Blog.tsx': { pattern: /https:\/\/lh3.googleusercontent.com\/[a-zA-Z0-9_-]+/g, replacement: 'https://loremflickr.com/600/400/construction,worker' },
  'Testimonials.tsx': { pattern: /https:\/\/lh3.googleusercontent.com\/[a-zA-Z0-9_-]+/g, replacement: 'https://loremflickr.com/100/100/face,professional' },
  'MaintenanceComparison.tsx': { pattern: /https:\/\/lh3.googleusercontent.com\/[a-zA-Z0-9_-]+/g, replacement: 'https://loremflickr.com/800/600/skyline,city' }
};

for (const [file, rule] of Object.entries(replacements)) {
  const filePath = path.join(componentsDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(rule.pattern, rule.replacement);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated images in ${file}`);
  }
}
