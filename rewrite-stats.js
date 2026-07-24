const fs = require('fs');
const path = require('path');

const statsPath = path.join(__dirname, 'src', 'components', 'Stats.tsx');
let sContent = fs.readFileSync(statsPath, 'utf8');

sContent = sContent.replace('https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80&w=600&h=800', '/images/bangalore_architect_planning.png');
sContent = sContent.replace('https://images.unsplash.com/photo-1531834684534-1147a29ee2d9?auto=format&fit=crop&q=80&w=600&h=800', '/images/bangalore_house_construction.png');
sContent = sContent.replace('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600&h=800', '/images/bangalore_commercial_complex.png');
sContent = sContent.replace('Offices WorldWide', 'Locations in Bangalore');
sContent = sContent.replace('GLOBAL REACH', 'LOCAL REACH');

fs.writeFileSync(statsPath, sContent, 'utf8');

const blogPath = path.join(__dirname, 'src', 'components', 'Blog.tsx');
let bContent = fs.readFileSync(blogPath, 'utf8');

bContent = bContent.replace('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600&h=400', '/images/bangalore_modern_interior.png');
bContent = bContent.replace('https://images.unsplash.com/photo-1541888081628-db37b2d1844b?auto=format&fit=crop&q=80&w=600&h=400', '/images/bangalore_commercial_complex.png');
bContent = bContent.replace('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=400', '/images/bangalore_hero_building.png');

bContent = bContent.replace('A Guide to Hassle-Free Construction Planning', 'Navigating BBMP Construction Approvals');
bContent = bContent.replace('Why Timely Delivery Matters in Real Estate', 'Why Timely Delivery Matters in Bangalore Real Estate');
bContent = bContent.replace('How to Choose the Best Architecture Design', 'Designing for Bangalore\'s Unique Climate');

fs.writeFileSync(blogPath, bContent, 'utf8');

const faqPath = path.join(__dirname, 'src', 'components', 'FAQ.tsx');
let fContent = fs.readFileSync(faqPath, 'utf8');

fContent = fContent.replace('https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80&w=600&h=800', '/images/indian_professional_man_1.png');
fContent = fContent.replace('Jack', 'Kiran');

fs.writeFileSync(faqPath, fContent, 'utf8');

console.log('Rewritten Stats.tsx, Blog.tsx, FAQ.tsx');
