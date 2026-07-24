const fs = require('fs');
const path = require('path');

const constructionImages = [
  '1503387762-592deb58ef4e',
  '1541888081628-db37b2d1844b',
  '1581091226825-a6a2a5aee158',
  '1504307651254-35680f356f58',
  '1531834684534-1147a29ee2d9',
  '1486406146926-c627a92ad1ab',
  '1508450859948-4e04fabaa4ea',
  '1590497526732-c24747db3d9d',
  '1513694203232-719a280e022f',
  '1479839672679-a4648d613792'
];

const portraitImages = [
  '1573496339141-b6c8e053eca2',
  '1580489944761-15a19d654956',
  '1507003211169-0a1dd7228f2d',
  '1494790108377-be9c29b29330',
  '1535713875002-d1d0cf377fde',
  '1500648767791-00dcc994a43e'
];

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

let constIndex = 0;
let portIndex = 0;

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace loremflickr placeholders
  content = content.replace(/https:\/\/loremflickr\.com\/(\d+)\/(\d+)\/([a-zA-Z0-9,_-]+)/g, (match, w, h, tags) => {
    if (tags.includes('face') || tags.includes('portrait') || tags.includes('person')) {
      const id = portraitImages[portIndex % portraitImages.length];
      portIndex++;
      return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}&h=${h}`;
    } else {
      const id = constructionImages[constIndex % constructionImages.length];
      constIndex++;
      return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}&h=${h}`;
    }
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated images in ${file}`);
}
