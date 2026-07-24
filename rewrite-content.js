const fs = require('fs');
const path = require('path');

const projectsPath = path.join(__dirname, 'src', 'components', 'Projects.tsx');
let pContent = fs.readFileSync(projectsPath, 'utf8');

// Projects images
pContent = pContent.replace('https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&q=80&w=800&h=600', '/images/bangalore_commercial_complex.png');
pContent = pContent.replace('https://images.unsplash.com/photo-1590497526732-c24747db3d9d?auto=format&fit=crop&q=80&w=800&h=600', '/images/bangalore_hero_building.png');
pContent = pContent.replace('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800&h=600', '/images/bangalore_modern_interior.png');
pContent = pContent.replace('https://images.unsplash.com/photo-1479839672679-a4648d613792?auto=format&fit=crop&q=80&w=800&h=600', '/images/bangalore_house_construction.png');

// Locations
pContent = pContent.replace(/📍 Hollywood, Florida/g, '📍 Whitefield, Bangalore');
pContent = pContent.replace(/📍 Spotswood, NJ/g, '📍 Indiranagar, Bangalore');

// Names & Portraits
pContent = pContent.replace('https://images.unsplash.com/photo-1573496339141-b6c8e053eca2?auto=format&fit=crop&q=80&w=800&h=1000', '/images/indian_professional_man_1.png');
pContent = pContent.replace('John Smith', 'Rahul Sharma');
pContent = pContent.replace('John Smith', 'Rahul Sharma');

pContent = pContent.replace('https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400', '/images/indian_professional_woman_1.png');
pContent = pContent.replace('William John', 'Anjali Desai');
pContent = pContent.replace('William John', 'Anjali Desai');

pContent = pContent.replace('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400', '/images/indian_professional_man_2.png');
pContent = pContent.replace('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400', '/images/indian_professional_woman_1.png');
pContent = pContent.replace('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400&h=400', '/images/indian_professional_man_1.png');

fs.writeFileSync(projectsPath, pContent, 'utf8');

const testPath = path.join(__dirname, 'src', 'components', 'Testimonials.tsx');
let tContent = fs.readFileSync(testPath, 'utf8');

tContent = tContent.replace('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100', '/images/indian_professional_woman_1.png');
tContent = tContent.replace('Delhi', 'Koramangala, BLR');

tContent = tContent.replace('https://images.unsplash.com/photo-1573496339141-b6c8e053eca2?auto=format&fit=crop&q=80&w=100&h=100', '/images/indian_professional_man_1.png');
tContent = tContent.replace('https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100', '/images/indian_professional_woman_1.png');
tContent = tContent.replace('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100', '/images/indian_professional_man_2.png');
tContent = tContent.replace('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100', '/images/indian_professional_woman_1.png');
tContent = tContent.replace('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100', '/images/indian_professional_man_1.png');
tContent = tContent.replace('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100', '/images/indian_professional_woman_1.png');

tContent = tContent.replace(/from Kalaburgi/g, 'from Marathahalli');

fs.writeFileSync(testPath, tContent, 'utf8');

console.log('Rewritten Projects.tsx and Testimonials.tsx');
