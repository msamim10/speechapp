// PublicSpeakingApp/data/prompts.js

export const promptsData = [
  {
    id: 'prompt1',
    title: 'Standard Speech (Center)',
    category: 'Public Speech',
    image: require('../assets/prompt-backgrounds/good.png'),
    text: `Welcome to the Public Speaking Practice App!\n\nThis is your teleprompter screen. The text you see here will scroll automatically based on the speed you set.\n\nYou can adjust the scrolling speed using the slider below. Faster speeds mean the text moves quicker, while slower speeds give you more time to read.\n\nFont size can also be adjusted using the 'A-' and 'A+' buttons. Find a size that's comfortable for you to read from a distance.\n\nThe 'Start' button begins the scrolling animation. Once started, it changes to 'Pause', allowing you to temporarily halt the text movement.\n\nThe 'Stop' button will cease the scrolling entirely and reset the text position back to the very beginning.\n\nPractice delivering your speech smoothly and confidently. Remember to maintain eye contact with your imaginary audience and use appropriate gestures.\n\nEffective public speaking is a skill that improves with practice. Use this tool regularly to rehearse your presentations, speeches, or even just talking points for meetings.\n\nTry varying the speed and font size to simulate different conditions or preferences. Good luck with your practice session!`,
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
    image: require('../assets/prompt-backgrounds/ted.png'),
    text: `Good morning everyone.\n\nToday, I want to talk about the future of creativity in an AI-driven world. We stand at a fascinating crossroads where technology offers incredible tools, but also raises questions about originality and human expression.\n\nConsider this: AI can now compose music, write stories, and create art. But what does this mean for human creativity? I believe we're entering a new renaissance, where AI becomes our collaborator rather than our competitor.\n\nLet me share a personal story. Last year, I collaborated with an AI to compose a piece of music. The AI suggested chord progressions I would never have considered, but it was my human touch that gave the piece its soul and emotional depth.\n\nThis partnership between human and machine is the future. AI can help us break through creative blocks, explore new possibilities, and push the boundaries of what we thought was possible.\n\nBut remember: the heart of creativity remains human. Our experiences, emotions, and unique perspectives are what make art meaningful. Let's embrace AI as a tool that enhances, rather than replaces, human creativity.\n\nThank you.`,
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
    text: `Good afternoon ladies and gentlemen, and welcome aboard Flight 123 to New York.\n\nPlease direct your attention to the cabin crew as we demonstrate the safety features of this Boeing 787 Dreamliner.\n\nEnsure your seat belts are fastened securely whenever the seatbelt sign is illuminated. To fasten, insert the metal fitting into the buckle and pull the loose end to tighten. To release, lift the top of the buckle.\n\nThere are eight emergency exits located throughout the cabin. Please take a moment now to locate your nearest exit, keeping in mind it may be behind you. The exits are clearly marked with illuminated signs and are equipped with inflatable slides.\n\nIn the unlikely event of a water landing, life vests are located under your seats. To put on your life vest, slip it over your head, fasten the waist straps, and pull the red tabs to inflate. Please do not inflate your life vest inside the aircraft.\n\nOxygen masks will drop automatically in case of cabin depressurization. Pull the mask toward you to start the flow of oxygen, place it over your nose and mouth, and breathe normally.\n\nThank you for your attention. We wish you a pleasant flight.`,
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
    text: `Good afternoon distinguished faculty, proud parents, and most importantly, the graduating class of 2024.\n\nToday marks a significant milestone in your academic journey. As you stand on the threshold of new beginnings, remember that your education has equipped you with more than just knowledge - it has given you the tools to think critically, solve complex problems, and make meaningful contributions to society.\n\nEach of you has overcome unique challenges to reach this moment. Whether it was late-night study sessions in the library, balancing work and academics, or navigating the complexities of remote learning during unprecedented times, you've demonstrated resilience and determination.\n\nAs you move forward, carry with you the lessons learned within these walls. Remember that success is not just about individual achievement, but about lifting others as you climb. The world needs your fresh perspectives, innovative ideas, and compassionate leadership.\n\nClass of 2024, you are the architects of tomorrow. Go forth with confidence, curiosity, and the courage to make a difference. Congratulations on this remarkable achievement!`,
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
    title: 'Courtroom Defense Closing Statement',
    category: 'Public Speech',
    image: require('../assets/prompt-backgrounds/courtroom2.png'),
    text: `Ladies and gentlemen of the jury, we have reached the end of this trial, and the evidence has spoken clearly.\n\nOver the past three weeks, you have heard testimony from multiple witnesses, examined physical evidence, and listened to expert analysis. What has become abundantly clear is that the prosecution has failed to meet their burden of proof.\n\nLet's review the key points: First, the DNA evidence found at the scene does not match my client. Second, the security camera footage shows someone else entering the building at the time of the incident. Third, the main witness's testimony has changed three times during the investigation.\n\nIn our justice system, we do not convict based on suspicion or probability. We require proof beyond a reasonable doubt. The prosecution has presented a theory, but they have not proven it.\n\nI ask you to return a verdict of not guilty. Not because we don't want justice, but because justice demands certainty. Thank you for your careful consideration.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '35%',
      top: '53%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  // {
  //   id: 'prompt6',
  //   title: 'Military Speech',
  //   category: 'Public Speech',
  //   image: require('../assets/prompt-backgrounds/military.png'),
  //   text: `Attention on deck!\n\nToday, we gather to honor the brave men and women who have served our nation with distinction. Each of you represents the finest traditions of military service: courage, honor, and commitment.\n\nYour training has prepared you for this moment. You've learned to work as a team, to think under pressure, and to put the mission first. These skills will serve you well in the challenges ahead.\n\nRemember that leadership is not about rank or position - it's about character and action. Lead by example, take care of your fellow service members, and never forget the values that brought you here.\n\nAs you move forward in your military careers, know that you are part of something greater than yourself. Your service matters. Your sacrifice matters. And your dedication to duty inspires those who will follow in your footsteps.\n\nDismissed!`,
  //   layout: {
  //     position: 'absolute',
  //     width: '95%',
  //     height: '35%',
  //     top: '57%',
  //     left: '2.5%',
  //     backgroundColor: 'transparent',
  //     overflow: 'hidden',
  //     borderRadius: 10,
  //   }
  // },
  {
    id: 'prompt7',
    title: 'Wedding Speech',
    category: 'Public Speech',
    image: require('../assets/prompt-backgrounds/wedding2.png'),
    text: `Good evening everyone! For those who don't know me, I'm Michael, and I have the honor of being the best man today.\n\nI've known James for fifteen years, and I can honestly say that I've never seen him as happy as he is with Sarah. From the moment they met at that coffee shop on Main Street, it was clear they were meant for each other.\n\nJames, you've found someone who challenges you, supports you, and brings out the best in you. Sarah, you've found someone who will always be your biggest fan and your strongest ally.\n\nAs you begin this new chapter together, remember that marriage isn't about finding the perfect person, but about loving an imperfect person perfectly. It's about growing together, facing challenges together, and creating a lifetime of memories together.\n\nTo Sarah and James - may your love continue to grow stronger with each passing year. May you always find joy in the little things, strength in difficult times, and laughter in everyday moments. Cheers to your beautiful future together!`,
    textColor: 'white',
    layout: {
      position: 'absolute',
      width: '40%',
      height: '37%',
      top: '40%',
      left: '25%',
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
  {
    id: 'prompt9',
    title: 'Flight Pilot Briefing',
    category: 'Public Speech',
    image: require('../assets/prompt-backgrounds/flight-pilot.png'),
    text: `Good morning passengers, this is your captain speaking.\n\nWelcome aboard Flight 456 to London Heathrow. We're currently at an altitude of 35,000 feet, cruising at a speed of 560 miles per hour. The weather in London is currently 18 degrees Celsius with light showers expected upon arrival.\n\nOur estimated flight time is 7 hours and 15 minutes. We expect some turbulence as we cross the Atlantic, but it should be mild. Please keep your seatbelts fastened whenever you're seated.\n\nOur cabin crew will be serving breakfast shortly, followed by a selection of movies and entertainment options. You can access our in-flight entertainment system through the screen in front of you.\n\nIf you need anything during the flight, please don't hesitate to ask our cabin crew. They're here to ensure your comfort and safety.\n\nThank you for choosing to fly with us today. We wish you a pleasant journey.`,
    layout: {
      position: 'absolute',
      width: '50%',
      height: '27%',
      top: '56%',
      left: '25%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'prompt10',
    title: 'Funeral Speech',
    category: 'Public Speech',
    image: require('../assets/prompt-backgrounds/funeral.png'),
    text: `Good afternoon everyone. Thank you for being here today to celebrate the life of Margaret Thompson.\n\nMargaret was more than just a beloved mother, grandmother, and friend. She was a force of nature - someone who brought light and warmth wherever she went. Whether it was through her volunteer work at the local hospital or her famous apple pie that she shared with neighbors, Margaret touched countless lives.\n\nI remember one particular story that captures her spirit perfectly. When the local food bank was struggling during the pandemic, Margaret organized a community drive that collected over 5,000 pounds of food. That was Margaret - always thinking of others, always finding a way to help.\n\nWhile we mourn her passing, let's also celebrate the incredible legacy she leaves behind. Her kindness, her strength, and her unwavering optimism will continue to inspire us all.\n\nTo Margaret - thank you for the love, the laughter, and the lessons. You may be gone, but your spirit will live on in all of us. Rest in peace.`,
    layout: {
      position: 'absolute',
      width: '58%',
      height: '37%',
      top: '50%',
      left: '21%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'prompt11',
    title: 'Orchestra Conductor Speech',
    category: 'Public Speech',
    image: require('../assets/prompt-backgrounds/orchestra.png'),
    text: `Good evening, ladies and gentlemen, and welcome to this evening's performance.\n\nTonight, we have the privilege of presenting a program that spans centuries of musical excellence. We begin with Beethoven's Symphony No. 5, a masterpiece that revolutionized classical music with its iconic four-note motif. Written during the Napoleonic Wars, this symphony captures the essence of struggle and triumph, with its dramatic interplay between the string and woodwind sections creating a powerful emotional journey.\n\nFollowing this, we'll present Tchaikovsky's "Swan Lake Suite," showcasing the full range of our orchestra's capabilities. From the delicate whispers of the strings in the "Dance of the Swans" to the powerful exclamations of the brass in the "Waltz," this piece demonstrates the orchestra's ability to paint vivid musical landscapes that tell a story without words.\n\nI'd like to take a moment to acknowledge the incredible dedication of our musicians. Their countless hours of rehearsal and unwavering commitment to excellence make these performances possible. Each member of this orchestra brings their unique voice to create something truly greater than the sum of its parts.\n\nAs we begin, I invite you to close your eyes, open your hearts, and let the music transport you. Let the familiar strains of Beethoven's Fifth Symphony remind you of music's power to transcend time and speak directly to the soul. Thank you for joining us on this musical journey.`,
    layout: {
      position: 'absolute',
      width: '55%',
      height: '32%',
      top: '50%',
      left: '16%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'prompt12',
    title: 'Shark Tank Pitch',
    category: 'Public Speech',
    image: require('../assets/prompt-backgrounds/shark-tank.png'),
    text: `Good evening Sharks, I'm here today seeking $500,000 for 10% equity in my company, SmartShelf.\n\nSmartShelf is an AI-powered smart storage system that automatically organizes and tracks your belongings. Using computer vision and RFID technology, it knows exactly what you have, where it is, and when you last used it.\n\nHere's why this is a game-changer: The average person spends 2.5 hours per week looking for lost items, costing businesses $2.7 billion annually in lost productivity. SmartShelf solves this problem with our patent-pending technology.\n\nOur current traction: We've secured $250,000 in pre-orders from 500 early adopters, and we have letters of intent from three major office supply chains. Our manufacturing costs are $199 per unit, and we'll retail at $499, giving us a 60% gross margin.\n\nThe investment will be used for: 40% manufacturing scale-up, 30% marketing, 20% R&D, and 10% operations. With your expertise and network, we project $5 million in revenue by year two.\n\nWhat makes us different? Unlike other smart storage solutions, SmartShelf requires no manual input - it learns and organizes automatically. Plus, our AI gets smarter over time, learning your usage patterns.\n\nSharks, this is your chance to get in on the ground floor of the next big thing in smart home and office organization. Who's ready to make a deal?`,
    layout: {
      position: 'absolute',
      width: '70%',
      height: '38%',
      top: '50%',
      left: '15%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },

  // --- Presentation Prompts (Placeholders - Customize details below!) ---
  // Remember to:
  // 1. Ensure image files are in 'assets/presentationpics/'
  // 2. Update `require('../assets/presentationpics/...')` with actual filenames.
  // 3. Customize placeholder `title`, `text`, and `layout` for each prompt.
  {
    id: 'presentation1',
    title: 'Boardroom Update', // Example Title
    category: 'Presentations',
    image: require('../assets/presentationpics/pic23.png'), // Updated filename
    text: `Placeholder text for the boardroom update presentation. Focus on key metrics and next steps. Remember to pause for questions.`, // Add real text later
    layout: { // Adjust layout percentages based on image!
      position: 'absolute',
      width: '50%', 
      height: '30%',
      top: '45%',
      left: '25%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'presentation2',
    title: 'Conference Keynote Intro', // Example Title
    category: 'Presentations',
    image: require('../assets/presentationpics/pic45.png'), // Updated filename
    text: `Placeholder text for the conference keynote introduction. Start with a strong opening, introduce the main topic, and outline the talk structure.`, // Add real text later
    layout: { // Adjust layout percentages based on image!
      position: 'absolute',
      width: '45%', 
      height: '35%',
      top: '40%',
      left: '27.5%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'presentation3',
    title: 'Product Demo', // Example Title
    category: 'Presentations',
    image: require('../assets/presentationpics/pic9.png'), // Updated filename
    text: `Placeholder text for a product demonstration. Clearly explain the problem, show the solution, and highlight key benefits. Keep it concise.`, // Add real text later
    layout: { // Adjust layout percentages based on image!
      position: 'absolute',
      width: '60%', 
      height: '40%',
      top: '50%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'presentation4',
    title: 'Team Update', // Example Title
    category: 'Presentations',
    image: require('../assets/presentationpics/pic34.png'), // Added filename
    text: `Placeholder text for a team update meeting. Cover progress, challenges, and upcoming deadlines. Keep it focused.`, // Add real text later
    layout: { // Adjust layout percentages based on image!
      position: 'absolute',
      width: '55%', 
      height: '35%',
      top: '48%',
      left: '22.5%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'presentation5',
    title: 'Informal Presentation', // Example Title
    category: 'Presentations',
    image: require('../assets/presentationpics/pic2.png'), // Added filename
    text: `Placeholder text for an informal presentation. Relaxed tone, clear message, engage the audience.`, // Add real text later
    layout: { // Adjust layout percentages based on image!
      position: 'absolute',
      width: '50%', 
      height: '40%',
      top: '42%',
      left: '25%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'presentation6',
    title: 'Workshop Facilitation', // Example Title
    category: 'Presentations',
    image: require('../assets/presentationpics/pic1.png'), // Added filename
    text: `Placeholder text for facilitating a workshop. Explain the activity, manage time, and encourage participation.`, // Add real text later
    layout: { // Adjust layout percentages based on image!
      position: 'absolute',
      width: '48%', 
      height: '38%',
      top: '46%',
      left: '26%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  // --- End Presentation Prompts ---

  // --- Speech Prompts (Placeholders - Customize details below!) ---
  // Remember to:
  // 1. Ensure image files are in 'assets/speechpics/'
  // 2. Update `require('../assets/speechpics/...')` with actual filenames if needed.
  // 3. Customize placeholder `title`, `text`, and `layout` for each prompt.
  {
    id: 'speech1',
    title: 'Speech Placeholder 1', 
    category: 'Speeches',
    image: require('../assets/speechpics/pic8222.png'),
    text: `Placeholder text for speech 1.`, 
    layout: { position: 'absolute', width: '50%', height: '30%', top: '45%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech2',
    title: 'Speech Placeholder 2', 
    category: 'Speeches',
    image: require('../assets/speechpics/pic2003.png'),
    text: `Placeholder text for speech 2.`, 
    layout: { position: 'absolute', width: '50%', height: '30%', top: '45%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech3',
    title: 'Speech Placeholder 3', 
    category: 'Speeches',
    image: require('../assets/speechpics/pic8401.png'),
    text: `Placeholder text for speech 3.`, 
    layout: { position: 'absolute', width: '50%', height: '30%', top: '45%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech4',
    title: 'Speech Placeholder 4', 
    category: 'Speeches',
    image: require('../assets/speechpics/pic6000.png'),
    text: `Placeholder text for speech 4.`, 
    layout: { position: 'absolute', width: '50%', height: '30%', top: '45%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech5',
    title: 'Speech Placeholder 5', 
    category: 'Speeches',
    image: require('../assets/speechpics/pic239.png'),
    text: `Placeholder text for speech 5.`, 
    layout: { position: 'absolute', width: '50%', height: '30%', top: '45%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech6',
    title: 'Speech Placeholder 6', 
    category: 'Speeches',
    image: require('../assets/speechpics/pic992.png'),
    text: `Placeholder text for speech 6.`, 
    layout: { position: 'absolute', width: '50%', height: '30%', top: '45%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech7',
    title: 'Speech Placeholder 7', 
    category: 'Speeches',
    image: require('../assets/speechpics/pic8581.png'),
    text: `Placeholder text for speech 7.`, 
    layout: { position: 'absolute', width: '50%', height: '30%', top: '45%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech8',
    title: 'Speech Placeholder 8', 
    category: 'Speeches',
    image: require('../assets/speechpics/pic092.png'),
    text: `Placeholder text for speech 8.`, 
    layout: { position: 'absolute', width: '50%', height: '30%', top: '45%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech9',
    title: 'Speech Placeholder 9', 
    category: 'Speeches',
    image: require('../assets/speechpics/pic893.png'),
    text: `Placeholder text for speech 9.`, 
    layout: { position: 'absolute', width: '50%', height: '30%', top: '45%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech10',
    title: 'Speech Placeholder 10', 
    category: 'Speeches',
    image: require('../assets/speechpics/pic805.png'),
    text: `Placeholder text for speech 10.`, 
    layout: { position: 'absolute', width: '50%', height: '30%', top: '45%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech11',
    title: 'Speech Placeholder 11', 
    category: 'Speeches',
    image: require('../assets/speechpics/pic6712.png'),
    text: `Placeholder text for speech 11.`, 
    layout: { position: 'absolute', width: '50%', height: '30%', top: '45%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech12',
    title: 'Speech Placeholder 12', 
    category: 'Speeches',
    image: require('../assets/speechpics/pic776.png'),
    text: `Placeholder text for speech 12.`, 
    layout: { position: 'absolute', width: '50%', height: '30%', top: '45%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech13',
    title: 'NASA Announcement',
    category: 'Speeches',
    image: require('../assets/speechpics/nasa.png'),
    text: `Placeholder text for a NASA announcement speech.`,
    layout: {
      position: 'absolute',
      width: '50%',
      height: '30%',
      top: '45%',
      left: '25%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  // --- End Speech Prompts ---

  // --- Interview Prompts (Placeholders - Customize details below!) ---
  // Remember to:
  // 1. Ensure image files are in 'assets/interviewpics/'
  // 2. Update `require('../assets/interviewpics/...')` with actual filenames.
  // 3. Customize placeholder `title`, `text`, and `layout` for each prompt.
  {
    id: 'interview1',
    title: 'Interview Scene 1', 
    category: 'Interviews',
    image: require('../assets/interviewpics/pic9300.png'),
    text: `Placeholder text for interview scene 1. Prepare your answers.`, 
    layout: { position: 'absolute', width: '50%', height: '30%', top: '45%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview2',
    title: 'Interview Scene 2', 
    category: 'Interviews',
    image: require('../assets/interviewpics/pic8025.png'),
    text: `Placeholder text for interview scene 2. Tell me about yourself.`, 
    layout: { position: 'absolute', width: '50%', height: '30%', top: '45%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview3',
    title: 'Interview Scene 3', 
    category: 'Interviews',
    image: require('../assets/interviewpics/pic7621.png'),
    text: `Placeholder text for interview scene 3. What are your strengths?`, 
    layout: { position: 'absolute', width: '50%', height: '30%', top: '45%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview4',
    title: 'Interview Scene 4', 
    category: 'Interviews',
    image: require('../assets/interviewpics/pic7800.png'),
    text: `Placeholder text for interview scene 4. What are your weaknesses?`, 
    layout: { position: 'absolute', width: '50%', height: '30%', top: '45%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview5',
    title: 'Interview Scene 5', 
    category: 'Interviews',
    image: require('../assets/interviewpics/01234.png'),
    text: `Placeholder text for interview scene 5. Why do you want this job?`, 
    layout: { position: 'absolute', width: '50%', height: '30%', top: '45%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview6',
    title: 'Interview Scene 6', 
    category: 'Interviews',
    image: require('../assets/interviewpics/pic3921.png'),
    text: `Placeholder text for interview scene 6. Where do you see yourself in 5 years?`, 
    layout: { position: 'absolute', width: '50%', height: '30%', top: '45%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview7',
    title: 'Interview Scene 7', 
    category: 'Interviews',
    image: require('../assets/interviewpics/pic3401.png'),
    text: `Placeholder text for interview scene 7. Do you have any questions for us?`, 
    layout: { position: 'absolute', width: '50%', height: '30%', top: '45%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview8',
    title: 'Interview Scene 8', 
    category: 'Interviews',
    image: require('../assets/interviewpics/444.png'),
    text: `Placeholder text for interview scene 8. Behavioral questions.`, 
    layout: { position: 'absolute', width: '50%', height: '30%', top: '45%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  // --- End Interview Prompts ---

  // Add more prompts here in the future
]; 