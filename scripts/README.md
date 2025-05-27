# Logo Generation Scripts

This directory contains scripts used to generate the Launchify Digital logo and favicons.

## Scripts

### generate-logo.js

This script generates the main logo for Launchify Digital. The logo features:

- A modern, rounded square background with a blue-to-purple gradient
- A subtle grid pattern representing web design/development
- A stylized "L" (for Launchify) with code brackets, representing website creation
- A dot/cursor element to represent digital interaction

The logo is saved as `/public/LOGO.png` at 512x512 pixels resolution.

### generate-favicon.js

This script generates smaller versions of the logo for use as favicons. It creates:

- 16x16 - Minimal version for browser tabs
- 32x32 - Standard favicon size
- 48x48 - Medium size with some detail
- 96x96 - Larger size with more detail
- 192x192 - Full detail for app icons

All icons use responsive design that simplifies the logo at smaller sizes while maintaining brand recognition.

### generate-favicon-ico.js

This script creates a `favicon.ico` file from the 32x32 PNG favicon. This is needed for older browsers that specifically look for a favicon.ico file in the root directory.

## Usage

To regenerate the logo and favicons, run:

```bash
node scripts/generate-logo.js
node scripts/generate-favicon.js
node scripts/generate-favicon-ico.js
```

The scripts require the `canvas` npm package to be installed. 