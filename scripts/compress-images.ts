import sharp from 'sharp';
import { readdir, stat, writeFile } from 'fs/promises';
import { join, extname, basename } from 'path';

interface BlurPlaceholder {
  [key: string]: string;
}

const PUBLIC_DIR = 'public';
const QUALITY_WEBP = 85;
const QUALITY_AVIF = 60;
const BLUR_SIZE = 10;

async function generateBlurPlaceholder(inputPath: string): Promise<string> {
  const buffer = await sharp(inputPath)
    .resize(BLUR_SIZE, BLUR_SIZE, { fit: 'inside' })
    .blur(1)
    .jpeg({ quality: 20 })
    .toBuffer();
  
  return `data:image/jpeg;base64,${buffer.toString('base64')}`;
}

async function processImage(imagePath: string): Promise<{ 
  originalSize: number, 
  webpSize: number, 
  avifSize: number,
  blurData: string 
}> {
  const inputStats = await stat(imagePath);
  const originalSize = inputStats.size;
  
  const ext = extname(imagePath);
  const name = basename(imagePath, ext);
  const dir = join(PUBLIC_DIR);
  
  const webpPath = join(dir, `${name}.webp`);
  const avifPath = join(dir, `${name}.avif`);
  
  // Generate optimized formats
  const webpBuffer = await sharp(imagePath)
    .webp({ quality: QUALITY_WEBP })
    .toBuffer();
  
  const avifBuffer = await sharp(imagePath)
    .avif({ quality: QUALITY_AVIF })
    .toBuffer();
  
  // Write optimized images
  await writeFile(webpPath, webpBuffer);
  await writeFile(avifPath, avifBuffer);
  
  // Generate blur placeholder
  const blurData = await generateBlurPlaceholder(imagePath);
  
  console.log(`✓ ${imagePath}:`);
  console.log(`  Original: ${Math.round(originalSize / 1024)}KB`);
  console.log(`  WebP: ${Math.round(webpBuffer.length / 1024)}KB (-${Math.round((1 - webpBuffer.length / originalSize) * 100)}%)`);
  console.log(`  AVIF: ${Math.round(avifBuffer.length / 1024)}KB (-${Math.round((1 - avifBuffer.length / originalSize) * 100)}%)`);
  
  return {
    originalSize,
    webpSize: webpBuffer.length,
    avifSize: avifBuffer.length,
    blurData
  };
}

async function main() {
  const imageExtensions = ['.jpg', '.jpeg', '.png'];
  const blurPlaceholders: BlurPlaceholder = {};
  
  try {
    const files = await readdir(PUBLIC_DIR);
    const imageFiles = files.filter(file => 
      imageExtensions.includes(extname(file).toLowerCase())
    );
    
    if (imageFiles.length === 0) {
      console.log('No images found to process');
      return;
    }
    
    console.log(`Processing ${imageFiles.length} images...\\n`);
    
    let totalOriginal = 0;
    let totalWebp = 0;
    let totalAvif = 0;
    
    for (const file of imageFiles) {
      const filePath = join(PUBLIC_DIR, file);
      const result = await processImage(filePath);
      
      totalOriginal += result.originalSize;
      totalWebp += result.webpSize;
      totalAvif += result.avifSize;
      
      // Store blur placeholder with filename as key
      const name = basename(file, extname(file));
      blurPlaceholders[name] = result.blurData;
      
      console.log('');
    }
    
    // Write blur placeholders JSON
    const blurDataPath = join('src', 'data', 'blurData.json');
    await writeFile(blurDataPath, JSON.stringify(blurPlaceholders, null, 2));
    
    console.log('📊 Summary:');
    console.log(`Total original size: ${Math.round(totalOriginal / 1024)}KB`);
    console.log(`Total WebP size: ${Math.round(totalWebp / 1024)}KB (-${Math.round((1 - totalWebp / totalOriginal) * 100)}%)`);
    console.log(`Total AVIF size: ${Math.round(totalAvif / 1024)}KB (-${Math.round((1 - totalAvif / totalOriginal) * 100)}%)`);
    console.log(`\\n✅ Blur placeholders written to ${blurDataPath}`);
    
  } catch (error) {
    console.error('❌ Error processing images:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}