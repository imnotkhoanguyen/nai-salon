// Script to convert images to WebP format for better performance
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the public/images/gallery directory if it doesn't exist
const galleryDir = path.join(__dirname, '..', 'public', 'images', 'gallery');

if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
  console.log('Created gallery directory:', galleryDir);
}

// Image conversion instructions for the user
console.log(`
📸 IMAGE CONVERSION INSTRUCTIONS

To convert your images to WebP format, you have several options:

1. ONLINE CONVERTERS (Recommended for quick setup):
   - https://convertio.co/webp-converter/
   - https://cloudconvert.com/webp-converter
   - https://convertio.co/

2. COMMAND LINE (if you have ImageMagick installed):
   magick convert input.jpg -quality 85 output.webp

3. PHOTOSHOP/GIMP:
   - Export as WebP with 85% quality
   - Use "Save for Web" with WebP format

📁 PLACE YOUR CONVERTED IMAGES HERE:
${galleryDir}

📋 REQUIRED IMAGE FILES:
- portrait-turquoise-nails.webp
- white-nails-portrait.webp  
- speckled-nail-art.webp
- burgundy-coffin-nails.webp
- pink-pedicure.webp
- pink-glitter-nails.webp
- red-lips-nails-portrait.webp
- bubblegum-pink-nails.webp
- hot-pink-sweater-nails.webp

🎯 OPTIMIZATION TIPS:
- Use 85% quality for best size/quality balance
- Resize to max 800px width for web display
- Use progressive loading for better UX
- Alt text is already optimized for SEO

✅ After converting, your gallery will automatically display the images!
`);

// Create a placeholder file to ensure directory exists
const placeholderFile = path.join(galleryDir, '.gitkeep');
if (!fs.existsSync(placeholderFile)) {
  fs.writeFileSync(placeholderFile, '# Gallery images directory\n# Place your WebP images here\n');
}
