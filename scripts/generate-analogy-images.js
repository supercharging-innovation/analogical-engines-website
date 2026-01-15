/**
 * Script to generate visual images for analogical examples using Google Gemini API
 *
 * Usage: node scripts/generate-analogy-images.js
 * (Reads GEMINI_API_KEY from .env file)
 */

const fs = require('fs');
const path = require('path');
require('dotenv').config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
    console.error('Error: GEMINI_API_KEY not found in .env file');
    process.exit(1);
}

// The three analogical examples we want to visualize
const analogies = [
    {
        id: 'kingfisher-train',
        source: "Kingfisher's beak",
        target: "Shinkansen bullet train",
        prompt: `Create a stunning artistic diptych image with NO TEXT, NO WORDS, NO LABELS, NO UI ELEMENTS:

Left half: A sleek kingfisher bird diving into crystal clear water, its aerodynamic beak piercing the surface with minimal splash. Show the elegance and streamlined form of the bird.

Right half: The nose of a modern Japanese Shinkansen bullet train, emphasizing its long pointed nose cone design inspired by the kingfisher.

IMPORTANT: The image must contain absolutely NO text, no labels, no titles, no watermarks, no UI elements. Pure visual art only.

The two halves blend together seamlessly in the middle.
Style: Clean, modern digital art illustration.
Color palette: Blues, teals, silvers, cyan highlights.
Mood: Innovative, elegant, high-tech.`
    },
    {
        id: 'bicycle-airplane',
        source: "Bicycle chain mechanics",
        target: "Wright Brothers' airplane",
        prompt: `Create a stunning artistic diptych image with NO TEXT, NO WORDS, NO LABELS, NO UI ELEMENTS:

Left half: A close-up of a vintage bicycle chain and sprocket mechanism, showing the precision of interlocking metal links and gears. Warm metallic tones.

Right half: The Wright Flyer biplane in flight, showing its chain-driven propeller system. Historic aviation aesthetic.

IMPORTANT: The image must contain absolutely NO text, no labels, no titles, no watermarks, no UI elements. Pure visual art only.

The two halves blend together with a seamless artistic transition.
Style: Vintage-inspired with warm sepia and bronze tones.
Color palette: Copper, bronze, amber, warm sky tones.
Mood: Pioneering, ingenious, historic elegance.`
    },
    {
        id: 'origami-solar',
        source: "Origami folding patterns",
        target: "NASA solar arrays",
        prompt: `Create a stunning artistic diptych image with NO TEXT, NO WORDS, NO LABELS, NO UI ELEMENTS:

Left half: Elegant white Japanese origami with geometric Miura-fold patterns, showing the mathematical precision of paper folding art.

Right half: Golden NASA deployable solar array panels in space, with Earth visible in the background. The folding pattern echoes the origami.

IMPORTANT: The image must contain absolutely NO text, no labels, no titles, no watermarks, no UI elements. Pure visual art only.

The two halves blend together seamlessly.
Style: Clean, modern, precise.
Color palette: White/cream paper transitioning to deep space blue and golden solar panels.
Mood: Elegant, cosmic, transformative.`
    }
];

async function generateImage(analogy) {
    console.log(`\nGenerating image for: ${analogy.source} → ${analogy.target}`);

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent`;

    const requestBody = {
        contents: [
            {
                parts: [
                    { text: analogy.prompt }
                ]
            }
        ],
        generationConfig: {
            responseModalities: ["TEXT", "IMAGE"],
            imageConfig: {
                aspectRatio: "16:9",
                imageSize: "2K"
            }
        }
    };

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-goog-api-key': GEMINI_API_KEY
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`API Error (${response.status}):`, errorText);
            return null;
        }

        const data = await response.json();

        // Extract image from response
        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            const parts = data.candidates[0].content.parts;
            for (const part of parts) {
                if (part.inlineData && part.inlineData.mimeType.startsWith('image/')) {
                    const imageData = part.inlineData.data;
                    const mimeType = part.inlineData.mimeType;
                    const extension = mimeType.split('/')[1] || 'png';

                    // Save the image
                    const outputDir = path.join(__dirname, '..', 'public', 'images', 'analogies');
                    if (!fs.existsSync(outputDir)) {
                        fs.mkdirSync(outputDir, { recursive: true });
                    }

                    const outputPath = path.join(outputDir, `${analogy.id}.${extension}`);
                    fs.writeFileSync(outputPath, Buffer.from(imageData, 'base64'));

                    console.log(`✓ Saved: ${outputPath}`);
                    return outputPath;
                }
            }
        }

        console.log('Response structure:', JSON.stringify(data, null, 2).substring(0, 500));
        console.error('No image found in response');
        return null;

    } catch (error) {
        console.error('Error generating image:', error.message);
        return null;
    }
}

async function main() {
    console.log('='.repeat(60));
    console.log('Analogical Engines - Image Generation Script');
    console.log('='.repeat(60));
    console.log('\nUsing Gemini API to generate visual representations of analogies\n');

    const results = [];

    for (const analogy of analogies) {
        const result = await generateImage(analogy);
        results.push({
            id: analogy.id,
            source: analogy.source,
            target: analogy.target,
            imagePath: result
        });

        // Add delay between requests to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    console.log('\n' + '='.repeat(60));
    console.log('Generation Complete');
    console.log('='.repeat(60));

    console.log('\nResults:');
    for (const r of results) {
        const status = r.imagePath ? '✓' : '✗';
        console.log(`${status} ${r.source} → ${r.target}`);
        if (r.imagePath) {
            console.log(`  Path: ${r.imagePath}`);
        }
    }
}

main().catch(console.error);
