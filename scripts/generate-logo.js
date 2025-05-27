const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create a canvas with dimensions 512x512 for high resolution
const size = 512;
const canvas = createCanvas(size, size);
const ctx = canvas.getContext('2d');

// Set background to transparent
ctx.clearRect(0, 0, size, size);

// Define colors with vibrant palette
const blueColor = '#3b82f6';      // blue-500
const brightBlue = '#60a5fa';     // blue-400
const indigo = '#4f46e5';         // indigo-600
const purple = '#9333ea';         // purple-600
const violet = '#8b5cf6';         // violet-500
const pink = '#ec4899';           // pink-500
const teal = '#14b8a6';           // teal-500
const darkSlate = '#1e293b';      // slate-800
const white = '#ffffff';

// Center coordinates
const centerX = size / 2;
const centerY = size / 2;

// Add subtle shadow for entire logo
ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
ctx.shadowBlur = 20;
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 10;

// Draw base circle with gradient
const radius = size * 0.36;
const circleGradient = ctx.createLinearGradient(
  centerX - radius, 
  centerY - radius, 
  centerX + radius, 
  centerY + radius
);
circleGradient.addColorStop(0, blueColor);
circleGradient.addColorStop(0.5, indigo);
circleGradient.addColorStop(1, purple);

ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
ctx.fillStyle = circleGradient;
ctx.fill();

// Remove shadow
ctx.shadowColor = 'transparent';
ctx.shadowBlur = 0;
ctx.shadowOffsetY = 0;

// Add a subtle outer glow
const glowRadius = radius * 1.05;
const glowGradient = ctx.createRadialGradient(
  centerX, centerY, radius,
  centerX, centerY, glowRadius
);
glowGradient.addColorStop(0, 'rgba(79, 70, 229, 0.4)'); // indigo with alpha
glowGradient.addColorStop(1, 'rgba(79, 70, 229, 0)');   // transparent

ctx.beginPath();
ctx.arc(centerX, centerY, glowRadius, 0, Math.PI * 2);
ctx.fillStyle = glowGradient;
ctx.fill();

// Create a web browser window icon in the circle
const browserWidth = radius * 1.4;
const browserHeight = radius * 1.4;
const browserX = centerX - browserWidth / 2;
const browserY = centerY - browserHeight / 2;
const browserRadius = 15;

// Draw browser window with curved corners
ctx.beginPath();
ctx.moveTo(browserX + browserRadius, browserY);
ctx.lineTo(browserX + browserWidth - browserRadius, browserY);
ctx.quadraticCurveTo(browserX + browserWidth, browserY, browserX + browserWidth, browserY + browserRadius);
ctx.lineTo(browserX + browserWidth, browserY + browserHeight - browserRadius);
ctx.quadraticCurveTo(browserX + browserWidth, browserY + browserHeight, browserX + browserWidth - browserRadius, browserY + browserHeight);
ctx.lineTo(browserX + browserRadius, browserY + browserHeight);
ctx.quadraticCurveTo(browserX, browserY + browserHeight, browserX, browserY + browserHeight - browserRadius);
ctx.lineTo(browserX, browserY + browserRadius);
ctx.quadraticCurveTo(browserX, browserY, browserX + browserRadius, browserY);
ctx.closePath();

// Fill with semi-transparent dark color
ctx.fillStyle = 'rgba(30, 41, 59, 0.8)'; // darkSlate with transparency
ctx.fill();

// Add browser header
const headerHeight = 30;
ctx.beginPath();
ctx.moveTo(browserX + browserRadius, browserY);
ctx.lineTo(browserX + browserWidth - browserRadius, browserY);
ctx.quadraticCurveTo(browserX + browserWidth, browserY, browserX + browserWidth, browserY + browserRadius);
ctx.lineTo(browserX + browserWidth, browserY + headerHeight);
ctx.lineTo(browserX, browserY + headerHeight);
ctx.lineTo(browserX, browserY + browserRadius);
ctx.quadraticCurveTo(browserX, browserY, browserX + browserRadius, browserY);
ctx.closePath();
ctx.fillStyle = darkSlate;
ctx.fill();

// Browser control dots
const dotRadius = 4;
const dotSpacing = 15;
const dotY = browserY + headerHeight / 2;
const dotStartX = browserX + 20;

// Red dot
ctx.beginPath();
ctx.arc(dotStartX, dotY, dotRadius, 0, Math.PI * 2);
ctx.fillStyle = '#ef4444'; // red-500
ctx.fill();

// Yellow dot
ctx.beginPath();
ctx.arc(dotStartX + dotSpacing, dotY, dotRadius, 0, Math.PI * 2);
ctx.fillStyle = '#f59e0b'; // amber-500
ctx.fill();

// Green dot
ctx.beginPath();
ctx.arc(dotStartX + dotSpacing * 2, dotY, dotRadius, 0, Math.PI * 2);
ctx.fillStyle = '#10b981'; // emerald-500
ctx.fill();

// Draw browser content - abstract web layout elements

// Content area background
const contentX = browserX + 15;
const contentY = browserY + headerHeight + 15;
const contentWidth = browserWidth - 30;
const contentHeight = browserHeight - headerHeight - 30;
const contentRadius = 8;

ctx.beginPath();
ctx.moveTo(contentX + contentRadius, contentY);
ctx.lineTo(contentX + contentWidth - contentRadius, contentY);
ctx.quadraticCurveTo(contentX + contentWidth, contentY, contentX + contentWidth, contentY + contentRadius);
ctx.lineTo(contentX + contentWidth, contentY + contentHeight - contentRadius);
ctx.quadraticCurveTo(contentX + contentWidth, contentY + contentHeight, contentX + contentWidth - contentRadius, contentY + contentHeight);
ctx.lineTo(contentX + contentRadius, contentY + contentHeight);
ctx.quadraticCurveTo(contentX, contentY + contentHeight, contentX, contentY + contentHeight - contentRadius);
ctx.lineTo(contentX, contentY + contentRadius);
ctx.quadraticCurveTo(contentX, contentY, contentX + contentRadius, contentY);
ctx.closePath();
ctx.fillStyle = white;
ctx.fill();

// Add abstract code/design elements inside the browser
// 1. Navigation element
const navHeight = 10;
const navWidth = contentWidth * 0.6;
const navX = contentX + (contentWidth - navWidth) / 2;
const navY = contentY + 15;

ctx.beginPath();
ctx.rect(navX, navY, navWidth, navHeight);
ctx.fillStyle = '#e2e8f0'; // slate-200
ctx.fill();

// 2. Hero section - gradient shape
const heroHeight = 50;
const heroWidth = contentWidth * 0.85;
const heroX = contentX + (contentWidth - heroWidth) / 2;
const heroY = navY + navHeight + 15;

const heroGradient = ctx.createLinearGradient(heroX, heroY, heroX + heroWidth, heroY);
heroGradient.addColorStop(0, brightBlue);
heroGradient.addColorStop(1, violet);

ctx.beginPath();
ctx.rect(heroX, heroY, heroWidth, heroHeight);
ctx.fillStyle = heroGradient;
ctx.fill();

// 3. Content blocks - staggered boxes
const blockHeight = 15;
const blockSpacing = 10;
const blockY = heroY + heroHeight + 20;

// Different widths for visual interest
const blockWidths = [
  contentWidth * 0.7,
  contentWidth * 0.5,
  contentWidth * 0.6,
  contentWidth * 0.4
];

blockWidths.forEach((width, index) => {
  const blockX = contentX + (contentWidth - width) / 2;
  const y = blockY + (blockHeight + blockSpacing) * index;
  
  ctx.beginPath();
  ctx.rect(blockX, y, width, blockHeight);
  
  // Alternate colors
  if (index % 2 === 0) {
    ctx.fillStyle = '#f1f5f9'; // slate-100
  } else {
    ctx.fillStyle = '#e2e8f0'; // slate-200
  }
  
  ctx.fill();
});

// Add abstract code brackets to represent web development
// These are positioned outside the browser to give a "breaking the boundaries" effect
const bracketThickness = 10;
const bracketWidth = 40;
const bracketHeight = 80;

// Left bracket
ctx.beginPath();
ctx.moveTo(browserX - 30, centerY - bracketHeight / 2);
ctx.lineTo(browserX - 30 - bracketWidth / 2, centerY);
ctx.lineTo(browserX - 30, centerY + bracketHeight / 2);
ctx.lineWidth = bracketThickness;
ctx.strokeStyle = teal;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.stroke();

// Right bracket
ctx.beginPath();
ctx.moveTo(browserX + browserWidth + 30, centerY - bracketHeight / 2);
ctx.lineTo(browserX + browserWidth + 30 + bracketWidth / 2, centerY);
ctx.lineTo(browserX + browserWidth + 30, centerY + bracketHeight / 2);
ctx.lineWidth = bracketThickness;
ctx.strokeStyle = teal;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.stroke();

// Add abstract digital elements surrounding the main logo
// Create connection dots with pulse effects
const numDots = 6;
const dotAngleStep = (Math.PI * 2) / numDots;
const dotDistance = radius * 1.3;

for (let i = 0; i < numDots; i++) {
  const angle = i * dotAngleStep;
  const x = centerX + Math.cos(angle) * dotDistance;
  const y = centerY + Math.sin(angle) * dotDistance;
  
  // Outer glow
  const dotGlow = ctx.createRadialGradient(x, y, 0, x, y, 15);
  dotGlow.addColorStop(0, `rgba(96, 165, 250, 0.8)`); // brightBlue with alpha
  dotGlow.addColorStop(1, `rgba(96, 165, 250, 0)`);
  
  ctx.beginPath();
  ctx.arc(x, y, 15, 0, Math.PI * 2);
  ctx.fillStyle = dotGlow;
  ctx.fill();
  
  // Inner dot
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.fillStyle = white;
  ctx.fill();
  
  // Add connection line to center
  ctx.beginPath();
  ctx.moveTo(x, y);
  
  // Create a curved path to the center
  const controlPoint1X = x - (x - centerX) * 0.2;
  const controlPoint1Y = y - (y - centerY) * 0.6;
  const controlPoint2X = centerX + (x - centerX) * 0.2;
  const controlPoint2Y = centerY + (y - centerY) * 0.2;
  
  ctx.bezierCurveTo(controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y, centerX, centerY);
  
  ctx.strokeStyle = `rgba(255, 255, 255, 0.3)`;
  ctx.lineWidth = 2;
  ctx.stroke();
}

// Add a final touch - a cursor or design element
const cursorSize = 15;
const cursorX = browserX + browserWidth - 40;
const cursorY = browserY + browserHeight - 40;

// Cursor outline for visibility
ctx.beginPath();
ctx.moveTo(cursorX, cursorY);
ctx.lineTo(cursorX + cursorSize, cursorY + cursorSize / 2);
ctx.lineTo(cursorX + cursorSize / 2, cursorY + cursorSize / 2);
ctx.lineTo(cursorX + cursorSize, cursorY + cursorSize);
ctx.lineTo(cursorX, cursorY);
ctx.fillStyle = white;
ctx.fill();

// Add a subtle reflection effect on the browser window
const reflectionGradient = ctx.createLinearGradient(
  browserX, 
  browserY, 
  browserX + browserWidth, 
  browserY + browserHeight
);
reflectionGradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
reflectionGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
reflectionGradient.addColorStop(1, 'rgba(255, 255, 255, 0.05)');

ctx.beginPath();
ctx.moveTo(browserX + browserRadius, browserY);
ctx.lineTo(browserX + browserWidth - browserRadius, browserY);
ctx.quadraticCurveTo(browserX + browserWidth, browserY, browserX + browserWidth, browserY + browserRadius);
ctx.lineTo(browserX + browserWidth, browserY + browserHeight - browserRadius);
ctx.quadraticCurveTo(browserX + browserWidth, browserY + browserHeight, browserX + browserWidth - browserRadius, browserY + browserHeight);
ctx.lineTo(browserX + browserRadius, browserY + browserHeight);
ctx.quadraticCurveTo(browserX, browserY + browserHeight, browserX, browserY + browserHeight - browserRadius);
ctx.lineTo(browserX, browserY + browserRadius);
ctx.quadraticCurveTo(browserX, browserY, browserX + browserRadius, browserY);
ctx.closePath();
ctx.fillStyle = reflectionGradient;
ctx.fill();

// Save the canvas as a PNG image
const outputDir = path.join(__dirname, '../public');
const outputFile = path.join(outputDir, 'LOGO.png');

// Ensure the directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Save the image
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(outputFile, buffer);

console.log(`Logo generated and saved to ${outputFile}`); 