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
  // --- End Public Speech Prompts ---

  // --- Practice Fundamentals Prompts ---
  {
    id: 'fundamentals1',
    title: 'Placeholder Fundamental 1', 
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/34f.png'),
    text: `Placeholder text for fundamental 1.`, 
    layout: { 
      position: 'absolute',
      width: '60%',
      height: '40%',
      top: '40%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    } // Copied layout from fundamentals5
  },
  {
    id: 'fundamentals2',
    title: 'Placeholder Fundamental 2', 
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/4mf.png'),
    text: `Placeholder text for fundamental 2.`, 
    layout: { 
      position: 'absolute',
      width: '60%',
      height: '40%',
      top: '40%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    } 
  },
  {
    id: 'fundamentals3',
    title: 'Placeholder Fundamental 3', 
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/er3.png'),
    text: `Placeholder text for fundamental 3.`, 
    layout: { 
      position: 'absolute',
      width: '60%',
      height: '40%',
      top: '40%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    } 
  },
  {
    id: 'fundamentals4',
    title: 'Placeholder Fundamental 4', 
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/mdk.png'),
    text: `Placeholder text for fundamental 4.`, 
    layout: { 
      position: 'absolute',
      width: '60%',
      height: '40%',
      top: '40%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    } 
  },
  {
    id: 'fundamentals5',
    title: 'Practicing Eye Contact',
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/ChatGPT Image Apr 28, 2025, 11_49_54 PM.png'),
    text: `Effective eye contact is crucial for connecting with your audience, conveying confidence, and building trust. It transforms a monologue into a conversation. Avoid common pitfalls like staring intensely at one person (making them uncomfortable), scanning the room too rapidly (appearing nervous or disengaged), or looking only at your notes or the back wall. Instead, practice making genuine, deliberate eye contact with different individuals or small sections of your imaginary audience. Aim to hold contact for about 3-5 seconds per person or section – long enough to establish a connection and acknowledge them, but not so long it becomes awkward. Think of it as having a series of brief, individual conversations across the room. While the teleprompter is a useful guide, make a conscious effort to look up frequently and engage directly with your audience. Record yourself: analyze where your eyes naturally go. Are you mostly looking down, or are you actively connecting with different parts of the room? Practice will make this feel more natural.`, 
    layout: { 
      position: 'absolute',
      width: '60%',
      height: '40%',
      top: '40%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'fundamentals6',
    title: 'Using Gestures Effectively',
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/ChatGPT Image Apr 28, 2025, 11_54_41 PM.png'),
    text: `Gestures should enhance and emphasize your message, adding visual interest and energy without becoming a distraction. The goal is natural, purposeful movement. Avoid common habits like keeping hands rigidly locked in pockets or behind your back, or nervous fidgeting (playing with pens, adjusting clothes). Practice incorporating a variety of gestures. Use open-palm gestures to appear welcoming and inclusive. Use hand movements to illustrate points – showing size, direction, steps in a process, or comparisons. Employ stronger, more definitive gestures to emphasize key takeaways. Record yourself to assess your natural tendencies. Do your gestures look authentic or rehearsed and stiff? Are they varied, or do you repeat the same motion? Effective gestures typically originate from the shoulders, involving the entire arm, rather than just small wrist movements. Ensure your gestures align with the energy and content of your message – bigger gestures for excitement, smaller ones for calmer points.`, 
    layout: { 
      position: 'absolute',
      width: '60%',
      height: '40%',
      top: '40%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'fundamentals7',
    title: 'Managing Filler Words',
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/ChatGPT Image Apr 29, 2025, 12_01_19 AM.png'),
    text: `Filler words – those unconscious sounds and phrases like "um," "uh," "like," "so," "actually," and "you know" – can significantly undermine your credibility and distract your listeners from your core message. The crucial first step is developing awareness. Record yourself speaking naturally or practicing this very text. Listen back specifically, perhaps even tallying each instance of a filler word. You might be surprised! Once aware, you can actively work to replace them. The most effective replacement is often a purposeful pause. When you feel the urge to use a filler while searching for the next word or thought, train yourself to simply pause briefly instead. A short silence is far more professional and powerful than an "um." Additionally, consciously slowing down your overall speaking pace slightly can help, giving your brain more time to formulate thoughts and reducing the perceived need for fillers. Consistent practice in low-stakes situations is key to breaking the habit and replacing fillers with confident pauses.`, 
    layout: { 
      position: 'absolute',
      width: '60%',
      height: '40%',
      top: '40%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'fundamentals8',
    title: 'Practicing Vocal Projection',
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/ChatGPT Image Apr 29, 2025, 12_04_47 AM.png'),
    text: `Effective vocal projection ensures that everyone in your audience, even those in the back row, can hear you clearly and comfortably without you needing to shout or strain your voice. It's about utilizing proper breath support and resonance, not simply increasing volume from the throat. Practice breathing deeply from your diaphragm – feel your stomach expand as you inhale. Stand tall with good posture, as this opens up your airways. As you exhale and speak, focus on sending your voice forward, aiming for a point beyond your audience. Imagine your voice filling the entire space. Experiment with speaking the same phrase at different projection levels – conversational, slightly elevated for a small group, and fully projected for a large room. Record yourself from a distance or have someone listen from the back to gauge clarity and volume. Ensure your voice maintains energy and doesn't trail off at the end of sentences. Strong projection conveys confidence and authority.`, 
    layout: { 
      position: 'absolute',
      width: '60%',
      height: '40%',
      top: '40%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'fundamentals9',
    title: 'Improving Speech Structure',
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/ChatGPT Image Apr 29, 2025, 12_06_20 AM.png'),
    text: `A logically structured speech acts like a roadmap for your audience, making your message easier to follow, understand, and remember. Practice consciously organizing your content. Every effective speech typically needs: 1) A compelling opening that grabs attention, introduces the topic, and previews the main points. 2) A well-organized body where each main point is presented clearly, supported by evidence, examples, or stories, and logically connected to the next. 3) A memorable closing that summarizes the key takeaways, reinforces the main message, and provides a clear call to action or concluding thought. Practice outlining your speeches beforehand. Pay attention to transitions – use signposting words and phrases (e.g., "First, let's consider...", "Another important aspect is...", "In conclusion...") to clearly signal shifts between sections and ideas. Read this text aloud – can you identify the distinct parts? Does the argument flow logically? Mastering structure provides clarity for both you and your audience.`, 
    layout: { 
      position: 'absolute',
      width: '60%',
      height: '40%',
      top: '40%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'fundamentals10',
    title: 'Practicing Tone Modulation',
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/ChatGPT Image Apr 29, 2025, 12_08_41 AM.png'),
    text: `Your tone of voice conveys your attitude, emotions, and level of conviction about the topic, often more powerfully than the words themselves. Is your intended tone engaging, informative, serious, enthusiastic, persuasive, or empathetic? Practice deliberate tone modulation. Read the same sentence or paragraph aloud multiple times, consciously adopting a different tone each time (e.g., excited, then concerned, then objective). Observe how the perceived meaning and impact change significantly. Critically, ensure your tone authentically matches your message content. Delivering exciting news in a flat, monotone voice, or discussing a sensitive topic with inappropriate levity, will confuse or alienate your audience. Record yourself speaking. Does your tone sound genuine and varied? Does it accurately reflect the nuances of your content? Does it help maintain listener interest? Mastering tone allows you to connect emotionally and intellectually with your listeners.`, 
    layout: { 
      position: 'absolute',
      width: '60%',
      height: '40%',
      top: '40%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'fundamentals11',
    title: 'Working on Facial Expressions',
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/ChatGPT Image Apr 29, 2025, 12_11_38 AM.png'),
    text: `Your face is a primary tool for nonverbal communication, conveying emotion and reinforcing your verbal message. Aim for facial expressions that are congruent with your words and tone. A genuine smile can convey warmth, build rapport, and signal positivity. A more serious or focused expression can emphasize importance or gravity. Be mindful of avoiding a completely blank, static expression (poker face) or expressions that signal nervousness (like excessive frowning or a tense jaw). Practice delivering key lines while looking in a mirror or, even better, recording yourself. Observe your natural expressions. Are you inadvertently sending unintended signals? Are your expressions authentic and varied? Ensure your face actively participates in telling your story, reflecting the appropriate emotion and intent behind your words. This congruence helps the audience connect with you and believe your message more deeply.`, 
    layout: { 
      position: 'absolute',
      width: '60%',
      height: '40%',
      top: '40%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'fundamentals12',
    title: 'Practicing Pauses for Impact',
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/ChatGPT Image Apr 29, 2025, 12_14_24 AM.png'),
    text: `Strategic silence, or the effective use of pauses, is one of the most potent yet underutilized tools in public speaking. Pauses serve multiple crucial functions: they give the audience essential time to process information, especially complex ideas; they create emphasis when placed just before or after a key point; they can build suspense or anticipation; and they clearly signal transitions between different sections or ideas. Don't fear brief moments of silence – they demonstrate control and thoughtfulness. Practice reading this text aloud, intentionally inserting brief pauses (1-2 seconds) at natural thought breaks, after important sentences, or before revealing a significant idea. Notice how these pauses change the rhythm, add weight to certain words, and improve overall clarity. Record yourself. Are your pauses deliberate and confident, or do they sound like hesitant searching for words? Are you rushing through sentences without allowing breathing room? Learn to wield silence strategically to make your speaking more dynamic, engaging, and impactful.`, 
    layout: { 
      position: 'absolute',
      width: '60%',
      height: '40%',
      top: '40%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'fundamentals13',
    title: 'Enhancing Word Emphasis',
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/ChatGPT Image Apr 29, 2025, 12_18_14 AM.png'),
    text: `In any sentence, certain words carry more weight and meaning than others. Learning to emphasize these key words effectively helps guide your audience's focus, clarifies your meaning, and makes your delivery more engaging and memorable. Practice identifying the core message in each sentence you speak. Which words are essential to conveying that message? Practice reading sentences aloud multiple times, consciously stressing different words each time, and observe how the meaning and implication shift dramatically. For example, contrast: "*We* need to finish this report today" versus "We need to finish *this* report today" versus "We need to finish this report *today*." Use subtle changes in pitch (higher or lower), volume (louder), or even slightly slowing down on the emphasized word. Avoid over-emphasizing every other word, which sounds unnatural, but ensure your truly key points and contrastive ideas stand out clearly through deliberate vocal stress.`, 
    layout: { 
      position: 'absolute',
      width: '60%',
      height: '40%',
      top: '40%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'fundamentals14',
    title: 'Building Confidence Through Practice',
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/ChatGPT Image Apr 29, 2025, 12_23_50 AM.png'),
    text: `Genuine speaking confidence rarely appears magically; it's typically the result of thorough preparation and consistent, deliberate practice. The more familiar and comfortable you become with your material and your delivery mechanics, the more confident you will naturally feel and appear to your audience. Use tools like this app regularly to rehearse – don't just skim your notes silently. Practice speaking aloud, ideally simulating the conditions as much as possible (e.g., standing up). Focus your practice sessions; perhaps work on one specific fundamental skill (like reducing filler words or improving vocal variety) each time. Record yourself and review it constructively. Don't aim for unattainable perfection, but identify specific areas for improvement. Before important speaking engagements, visualize yourself delivering successfully. Recall past instances where you spoke well. Each dedicated practice session builds crucial muscle memory, reduces performance anxiety, and incrementally strengthens the foundation for a confident, controlled, and effective delivery.`, 
    layout: { 
      position: 'absolute',
      width: '60%',
      height: '40%',
      top: '40%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  // --- End Practice Fundamentals Prompts ---

  // --- Speech Prompts (Placeholders - Customize details below!) ---
  // Remember to:
  // 1. Ensure image files are in 'assets/speechpics/'
  // 2. Update `require('../assets/speechpics/...')` with actual filenames if needed.
  // 3. Customize placeholder `title`, `text`, and `layout` for each prompt.
  {
    id: 'speech1',
    title: 'Google Cloud Keynote',
    category: 'Speeches',
    image: require('../assets/speechpics/pic8222.png'),
    text: `Good morning everyone, and welcome to Google Cloud Next '24!\n\nToday, we're going to take you on a journey through the future of cloud computing. Over the next hour, you'll see how we're pushing the boundaries of what's possible with AI, security, and infrastructure.\n\nLet me start by sharing some exciting numbers: Google Cloud now serves over 1.5 billion users daily, with our infrastructure processing more than 100,000 queries per second. But what's truly remarkable is how our customers are using this power to transform their businesses.\n\nI want to share a story about one of our customers, a healthcare provider that's using our AI tools to analyze medical images. What used to take hours now takes minutes, helping doctors make faster, more accurate diagnoses.\n\nToday, we're announcing several groundbreaking innovations that will help you build, deploy, and scale your applications faster than ever before. From our new AI-powered development tools to enhanced security features, we're making cloud computing more accessible and powerful for everyone.\n\nBut before we dive into the details, let me introduce our amazing team who have worked tirelessly to bring these innovations to life.`,
    layout: { position: 'absolute', width: '80%', height: '35%', top: '62%', left: '10%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech2',
    title: 'Stock Market Presentation',
    category: 'Speeches',
    image: require('../assets/speechpics/pic2003.png'),
    text: `Ladies and gentlemen, thank you for joining us for our Q4 earnings call.\n\nI'm pleased to report that we've achieved record-breaking results this quarter, with revenue growth of 23% year-over-year. Our strategic investments in digital transformation and AI integration have paid off significantly.\n\nLet's look at the numbers: Our cloud services division grew by 45%, while our consumer products segment maintained steady growth at 12%. We've also successfully reduced operational costs by 8% through our efficiency initiatives.\n\nLooking ahead, we're seeing strong indicators for continued growth in the coming quarters. Our pipeline of new projects is the strongest it's ever been, and we're well-positioned to capitalize on emerging market opportunities.\n\nI'd like to take a moment to thank our incredible team whose hard work and dedication have made these results possible. Their innovative spirit and commitment to excellence continue to drive our success.\n\nNow, let's open the floor for questions.`,
    layout: { position: 'absolute', width: '70%', height: '30%', top: '68%', left: '15%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech3',
    title: 'Y Combinator Pitch',
    category: 'Speeches',
    image: require('../assets/speechpics/pic8401.png'),
    text: `Hi everyone, I'm Sarah, and I'm here to introduce you to our startup, EcoCharge.\n\nWe're solving a critical problem: the lack of reliable charging infrastructure for electric vehicles in urban areas. Our solution? A network of smart, solar-powered charging stations that can be installed in any parking space.\n\nHere's why this matters: By 2030, there will be 145 million EVs on the road, but current charging infrastructure can only support about 30% of that demand. We're bridging this gap with our innovative technology.\n\nOur traction speaks for itself: We've secured partnerships with three major cities, have 500 pre-orders for our stations, and have raised $2 million in seed funding. Our unit economics show a 60% margin, with payback in just 18 months.\n\nWe're seeking $1.5 million to scale our manufacturing and expand to five new cities. With your support, we can accelerate the transition to sustainable transportation.\n\nThank you for your time. I'd be happy to answer any questions.`,
    textColor: 'white',
    layout: { position: 'absolute', width: '55%', height: '40%', top: '55%', left: '24%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10,  transform: [{ rotate: '-1deg' }]}
  },
  {
    id: 'speech4',
    title: 'Apple Keynote',
    category: 'Speeches',
    image: require('../assets/speechpics/pic6000.png'),
    text: `Good morning, and welcome to Apple's September event!\n\nToday, we're going to show you some incredible new products that push the boundaries of what's possible. But first, let me share some exciting news: We've just reached a new milestone with over 2 billion active Apple devices worldwide.\n\nOur focus this year has been on three key areas: performance, sustainability, and user experience. Every product we're announcing today reflects these priorities.\n\nLet's start with our new iPhone lineup. We've completely redesigned the camera system, introducing revolutionary computational photography features. The new A17 chip delivers unprecedented performance while being more energy efficient than ever.\n\nBut what I'm most excited about is our commitment to the environment. Every product we're announcing today is made with 100% recycled materials, and we're on track to be carbon neutral by 2030.\n\nNow, let me show you what we've been working on.`,
    layout: { position: 'absolute', width: '70%', height: '35%', top: '62%', left: '15%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech5',
    title: 'Church Sermon',
    category: 'Speeches',
    image: require('../assets/speechpics/pic239.png'),
    text: `Good morning, my dear brothers and sisters in Christ.\n\nToday, I want to talk about the power of faith in challenging times. In our reading from Matthew 17:20, Jesus tells us that faith as small as a mustard seed can move mountains.\n\nThink about that for a moment. A mustard seed is tiny, almost insignificant. Yet, with faith, it can grow into something powerful and transformative. This is the message we need to hear today.\n\nIn our daily lives, we face many challenges - health issues, financial struggles, relationship problems. But through faith, we find strength. Through faith, we find hope. Through faith, we find the courage to keep moving forward.\n\nLet me share a story about one of our parishioners who faced a difficult diagnosis. Through prayer and faith, they found not only healing but also a deeper connection with God and their community.\n\nAs we go forth today, remember that your faith, no matter how small it may seem, has the power to transform your life and the lives of those around you.`,
    layout: { position: 'absolute', width: '75%', height: '32%', top: '55%', left: '15%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '9deg' }] }
  },
  {
    id: 'speech6',
    title: 'TEDx Talk',
    category: 'Speeches',
    image: require('../assets/speechpics/pic992.png'),
    text: `Have you ever wondered why some people seem to bounce back from failure while others get stuck?\n\nI spent the last decade studying resilience, and what I discovered might surprise you. It's not about being born with special abilities or having a perfect life. It's about how we think about our challenges.\n\nLet me tell you about a study we conducted with 1,000 participants. We found that people who viewed their failures as learning opportunities were 40% more likely to achieve their goals. That's a significant difference!\n\nBut here's the really interesting part: resilience isn't just about bouncing back. It's about bouncing forward. Every setback contains within it the seeds of growth and transformation.\n\nI want to share three simple practices that can help anyone develop greater resilience. These aren't complicated theories - they're practical tools you can start using today.\n\nRemember, the most successful people aren't those who never fail. They're the ones who learn to fail better.`,
    layout: { position: 'absolute', width: '60%', height: '38%', top: '58%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech7',
    title: 'United Nations Speech',
    category: 'Speeches',
    image: require('../assets/speechpics/pic8581.png'),
    text: `Mr. Secretary-General, distinguished delegates, ladies and gentlemen,\n\nToday, we gather at a critical moment in human history. The challenges we face - climate change, global inequality, and the threat of conflict - require unprecedented cooperation and commitment.\n\nLet me be clear: the time for incremental change has passed. We need bold, decisive action. The science is clear, the evidence is overwhelming, and the cost of inaction is too great to bear.\n\nI stand before you today to announce my country's commitment to reduce carbon emissions by 50% by 2030. But this is not enough. We need every nation to step up and do their part.\n\nThe good news is that we have the technology, the resources, and the knowledge to address these challenges. What we need now is the political will and collective action to make it happen.\n\nLet us remember that we are not just representatives of our nations, but stewards of our planet and guardians of future generations. The time to act is now.`,
    layout: { position: 'absolute', width: '60%', height: '36%', top: '58%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech8',
    title: 'Election Campaign Speech',
    category: 'Speeches',
    image: require('../assets/speechpics/pic092.png'),
    text: `My fellow citizens,\n\nToday, I stand before you not just as a candidate, but as someone who shares your hopes, your dreams, and your concerns for our community's future.\n\nOver the past year, I've traveled across our district, listening to your stories. I've heard about the struggles of small business owners, the challenges facing our schools, and the need for better healthcare access.\n\nMy vision for our community is simple: a place where every child has access to quality education, where businesses can thrive, and where our seniors can retire with dignity. A place where we invest in infrastructure, create good-paying jobs, and protect our environment.\n\nBut this isn't just about me. It's about us - about what we can achieve together. I'm asking for your vote not just to represent you, but to work with you to build a better future for all of us.\n\nTogether, we can make our community stronger, more prosperous, and more united than ever before.`,
    layout: { position: 'absolute', width: '65%', height: '45%', top: '45%', left: '18%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech9',
    title: 'Church Communion',
    category: 'Speeches',
    image: require('../assets/speechpics/pic893.png'),
    text: `Beloved brothers and sisters in Christ,\n\nAs we gather around this table today, we remember the Last Supper, when Jesus shared bread and wine with his disciples. This simple meal represents the greatest gift ever given - the gift of salvation through Christ's sacrifice.\n\nIn 1 Corinthians 11:24, we read: "This is my body, which is for you. Do this in remembrance of me." These words remind us that communion is not just a ritual, but a sacred moment of connection with our Savior.\n\nAs you come forward today, remember that you are part of something much larger than yourself. You are part of the body of Christ, united with believers across time and space.\n\nLet us prepare our hearts as we come to the table. Let us examine ourselves, confess our sins, and receive God's grace with thankful hearts.\n\nMay this communion strengthen our faith, renew our commitment to Christ, and deepen our love for one another.`,
    layout: { position: 'absolute', width: '60%', height: '42%', top: '50%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech10',
    title: 'Art Exhibition Opening',
    category: 'Speeches',
    image: require('../assets/speechpics/pic805.png'),
    text: `Welcome, everyone, to the opening of "Reflections of Light" - an extraordinary exhibition that explores the intersection of art and technology.\n\nTonight, we celebrate the work of 12 visionary artists who have pushed the boundaries of what's possible in contemporary art. Each piece in this exhibition tells a unique story about our relationship with light, space, and perception.\n\nI want to draw your attention to the centerpiece of our exhibition - a stunning installation that uses AI to create an ever-changing light sculpture. This work represents the perfect marriage of traditional artistic vision and cutting-edge technology.\n\nWhat makes this exhibition particularly special is how it invites us to question our perceptions. As you move through the space, you'll notice how the artworks transform based on your perspective and movement.\n\nI encourage you to take your time, engage with the pieces, and let yourself be transported by the artists' visions. Thank you for joining us on this journey through light and imagination.`,
    layout: { position: 'absolute', width: '60%', height: '38%', top: '50%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech11',
    title: 'Library Book Launch',
    category: 'Speeches',
    image: require('../assets/speechpics/pic6712.png'),
    text: `Good evening, book lovers!\n\nIt's an absolute pleasure to be here tonight to celebrate the launch of "The Last Chapter" - a novel that has already captured the hearts of readers around the world.\n\nThis book represents three years of research, writing, and countless cups of coffee. It's a story about resilience, about finding hope in the darkest of times, and about the power of human connection.\n\nI want to share a little secret with you: The main character, Sarah, was inspired by a real person I met in this very library five years ago. Her story of overcoming adversity touched me deeply, and I knew I had to share it with the world.\n\nTonight, as we celebrate the written word, let's remember the power of stories to connect us, to teach us, and to help us understand ourselves and others better.\n\nThank you all for being here. I'm looking forward to signing your copies and hearing your thoughts about the book.`,
    layout: { position: 'absolute', width: '60%', height: '38%', top: '50%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech12',
    title: 'Basketball Coach Speech',
    category: 'Speeches',
    image: require('../assets/speechpics/pic776.png'),
    text: `Listen up, team!\n\nWe've worked hard all season for this moment. Tonight's game isn't just about winning or losing - it's about playing with heart, playing as a team, and leaving everything we've got on that court.\n\nRemember our core values: Discipline. Determination. Teamwork. These aren't just words - they're what got us here. When we're down, we don't quit. When we're up, we don't let up.\n\nI want you to focus on three things tonight: Defense wins championships, so let's lock them down. Move the ball - find the open man. And most importantly, trust each other.\n\nEach of you has a role to play. Whether you're starting or coming off the bench, your contribution matters. This is our time to shine.\n\nNow, let's get out there and show them what we're made of!`,
    layout: { position: 'absolute', width: '60%', height: '45%', top: '45%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech13',
    title: 'NASA Announcement',
    category: 'Speeches',
    image: require('../assets/speechpics/nasa.png'),
    text: `Good afternoon, and welcome to this historic announcement from NASA.\n\nToday, we stand on the brink of a new era in space exploration. After years of research and development, we are ready to announce our next major mission to Mars.\n\nThis mission represents a quantum leap in our understanding of the Red Planet. Our new rover, equipped with cutting-edge technology, will search for signs of ancient life and test technologies for future human exploration.\n\nWhat makes this mission unique is our partnership with international space agencies and private sector innovators. Together, we're pushing the boundaries of what's possible in space exploration.\n\nI want to take a moment to acknowledge the incredible team behind this mission. Their dedication and expertise have brought us to this moment.\n\nAs we prepare for launch next year, we invite the world to join us on this journey of discovery. This is not just NASA's mission - it's humanity's mission.`,
    layout: { position: 'absolute', width: '60%', height: '30%', top: '62%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech14',
    title: 'Placeholder Speech 14', 
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 28, 2025, 08_13_24 PM.png'),
    text: `Placeholder text for speech 14. This will be updated later with specific content related to a speech scenario.`, 
    layout: { position: 'absolute', width: '60%', height: '30%', top: '62%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech15',
    title: 'Placeholder Speech 15', 
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 28, 2025, 08_54_17 PM.png'),
    text: `Placeholder text for speech 15. This will be updated later with specific content related to a speech scenario.`, 
    layout: { position: 'absolute', width: '60%', height: '30%', top: '62%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech16',
    title: 'Placeholder Speech 16', 
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 28, 2025, 08_56_47 PM.png'),
    text: `Placeholder text for speech 16. This will be updated later with specific content related to a speech scenario.`, 
    layout: { position: 'absolute', width: '60%', height: '30%', top: '62%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech17',
    title: 'Placeholder Speech 17', 
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 28, 2025, 08_58_57 PM.png'),
    text: `Placeholder text for speech 17. This will be updated later with specific content related to a speech scenario.`, 
    layout: { position: 'absolute', width: '60%', height: '30%', top: '62%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech18',
    title: 'Placeholder Speech 18', 
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 28, 2025, 09_00_13 PM.png'),
    text: `Placeholder text for speech 18. This will be updated later with specific content related to a speech scenario.`, 
    layout: { position: 'absolute', width: '60%', height: '30%', top: '62%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech19',
    title: 'Placeholder Speech 19', 
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 28, 2025, 09_01_24 PM.png'),
    text: `Placeholder text for speech 19. This will be updated later with specific content related to a speech scenario.`, 
    layout: { position: 'absolute', width: '60%', height: '30%', top: '62%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech20',
    title: 'Placeholder Speech 20', 
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 28, 2025, 09_02_26 PM.png'),
    text: `Placeholder text for speech 20. This will be updated later with specific content related to a speech scenario.`, 
    layout: { position: 'absolute', width: '60%', height: '30%', top: '62%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech21',
    title: 'Placeholder Speech 21', 
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 28, 2025, 09_03_23 PM.png'),
    text: `Placeholder text for speech 21. This will be updated later with specific content related to a speech scenario.`, 
    layout: { position: 'absolute', width: '60%', height: '30%', top: '62%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech22',
    title: 'Placeholder Speech 22', 
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 28, 2025, 09_06_36 PM.png'),
    text: `Placeholder text for speech 22. This will be updated later with specific content related to a speech scenario.`, 
    layout: { position: 'absolute', width: '60%', height: '30%', top: '62%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech23',
    title: 'Placeholder Speech 23', 
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 28, 2025, 09_08_35 PM.png'),
    text: `Placeholder text for speech 23. This will be updated later with specific content related to a speech scenario.`, 
    layout: { position: 'absolute', width: '60%', height: '30%', top: '62%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech24',
    title: 'Placeholder Speech 24', 
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 29, 2025, 12_44_59 PM.png'),
    text: `Placeholder text for speech 24. This will be updated later with specific content related to a speech scenario.`, 
    layout: { position: 'absolute', width: '60%', height: '30%', top: '62%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech25',
    title: 'Placeholder Speech 25', 
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 29, 2025, 12_48_09 PM.png'),
    text: `Placeholder text for speech 25. This will be updated later with specific content related to a speech scenario.`, 
    layout: { position: 'absolute', width: '60%', height: '30%', top: '62%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech26',
    title: 'Placeholder Speech 26', 
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 29, 2025, 12_49_35 PM.png'),
    text: `Placeholder text for speech 26. This will be updated later with specific content related to a speech scenario.`, 
    layout: { position: 'absolute', width: '60%', height: '30%', top: '62%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech27',
    title: 'Placeholder Speech 27', 
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 29, 2025, 12_50_54 PM.png'),
    text: `Placeholder text for speech 27. This will be updated later with specific content related to a speech scenario.`, 
    layout: { position: 'absolute', width: '60%', height: '30%', top: '62%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'speech28',
    title: 'Placeholder Speech 28', 
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 29, 2025, 12_54_57 PM.png'),
    text: `Placeholder text for speech 28. This will be updated later with specific content related to a speech scenario.`, 
    layout: { position: 'absolute', width: '60%', height: '30%', top: '62%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  // --- End Speech Prompts ---

  // --- Presentation Prompts ---
  {
    id: 'presentation1',
    title: 'Placeholder Presentation 1', 
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 28, 2025, 08_15_15 PM.png'),
    text: `Placeholder text for presentation 1.`, 
    layout: { position: 'absolute', width: '60%', height: '35%', top: '58%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, } // Example layout
  },
  {
    id: 'presentation2',
    title: 'Placeholder Presentation 2', 
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 28, 2025, 09_09_59 PM.png'),
    text: `Placeholder text for presentation 2.`, 
    layout: { position: 'absolute', width: '60%', height: '35%', top: '58%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, } 
  },
  {
    id: 'presentation3',
    title: 'Placeholder Presentation 3', 
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 28, 2025, 09_11_13 PM.png'),
    text: `Placeholder text for presentation 3.`, 
    layout: { position: 'absolute', width: '60%', height: '35%', top: '58%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, } 
  },
  {
    id: 'presentation4',
    title: 'Placeholder Presentation 4', 
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 28, 2025, 09_12_24 PM.png'),
    text: `Placeholder text for presentation 4.`, 
    layout: { position: 'absolute', width: '60%', height: '35%', top: '58%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, } 
  },
  {
    id: 'presentation5',
    title: 'Placeholder Presentation 5', 
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 28, 2025, 09_14_14 PM.png'),
    text: `Placeholder text for presentation 5.`, 
    layout: { position: 'absolute', width: '60%', height: '35%', top: '58%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, } 
  },
  {
    id: 'presentation6',
    title: 'Placeholder Presentation 6', 
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 28, 2025, 09_15_05 PM.png'),
    text: `Placeholder text for presentation 6.`, 
    layout: { position: 'absolute', width: '60%', height: '35%', top: '58%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, } 
  },
  {
    id: 'presentation7',
    title: 'Placeholder Presentation 7', 
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 28, 2025, 09_19_50 PM.png'),
    text: `Placeholder text for presentation 7.`, 
    layout: { position: 'absolute', width: '60%', height: '35%', top: '58%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, } 
  },
  {
    id: 'presentation8',
    title: 'Placeholder Presentation 8', 
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 28, 2025, 09_22_04 PM.png'),
    text: `Placeholder text for presentation 8.`, 
    layout: { position: 'absolute', width: '60%', height: '35%', top: '58%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, } 
  },
  {
    id: 'presentation9',
    title: 'Placeholder Presentation 9', 
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 28, 2025, 09_24_23 PM.png'),
    text: `Placeholder text for presentation 9.`, 
    layout: { position: 'absolute', width: '60%', height: '35%', top: '58%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, } 
  },
  {
    id: 'presentation10',
    title: 'Placeholder Presentation 10', 
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 28, 2025, 10_23_14 PM.png'),
    text: `Placeholder text for presentation 10.`, 
    layout: { position: 'absolute', width: '60%', height: '35%', top: '58%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, } 
  },
  {
    id: 'presentation11',
    title: 'Placeholder Presentation 11', 
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 29, 2025, 01_01_21 PM.png'),
    text: `Placeholder text for presentation 11.`, 
    layout: { position: 'absolute', width: '60%', height: '35%', top: '58%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, } 
  },
  {
    id: 'presentation12',
    title: 'Placeholder Presentation 12', 
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 29, 2025, 01_03_22 PM.png'),
    text: `Placeholder text for presentation 12.`, 
    layout: { position: 'absolute', width: '60%', height: '35%', top: '58%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, } 
  },
  {
    id: 'presentation13',
    title: 'Placeholder Presentation 13', 
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 29, 2025, 01_06_35 PM.png'),
    text: `Placeholder text for presentation 13.`, 
    layout: { position: 'absolute', width: '60%', height: '35%', top: '58%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, } 
  },
  {
    id: 'presentation14',
    title: 'Placeholder Presentation 14', 
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 29, 2025, 01_12_19 PM.png'),
    text: `Placeholder text for presentation 14.`, 
    layout: { position: 'absolute', width: '60%', height: '35%', top: '58%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, } 
  },
  {
    id: 'presentation15',
    title: 'Placeholder Presentation 15', 
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 29, 2025, 01_15_56 PM.png'),
    text: `Placeholder text for presentation 15.`, 
    layout: { position: 'absolute', width: '60%', height: '35%', top: '58%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, } 
  },
  {
    id: 'presentation16',
    title: 'Placeholder Presentation 16', 
    category: 'Presentations',
    image: require('../assets/presentationpics/pic1.png'),
    text: `Placeholder text for presentation 16.`, 
    layout: { position: 'absolute', width: '60%', height: '35%', top: '58%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, } 
  },
  {
    id: 'presentation17',
    title: 'Placeholder Presentation 17', 
    category: 'Presentations',
    image: require('../assets/presentationpics/pic2.png'),
    text: `Placeholder text for presentation 17.`, 
    layout: { position: 'absolute', width: '60%', height: '35%', top: '58%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, } 
  },
  {
    id: 'presentation18',
    title: 'Placeholder Presentation 18', 
    category: 'Presentations',
    image: require('../assets/presentationpics/pic23.png'),
    text: `Placeholder text for presentation 18.`, 
    layout: { position: 'absolute', width: '60%', height: '35%', top: '58%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, } 
  },
  {
    id: 'presentation19',
    title: 'Placeholder Presentation 19', 
    category: 'Presentations',
    image: require('../assets/presentationpics/pic34.png'),
    text: `Placeholder text for presentation 19.`, 
    layout: { position: 'absolute', width: '60%', height: '35%', top: '58%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, } 
  },
  {
    id: 'presentation20',
    title: 'Placeholder Presentation 20', 
    category: 'Presentations',
    image: require('../assets/presentationpics/pic45.png'),
    text: `Placeholder text for presentation 20.`, 
    layout: { position: 'absolute', width: '60%', height: '35%', top: '58%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, } 
  },
  {
    id: 'presentation21',
    title: 'Placeholder Presentation 21', 
    category: 'Presentations',
    image: require('../assets/presentationpics/pic9.png'),
    text: `Placeholder text for presentation 21.`, 
    layout: { position: 'absolute', width: '60%', height: '35%', top: '58%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, } 
  },
  // --- End Presentation Prompts ---

  // --- Interview Prompts (Placeholders - Customize details below!) ---
  {
    id: 'interview1',
    title: 'Google Networking Interview', 
    category: 'Interviews',
    image: require('../assets/interviewpics/pic9300.png'),
    text: `[Question 1]\nTell me about yourself and your background.\n\n[Answer]\nI am a software engineer with 5 years of experience in full-stack development. I specialize in building scalable web applications using React and Node.js. In my current role at XYZ Company, I led a team that improved application performance by 40%.\n\n[Question 2]\nWhat interests you about this position?\n\n[Answer]\nI'm particularly excited about this opportunity because of Google's innovative approach to technology and its commitment to solving complex problems. The role's emphasis on cloud architecture and AI integration aligns perfectly with my career goals.\n\n[Question 3]\nHow do you handle working in a team environment?\n\n[Answer]\nI believe in collaborative development and open communication. In my previous role, I regularly conducted code reviews and mentored junior developers, which helped improve our team's overall code quality by 30%.`, 
    layout: { position: 'absolute', width: '60%', height: '30%', top: '64%', left: '15%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '8deg' }] }
  },
  {
    id: 'interview2',
    title: 'TV Presenter Interview', 
    category: 'Interviews',
    image: require('../assets/interviewpics/pic8025.png'),
    text: `[Question 1]\nHow did you get started in broadcasting?\n\n[Answer]\nI began my career as a news reporter for a local station, where I developed my skills in live reporting and storytelling. My passion for connecting with audiences led me to pursue opportunities in television presenting.\n\n[Question 2]\nHow do you prepare for a live broadcast?\n\n[Answer]\nI follow a thorough preparation routine that includes researching the topic, practicing my delivery, and reviewing technical aspects. I also make sure to arrive early to check equipment and review the script with the production team.\n\n[Question 3]\nHow do you handle unexpected situations during live broadcasts?\n\n[Answer]\nI stay calm and maintain professionalism. For example, during a recent weather report, our teleprompter failed. I smoothly transitioned to ad-libbing while maintaining eye contact with the camera and delivering the information accurately.`, 
    layout: { position: 'absolute', width: '55%', height: '35%', top: '55%', left: '22%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '5deg' }] }
  },
  {
    id: 'interview3',
    title: 'Business Analyst Interview', 
    category: 'Interviews',
    image: require('../assets/interviewpics/pic7800.png'),
    text: `[Question 1]\nHow do you gather and analyze business requirements?\n\n[Answer]\nI use a combination of stakeholder interviews, workshops, and data analysis. For example, in my last project, I conducted 20 stakeholder interviews and analyzed 6 months of business data to identify key requirements.\n\n[Question 2]\nHow do you handle conflicting requirements from different stakeholders?\n\n[Answer]\nI facilitate discussions to understand the underlying business needs and propose solutions that address the core requirements. I document all perspectives and work with stakeholders to prioritize based on business value.\n\n[Question 3]\nCan you describe a challenging project you've worked on?\n\n[Answer]\nIn my previous role, I led a complex system integration project with multiple stakeholders. Despite initial resistance, I successfully managed to align all parties and delivered the project 2 weeks ahead of schedule.`, 
    layout: { position: 'absolute', width: '50%', height: '34%', top: '57%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '2deg' }] }
  },
  {
    id: 'interview4',
    title: 'Marketing Manager Interview', 
    category: 'Interviews',
    image: require('../assets/interviewpics/01234.png'),
    text: `[Question 1]\nHow do you develop a marketing strategy?\n\n[Answer]\nI start with thorough market research and competitor analysis. Then I define clear objectives, target audience, and key messages. I create a multi-channel approach that aligns with business goals and includes measurable KPIs.\n\n[Question 2]\nHow do you measure the success of a marketing campaign?\n\n[Answer]\nI track both quantitative metrics like conversion rates, ROI, and customer acquisition costs, as well as qualitative metrics like brand awareness and customer satisfaction. I use analytics tools to monitor performance in real-time.\n\n[Question 3]\nHow do you stay updated with marketing trends?\n\n[Answer]\nI regularly attend industry conferences, participate in webinars, and follow leading marketing publications. I also experiment with new tools and techniques in small-scale campaigns before implementing them company-wide.`, 
    layout: { position: 'absolute', width: '55%', height: '34%', top: '60%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview5',
    title: 'News Reporter Interview', 
    category: 'Interviews',
    image: require('../assets/interviewpics/pic3921.png'),
    text: `[Question 1]\nHow do you verify the accuracy of your sources?\n\n[Answer]\nI cross-reference information with multiple reliable sources, verify credentials, and maintain a network of trusted contacts. I also fact-check all information before publication and follow up with additional verification when needed.\n\n[Question 2]\nHow do you handle breaking news situations?\n\n[Answer]\nI remain calm under pressure and focus on gathering accurate information quickly. I prioritize getting the facts right over being first to report, while maintaining professional standards and ethical guidelines.\n\n[Question 3]\nHow do you build relationships with sources?\n\n[Answer]\nI maintain regular contact with key sources, respect their time and confidentiality, and always follow through on commitments. I've built a strong network of reliable sources through consistent, professional interactions.`, 
    layout: { position: 'absolute', width: '60%', height: '38%', top: '57%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '4deg' }] }
  },
  {
    id: 'interview7',
    title: 'One to One Interview', 
    category: 'Interviews',
    image: require('../assets/interviewpics/444.png'),
    text: `[Question 1]\nWhat are your greatest strengths?\n\n[Answer]\nMy key strengths include problem-solving, effective communication, and leadership. For example, I led a team that improved system performance by 40% through innovative solutions and clear communication.\n\n[Question 2]\nWhere do you see yourself in five years?\n\n[Answer]\nI see myself in a leadership role, mentoring junior team members and leading complex projects. I plan to continue developing my technical expertise while growing my management skills.\n\n[Question 3]\nHow do you handle work-life balance?\n\n[Answer]\nI maintain a structured schedule and prioritize tasks effectively. I make time for both professional development and personal well-being, which helps me stay productive and motivated.`, 
    layout: { position: 'absolute', width: '70%', height: '35%', top: '60%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview8',
    title: 'Final Interview with CEO', 
    category: 'Interviews',
    image: require('../assets/interviewpics/ceo.png'),
    text: `[Question 1]\nWhat is your vision for this role?\n\n[Answer]\nI envision driving innovation and growth while maintaining operational excellence. I plan to leverage my experience to implement strategic initiatives that align with the company's long-term goals.\n\n[Question 2]\nHow do you handle company-wide challenges?\n\n[Answer]\nI take a holistic approach, considering all stakeholders and potential impacts. I develop comprehensive solutions that address both immediate concerns and long-term strategic objectives.\n\n[Question 3]\nWhat value can you bring to our executive team?\n\n[Answer]\nI bring a unique combination of technical expertise and strategic thinking. My experience in leading successful transformations and building high-performing teams would complement the existing executive team's strengths.`, 
    layout: { position: 'absolute', width: '70%', height: '40%', top: '55%', left: '15%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview9',
    title: 'Doctor Interview', 
    category: 'Interviews',
    image: require('../assets/interviewpics/medical-officer.png'),
    text: `[Question 1]\nHow do you handle difficult patient cases?\n\n[Answer]\nI approach each case methodically, gathering all relevant information and consulting with colleagues when needed. I maintain clear communication with patients and their families throughout the process.\n\n[Question 2]\nHow do you stay current with medical advancements?\n\n[Answer]\nI regularly attend medical conferences, participate in continuing education programs, and review current medical literature. I also collaborate with colleagues to share knowledge and best practices.\n\n[Question 3]\nHow do you handle ethical dilemmas in medicine?\n\n[Answer]\nI follow established ethical guidelines and consult with the hospital's ethics committee when needed. I prioritize patient well-being while considering all relevant factors in decision-making.`, 
    layout: { position: 'absolute', width: '70%', height: '35%', top: '55%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview10',
    title: 'Live TV Interview', 
    category: 'Interviews',
    image: require('../assets/interviewpics/tv-news.png'),
    text: `[Question 1]\nHow do you prepare for a live interview?\n\n[Answer]\nI research the topic thoroughly, prepare key talking points, and practice my delivery. I also familiarize myself with the interviewer's style and prepare for potential follow-up questions.\n\n[Question 2]\nHow do you handle unexpected questions?\n\n[Answer]\nI stay composed and redirect to my key messages when appropriate. If I don't know an answer, I'm honest about it and offer to follow up with the information later.\n\n[Question 3]\nHow do you engage with the audience during a live interview?\n\n[Answer]\nI maintain eye contact, use clear and concise language, and incorporate relevant examples. I also pay attention to the interviewer's cues and adjust my responses accordingly.`, 
    layout: { position: 'absolute', width: '70%', height: '19%', top: '55%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview11',
    title: 'Placeholder Interview 11', 
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 28, 2025, 09_26_51 PM.png'),
    text: `Placeholder text for interview 11.`, 
    layout: { position: 'absolute', width: '70%', height: '19%', top: '55%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview12',
    title: 'Placeholder Interview 12', 
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 28, 2025, 09_33_14 PM.png'),
    text: `Placeholder text for interview 12.`, 
    layout: { position: 'absolute', width: '70%', height: '19%', top: '55%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview13',
    title: 'Placeholder Interview 13', 
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 28, 2025, 09_34_22 PM.png'),
    text: `Placeholder text for interview 13.`, 
    layout: { position: 'absolute', width: '70%', height: '19%', top: '55%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview14',
    title: 'Placeholder Interview 14', 
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 28, 2025, 09_35_26 PM.png'),
    text: `Placeholder text for interview 14.`, 
    layout: { position: 'absolute', width: '70%', height: '19%', top: '55%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview15',
    title: 'Placeholder Interview 15', 
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 28, 2025, 09_36_33 PM.png'),
    text: `Placeholder text for interview 15.`, 
    layout: { position: 'absolute', width: '70%', height: '19%', top: '55%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview16',
    title: 'Placeholder Interview 16', 
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 28, 2025, 09_37_39 PM.png'),
    text: `Placeholder text for interview 16.`, 
    layout: { position: 'absolute', width: '70%', height: '19%', top: '55%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview17',
    title: 'Placeholder Interview 17', 
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 28, 2025, 09_39_08 PM.png'),
    text: `Placeholder text for interview 17.`, 
    layout: { position: 'absolute', width: '70%', height: '19%', top: '55%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview18',
    title: 'Placeholder Interview 18', 
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 28, 2025, 09_44_51 PM.png'),
    text: `Placeholder text for interview 18.`, 
    layout: { position: 'absolute', width: '70%', height: '19%', top: '55%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview19',
    title: 'Placeholder Interview 19', 
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 28, 2025, 10_37_26 PM.png'),
    text: `Placeholder text for interview 19.`, 
    layout: { position: 'absolute', width: '70%', height: '19%', top: '55%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview20',
    title: 'Placeholder Interview 20', 
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 28, 2025, 10_44_41 PM.png'),
    text: `Placeholder text for interview 20.`, 
    layout: { position: 'absolute', width: '70%', height: '19%', top: '55%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview21',
    title: 'Placeholder Interview 21', 
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 29, 2025, 01_19_01 PM.png'),
    text: `Placeholder text for interview 21.`, 
    layout: { position: 'absolute', width: '70%', height: '19%', top: '55%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview22',
    title: 'Placeholder Interview 22', 
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 29, 2025, 01_21_32 PM.png'),
    text: `Placeholder text for interview 22.`, 
    layout: { position: 'absolute', width: '70%', height: '19%', top: '55%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview23',
    title: 'Placeholder Interview 23', 
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 29, 2025, 01_27_07 PM.png'),
    text: `Placeholder text for interview 23.`, 
    layout: { position: 'absolute', width: '70%', height: '19%', top: '55%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview24',
    title: 'Placeholder Interview 24', 
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 29, 2025, 01_29_14 PM.png'),
    text: `Placeholder text for interview 24.`, 
    layout: { position: 'absolute', width: '70%', height: '19%', top: '55%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview25',
    title: 'Placeholder Interview 25', 
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 29, 2025, 01_30_33 PM.png'),
    text: `Placeholder text for interview 25.`, 
    layout: { position: 'absolute', width: '70%', height: '19%', top: '55%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  // --- End Interview Prompts ---

  // --- Situational/Specific Prompts (Placeholders - Customize details below!) ---
  // Remember to:
  // 1. Ensure image files are in 'assets/specificpics/'
  // 2. Update `require('../assets/specificpics/...')` with actual filenames.
  // 3. Customize placeholder `title`, `text`, and `layout` for each prompt.
  {
    id: 'specific1',
    title: 'Student Academic Progress', 
    category: 'Situational/Specific',
    image: require('../assets/specificpics/pic2215.png'),
    text: `\n\nGood morning, I'm here to discuss your academic progress this semester. Looking at your grades and performance, I've noticed some interesting patterns.\n\nYour mathematics scores have shown significant improvement, with a 15% increase from last quarter. However, we should focus on strengthening your writing skills, particularly in research papers.\n\nI recommend:\n- Attending the weekly writing workshop\n- Meeting with the writing center tutor\n- Setting up a study schedule for research projects\n\nWould you like to discuss specific strategies for improving your writing while maintaining your strong performance in other subjects?`, 
    layout: { position: 'absolute', width: '50%', height: '30%', top: '61%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10,transform: [{ rotate: '4deg' }] }
  },
  {
    id: 'specific2',
    title: 'Fire Fighter Training', 
    category: 'Situational/Specific',
    image: require('../assets/specificpics/pic82501.png'),
    text: `Welcome to today's firefighter training session. We'll be focusing on high-rise building fire scenarios.\n\nKey points to remember:\n- Always check your oxygen levels before entry\n- Maintain constant communication with your team\n- Follow the established evacuation procedures\n- Be aware of potential structural hazards\n\nToday's drill will simulate:\n- Smoke-filled environment navigation\n- Victim search and rescue\n- Emergency communication protocols\n- Equipment handling under pressure\n\nSafety is our top priority. Let's begin with the equipment check.`, 
    layout: { position: 'absolute', width: '58%', height: '34%', top: '65%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10,transform: [{ rotate: '10deg' }] }
  },
  {
    id: 'specific3',
    title: 'Museum Guide', 
    category: 'Situational/Specific',
    image: require('../assets/specificpics/pic8931.png'),
    text: `Welcome to the Museum of Modern Art. Today, we'll be exploring our special exhibition of 20th-century masterpieces.\n\nAs we walk through the galleries, you'll see works by:\n- Pablo Picasso's revolutionary cubist period\n- Salvador Dalí's surreal dreamscapes\n- Jackson Pollock's abstract expressionism\n- Andy Warhol's pop art icons\n\nPlease remember:\n- No flash photography\n- Maintain a respectful distance from the artwork\n- Feel free to ask questions\n- Take your time to appreciate each piece\n\nLet's begin our journey through modern art history.`, 
    layout: { position: 'absolute', width: '50%', height: '35%', top: '57%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10,transform: [{ rotate: '10deg' }] }
  },
  {
    id: 'specific4',
    title: 'Fighter Jet Guide', 
    category: 'Situational/Specific',
    image: require('../assets/specificpics/pic7649.png'),
    text: `Welcome to the F-35 Lightning II demonstration. This fifth-generation fighter represents the pinnacle of modern aviation technology.\n\nKey features we'll explore:\n- Advanced stealth capabilities\n- Supersonic speed performance\n- State-of-the-art avionics systems\n- Vertical takeoff and landing capabilities\n\nSafety protocols:\n- Stay within designated viewing areas\n- Wear provided ear protection\n- Follow all instructions from ground crew\n- No photography during active demonstrations\n\nLet's begin with a walk-around of the aircraft.`, 
    layout: { position: 'absolute', width: '60%', height: '34%', top: '55%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10,transform: [{ rotate: '-3deg' }] }
  },
  {
    id: 'specific5',
    title: 'Safari Park Guide', 
    category: 'Situational/Specific',
    image: require('../assets/specificpics/pic8333.png'),
    text: `Welcome to our African Safari Park! Today, we'll be exploring the savanna habitat and its magnificent inhabitants.\n\nDuring our tour, you'll encounter:\n- Majestic lions in their pride\n- Graceful giraffes browsing the treetops\n- Playful zebras in their herds\n- Endangered white rhinos\n\nImportant guidelines:\n- Remain seated at all times\n- Keep windows closed\n- No feeding the animals\n- Listen for guide instructions\n\nLet's begin our journey into the wild!`, 
    layout: { position: 'absolute', width: '60%', height: '40%', top: '50%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'specific6',
    title: 'Handling a Customer Complaint', 
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 28, 2025, 09_46_10 PM.png'),
    text: `Good morning. I understand you're unhappy with the product you received. Could you please tell me exactly what the issue is?\nOkay, I see. I sincerely apologize that the item didn't meet your expectations and for the frustration this has caused. Let me see how we can resolve this for you. Would you prefer a full refund, or would you like us to send a replacement immediately? We value your business and want to make this right.`, 
    layout: { position: 'absolute', width: '60%', height: '40%', top: '50%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'specific7',
    title: 'Giving Constructive Feedback to Peer', 
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 28, 2025, 09_49_46 PM.png'),
    text: `Hey Mark, do you have a few minutes to chat about the client presentation draft? Overall, the analysis section is really strong. One thing I noticed, however, is that the structure of the recommendations could perhaps be clearer. Maybe we could brainstorm ways to make the key takeaways stand out more? For example, we could use bullet points or a summary slide. What are your thoughts? I'm happy to help rework it if you like.`, 
    layout: { position: 'absolute', width: '60%', height: '40%', top: '50%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'specific8',
    title: 'Mediating a Disagreement Between Team Members', 
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 28, 2025, 09_56_57 PM.png'),
    text: `Okay, Sarah, Tom, I understand there's some disagreement about the best approach for the next phase of the project. Let's take a step back. Sarah, could you first explain your perspective and concerns? \n(Listen) \nOkay, thank you. Tom, now could you share your viewpoint and the reasoning behind your proposed method? \n(Listen) \nAlright, it sounds like both approaches have merits. Let's focus on the core objective here. How can we combine the strengths of both ideas or find a compromise that addresses both the timeline concerns and the scalability requirements?`, 
    layout: { position: 'absolute', width: '60%', height: '40%', top: '50%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'specific9',
    title: 'Explaining a Technical Issue to Non-Technical Manager', 
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 28, 2025, 09_58_40 PM.png'),
    text: `Hi Boss. Regarding the website slowdown yesterday, the root cause was an unexpected surge in traffic overwhelming one of our database servers. Think of it like too many cars trying to get onto a small highway entrance ramp at once – things got backed up. We've temporarily increased the server capacity, like opening more lanes on the ramp, which has resolved the immediate issue. We're now working on a long-term fix to better distribute traffic automatically to prevent this bottleneck in the future.`, 
    layout: { position: 'absolute', width: '60%', height: '40%', top: '50%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'specific10',
    title: 'Asking for a Raise or Promotion', 
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 28, 2025, 10_01_12 PM.png'),
    text: `Hi Sarah, thank you for taking the time to meet with me today. I wanted to discuss my career development here at the company. Over the past year, I feel I've consistently exceeded the expectations for my current role as Analyst. I've successfully taken on increased responsibilities, most notably leading the website redesign initiative start-to-finish. As you know, that project resulted in a 15% measured increase in user engagement and positive feedback from key stakeholders. Considering this track record and my contributions, alongside some research I've done on comparable roles in our industry, I believe my performance and responsibilities now strongly align with the Senior Analyst level. I'm very committed to my future here and eager to continue contributing at a higher level. Therefore, I would like to formally request consideration for a promotion to Senior Analyst and a corresponding salary adjustment that reflects the scope and impact of this level of work. I've prepared a document outlining my key achievements over the past year for your review.`, 
    layout: { position: 'absolute', width: '60%', height: '40%', top: '50%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'specific11',
    title: 'Declining an Unreasonable Request Politely', 
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 28, 2025, 10_10_32 PM.png'),
    text: `Hi Dave, thanks for reaching out and thinking of me for assistance with the urgent market analysis report – I appreciate you considering my expertise in that area. I've looked at the request and my current workload. Unfortunately, given my existing hard commitments to the Q3 financial reporting, which has a firm deadline this Friday, and the significant preparation required for the board presentation scheduled for next Tuesday, I realistically won't have the necessary bandwidth to dedicate to this new report and give it the thorough attention it deserves right now without significantly jeopardizing those critical existing priorities. It might be worth checking if Emily, who has related experience, might have more immediate availability? Alternatively, perhaps we could revisit this request after the board meeting concludes next week when my schedule clears up considerably?`, 
    layout: { position: 'absolute', width: '60%', height: '40%', top: '50%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'specific12',
    title: 'Delivering Bad News to a Client', 
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 28, 2025, 10_12_11 PM.png'),
    text: `Hi Mr. Harrison, thanks for taking my call. I'm calling to provide an important update regarding the progress on Project Alpha. While the team has been working diligently, we've encountered an unforeseen technical challenge specifically related to the complex integration with the third-party payment gateway system. We've been troubleshooting this extensively, but it's proving more complex than anticipated. As a result, we are now projecting a potential delay of approximately one week from the original go-live date we had discussed. I want to sincerely apologize for this unexpected development and any disruption this may cause to your plans. We've already allocated two additional senior engineers to focus exclusively on resolving this integration issue, and I want to assure you we're doing absolutely everything possible to minimize this delay and get back on track. I'd like to walk you through the specific technical details of the challenge and our detailed mitigation plan now, if you have a few minutes to discuss?`, 
    layout: { position: 'absolute', width: '60%', height: '40%', top: '50%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'specific13',
    title: 'Persuading Stakeholders to Adopt New Process', 
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 28, 2025, 11_02_07 PM.png'),
    text: `Thank you all for making the time to join this meeting today. The purpose of this session is to propose and discuss the adoption of a new automated testing process for our core software releases, specifically utilizing the Selenium framework integrated with our CI/CD pipeline. I understand that introducing new processes requires effort and adjustment, and I want to address potential concerns head-on. Based on extensive analysis and a successful pilot program run over the last sprint, implementing this automation could significantly reduce our manual regression testing time – estimates suggest by up to 30% per release cycle. More importantly, it allows us to catch critical integration bugs much earlier in the development process, ultimately leading to improved product quality, fewer post-release hotfixes, and faster delivery cycles. I've prepared a brief demonstration showcasing the framework in action, along with data from the pilot, a projected ROI calculation, a phased implementation plan, and details on training resources to address the initial learning curve. I strongly believe this strategic shift towards automation will substantially benefit our team's efficiency, reduce repetitive manual effort, and enhance the overall stability and reliability of our product in the long run. I'm keen to hear your feedback and answer any questions you may have.`, 
    layout: { position: 'absolute', width: '60%', height: '40%', top: '50%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'specific14',
    title: 'Apologizing for a Mistake', 
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 28, 2025, 11_09_00 PM.png'),
    text: `Hi Michael, I wanted to speak with you privately as soon as possible regarding the sales forecast report I submitted yesterday afternoon. I need to sincerely apologize – I discovered an error in one of the key calculations after I had sent it. Specifically, I inadvertently overlooked applying the regional adjustment factor during the final consolidation step. I take full responsibility for this oversight. I understand the importance of accuracy in these reports and deeply regret any confusion, incorrect assumptions, or inconvenience this may have caused before I could issue a correction. I have already fixed the report, meticulously triple-checked all figures and formulas this time, and the corrected version is now in your inbox with the specific change highlighted. To prevent this from happening again, I've already updated my standard reporting checklist to include an explicit peer-review step for all final forecast calculations before submission. Again, my sincere apologies for the error.`, 
    layout: { position: 'absolute', width: '60%', height: '40%', top: '50%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'specific15',
    title: 'Running a Quick Stand-up Meeting', 
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 28, 2025, 11_11_46 PM.png'),
    text: `Alright team, good morning everyone, thanks for joining! Let's kick off our daily stand-up for Tuesday, November 12th. As usual, we'll do a quick round-robin update from each person. Please stick to answering the three core questions clearly and concisely: Firstly, what did you accomplish yesterday that moved us closer to our sprint goal? Secondly, what is your primary focus or plan for today? And thirdly, and most importantly, are there any blockers, impediments, or dependencies hindering your progress that the team needs to be aware of or can help resolve? Remember, the goal is quick synchronization, so let's keep our updates brief – aiming for the whole meeting under 15 minutes. John, why don't you start us off today?`, 
    layout: { position: 'absolute', width: '60%', height: '40%', top: '50%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  // --- End Situational/Specific Prompts ---

  // --- Social & Casual Prompts (Placeholders - Customize details below!) ---
  // Remember to:
  // 1. Ensure image files are in 'assets/socialpics/'
  // 2. Update `require('../assets/socialpics/...')` with actual filenames.
  // 3. Customize placeholder `title`, `text`, and `layout` for each prompt.
  {
    id: 'social1',
    title: 'Couple Social Scene', 
    category: 'Social & Casual',
    image: require('../assets/socialpics/pic2789.png'),
    text: `Hey, I've been thinking about our weekend plans. Would you like to try that new Italian restaurant downtown? I heard they have amazing pasta dishes and a cozy atmosphere.\n\nWe could make it a date night - maybe catch a movie afterward? I know you've been wanting to see that new romantic comedy that just came out.\n\nWhat do you think? I'm free Friday or Saturday evening.`, 
    layout: { position: 'absolute', width: '50%', height: '36%', top: '55%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10,transform: [{ rotate: '6deg' }] }
  },
  {
    id: 'social2',
    title: 'Office Social Scene', 
    category: 'Social & Casual',
    image: require('../assets/socialpics/pic6712.png'),
    text: `Good morning everyone! I just wanted to share some exciting news - we've hit our quarterly targets ahead of schedule!\n\nTo celebrate, we're having a team lunch this Friday at that new fusion restaurant around the corner. It's on the company, so make sure to RSVP by Thursday.\n\nAlso, don't forget about our weekly coffee catch-up tomorrow at 10 AM. We'll be discussing the new project updates and brainstorming some ideas for the next quarter.`, 
    layout: { position: 'absolute', width: '50%', height: '36%', top: '55%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10,transform: [{ rotate: '6deg' }] }
  },
  {
    id: 'social3',
    title: 'Family Social Scene', 
    category: 'Social & Casual',
    image: require('../assets/socialpics/pic4002.png'),
    text: `Hey everyone, I was thinking we should plan a family game night this weekend. We haven't had one in a while, and it would be great to spend some quality time together.\n\nI can make your favorite snacks, and we can play some board games or maybe even have a movie marathon. The kids can pick the first movie, and then we can watch something more grown-up after they go to bed.\n\nWhat do you all think? Saturday evening work for everyone?`, 
    layout: { position: 'absolute', width: '50%', height: '36%', top: '55%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10,transform: [{ rotate: '6deg' }] }
  },
  {
    id: 'social4',
    title: 'Library Social Scene', 
    category: 'Social & Casual',
    image: require('../assets/socialpics/pic5021.png'),
    text: `Shh... I know we're in the library, but I just had to tell you about this amazing book I found in the new arrivals section.\n\nIt's a historical fiction novel set in ancient Rome, and the writing is absolutely captivating. I think you'd really enjoy it too.\n\nWould you like to join our book club meeting next week? We're discussing this month's pick, and I know you'd have some great insights to share.\n\nWe meet in the community room every Thursday at 6 PM.`, 
    layout: { position: 'absolute', width: '55%', height: '40%', top: '53%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10,transform: [{ rotate: '7deg' }] }
  },
  {
    id: 'social5',
    title: 'Park Social Scene', 
    category: 'Social & Casual',
    image: require('../assets/socialpics/pic8203.png'),
    text: `What a beautiful day for a picnic in the park! I brought some sandwiches, fruit, and drinks for everyone.\n\nThere's a great spot over by the big oak tree with plenty of shade. We can set up our blankets there and enjoy the afternoon.\n\nAfter we eat, we could play some frisbee or maybe take a walk around the lake. I heard they just added some new walking trails that are really nice.\n\nDon't forget to bring your sunscreen - it's quite sunny today!`, 
    layout: { position: 'absolute', width: '50%', height: '35%', top: '60%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '6deg' }] }
  },
  {
    id: 'social6',
    title: 'Networking Event Small Talk', 
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 28, 2025, 10_15_55 PM.png'),
    text: `Hi there, this is quite an event, isn't it? The energy here is great. I'm Alex, working in marketing at Tech Solutions. What brings you to this particular event today? \n\nOh, that's interesting! I know a bit about Apex Innovations. It sounds like challenging but rewarding work. What kind of specific projects or initiatives are keeping you busy currently? \n\nThat sounds fascinating. It relates a bit to some market analysis I've been doing. Before I arrived, I was hoping to learn more about AI integration in customer service. Have you attended any sessions or talks that you found particularly insightful or useful so far?`, 
    layout: { position: 'absolute', width: '50%', height: '35%', top: '60%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '6deg' }] }
  },
  {
    id: 'social7',
    title: 'Catching Up With a Friend', 
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 28, 2025, 11_14_10 PM.png'),
    text: `Hey Sarah! It seriously feels like ages since we last properly caught up. How have things really been with you? Beyond the usual updates, what's new and genuinely exciting in your world these days? \n\nI saw on Instagram that you took that amazing trip to Italy last month. It looked absolutely incredible! You have to tell me more about it – what was the best part? The food looked divine. \n\nLife's been pretty busy with the new project at work for me. By the way, got any fun or relaxing plans lined up for the weekend, or just hoping to recharge?`, 
    layout: { position: 'absolute', width: '50%', height: '35%', top: '60%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '6deg' }] }
  },
  {
    id: 'social8',
    title: 'Meeting a Neighbor', 
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 28, 2025, 11_20_29 PM.png'),
    text: `Hi there! Sorry to bother you while you're gardening, but I realized we haven't officially met yet. I'm Ben, living just over at number 24. \n\nIt's nice to finally put a face to the name! How long have you been living in the neighborhood? We moved in about six months ago. It seems like a really friendly area, doesn't it? \n\nBy the way, have you had a chance to try that new bakery that opened up down on Maple Street? I keep meaning to check it out, heard their croissants are amazing.`, 
    layout: { position: 'absolute', width: '50%', height: '35%', top: '60%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '6deg' }] }
  },
  {
    id: 'social9',
    title: 'Casual Coffee Break Chat (Work)', 
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 28, 2025, 11_25_30 PM.png'),
    text: `Morning Lisa! Mind if I join you for this coffee break? Definitely need the caffeine boost before the day gets truly hectic. How's your week shaping up so far – surviving okay? \n\nAre you working on anything particularly interesting or challenging at the moment? I heard some buzz about the Project Phoenix deployment you're involved in – sounds like quite the undertaking with that tight deadline. \n\nOn a totally different note, did you happen to catch the basketball game last night? That final quarter was pretty wild, wasn't it?`, 
    layout: { position: 'absolute', width: '50%', height: '35%', top: '60%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '6deg' }] }
  },
  {
    id: 'social10',
    title: 'Joining a Group Conversation', 
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 28, 2025, 11_29_49 PM.png'),
    text: `Excuse me, hope you don't mind if I jump in for a moment? I couldn't help but overhear you discussing remote work policies, and it sounded really interesting. I'm David, by the way. \n\nIt actually reminds me of a similar situation I encountered at my previous company when we transitioned to a hybrid model. It makes me wonder... \n\nWhat are your general thoughts on maintaining team culture with remote teams? I'd be curious to hear your perspectives.`, 
    layout: { position: 'absolute', width: '50%', height: '35%', top: '60%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '6deg' }] }
  },
  {
    id: 'social11',
    title: 'Making Plans with Acquaintance', 
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 28, 2025, 11_35_11 PM.png'),
    text: `Hey Chloe, great seeing you again! It was really fun chatting with you back at the marketing conference last month. \n\nI know we briefly mentioned grabbing coffee sometime to talk more about content strategy. I was wondering if you might actually be free sometime next week to do that? Perhaps Tuesday or Thursday afternoon works? Or I'm flexible if another day is better. \n\nAlternatively, I saw that the local farmers market is happening on Saturday morning. If coffee doesn't work, maybe that would be of interest? No pressure either way, just thought I'd ask! Let me know what you think.`, 
    layout: { position: 'absolute', width: '50%', height: '35%', top: '60%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '6deg' }] }
  },
  {
    id: 'social12',
    title: 'Discussing Hobbies/Interests', 
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 28, 2025, 11_37_48 PM.png'),
    text: `So, shifting gears from project deadlines for a second, what kind of things do you enjoy doing when you actually have some free time? Any particular hobbies or interests you're passionate about? \n\nOh, really? You play the guitar? That's awesome! How did you first get into that? Is it something you've been doing for a long time? \n\nThat sounds great. For me, I'm really into hiking on the weekends. It's a great way to unwind and get outdoors. Have you ever tried any of the trails around here? Some are surprisingly challenging.`, 
    layout: { position: 'absolute', width: '50%', height: '35%', top: '60%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '6deg' }] }
  },
  {
    id: 'social13',
    title: 'Giving a Casual Compliment', 
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 28, 2025, 11_40_32 PM.png'),
    text: `Hey, excuse me, I just wanted to quickly say, I really admire your presentation style in that meeting earlier. You explained those complex ideas so clearly! \n\nYou make that look so effortless, any tips on how you developed that skill? \n\nSeriously though, I was genuinely impressed. Just wanted to mention it!`, 
    layout: { position: 'absolute', width: '50%', height: '35%', top: '60%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '6deg' }] }
  },
  {
    id: 'social14',
    title: 'Ending a Conversation Politely', 
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 28, 2025, 11_47_47 PM.png'),
    text: `Well, listen, it has been genuinely great chatting with you about the future of remote work and hearing your perspective, but I unfortunately need to grab another drink before the next session starts. \n\nThank you so much for the interesting conversation! It was a pleasure meeting you. Hopefully, our paths will cross again soon at another event perhaps. \n\nTake care and enjoy the rest of the conference!`, 
    layout: { position: 'absolute', width: '50%', height: '35%', top: '60%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '6deg' }] }
  },
  {
    id: 'social15',
    title: 'Reacting to Shared News (Good/Bad)', 
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 28, 2025, 11_52_54 PM.png'),
    text: `(Reacting to good news): Wow, no way! That is absolutely fantastic news, Mark! Seriously, congratulations on the promotion, you must be absolutely thrilled! How did that all come about? You have to give me the details! \n\n(Reacting to bad news): Oh, Jane, I am so incredibly sorry to hear about your dog being sick. That sounds really rough and worrying. Thank you for sharing that with me. Please know I'm thinking of you both. Is there honestly anything at all I can do to help, even just listening or grabbing groceries? Please don't hesitate to reach out if you need anything or just want to talk more.`, 
    layout: { position: 'absolute', width: '50%', height: '35%', top: '60%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '6deg' }] }
  },
  // --- End Social & Casual Prompts ---

  // --- Virtual Communication Prompts ---
  {
    id: 'virtual1',
    title: 'Quarterly Project Update & Next Steps', // Updated title
    category: 'Virtual Communication',
    image: require('../assets/vcpics/ChatGPT Image Apr 26, 2025, 07_25_39 PM.png'), 
    text: `Good morning, team. Let's dive into the Q3 progress for Project Phoenix. We successfully completed the alpha testing phase two days ahead of schedule, thanks to the diligent work from the engineering team. Key performance indicators show a 15% improvement in processing speed compared to the previous build, which is fantastic news.

Looking ahead to Q4, our primary focus will be on beta testing and addressing the feedback received from alpha users. We need to finalize the user documentation by November 15th and prepare for the limited launch targeted for the first week of December. Marketing, please ensure the campaign materials are aligned with this timeline. Let's open the floor for any questions regarding resource allocation for the beta phase.`, // Updated text
    layout: { // Default layout - ADJUST AS NEEDED!
      position: 'absolute',
      width: '60%',
      height: '35%',
      top: '58%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'virtual2',
    title: 'Client Pitch: Streamlining Operations', // Updated title
    category: 'Virtual Communication',
    image: require('../assets/vcpics/ChatGPT Image Apr 26, 2025, 07_28_50 PM.png'), 
    text: `Thank you for joining us today, Mr. Harrison. We understand that operational efficiency is a key priority for your company. Our proposed solution, 'FlowOptimize,' directly addresses the bottlenecks identified in your current workflow. By implementing our automated task management system, we project a reduction in manual processing time by up to 35% within the first six months.

This system not only speeds up processes but also provides real-time analytics, giving you unprecedented visibility into your operations. Our case studies with similar clients show an average ROI of 250% within the first year. We're confident FlowOptimize will deliver significant value and provide a competitive edge. Are there any specific concerns or areas you'd like us to elaborate on further?`, // Updated text
    layout: { // Default layout - ADJUST AS NEEDED!
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
    id: 'virtual3',
    title: 'Team Brainstorm: New Marketing Initiative', // Updated title
    category: 'Virtual Communication',
    image: require('../assets/vcpics/ChatGPT Image Apr 26, 2025, 07_32_13 PM.png'), 
    text: `Alright team, let's kick off this brainstorming session for our new Q1 marketing initiative. The goal is to increase brand awareness among the 18-25 demographic by 20%. We need innovative ideas that resonate with this audience. Think outside the box – social media campaigns, influencer collaborations, experiential marketing, user-generated content challenges – nothing is off the table at this stage.

Let's start by throwing out some initial concepts. Don't worry about feasibility just yet; focus on creativity. I'll capture everything on the virtual whiteboard. Remember the rules: build on each other's ideas, encourage wild thoughts, and defer judgment. Who wants to get us started? What's the first idea that comes to mind for reaching this demographic?`, // Updated text
    layout: { // Default layout - ADJUST AS NEEDED!
      position: 'absolute',
      width: '60%',
      height: '15%',
      top: '70%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'virtual4',
    title: 'Performance Review Discussion', // Updated title
    category: 'Virtual Communication',
    image: require('../assets/vcpics/ChatGPT Image Apr 26, 2025, 07_43_24 PM.png'), 
    text: `Hi Jordan, thanks for joining me for your performance review. Overall, you've had a very productive year. Your contributions to the Atlas project were instrumental in its success, particularly your innovative approach to data analysis which saved the team significant time. You consistently exceeded expectations in meeting deadlines and collaborating effectively with cross-functional teams.

Looking forward, let's discuss development goals for the upcoming year. Based on your interest in leadership, I recommend focusing on project management skills. We can explore opportunities for you to lead smaller initiatives or shadow senior project managers. Let's also set a specific goal around enhancing your presentation skills for client-facing meetings. What are your thoughts on these areas?`, // Updated text
    layout: { // Default layout - ADJUST AS NEEDED!
      position: 'absolute',
      width: '60%',
      height: '28%',
      top: '60%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'virtual5',
    title: 'Placeholder VC 5', 
    category: 'Virtual Communication',
    image: require('../assets/vcpics/ChatGPT Image Apr 29, 2025, 12_19_40 AM.png'), 
    text: `Placeholder text for virtual communication 5.`, 
    layout: { 
      position: 'absolute',
      width: '60%',
      height: '28%',
      top: '60%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'virtual6',
    title: 'Placeholder VC 6', 
    category: 'Virtual Communication',
    image: require('../assets/vcpics/ChatGPT Image Apr 29, 2025, 12_25_15 AM.png'), 
    text: `Placeholder text for virtual communication 6.`, 
    layout: { 
      position: 'absolute',
      width: '60%',
      height: '28%',
      top: '60%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'virtual7',
    title: 'Placeholder VC 7', 
    category: 'Virtual Communication',
    image: require('../assets/vcpics/ChatGPT Image Apr 29, 2025, 12_28_35 AM.png'), 
    text: `Placeholder text for virtual communication 7.`, 
    layout: { 
      position: 'absolute',
      width: '60%',
      height: '28%',
      top: '60%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'virtual8',
    title: 'Placeholder VC 8', 
    category: 'Virtual Communication',
    image: require('../assets/vcpics/ChatGPT Image Apr 29, 2025, 12_39_04 AM.png'), 
    text: `Placeholder text for virtual communication 8.`, 
    layout: { 
      position: 'absolute',
      width: '60%',
      height: '28%',
      top: '60%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'virtual9',
    title: 'Placeholder VC 9', 
    category: 'Virtual Communication',
    image: require('../assets/vcpics/ChatGPT Image Apr 29, 2025, 12_42_17 AM.png'), 
    text: `Placeholder text for virtual communication 9.`, 
    layout: { 
      position: 'absolute',
      width: '60%',
      height: '28%',
      top: '60%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'virtual10',
    title: 'Placeholder VC 10', 
    category: 'Virtual Communication',
    image: require('../assets/vcpics/ChatGPT Image Apr 29, 2025, 12_43_27 AM.png'), 
    text: `Placeholder text for virtual communication 10.`, 
    layout: { 
      position: 'absolute',
      width: '60%',
      height: '28%',
      top: '60%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'virtual11',
    title: 'Placeholder VC 11', 
    category: 'Virtual Communication',
    image: require('../assets/vcpics/ChatGPT Image Apr 29, 2025, 12_50_06 AM.png'), 
    text: `Placeholder text for virtual communication 11.`, 
    layout: { 
      position: 'absolute',
      width: '60%',
      height: '28%',
      top: '60%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'virtual12',
    title: 'Placeholder VC 12', 
    category: 'Virtual Communication',
    image: require('../assets/vcpics/ChatGPT Image Apr 29, 2025, 12_51_28 AM.png'), 
    text: `Placeholder text for virtual communication 12.`, 
    layout: { 
      position: 'absolute',
      width: '60%',
      height: '28%',
      top: '60%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'virtual13',
    title: 'Placeholder VC 13', 
    category: 'Virtual Communication',
    image: require('../assets/vcpics/ChatGPT Image Apr 29, 2025, 12_59_30 AM.png'), 
    text: `Placeholder text for virtual communication 13.`, 
    layout: { 
      position: 'absolute',
      width: '60%',
      height: '28%',
      top: '60%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
    {
    id: 'virtual14',
    title: 'Placeholder VC 14', 
    category: 'Virtual Communication',
    image: require('../assets/vcpics/ChatGPT Image Apr 29, 2025, 01_00_52 AM.png'), 
    text: `Placeholder text for virtual communication 14.`, 
    layout: { 
      position: 'absolute',
      width: '60%',
      height: '28%',
      top: '60%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  // --- End Virtual Communication Prompts ---

  // Add more prompts here in the future
]; 