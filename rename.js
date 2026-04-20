const fs = require('fs');
const path = require('path');

const DIRECTORIES = ['src'];
const EXTENSIONS = ['.tsx', '.ts', '.js', '.jsx', '.md', '.txt', '.html'];

const REPLACEMENTS = [
  { search: /СД-СЕРВИС/g, replace: 'АВТОСПОРТ' },
  { search: /СД-Сервис/g, replace: 'Автоспорт' },
  { search: /Сд-сервис/g, replace: 'Автоспорт' },
  { search: /sd-service/g, replace: 'avtosport' },
  { search: /214012, Смоленская область, г Смоленск, Ново-Московская ул, д\. 2\/8, офис 305/g, replace: '610048, Кировская область, г. Киров, ул. Московская, д. 166А, этаж/помещ. 2/15' },
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else {
      const ext = path.extname(fullPath);
      if (EXTENSIONS.includes(ext)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = false;
        
        for (const { search, replace } of REPLACEMENTS) {
          if (search.test(content)) {
            content = content.replace(search, replace);
            modified = true;
          }
        }
        
        if (modified) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Updated: ${fullPath}`);
        }
      }
    }
  }
}

DIRECTORIES.forEach(dir => processDirectory(dir));
console.log('Replacement complete.');
