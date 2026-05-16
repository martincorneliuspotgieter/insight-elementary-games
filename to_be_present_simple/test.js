// Initialize the KAPLAY engine instance.
        // This function automatically creates an HTML5 <canvas> element and injects it into the body.
        kaplay({
            background: [135, 206, 235], 
            width: window.innerWidth,
            height: window.innerHeight,
            // Keeps your game aspect ratio consistent if the window is resized (prevents stretching distortion)
            letterbox: true, 
        });

import { buildSentence } from "sentencebuilder.js";
