const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  for (let r of replacements) {
    content = content.replace(r.search, r.replace);
  }
  fs.writeFileSync(filePath, content, 'utf8');
}

const componentsDir = path.join(__dirname, 'src', 'components');

// 1. Header.tsx: Hide 'GET A QUOTE' and search icon on mobile
replaceInFile(path.join(componentsDir, 'Header.tsx'), [
  {
    search: '<div className="flex items-center space-x-4">',
    replace: '<div className="flex items-center space-x-2 md:space-x-4">'
  },
  {
    search: '<button className="text-white">',
    replace: '<button className="hidden md:block text-white">'
  },
  {
    search: '<Link href="#" className="bg-primary-orange text-white px-6 py-2 rounded-full font-bold flex items-center gap-2">',
    replace: '<Link href="#" className="hidden md:flex bg-primary-orange text-white px-6 py-2 rounded-full font-bold items-center gap-2">'
  }
]);

// 2. Hero.tsx: Reduce title size on mobile
replaceInFile(path.join(componentsDir, 'Hero.tsx'), [
  {
    search: 'text-5xl md:text-7xl',
    replace: 'text-4xl md:text-7xl'
  }
]);

// 3. Stats.tsx: Fix grid-cols-2
replaceInFile(path.join(componentsDir, 'Stats.tsx'), [
  {
    search: '<div className="grid grid-cols-2 gap-6 mb-10">',
    replace: '<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">'
  }
]);

// 4. Projects.tsx: Fix grid-cols-5 and inner text sizes
replaceInFile(path.join(componentsDir, 'Projects.tsx'), [
  {
    search: '<div className="grid grid-cols-5 gap-8 items-center opacity-40">',
    replace: '<div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-40">'
  },
  {
    search: 'text-4xl md:text-5xl',
    replace: 'text-3xl md:text-5xl'
  },
  {
    search: 'w-32 h-32',
    replace: 'w-24 h-24 md:w-32 md:h-32'
  }
]);

// 5. Testimonials.tsx: Fix grid-cols-3 and title size
replaceInFile(path.join(componentsDir, 'Testimonials.tsx'), [
  {
    search: '<div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">',
    replace: '<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-100 pt-6 text-center sm:text-left">'
  },
  {
    search: 'text-4xl md:text-5xl',
    replace: 'text-3xl md:text-5xl'
  }
]);

// 6. Contact.tsx: Fix grid-cols-2
replaceInFile(path.join(componentsDir, 'Contact.tsx'), [
  {
    search: '<div className="mt-12 grid grid-cols-2 gap-8">',
    replace: '<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">'
  },
  {
    search: '<div className="grid grid-cols-2 gap-4">',
    replace: '<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">'
  },
  {
    search: 'text-5xl font-extrabold',
    replace: 'text-4xl md:text-5xl font-extrabold'
  }
]);

// 7. Footer.tsx: Fix newsletter flex and title sizes
replaceInFile(path.join(componentsDir, 'Footer.tsx'), [
  {
    search: 'text-4xl md:text-5xl',
    replace: 'text-3xl md:text-5xl'
  }
]);

// 8. Services.tsx
replaceInFile(path.join(componentsDir, 'Services.tsx'), [
  {
    search: 'text-5xl font-extrabold',
    replace: 'text-4xl md:text-5xl font-extrabold'
  }
]);

// 9. Blog.tsx
replaceInFile(path.join(componentsDir, 'Blog.tsx'), [
  {
    search: 'text-5xl font-extrabold',
    replace: 'text-4xl md:text-5xl font-extrabold'
  }
]);

// 10. FAQ.tsx
replaceInFile(path.join(componentsDir, 'FAQ.tsx'), [
  {
    search: 'text-5xl font-extrabold',
    replace: 'text-4xl md:text-5xl font-extrabold'
  }
]);

// 11. CostEstimator.tsx
replaceInFile(path.join(componentsDir, 'CostEstimator.tsx'), [
  {
    search: 'text-4xl md:text-5xl',
    replace: 'text-3xl md:text-5xl'
  }
]);

console.log('Mobile responsive fixes applied successfully.');
