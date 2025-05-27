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
const lightBlue = '#93c5fd';      // blue-300
const indigo = '#4f46e5';         // indigo-600
const purple = '#9333ea';         // purple-600
const cyan = '#06b6d4';           // cyan-500
const teal = '#14b8a6';           // teal-500
const darkSlate = '#1e293b';      // slate-800
const white = '#ffffff';

// Center coordinates
const centerX = size / 2;
const centerY = size / 2;

// Create a modern abstract logo symbolizing web design/development
// Base circle with gradient
const radius = size * 0.4;

// Add shadow for depth
ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
ctx.shadowBlur = 20;
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 10;

// Draw circular base
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

// Reset shadow
ctx.shadowColor = 'transparent';
ctx.shadowBlur = 0;
ctx.shadowOffsetY = 0;

// Create abstract wireframe cube to represent 3D web design
// Define cube vertices relative to center (in 3D space)
const cubeSize = radius * 0.8;
const cubeVertices = [
  // Front face
  { x: -cubeSize/2, y: -cubeSize/2, z: cubeSize/2 },
  { x: cubeSize/2, y: -cubeSize/2, z: cubeSize/2 },
  { x: cubeSize/2, y: cubeSize/2, z: cubeSize/2 },
  { x: -cubeSize/2, y: cubeSize/2, z: cubeSize/2 },
  
  // Back face
  { x: -cubeSize/2, y: -cubeSize/2, z: -cubeSize/2 },
  { x: cubeSize/2, y: -cubeSize/2, z: -cubeSize/2 },
  { x: cubeSize/2, y: cubeSize/2, z: -cubeSize/2 },
  { x: -cubeSize/2, y: cubeSize/2, z: -cubeSize/2 }
];

// Rotate cube for better perspective
const rotateY = 30 * Math.PI / 180; // 30 degrees
const rotateX = 15 * Math.PI / 180; // 15 degrees

// Project 3D points to 2D
const projectedVertices = cubeVertices.map(v => {
  // Rotate around Y axis
  const rotatedY = {
    x: v.x * Math.cos(rotateY) + v.z * Math.sin(rotateY),
    y: v.y,
    z: -v.x * Math.sin(rotateY) + v.z * Math.cos(rotateY)
  };
  
  // Rotate around X axis
  const rotatedX = {
    x: rotatedY.x,
    y: rotatedY.y * Math.cos(rotateX) - rotatedY.z * Math.sin(rotateX),
    z: rotatedY.y * Math.sin(rotateX) + rotatedY.z * Math.cos(rotateX)
  };
  
  // Project to 2D (simple perspective)
  const scale = 1.5; // perspective scale
  return {
    x: centerX + rotatedX.x,
    y: centerY + rotatedX.y
  };
});

// Define cube edges - pairs of vertex indices that should be connected
const cubeEdges = [
  [0, 1], [1, 2], [2, 3], [3, 0], // front face
  [4, 5], [5, 6], [6, 7], [7, 4], // back face
  [0, 4], [1, 5], [2, 6], [3, 7]  // connecting edges
];

// Draw cube edges with gradient stroke
cubeEdges.forEach(edge => {
  const v1 = projectedVertices[edge[0]];
  const v2 = projectedVertices[edge[1]];
  
  const edgeGradient = ctx.createLinearGradient(v1.x, v1.y, v2.x, v2.y);
  edgeGradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
  edgeGradient.addColorStop(1, 'rgba(255, 255, 255, 0.6)');
  
  ctx.beginPath();
  ctx.moveTo(v1.x, v1.y);
  ctx.lineTo(v2.x, v2.y);
  ctx.lineWidth = 3;
  ctx.strokeStyle = edgeGradient;
  ctx.stroke();
});

// Draw cube vertices as glowing dots
projectedVertices.forEach(vertex => {
  // Outer glow
  const glowGradient = ctx.createRadialGradient(
    vertex.x, vertex.y, 0,
    vertex.x, vertex.y, 10
  );
  glowGradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
  glowGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  
  ctx.beginPath();
  ctx.arc(vertex.x, vertex.y, 10, 0, Math.PI * 2);
  ctx.fillStyle = glowGradient;
  ctx.fill();
  
  // Inner dot
  ctx.beginPath();
  ctx.arc(vertex.x, vertex.y, 4, 0, Math.PI * 2);
  ctx.fillStyle = white;
  ctx.fill();
});

// Add wireframe sphere intersecting with the cube to represent global web presence
const sphereRadius = cubeSize * 0.6;
const numSegments = 12;
const numRings = 6;

// Draw sphere rings
for (let i = 0; i < numRings; i++) {
  const ringRadius = sphereRadius * Math.sin(Math.PI * (i + 1) / (numRings + 1));
  const ringY = centerY - sphereRadius * Math.cos(Math.PI * (i + 1) / (numRings + 1));
  
  ctx.beginPath();
  ctx.arc(centerX, ringY, ringRadius, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 + 0.3 * i / numRings})`;
  ctx.lineWidth = 2;
  ctx.stroke();
}

// Draw sphere meridians
for (let i = 0; i < numSegments; i++) {
  const angle = (Math.PI * 2 * i) / numSegments;
  
  ctx.beginPath();
  ctx.ellipse(
    centerX,
    centerY,
    sphereRadius,
    sphereRadius,
    0,
    0,
    Math.PI * 2
  );
  ctx.strokeStyle = `rgba(255, 255, 255, 0.3)`;
  ctx.lineWidth = 1;
  ctx.stroke();
}

// Add code bracket symbols to represent web development
const bracketSize = radius * 0.4;
const bracketWidth = 40;
const bracketThickness = 5;

// Left bracket (outside circle)
ctx.beginPath();
ctx.moveTo(centerX - radius - 20, centerY - bracketSize);
ctx.lineTo(centerX - radius - 20 - bracketWidth/2, centerY);
ctx.lineTo(centerX - radius - 20, centerY + bracketSize);
ctx.lineWidth = bracketThickness;
ctx.strokeStyle = teal;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.stroke();

// Right bracket (outside circle)
ctx.beginPath();
ctx.moveTo(centerX + radius + 20, centerY - bracketSize);
ctx.lineTo(centerX + radius + 20 + bracketWidth/2, centerY);
ctx.lineTo(centerX + radius + 20, centerY + bracketSize);
ctx.strokeStyle = teal;
ctx.stroke();

// Add small glowing dots around the design
const numDots = 12;
const dotRadius = 2;
const dotDistance = radius * 1.3;

for (let i = 0; i < numDots; i++) {
  const angle = (Math.PI * 2 * i) / numDots;
  const x = centerX + dotDistance * Math.cos(angle);
  const y = centerY + dotDistance * Math.sin(angle);
  
  ctx.beginPath();
  ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.fill();
}

// Add cursor icon to represent interactivity
const cursorSize = 20;
const cursorX = centerX + radius * 0.6;
const cursorY = centerY - radius * 0.2;

// Draw cursor
ctx.beginPath();
ctx.moveTo(cursorX, cursorY);
ctx.lineTo(cursorX + cursorSize, cursorY + cursorSize * 0.6);
ctx.lineTo(cursorX + cursorSize * 0.5, cursorY + cursorSize * 0.6);
ctx.lineTo(cursorX + cursorSize * 0.8, cursorY + cursorSize);
ctx.lineTo(cursorX + cursorSize * 0.6, cursorY + cursorSize * 0.9);
ctx.lineTo(cursorX + cursorSize * 0.4, cursorY + cursorSize * 0.5);
ctx.lineTo(cursorX, cursorY);
ctx.fillStyle = white;
ctx.fill();

// Add a few flying pixels/particles for dynamic effect
const numParticles = 15;
for (let i = 0; i < numParticles; i++) {
  const angle = Math.random() * Math.PI * 2;
  const distance = radius * (1 + Math.random() * 0.5);
  const x = centerX + distance * Math.cos(angle);
  const y = centerY + distance * Math.sin(angle);
  const particleSize = 1 + Math.random() * 3;
  
  ctx.beginPath();
  ctx.arc(x, y, particleSize, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`;
  ctx.fill();
}

// Add subtle "glow" effect around the entire design
const outerGlowGradient = ctx.createRadialGradient(
  centerX, centerY, radius,
  centerX, centerY, radius * 1.5
);
outerGlowGradient.addColorStop(0, 'rgba(79, 70, 229, 0.2)'); // indigo with alpha
outerGlowGradient.addColorStop(1, 'rgba(79, 70, 229, 0)');

ctx.beginPath();
ctx.arc(centerX, centerY, radius * 1.5, 0, Math.PI * 2);
ctx.fillStyle = outerGlowGradient;
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

console.log(`New logo generated and saved to ${outputFile}`); 