// Initialize the KAPLAY engine instance.
        // This function automatically creates an HTML5 <canvas> element and injects it into the body.
        // Force the engine initialization to wait until the window/DOM is 100% ready
window.addEventListener("DOMContentLoaded", () => {
    kaplay({
        background: [135, 206, 235], 
        width: window.innerWidth,
        height: window.innerHeight,
        // Keeps your game aspect ratio consistent if the window is resized (prevents stretching distortion)
        letterbox: true, 
    });
});
            
