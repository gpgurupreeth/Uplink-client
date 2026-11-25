import fs from 'fs';
import path from 'path';

// Automated verification test
const filesToCheck = [
  'src/App.tsx',
  'src/main.tsx',
  'src/index.css',
  'index.html',
  'src/types/index.ts',
  'src/data/content.ts',
  'src/components/BrandLogo.tsx',
  'src/components/Navbar.tsx',
  'src/components/EnterpriseHero.tsx',
  'src/components/EnterpriseServiceCard.tsx',
  'src/components/DualCapabilitiesSection.tsx',
  'src/components/EnterpriseStatsAndLogos.tsx',
  'src/components/DiscoveryQuiz.tsx',
  'src/components/ProcessTimeline.tsx',
  'src/components/CaseStudiesSection.tsx',
  'src/components/TestimonialsSection.tsx',
  'src/components/FaqSection.tsx',
  'src/components/ContactSection.tsx',
  'src/components/Footer.tsx',
  'src/pages/HomePage.tsx',
  'src/pages/ITServicesPage.tsx',
  'src/pages/SoftwarePage.tsx',
  'src/pages/QuizPage.tsx',
  'src/pages/AboutPage.tsx',
  'src/pages/ContactPage.tsx',
];

console.log('--- FILE INTEGRITY CHECK ---');
let allFilesExist = true;
for (const file of filesToCheck) {
  if (!fs.existsSync(file)) {
    console.error(`MISSING: ${file}`);
    allFilesExist = false;
  }
}

if (allFilesExist) {
  console.log(`All ${filesToCheck.length} source files exist.`);
} else {
  process.exit(1);
}

// Check for banned visual keywords
console.log('\n--- BANNED VISUAL PATTERNS AUDIT ---');
const bannedPatterns = [
  { name: 'blur-3xl / blur blobs', regex: /blur-3xl|blur-2xl/g },
  { name: 'gradient text', regex: /bg-clip-text/g },
];

let bannedFound = false;
for (const file of filesToCheck) {
  if (!file.endsWith('.tsx') && !file.endsWith('.ts')) continue;
  const content = fs.readFileSync(file, 'utf8');
  for (const { name, regex } of bannedPatterns) {
    if (regex.test(content)) {
      console.warn(`WARNING in ${file}: detected banned pattern "${name}"`);
      bannedFound = true;
    }
  }
}

if (!bannedFound) {
  console.log('Zero banned visual patterns detected.');
}

// Check grid balance:
import { itServicesList, softwareServicesList } from '../src/data/content.ts';

console.log('\n--- GRID BALANCE AUDIT ---');
console.log(`IT Services count: ${itServicesList.length} (balanced: ${itServicesList.length % 3 === 0 && itServicesList.length % 2 === 0})`);
console.log(`Software Services count: ${softwareServicesList.length} (balanced: ${softwareServicesList.length % 3 === 0 && softwareServicesList.length % 2 === 0})`);

if (itServicesList.length === 6 && softwareServicesList.length === 6) {
  console.log('SUCCESS: Grids are balanced for 3 columns (desktop) and 2 columns (tablet) with zero half-empty rows.');
} else {
  console.error('Grid count not optimal.');
}
