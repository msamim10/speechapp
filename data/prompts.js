// PublicSpeakingApp/data/prompts.js

export const promptsData = [
  {
    id: 'prompt1',
    title: 'Standard Speech (Center)',
    category: 'Public Speech',
    image: require('../assets/good.png'), // Assuming this is the first image
    text: `Welcome to the Public Speaking Practice App!\n\nThis is your teleprompter screen. The text you see here will scroll automatically based on the speed you set.\n\nYou can adjust the scrolling speed using the slider below. Faster speeds mean the text moves quicker, while slower speeds give you more time to read.\n\nFont size can also be adjusted using the 'A-' and 'A+' buttons. Find a size that's comfortable for you to read from a distance.\n\nThe 'Start' button begins the scrolling animation. Once started, it changes to 'Pause', allowing you to temporarily halt the text movement.\n\nThe 'Stop' button will cease the scrolling entirely and reset the text position back to the very beginning.\n\nPractice delivering your speech smoothly and confidently. Remember to maintain eye contact with your imaginary audience and use appropriate gestures.\n\nEffective public speaking is a skill that improves with practice. Use this tool regularly to rehearse your presentations, speeches, or even just talking points for meetings.\n\nTry varying the speed and font size to simulate different conditions or preferences. Good luck with your practice session!\n\nHere is some more text just to ensure the content is long enough to properly test the scrolling functionality across different device heights and font sizes. Keep going, you are doing great! Public speaking can be challenging, but preparation makes a huge difference.\n\nFinal paragraph to fill things out. Focus on clarity, pace, and engagement during your delivery.`,
    layout: {
      position: 'absolute',
      width: '40%',
      height: '20%',
      top: '55%',
      left: '27%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'prompt2',
    title: 'TED Talk Practice',
    category: 'Public Speech',
    image: require('../assets/ted.png'), // The new image path
    text: `Good morning everyone.\n\nToday, I want to talk about the future of creativity in an AI-driven world.\n\nWe stand at a fascinating crossroads where technology offers incredible tools, but also raises questions about originality and human expression.\n\nLet's explore how we can leverage these tools without losing the essence of what makes us uniquely creative.\n\nConsider the impact on art, music, and storytelling...\n\n(Add more relevant text here to make the prompt longer)`,
    layout: {
      position: 'absolute',
      width: '40%',
      height: '20%',
      top: '47%',
      left: '27%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  // Replacing prompt3 with new definition and layout
  {
    id: 'prompt3',
    title: 'Airline Safety Briefing',
    category: 'Public Speech',
    image: require('../assets/flight.png'),
    text: `Good afternoon ladies and gentlemen, and welcome aboard.\n\nPlease direct your attention to the cabin crew as we demonstrate the safety features of this aircraft.\n\nEnsure your seat belts are fastened securely whenever the seatbelt sign is illuminated.\n\nThere are emergency exits located throughout the cabin. Please take a moment now to locate your nearest exit, keeping in mind it may be behind you.\n\nIn the unlikely event of a water landing, life vests are located under your seats...\n\n(Add more relevant text here)`,
    layout: {
      position: 'absolute',
      width: '40%',
      height: '20%',
      top: '47%',
      left: '27%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  // Add more prompts here in the future
]; 