const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create favicon sizes
const sizes = [16, 32, 48, 96, 192];

// Generate a favicon for each size
for (const size of sizes) {
  generateFavicon(size);
}

function generateFavicon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Set background to transparent
  ctx.clearRect(0, 0, size, size);

  // Define colors with vibrant palette
  const blueColor = '#3b82f6';      // blue-500
  const lightBlue = '#93c5fd';      // blue-300
  const indigo = '#4f46e5';         // indigo-600
  const purple = '#9333ea';         // purple-600
  const teal = '#14b8a6';           // teal-500
  const white = '#ffffff';

  // Center coordinates
  const centerX = size / 2;
  const centerY = size / 2;

  // Base circle with gradient
  const radius = size * 0.4;

  // Add shadow for larger sizes
  if (size >= 48) {
    ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
    ctx.shadowBlur = size * 0.04;
    ctx.shadowOffsetY = size * 0.02;
  }

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

  // For smaller sizes (16px, 32px), use a simpler design
  if (size <= 32) {
    // Just add a simple abstract shape in the center
    const innerSize = size * 0.4;
    
    // Simple cube outline
    ctx.strokeStyle = white;
    ctx.lineWidth = Math.max(1, size * 0.06);
    
    // Draw a simple geometric shape
    ctx.beginPath();
    ctx.moveTo(centerX - innerSize/2, centerY - innerSize/2);
    ctx.lineTo(centerX + innerSize/2, centerY - innerSize/2);
    ctx.lineTo(centerX + innerSize/2, centerY + innerSize/2);
    ctx.lineTo(centerX - innerSize/2, centerY + innerSize/2);
    ctx.closePath();
    ctx.stroke();
    
    // Diagonal line
    ctx.beginPath();
    ctx.moveTo(centerX - innerSize/2, centerY - innerSize/2);
    ctx.lineTo(centerX + innerSize/2, centerY + innerSize/2);
    ctx.stroke();
    
    saveFavicon(size, canvas);
    return;
  }

  // For medium and larger sizes, draw a simplified cube wireframe
  const cubeSize = radius * 0.8;
  
  // Define cube vertices with perspective distortion
  const frontTopLeft = { 
    x: centerX - cubeSize/2, 
    y: centerY - cubeSize/2 
  };
  const frontTopRight = { 
    x: centerX + cubeSize/2, 
    y: centerY - cubeSize/2 
  };
  const frontBottomRight = { 
    x: centerX + cubeSize/2, 
    y: centerY + cubeSize/2 
  };
  const frontBottomLeft = { 
    x: centerX - cubeSize/2, 
    y: centerY + cubeSize/2 
  };
  
  // Define back face with perspective (shifted up and to the right)
  const shift = size * 0.08;
  const backTopLeft = { 
    x: frontTopLeft.x + shift, 
    y: frontTopLeft.y - shift 
  };
  const backTopRight = { 
    x: frontTopRight.x + shift, 
    y: frontTopRight.y - shift 
  };
  const backBottomRight = { 
    x: frontBottomRight.x + shift, 
    y: frontBottomRight.y - shift 
  };
  const backBottomLeft = { 
    x: frontBottomLeft.x + shift, 
    y: frontBottomLeft.y - shift 
  };
  
  // Draw cube edges
  ctx.strokeStyle = white;
  ctx.lineWidth = Math.max(1, size * 0.03);
  
  // Front face
  ctx.beginPath();
  ctx.moveTo(frontTopLeft.x, frontTopLeft.y);
  ctx.lineTo(frontTopRight.x, frontTopRight.y);
  ctx.lineTo(frontBottomRight.x, frontBottomRight.y);
  ctx.lineTo(frontBottomLeft.x, frontBottomLeft.y);
  ctx.closePath();
  ctx.stroke();
  
  // Back face
  ctx.beginPath();
  ctx.moveTo(backTopLeft.x, backTopLeft.y);
  ctx.lineTo(backTopRight.x, backTopRight.y);
  ctx.lineTo(backBottomRight.x, backBottomRight.y);
  ctx.lineTo(backBottomLeft.x, backBottomLeft.y);
  ctx.closePath();
  ctx.stroke();
  
  // Connecting edges
  ctx.beginPath();
  ctx.moveTo(frontTopLeft.x, frontTopLeft.y);
  ctx.lineTo(backTopLeft.x, backTopLeft.y);
  ctx.moveTo(frontTopRight.x, frontTopRight.y);
  ctx.lineTo(backTopRight.x, backTopRight.y);
  ctx.moveTo(frontBottomRight.x, frontBottomRight.y);
  ctx.lineTo(backBottomRight.x, backBottomRight.y);
  ctx.moveTo(frontBottomLeft.x, frontBottomLeft.y);
  ctx.lineTo(backBottomLeft.x, backBottomLeft.y);
  ctx.stroke();
  
  // For larger sizes, add sphere elements
  if (size >= 96) {
    // Draw simplified sphere (just a few circles)
    const sphereRadius = cubeSize * 0.5;
    
    // Horizontal circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, sphereRadius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = Math.max(1, size * 0.01);
    ctx.stroke();
    
    // Vertical ellipse
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, sphereRadius * 0.6, sphereRadius, 0, 0, Math.PI * 2);
    ctx.stroke();
    
    // Add vertices as dots
    const vertices = [
      frontTopLeft, frontTopRight, frontBottomRight, frontBottomLeft,
      backTopLeft, backTopRight, backBottomRight, backBottomLeft
    ];
    
    vertices.forEach(vertex => {
      ctx.beginPath();
      ctx.arc(vertex.x, vertex.y, size * 0.02, 0, Math.PI * 2);
      ctx.fillStyle = white;
      ctx.fill();
    });
    
    // Add cursor for largest size
    if (size >= 192) {
      const cursorSize = size * 0.12;
      const cursorX = centerX + radius * 0.35;
      const cursorY = centerY - radius * 0.2;
      
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
    }
  }
  
  saveFavicon(size, canvas);
}

function saveFavicon(size, canvas) {
  // Save the canvas as a PNG image with a timestamp to force cache refresh
  const timestamp = Date.now();
  const outputDir = path.join(__dirname, '../public');
  const outputFile = path.join(outputDir, `favicon-${size}.png`);

  // Ensure the directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputFile, buffer);

  console.log(`Favicon ${size}x${size} generated and saved to ${outputFile}`);
} 