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

  // Define colors
  const blueColor = '#3b82f6';     // blue-500
  const darkBlue = '#1e40af';      // blue-800
  const indigo = '#4f46e5';        // indigo-600
  const darkIndigo = '#3730a3';    // indigo-800
  const purple = '#9333ea';        // purple-600
  const slate = '#334155';         // slate-700
  const darkSlate = '#1e293b';     // slate-800

  // Create rounded rectangle function
  function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  // For smallest sizes (16px and 32px), create a simpler but professional version
  if (size <= 32) {
    // Calculate margins based on size
    const margin = Math.max(1, Math.floor(size * 0.1));
    const squareSize = size - (margin * 2);
    const cornerRadius = Math.max(1, Math.floor(size * 0.15));
    
    // Create premium gradient
    const gradient = ctx.createLinearGradient(margin, margin, margin + squareSize, margin + squareSize);
    gradient.addColorStop(0, blueColor);
    gradient.addColorStop(0.5, indigo);
    gradient.addColorStop(1, purple);
    
    // Draw background square with rounded corners
    ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
    ctx.shadowBlur = Math.max(1, Math.floor(size * 0.1));
    ctx.shadowOffsetY = Math.max(1, Math.floor(size * 0.03));
    
    roundedRect(ctx, margin, margin, squareSize, squareSize, cornerRadius);
    ctx.fillStyle = gradient;
    ctx.fill();
    
    // Reset shadow
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;
    
    // Draw a stylized "LD" for smaller sizes
    const letterWidth = Math.max(1, Math.floor(size * 0.08));
    const padding = Math.max(1, Math.floor(size * 0.2));
    
    // "L" - simplified but professional
    ctx.strokeStyle = 'white';
    ctx.lineWidth = letterWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    ctx.beginPath();
    ctx.moveTo(margin + padding, margin + padding);
    ctx.lineTo(margin + padding, margin + squareSize - padding);
    ctx.lineTo(margin + squareSize - padding, margin + squareSize - padding);
    ctx.stroke();
    
    return saveFavicon(size, canvas);
  }
  
  // For medium and larger sizes, create a more detailed version
  // Calculate container dimensions
  const containerMargin = Math.max(1, Math.floor(size * 0.12));
  const containerWidth = size - (containerMargin * 2);
  const containerHeight = size - (containerMargin * 2);
  const containerRadius = Math.max(1, Math.floor(size * 0.08));
  
  // Draw container shadow
  ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
  ctx.shadowBlur = Math.max(2, Math.floor(size * 0.05));
  ctx.shadowOffsetY = Math.max(1, Math.floor(size * 0.02));
  
  roundedRect(ctx, containerMargin, containerMargin, containerWidth, containerHeight, containerRadius);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  
  // Reset shadow
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;
  
  // Top bar dimensions
  const topBarHeight = Math.max(2, Math.floor(containerHeight * 0.12));
  
  // Draw top bar with professional color
  roundedRect(
    ctx,
    containerMargin,
    containerMargin,
    containerWidth,
    topBarHeight,
    containerRadius
  );
  ctx.fillStyle = darkSlate;
  ctx.fill();
  
  // Draw divider line
  ctx.beginPath();
  ctx.moveTo(containerMargin, containerMargin + topBarHeight);
  ctx.lineTo(containerMargin + containerWidth, containerMargin + topBarHeight);
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.stroke();
  
  // Browser controls - only for sizes >= 48
  if (size >= 48) {
    const controlSize = Math.max(1, Math.floor(size * 0.018));
    const controlMargin = Math.max(2, Math.floor(size * 0.03));
    const controlY = containerMargin + (topBarHeight / 2);
    
    // Red circle
    ctx.beginPath();
    ctx.arc(containerMargin + controlMargin, controlY, controlSize, 0, Math.PI * 2);
    ctx.fillStyle = '#f87171';
    ctx.fill();
    
    // Yellow circle
    ctx.beginPath();
    ctx.arc(containerMargin + (controlMargin * 2.5), controlY, controlSize, 0, Math.PI * 2);
    ctx.fillStyle = '#fbbf24';
    ctx.fill();
    
    // Green circle
    ctx.beginPath();
    ctx.arc(containerMargin + (controlMargin * 4), controlY, controlSize, 0, Math.PI * 2);
    ctx.fillStyle = '#34d399';
    ctx.fill();
  }
  
  // Content area dimensions
  const contentAreaX = containerMargin;
  const contentAreaY = containerMargin + topBarHeight;
  const contentAreaWidth = containerWidth;
  const contentAreaHeight = containerHeight - topBarHeight;
  
  // Draw content area with subtle gradient
  const contentGradient = ctx.createLinearGradient(
    contentAreaX,
    contentAreaY,
    contentAreaX + contentAreaWidth,
    contentAreaY + contentAreaHeight
  );
  contentGradient.addColorStop(0, '#f8fafc'); // slate-50
  contentGradient.addColorStop(1, '#f1f5f9'); // slate-100
  
  // Draw content area with bottom rounded corners
  ctx.beginPath();
  ctx.moveTo(contentAreaX, contentAreaY);
  ctx.lineTo(contentAreaX + contentAreaWidth, contentAreaY);
  ctx.lineTo(contentAreaX + contentAreaWidth, contentAreaY + contentAreaHeight - containerRadius);
  ctx.quadraticCurveTo(
    contentAreaX + contentAreaWidth,
    contentAreaY + contentAreaHeight,
    contentAreaX + contentAreaWidth - containerRadius,
    contentAreaY + contentAreaHeight
  );
  ctx.lineTo(contentAreaX + containerRadius, contentAreaY + contentAreaHeight);
  ctx.quadraticCurveTo(
    contentAreaX,
    contentAreaY + contentAreaHeight,
    contentAreaX,
    contentAreaY + contentAreaHeight - containerRadius
  );
  ctx.closePath();
  ctx.fillStyle = contentGradient;
  ctx.fill();
  
  // Logo dimensions
  const logoSize = Math.floor(contentAreaWidth * 0.7);
  const logoX = contentAreaX + (contentAreaWidth - logoSize) / 2;
  const logoY = contentAreaY + (contentAreaHeight - logoSize) / 2;
  const logoRadius = Math.max(1, Math.floor(logoSize * 0.15));
  
  // Logo background gradient
  const logoGradient = ctx.createLinearGradient(
    logoX,
    logoY,
    logoX + logoSize,
    logoY + logoSize
  );
  logoGradient.addColorStop(0, blueColor);
  logoGradient.addColorStop(0.5, indigo);
  logoGradient.addColorStop(1, purple);
  
  // Draw logo background
  roundedRect(ctx, logoX, logoY, logoSize, logoSize, logoRadius);
  ctx.fillStyle = logoGradient;
  ctx.fill();
  
  // Add pattern to logo background for sizes >= 96
  if (size >= 96) {
    ctx.save();
    roundedRect(ctx, logoX, logoY, logoSize, logoSize, logoRadius);
    ctx.clip();
    
    // Draw subtle grid pattern
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    
    // Simplified grid for small sizes
    const gridSpacing = Math.max(3, Math.floor(logoSize / 5));
    
    // Horizontal lines
    for (let y = logoY; y <= logoY + logoSize; y += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(logoX, y);
      ctx.lineTo(logoX + logoSize, y);
      ctx.stroke();
    }
    
    // Vertical lines
    for (let x = logoX; x <= logoX + logoSize; x += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(x, logoY);
      ctx.lineTo(x, logoY + logoSize);
      ctx.stroke();
    }
    ctx.restore();
  }
  
  // "LD" typography - scaled appropriately
  const fontHeight = logoSize * 0.6;
  const letterY = logoY + (logoSize - fontHeight) / 2 + fontHeight * 0.8;
  
  // Draw "L" - professional typography
  const lineWidth = Math.max(1, Math.floor(logoSize * 0.08));
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  const lX = logoX + logoSize * 0.25;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)';
  ctx.beginPath();
  ctx.moveTo(lX, logoY + logoSize * 0.25);
  ctx.lineTo(lX, letterY);
  ctx.lineTo(lX + fontHeight * 0.4, letterY);
  ctx.stroke();
  
  // Add "D" for sizes >= 96
  if (size >= 96) {
    const dX = logoX + logoSize * 0.6;
    
    // Vertical line of D
    ctx.beginPath();
    ctx.moveTo(dX, logoY + logoSize * 0.25);
    ctx.lineTo(dX, letterY);
    ctx.stroke();
    
    // Curved part of D with refined shape
    ctx.beginPath();
    ctx.moveTo(dX, logoY + logoSize * 0.25);
    ctx.bezierCurveTo(
      dX + fontHeight * 0.5, logoY + logoSize * 0.25,
      dX + fontHeight * 0.5, letterY,
      dX, letterY
    );
    ctx.stroke();
  }
  
  saveFavicon(size, canvas);
}

function saveFavicon(size, canvas) {
  // Save the canvas as a PNG image with a new timestamp to force cache invalidation
  const timestamp = Date.now();
  const outputDir = path.join(__dirname, '../public');
  const outputFile = path.join(outputDir, `favicon-${size}.png?v=${timestamp}`);
  const regularOutputFile = path.join(outputDir, `favicon-${size}.png`);

  // Ensure the directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(regularOutputFile, buffer);

  console.log(`Favicon ${size}x${size} generated and saved to ${regularOutputFile}`);
} 