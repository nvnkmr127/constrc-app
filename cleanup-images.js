const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix loremflickr URLs
  content = content.replace(/https:\/\/loremflickr\.com\/(\d+)\/(\d+)\/([a-zA-Z0-9,_-]+)\/[a-zA-Z0-9_-]+/g, 'https://loremflickr.com/$1/$2/$3');
  
  // Fix placehold.co URLs
  content = content.replace(/https:\/\/placehold\.co\/([a-zA-Z0-9x?=+-]+)\/[a-zA-Z0-9_-]+/g, 'https://placehold.co/$1');

  // Specific fix for Testimonials.tsx google icons
  if (file === 'Testimonials.tsx') {
    content = content.replace(/<img\s+alt="Google"\s+className="w-4 h-4"\s+src="https:\/\/loremflickr\.com\/100\/100\/face,professional"\s*\/>/g, '<img alt="Google" className="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg_xkql96U6o2JB1YYdFR5IYCjecRx7ETRGZr6itw2blu15SMZY7CYf5wnFZNkbBK-R8xYwR9towv26Ksx1LlZiU1LHkz7RlpFt5Rrm6YcsfbjnVCXNRWpkmuzXug5QiJETxSYckJydOfqxj6evVHvLITKO7ozWwFWSh_D__ZQQhzEyRrbqXkJCZw35oLv6uDtwcCwWbWulpKS09kGJqy5uOYOCO3F_6Wl2yG6ZU_Y9cMIu4Bzql4YaZDpfR80yomZh0O2HWMYeWVg" />');
    // For the single 5x5 one
    content = content.replace(/<img\s+alt="Google"\s+className="w-5 h-5"\s+src="https:\/\/loremflickr\.com\/100\/100\/face,professional"\s*\/>/g, '<img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg_xkql96U6o2JB1YYdFR5IYCjecRx7ETRGZr6itw2blu15SMZY7CYf5wnFZNkbBK-R8xYwR9towv26Ksx1LlZiU1LHkz7RlpFt5Rrm6YcsfbjnVCXNRWpkmuzXug5QiJETxSYckJydOfqxj6evVHvLITKO7ozWwFWSh_D__ZQQhzEyRrbqXkJCZw35oLv6uDtwcCwWbWulpKS09kGJqy5uOYOCO3F_6Wl2yG6ZU_Y9cMIu4Bzql4YaZDpfR80yomZh0O2HWMYeWVg" />');
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Cleaned up ${file}`);
}
