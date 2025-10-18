# Gallery Images Directory

This directory contains the WebP-optimized images for the Nail 90 Spa gallery.

## Required Images

Place the following WebP images in this directory:

- `portrait-turquoise-nails.webp` - Turquoise nail art portrait
- `white-nails-portrait.webp` - White nail art portrait  
- `speckled-nail-art.webp` - Speckled quail egg nail art
- `burgundy-coffin-nails.webp` - Burgundy coffin nail art
- `pink-pedicure.webp` - Pink pedicure
- `pink-glitter-nails.webp` - Pink glitter nail art
- `red-lips-nails-portrait.webp` - Red lips and nails portrait
- `bubblegum-pink-nails.webp` - Bubblegum pink nail art
- `hot-pink-sweater-nails.webp` - Hot pink sweater and nails

## Image Optimization

All images should be:
- **Format**: WebP
- **Quality**: 85%
- **Max Width**: 800px
- **Progressive**: Yes (for better loading)

## Conversion Tools

### Online Converters (Recommended)
- [Convertio.co](https://convertio.co/webp-converter/)
- [CloudConvert](https://cloudconvert.com/webp-converter)
- [Online-Convert](https://image.online-convert.com/convert-to-webp)

### Command Line (ImageMagick)
```bash
magick convert input.jpg -quality 85 -resize 800x output.webp
```

### Photoshop/GIMP
1. Open your image
2. Go to File > Export > Export As
3. Choose WebP format
4. Set quality to 85%
5. Resize to max 800px width
6. Save

## SEO Benefits

- **Faster Loading**: WebP is 25-35% smaller than JPEG
- **Better Performance**: Improved Core Web Vitals scores
- **Mobile Optimization**: Smaller file sizes for mobile users
- **Search Rankings**: Faster sites rank higher in Google

## Gallery Features

The gallery component includes:
- **Lazy Loading**: Images load as needed
- **Responsive Design**: Adapts to all screen sizes
- **Hover Effects**: Interactive image overlays
- **SEO Optimized**: Proper alt text and descriptions
- **Performance**: WebP format for optimal speed
