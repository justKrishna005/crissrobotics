const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.css'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace rgba(0,0,0, X) where X < 0.5 (borders, light backgrounds) with rgba(255,255,255, X)
  content = content.replace(/rgba\(\s*0\s*,\s*0\s*,\s*0\s*,\s*(0\.[0-4][0-9]*)\s*\)/g, 'rgba(255, 255, 255, $1)');
  
  // Also replace some specific background colors
  content = content.replace(/background:\s*#141A2E/g, 'background: #000000');
  content = content.replace(/background-color:\s*#141A2E/g, 'background-color: #000000');
  content = content.replace(/background:\s*rgba\(0,\s*0,\s*0,\s*0\.015\)/g, 'background: rgba(255, 255, 255, 0.02)');
  content = content.replace(/color:\s*rgba\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\.9\s*\)/g, 'color: #ffffff');
  content = content.replace(/color:\s*rgba\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\.[5-9]\s*\)/g, 'color: #a1a1aa');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
}
