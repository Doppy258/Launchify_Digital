const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

async function generateFaviconIco() {
  try {
    // Load the 32x32 favicon
    const faviconPath = path.join(__dirname, '../public/favicon-32.png');
    
    // Wait for the favicon to be available
    let attempts = 0;
    while (!fs.existsSync(faviconPath) && attempts < 5) {
      console.log(`Waiting for favicon to be available... (attempt ${attempts + 1})`);
      await new Promise(resolve => setTimeout(resolve, 500));
      attempts++;
    }
    
    if (!fs.existsSync(faviconPath)) {
      console.error('Error: Favicon file not found');
      return;
    }
    
    const image = await loadImage(faviconPath);
    
    // Create a new canvas
    const canvas = createCanvas(32, 32);
    const ctx = canvas.getContext('2d');
    
    // Draw the image onto the canvas
    ctx.drawImage(image, 0, 0, 32, 32);
    
    // Get the PNG buffer
    const buffer = canvas.toBuffer('image/png');
    
    // Save as favicon.ico (same as PNG for simplicity)
    const outputFile = path.join(__dirname, '../public/favicon.ico');
    
    // Add a .bak extension to the old file if it exists (for backup)
    if (fs.existsSync(outputFile)) {
      try {
        fs.renameSync(outputFile, `${outputFile}.bak`);
      } catch (err) {
        console.log('Could not rename old favicon.ico, overwriting it...');
      }
    }
    
    // Write the new file
    fs.writeFileSync(outputFile, buffer);
    
    console.log(`Favicon.ico generated and saved to ${outputFile}`);
  } catch (err) {
    console.error('Error generating favicon.ico:', err);
  }
}

generateFaviconIco(); 