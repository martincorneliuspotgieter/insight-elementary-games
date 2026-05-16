// 2. Create some dummy data to test the function's states
const mockWords = ["They", "do", "gymnastics", "in", "the", "morning."];

// 3. Call your imported function!
buildSentence({
    showSlot: true,
    sentenceWords: mockWords,
    SLOT_WIDTH: 120,
    START_Y: 200,
    correctAdverb: "not\xa0often",
    currentSolution: "They do not\xa0often gymnastics in the morning.",
    currentTest: "They do gymnastics in the morning."
});

export function buildSentence(config) {
    console.log("Sentence builder module loaded!");
    // ... all your block building code remains exactly the same ...
}
