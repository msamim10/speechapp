// PublicSpeakingApp/data/prompts.js

export const promptsData = [
  {
    id: 'prompt1',
    title: 'Standard Speech (Center)',
    category: 'Public Speech',
    image: require('../assets/prompt-backgrounds/good.png'), // Assuming this is the first image
    text: `Welcome to the Public Speaking Practice App!\n\nThis is your teleprompter screen. The text you see here will scroll automatically based on the speed you set.\n\nYou can adjust the scrolling speed using the slider below. Faster speeds mean the text moves quicker, while slower speeds give you more time to read.\n\nFont size can also be adjusted using the 'A-' and 'A+' buttons. Find a size that's comfortable for you to read from a distance.\n\nThe 'Start' button begins the scrolling animation. Once started, it changes to 'Pause', allowing you to temporarily halt the text movement.\n\nThe 'Stop' button will cease the scrolling entirely and reset the text position back to the very beginning.\n\nPractice delivering your speech smoothly and confidently. Remember to maintain eye contact with your imaginary audience and use appropriate gestures.\n\nEffective public speaking is a skill that improves with practice. Use this tool regularly to rehearse your presentations, speeches, or even just talking points for meetings.\n\nTry varying the speed and font size to simulate different conditions or preferences. Good luck with your practice session!\n\nHere is some more text just to ensure the content is long enough to properly test the scrolling functionality across different device heights and font sizes. Keep going, you are doing great! Public speaking can be challenging, but preparation makes a huge difference.\n\nFinal paragraph to fill things out. Focus on clarity, pace, and engagement during your delivery.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '40%',
      top: '54%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'prompt2',
    title: 'TED Talk Practice',
    category: 'Public Speech',
    image: require('../assets/prompt-backgrounds/ted.png'), // The new image path
    text: `Good morning everyone.\n\nToday, I want to talk about the future of creativity in an AI-driven world.\n\nWe stand at a fascinating crossroads where technology offers incredible tools, but also raises questions about originality and human expression.\n\nLet's explore how we can leverage these tools without losing the essence of what makes us uniquely creative.\n\nConsider the impact on art, music, and storytelling...\n\n(Add more relevant text here to make the prompt longer)`,
    layout: {
      position: 'absolute',
      width: '45%',
      height: '35%',
      top: '50%',
      left: '26%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'prompt3',
    title: 'Airline Safety Briefing',
    category: 'Public Speech',
    image: require('../assets/prompt-backgrounds/flight.png'),
    text: `Good afternoon ladies and gentlemen, and welcome aboard.\n\nPlease direct your attention to the cabin crew as we demonstrate the safety features of this aircraft.\n\nEnsure your seat belts are fastened securely whenever the seatbelt sign is illuminated.\n\nThere are emergency exits located throughout the cabin. Please take a moment now to locate your nearest exit, keeping in mind it may be behind you.\n\nIn the unlikely event of a water landing, life vests are located under your seats...\n\n(Add more relevant text here)`,
    layout: {
      position: 'absolute',
      width: '55%',
      height: '35%',
      top: '45%',
      left: '18%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'prompt4',
    title: 'University Graduation Speech',
    category: 'Public Speech',
    image: require('../assets/prompt-backgrounds/university-graduation.png'),
    text: `Good afternoon distinguished faculty, proud parents, and most importantly, the graduating class of 2024.\n\nToday marks a significant milestone in your academic journey. As you stand on the threshold of new beginnings, remember that your education has equipped you with more than just knowledge - it has given you the tools to think critically, solve complex problems, and make meaningful contributions to society.\n\nEach of you has overcome unique challenges to reach this moment. Whether it was late-night study sessions, balancing work and academics, or navigating the complexities of remote learning during unprecedented times, you've demonstrated resilience and determination.\n\nAs you move forward, carry with you the lessons learned within these walls. Remember that success is not just about individual achievement, but about lifting others as you climb. The world needs your fresh perspectives, innovative ideas, and compassionate leadership.\n\nClass of 2024, you are the architects of tomorrow. Go forth with confidence, curiosity, and the courage to make a difference. Congratulations on this remarkable achievement!`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '50%',
      top: '39%',
      left: '18%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'prompt5',
    title: 'Courtroom Opening Statement',
    category: 'Public Speech',
    image: require('../assets/prompt-backgrounds/courtroom.png'),
    text: `Ladies and gentlemen of the jury, today we are here to seek justice in a case that has deeply affected our community.\n\nOver the course of this trial, you will hear evidence that clearly demonstrates my client's innocence. The prosecution's case is built on circumstantial evidence and assumptions, not facts.\n\nYou will learn that the timeline presented by the prosecution simply doesn't add up. You will see that key witnesses have changed their stories multiple times. Most importantly, you will discover that the physical evidence contradicts the prosecution's narrative.\n\nAs you listen to the testimony and examine the evidence, I ask you to keep an open mind. Remember that in our justice system, the burden of proof lies with the prosecution. They must prove their case beyond a reasonable doubt.\n\nBy the end of this trial, I am confident that you will see the truth: my client is innocent, and the real perpetrator remains at large. Thank you for your attention and your service to justice.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '48%',
      top: '40%',
      left: '16%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'prompt6',
    title: 'Military Speech',
    category: 'Public Speech',
    image: require('../assets/prompt-backgrounds/military.png'),
    text: `Attention on deck!\n\nToday, we gather to honor the brave men and women who have served our nation with distinction. Each of you represents the finest traditions of military service: courage, honor, and commitment.\n\nYour training has prepared you for this moment. You've learned to work as a team, to think under pressure, and to put the mission first. These skills will serve you well in the challenges ahead.\n\nRemember that leadership is not about rank or position - it's about character and action. Lead by example, take care of your fellow service members, and never forget the values that brought you here.\n\nAs you move forward in your military careers, know that you are part of something greater than yourself. Your service matters. Your sacrifice matters. And your dedication to duty inspires those who will follow in your footsteps.\n\nDismissed!`,
    layout: {
      position: 'absolute',
      width: '95%',
      height: '35%',
      top: '57%',
      left: '2.5%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'prompt7',
    title: 'Wedding Speech',
    category: 'Public Speech',
    image: require('../assets/prompt-backgrounds/wedding.png'),
    text: `Good evening everyone! For those who don't know me, I'm [Name], and I have the honor of being the best man today.\n\nI've known [Groom's Name] for [number] years, and I can honestly say that I've never seen him as happy as he is with [Bride's Name]. From the moment they met, it was clear they were meant for each other.\n\n[Groom's Name], you've found someone who challenges you, supports you, and brings out the best in you. [Bride's Name], you've found someone who will always be your biggest fan and your strongest ally.\n\nAs you begin this new chapter together, remember that marriage isn't about finding the perfect person, but about loving an imperfect person perfectly. It's about growing together, facing challenges together, and creating a lifetime of memories together.\n\nTo [Bride's Name] and [Groom's Name] - may your love continue to grow stronger with each passing year. Cheers to your beautiful future together!`,
    layout: {
      position: 'absolute',
      width: '80%',
      height: '32%',
      top: '60%',
      left: '10%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'prompt8',
    title: 'Public Speaking Workshop',
    category: 'Public Speech',
    image: require('../assets/prompt-backgrounds/public1.png'),
    text: `Welcome to our Public Speaking Workshop!\n\nToday, we're going to transform your speaking skills and help you become a more confident, effective communicator. Whether you're speaking to a small team or a large audience, the principles we'll cover will help you make a lasting impact.\n\nWe'll start by addressing the most common fear: public speaking anxiety. Remember, even the most experienced speakers feel nervous. The key is to channel that energy into enthusiasm and connection with your audience.\n\nThroughout this workshop, you'll learn essential techniques:\n- How to structure your message for maximum impact\n- The power of body language and vocal variety\n- Strategies for engaging your audience\n- Tips for handling questions and unexpected situations\n\nMost importantly, you'll have multiple opportunities to practice and receive constructive feedback. Growth happens when we step outside our comfort zones.\n\nLet's begin this journey to becoming more powerful communicators!`,
    textColor: 'white',
    layout: {
      position: 'absolute',
      width: '90%',
      height: '27%',
      top: '10%',
      left: '5%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
      color: 'white',
    }
  },
  // Add more prompts here in the future
]; 