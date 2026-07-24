const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

function replaceInFile(fileName, replacements) {
  const filePath = path.join(componentsDir, fileName);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  for (let r of replacements) {
    content = content.replace(r.search, r.replace);
  }
  fs.writeFileSync(filePath, content, 'utf8');
}

// Services.tsx
replaceInFile('Services.tsx', [
  {
    search: /shadow-sm hover:shadow-xl transition-shadow group/g,
    replace: 'shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group'
  },
  {
    search: /hover:scale-105 transition-transform duration-500/g,
    replace: 'group-hover:scale-110 transition-transform duration-700'
  }
]);

// WhyChooseUs.tsx
replaceInFile('WhyChooseUs.tsx', [
  {
    search: /flex flex-col items-center text-center/g,
    replace: 'flex flex-col items-center text-center group'
  },
  {
    search: /rounded-full w-48 h-48 object-cover/g,
    replace: 'rounded-full w-48 h-48 object-cover transition-transform duration-700 group-hover:scale-110 group-hover:shadow-2xl'
  }
]);

// PackageComparison.tsx
replaceInFile('PackageComparison.tsx', [
  {
    search: /bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col/g,
    replace: 'bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-3'
  }
]);

// MaintenanceComparison.tsx
replaceInFile('MaintenanceComparison.tsx', [
  {
    search: /bg-white rounded-\[40px\] p-8 shadow-sm border border-gray-100/g,
    replace: 'bg-white rounded-[40px] p-8 shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2'
  }
]);

// Projects.tsx
replaceInFile('Projects.tsx', [
  {
    search: /bg-gray-100 rounded-\[40px\] p-4 group/g,
    replace: 'bg-gray-100 rounded-[40px] p-4 group transition-all duration-500 hover:shadow-xl hover:-translate-y-2'
  }
]);

// Testimonials.tsx
replaceInFile('Testimonials.tsx', [
  {
    search: /bg-white p-8 rounded-3xl shadow-sm border border-gray-100/g,
    replace: 'bg-white p-8 rounded-3xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2'
  }
]);

// Blog.tsx
replaceInFile('Blog.tsx', [
  {
    search: /bg-white rounded-\[40px\] p-4 shadow-sm group/g,
    replace: 'bg-white rounded-[40px] p-4 shadow-lg group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2'
  }
]);

// Contact.tsx
replaceInFile('Contact.tsx', [
  {
    search: /bg-dark-charcoal rounded-\[50px\] p-12 md:p-16 flex/g,
    replace: 'bg-dark-charcoal rounded-[50px] p-12 md:p-16 flex shadow-2xl transition-all duration-500 hover:-translate-y-2'
  }
]);

// CostEstimator.tsx
replaceInFile('CostEstimator.tsx', [
  {
    search: /bg-\[\#2b261e\] rounded-\[40px\] p-10 md:p-16/g,
    replace: 'bg-[#2b261e] rounded-[40px] p-10 md:p-16 shadow-2xl transition-all duration-500 hover:-translate-y-2'
  },
  {
    search: /bg-white rounded-\[40px\] p-8 md:p-12 shadow-xl border border-gray-100/g,
    replace: 'bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2'
  }
]);

console.log('Applied premium styling to all sections.');
