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
    title: 'Introduction to Speaking Practice',
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/34f.png'),
    text: `Welcome to your speaking practice journey! Today, we'll start with a simple but powerful exercise. Take a deep breath, stand naturally, and introduce yourself to your imaginary audience. Tell them who you are, what you're passionate about, and one interesting fact about yourself. For example: "Hello everyone, I'm Alex, and I'm passionate about using technology to solve everyday problems. One interesting fact about me is that I once coded an entire app while traveling across Europe by train." Remember, this isn't about perfection – it's about finding your authentic voice. Focus on speaking clearly, maintaining a steady pace, and letting your personality shine through. This basic introduction helps build the foundation for more complex speaking scenarios.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '42%',
      top: '37%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'fundamentals3',
    title: '30-Second Speech',
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/er3.png'),
    text: `Look at the image above. You have 30 seconds to describe what you see. Start with "In this image..." and speak naturally. Focus on the main elements and key details. Practice keeping your speech within the time limit. Try to include: 1) What catches your eye first, 2) The mood or feeling it creates, and 3) One interesting detail that others might miss. Remember to breathe and speak at a comfortable pace. If you finish early, you can add more observations. If you're running out of time, practice wrapping up smoothly.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '45%',
      top: '34%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'fundamentals4',
    title: 'Panel Discussion: Future of Remote Work',
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/mdk.png'),
    text: `Thank you for that question, Sarah. The future of remote work isn't just about where we work, but how we work. Let me share a perspective from our recent research at TechForward. We found that 78% of companies are now adopting hybrid models, but the real innovation is in how we're redefining productivity. For example, at our company, we've moved from measuring hours to measuring outcomes. This shift has led to a 32% increase in employee satisfaction while maintaining or improving productivity metrics. However, we can't ignore the challenges - particularly in maintaining company culture and spontaneous collaboration. That's why we're investing in virtual watercooler moments and AI-powered collaboration tools. The key isn't just remote work; it's creating a work environment that adapts to human needs rather than forcing humans to adapt to outdated office structures.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '33%',
      top: '52%',
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
      height: '42%',
      top: '42%',
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
      height: '42%',
      top: '37%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
      transform: [{ rotate: '-1deg' }],
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
      height: '39%',
      top: '47%',
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
      height: '42%',
      top: '42%',
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
      height: '43%',
      top: '33%',
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
      width: '55%',
      height: '33%',
      top: '51%',
      left: '22.5%',
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
      width: '63%',
      height: '36%',
      top: '60%',
      left: '17.5%',
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
      height: '49%',
      top: '29%',
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
      width: '55%',
      height: '37%',
      top: '44%',
      left: '21.5%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
      transform: [{ rotate: '3deg' }],
    }
  },
  {
    id: 'fundamentals15',
    title: 'Music Concert Thank You Speech Practice',
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/ChatGPT Image Apr 30, 2025, 05_28_13 PM.png'),
    text: `Wow, Los Angeles! You've been absolutely incredible tonight! This energy, this passion - it's what makes live music so magical. I need to take a moment to thank some amazing people: our incredible sound team who've worked tirelessly to make every note perfect, the lighting crew who've created this spectacular visual experience, and especially you - our fans who've been with us through every album, every tour, every high and low. Without your unwavering support, none of this would be possible. To my band - Tom on drums with his thunderous beats, Lisa with those killer guitar solos that leave us all in awe, Marcus on bass keeping us grounded - you guys are more than just bandmates, you're family. This tour has been an unforgettable journey, filled with challenges and triumphs, and tonight, you've made it even more special. This last song is dedicated to everyone who's ever believed in a dream, who's ever stayed up late practicing their craft, who's ever faced rejection but kept going. Because that's what music is about - it's about the journey, the passion, and the connection we share right here, right now.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '40%',
      top: '52%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'fundamentals16',
    title: 'Podcast',
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/ChatGPT Image Apr 30, 2025, 05_29_53 PM.png'),
    text: `Hey everyone, welcome back to 'Future Forward.' I'm your host Sarah Chen, and today we're diving into something truly fascinating - the intersection of artificial intelligence and creative arts. Our guest is Dr. James Morrison, whose groundbreaking work in AI-generated music is challenging everything we thought we knew about creativity and technology. Before we jump in, here's a mind-blowing fact: last month, an AI-composed symphony was performed at Carnegie Hall, and most audience members couldn't tell it wasn't written by a human. This raises profound questions about the nature of creativity and the role of technology in artistic expression. Dr. Morrison's research explores how AI can enhance human creativity rather than replace it, creating new possibilities for artistic collaboration. His team's latest project involves training AI systems to understand emotional context in music, allowing them to compose pieces that resonate deeply with human listeners. Dr. Morrison, welcome to the show, and thank you for joining us to discuss these fascinating developments.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '40%',
      top: '42%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'fundamentals17',
    title: 'Public Speaking Bootcamp',
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/ChatGPT Image Apr 30, 2025, 05_32_10 PM.png'),
    text: `Good morning, future leaders! Today, we're going to transform the way you think about public speaking. Forget everything you've been told about imagining the audience in their underwear - that's outdated advice that doesn't work. Instead, I'm going to share three powerful techniques that helped me overcome my own fear of public speaking and go on to deliver keynotes to audiences of thousands. These aren't just theories - they're battle-tested strategies that have helped executives, politicians, and thought leaders captivate their audiences. The first technique involves mastering your breathing and body language to project confidence even when you're nervous. The second focuses on structuring your content in a way that naturally engages your audience and keeps them hooked. And the third, perhaps most importantly, teaches you how to connect authentically with your listeners, making your message resonate on a deeper level. Together, these techniques will transform you from a nervous speaker into a confident communicator who can inspire and influence others.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '45%',
      top: '45%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'fundamentals18',
    title: 'NBA Season Ending Team Meeting',
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/ChatGPT Image Apr 30, 2025, 05_33_14 PM.png'),
    text: `Looking around this locker room, I see more than just teammates - I see warriors, brothers, and champions at heart. This season tested us in ways we never expected. We faced injuries that would have ended lesser teams' seasons, tough losses that could have broken our spirit, and moments that demanded everything we had. But what defines us isn't our record - it's how we responded to adversity, how we lifted each other up when the going got tough. Marcus, your leadership during that seven-game road stretch was nothing short of legendary. You kept us focused, motivated, and believing in ourselves even when the odds were against us. Jake, coming back from that injury ahead of schedule showed everyone what true dedication means - your work ethic inspired the entire team. And to every player in this room, your commitment to excellence, your willingness to put the team first, and your relentless pursuit of greatness have made this season unforgettable. Next season starts now. Our goal remains the same: championship or nothing. But more than that, we're building a legacy of excellence, teamwork, and resilience that will inspire future generations of players.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '39%',
      top: '44%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'fundamentals19',
    title: 'Talking with AI Mirror',
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/ChatGPT Image Apr 30, 2025, 05_36_33 PM.png'),
    text: `The future of human-AI interaction isn't about replacement - it's about enhancement. When we look at the latest developments in neural networks and machine learning, we're not just seeing improvements in processing power; we're witnessing the emergence of systems that can understand context, emotion, and nuance. This raises fascinating questions about consciousness, creativity, and the very nature of intelligence. As we develop these technologies, we must ensure they align with human values and enhance rather than diminish human potential. The key lies in creating AI systems that complement human abilities rather than compete with them. We're seeing this in fields like healthcare, where AI assists doctors in diagnosis while preserving the crucial human element of patient care. In education, AI tutors provide personalized learning experiences while teachers focus on mentorship and emotional support. The challenge ahead is to design AI systems that understand and respect human values, that can collaborate with us in ways that amplify our strengths and compensate for our limitations. This requires not just technical expertise, but deep philosophical consideration of what it means to be human in an age of artificial intelligence.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '38%',
      top: '54%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'fundamentals20',
    title: 'Presentation',
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/ChatGPT Image Apr 30, 2025, 05_38_20 PM.png'),
    text: `Thank you all for being here today. Our Q3 results tell an exciting story of growth and innovation. Looking at this graph, you can see our market share has increased by 27% year-over-year, driven primarily by our new digital initiatives. But numbers only tell part of the story. Behind these figures are real people - our dedicated team members who've embraced change, our loyal customers who've evolved with us, and our partners who've supported our vision. Let me walk you through how we achieved this transformation and, more importantly, where we're headed next. Our success stems from three key strategic initiatives: first, our investment in cutting-edge technology that has revolutionized our production processes; second, our commitment to sustainability that has not only reduced our environmental impact but also created new market opportunities; and third, our focus on customer experience that has transformed how we engage with our clients. These initiatives have positioned us as industry leaders, but we're not stopping here. The next phase of our journey will focus on expanding into emerging markets, developing new product lines, and continuing to push the boundaries of innovation.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '42%',
      top: '20%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'fundamentals21',
    title: 'Virtual Meeting',
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/ChatGPT Image Apr 30, 2025, 05_40_02 PM.png'),
    text: `Good morning everyone, and thank you for joining from across our global offices. I see we have team members from Singapore, London, New York, and São Paulo - welcome all. Today's agenda focuses on our digital transformation initiative and its impact on our Q4 targets. Before we dive in, I want to acknowledge the outstanding work from our Asia-Pacific team, who've exceeded their implementation goals by 40%. Let's start with a quick overview of where we stand, and then we'll open the floor for questions and insights from each region. Our digital transformation journey has been remarkable, with significant improvements in operational efficiency, customer satisfaction, and employee engagement. The Asia-Pacific team's success demonstrates what's possible when we combine innovative technology with strong leadership and team collaboration. As we move forward, we'll be implementing similar strategies across all regions, tailored to local market conditions and business needs. This meeting is an opportunity to share best practices, address challenges, and align our global strategy for the coming quarter.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '45%',
      top: '51%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'fundamentals22',
    title: 'Opera Thank You Speech',
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/ChatGPT Image Apr 30, 2025, 05_40_58 PM.png'),
    text: `Ladies and gentlemen, tonight's performance of 'La Traviata' represents the culmination of countless hours of dedication and passion. From our magnificent orchestra under Maestro Ricci's direction to our stellar cast led by Maria Soprano's breathtaking Violetta, every person has contributed to this magical evening. I must especially thank our technical crew, costume department, and volunteers - the unsung heroes who make such performances possible. Your continued support of the arts, your presence here tonight, ensures that these timeless stories will continue to move and inspire future generations. This production has been particularly special, as we've incorporated innovative staging techniques while staying true to Verdi's original vision. The collaboration between our creative team, musicians, and performers has resulted in a performance that honors tradition while embracing innovation. We're also proud to announce that tonight's performance will help fund our youth outreach program, bringing the magic of opera to the next generation of artists and audiences.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '34%',
      top: '44%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
      transform: [{ rotate: '-2deg' }],
    }
  },
  {
    id: 'fundamentals23',
    title: 'Practice with Nature',
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/ChatGPT Image Apr 30, 2025, 05_42_34 PM.png'),
    text: `Standing here among these ancient redwoods, we're reminded of nature's timeless wisdom. These trees have stood witness to centuries of change, yet remain unshaken. Their resilience teaches us about adaptation and perseverance. As environmental stewards, we face unprecedented challenges - climate change, habitat loss, and species extinction. But like these mighty trees, we must stand firm in our commitment to preservation. Each of us has the power to make a difference, to ensure these natural wonders survive for future generations. Let the strength of these ancient giants inspire us to act with courage and conviction. The redwoods' ability to thrive for millennia demonstrates nature's remarkable capacity for resilience and renewal. Their towering presence reminds us of our responsibility to protect and preserve our planet's biodiversity. Through sustainable practices, conservation efforts, and environmental education, we can ensure that these magnificent forests continue to thrive. The lessons we learn from these ancient trees - about cooperation, adaptation, and long-term thinking - are more relevant than ever as we face the environmental challenges of our time.`,
    layout: {
      position: 'absolute',
      width: '55%',
      height: '34%',
      top: '40%',
      left: '12%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
      transform: [{ rotate: '1deg' }],
    }
  },
  {
    id: 'fundamentals24',
    title: 'Oval Office Discussion Practice',
    category: 'Practice Fundamentals',
    image: require('../assets/Practicefundamentalpics/ChatGPT Image Apr 30, 2025, 05_26_22 PM.png'),
    text: `My fellow Americans, as we gather in this historic office, I want to address the critical infrastructure bill before Congress. This legislation represents more than just roads and bridges - it's about American jobs, our economic future, and our position as a global leader. The challenges we face require bipartisan solutions. I've met with leaders from both parties, and while we may differ on methods, we share common goals: strengthening our economy, creating sustainable jobs, and securing America's future. Let's discuss how we can move forward together, putting the American people first. This infrastructure plan will create millions of good-paying jobs while modernizing our transportation systems, expanding broadband access to rural communities, and investing in clean energy technologies. It's not just about building physical infrastructure - it's about building the foundation for America's next century of prosperity. We have an opportunity to demonstrate that democracy can deliver results, that we can come together to solve big problems, and that America's best days are still ahead of us.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '38%',
      top: '47%',
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
    layout: { position: 'absolute', width: '55%', height: '40%', top: '55%', left: '24%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '-1deg' }] }
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
    title: 'Monument Sunrise Address',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 28, 2025, 08_54_17 PM.png'),
    text: `As the sun rises behind us, casting its first light on this hallowed ground, I am reminded of the generations who stood here before, calling for justice, unity, and progress.\n\nToday, we gather not just to remember — but to reignite our shared commitment to a better future.\n\nLet this place inspire us to speak truth with courage, to lead with integrity, and to walk forward — together — no matter the odds.\n\nIn this moment of national reflection, we must acknowledge both how far we've come and the journey that still lies ahead. The path to progress has never been straight or easy. It winds through valleys of struggle and climbs mountains of resistance.\n\nYet here we stand, testament to the resilience of the human spirit and the power of collective action. Each of us carries the responsibility to continue the work began by those who came before us — to expand freedom, to deepen democracy, and to ensure that dignity is afforded to every person.\n\nAs we leave this place today, let us carry with us not just memories of this gathering, but a renewed determination to be agents of positive change in our communities, our nation, and our world. The future is not predetermined — it is shaped by our choices, our courage, and our commitment to one another.`,
    layout: {
      position: 'absolute',
      width: '62%',
      height: '30%',
      top: '66%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10
    }
  },
  {
    id: 'speech15',
    title: 'Rally for Change',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 28, 2025, 08_13_24 PM.png'),
    text: `Look around you — this is what democracy looks like!\n\nToday, we raise our voices not in anger, but with purpose. We are here because we believe in the power of people over politics, of justice over silence.\n\nThis is our moment to push for what matters: fair wages, climate action, voting rights, and dignity for every single person.\n\nLet the world hear us: we are here, we are ready, and we are not backing down.\n\nFor too long, the concerns of everyday people have been drowned out by powerful interests and political gridlock. But history shows us that real, lasting change has always begun with ordinary citizens who refuse to accept the status quo.\n\nEvery major social advancement in our nation's history — from civil rights to labor protections, from women's suffrage to environmental safeguards — began with people just like us, gathering just like this, insisting that our country live up to its highest ideals.\n\nToday we add our voices to that proud tradition. We stand united across differences of background, belief, and experience, brought together by our shared humanity and common cause. This movement is not about left versus right — it's about right versus wrong, about creating a future where everyone has the opportunity to thrive.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '40%',
      top: '41%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10
    }
  },
  {
    id: 'speech16',
    title: 'UN General Assembly Speech',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 28, 2025, 08_56_47 PM.png'),
    text: `Mr. President, esteemed delegates,\n\nWe gather today at a time of urgent global challenge — and also of unparalleled opportunity.\n\nFrom climate change to digital equity, we are called to act not as isolated nations but as a united global community. Cooperation is no longer optional — it is essential.\n\nLet us forge partnerships that transcend borders and elevate voices that have too long been unheard. The future demands bold action, and history will judge us by what we choose to do next.\n\nOver the past year, we've witnessed both extraordinary resilience and profound vulnerability across our interconnected world. As temperatures rise and extreme weather events increase in frequency and intensity, our most vulnerable populations continue to bear the heaviest burden.\n\nMeanwhile, technological advancement accelerates, creating both potential solutions and new forms of inequality. We must ensure that the benefits of innovation reach all corners of the globe, leaving no one behind in our digital future.\n\nMy country pledges to increase its climate financing by 30% over the next five years and to open our technological innovations to developing nations without burdensome conditions. We will also welcome 50,000 additional refugees, recognizing our humanitarian responsibility in a world of increasing displacement.\n\nI call on every nation represented here today to match ambition with action, rhetoric with resources. Our words in this chamber must translate to meaningful change in the lives of those we serve.`,
    layout: {
      position: 'absolute',
      width: '55%',
      height: '28%',
      top: '70%',
      left: '22%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10
    }
  },
  {
    id: 'speech17',
    title: 'Awards Ceremony Acceptance',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 28, 2025, 08_58_57 PM.png'),
    text: `Wow... thank you. Standing here tonight is a dream I never thought would become reality.\n\nThis honor belongs not just to me, but to every mentor who lifted me up, every collaborator who challenged me, and every moment of failure that taught me to keep going.\n\nTo those watching who feel unseen — know this: your voice matters, your work matters, and your time will come.\n\nThank you, from the bottom of my heart.\n\nWhen I started this journey fifteen years ago, working out of my garage with nothing but determination and a vision, there were countless moments when giving up seemed like the only sensible option. I remember one particularly difficult period when I had maxed out my credit cards, my family was questioning my sanity, and the industry experts had written off my approach as impractical and naive.\n\nWhat kept me going were the small acts of kindness and belief from unexpected places — a former professor who connected me with a key advisor, a stranger who became our first customer, and my partner who somehow always found a way to keep food on the table while I chased this dream.\n\nThis award represents all those invisible moments of perseverance that happen behind the scenes of any worthwhile endeavor. The late nights, the rejected proposals, the prototypes that failed spectacularly — they were all necessary steps on the path that led here.`,
    layout: {
      position: 'absolute',
      width: '62%',
      height: '35%',
      top: '53%',
      left: '14%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10
    }
  },
  {
    id: 'speech18',
    title: 'Courtroom Closing Statement',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 28, 2025, 09_00_13 PM.png'),
    text: `Your Honor, members of the jury,\n\nYou've heard the evidence. You've seen the facts. And now, it comes down to a simple question: What is justice?\n\nThis isn't just about one person's actions. It's about accountability. About the truth finally being recognized in a room that has long ignored it.\n\nI ask you to remember not just what was said — but what was proven.\n\nLet justice be more than a word. Let it be the verdict you deliver today.\n\nThroughout this trial, we've presented witness testimony, expert analysis, and documented evidence that all point to the same conclusion. The prosecution has attempted to create a narrative based on circumstantial connections and emotional appeals. But a just verdict must be based on facts, not feelings.\n\nConsider the timeline we've established through multiple witnesses. Consider the forensic evidence that contradicts the prosecution's theory. Consider the inconsistencies in testimony from the state's key witness.\n\nMy client has maintained their innocence from the beginning. They have cooperated fully with this investigation, provided alibi witnesses, and submitted to all requests from law enforcement. These are not the actions of someone with guilt to hide.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '38%',
      top: '50%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10
    }
  },
  {
    id: 'speech19',
    title: 'TED Talk Introduction',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 28, 2025, 09_03_23 PM.png'),
    text: `What if I told you that the future you're afraid of — is actually the opportunity you've been waiting for?\n\nGood afternoon, TED community. Today, I want to challenge the assumptions we've made about failure, fear, and forward momentum.\n\nThis talk is not about being perfect. It's about being courageous enough to show up, even when you don't have all the answers.\n\nLet's dive in together and explore how small ideas, repeated with heart, can change everything.\n\nFive years ago, I lost everything — my company, my savings, my confidence. I was that classic cautionary tale of an entrepreneur who reached too far. The spectacular failure was covered in business magazines and analyzed by industry experts. Everyone had an opinion about what went wrong.\n\nBut what I discovered in that darkest moment wasn't just the depth of loss — it was the beginning of a profound transformation. When you have nothing left to lose, you suddenly have everything to gain. The fear that once paralyzed me became irrelevant.\n\nDuring the next 18 months, I interviewed over 200 people who had experienced similar catastrophic failures. What emerged was a pattern, a roadmap of sorts, for turning moments of greatest defeat into catalysts for unprecedented growth. These conversations revealed a counterintuitive truth: our biggest breakthroughs often lie on the other side of our most painful breakdowns.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '37%',
      top: '55%',
      left: '25%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10
    }
  },
  {
    id: 'speech20',
    title: 'Memorial Church Eulogy',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 28, 2025, 09_06_36 PM.png'),
    text: `We gather here in this sacred space to honor a life well-lived, and to grieve a loss deeply felt.\n\n[Name] was a beacon of quiet strength — someone whose kindness left an imprint on everyone they met.\n\nThough today is filled with sorrow, it is also filled with gratitude. Gratitude for the memories, the laughter, and the legacy of compassion left behind.\n\nLet us remember not just how [Name] died, but how they lived. And may we carry forward the light they shared with us.\n\nI remember the first time I met [Name], thirty years ago. It was during that terrible storm that flooded the downtown area. While most people were focused on protecting their own homes, [Name] organized an impromptu volunteer effort to help elderly residents evacuate. That was the essence of who they were — seeing beyond themselves to the needs of others, taking action without hesitation or expectation of recognition.\n\nMany of you have your own stories — moments when [Name]'s generosity, wisdom, or simple presence made all the difference in your lives. These stories matter. They remind us that a life is measured not in years but in impact, not in possessions but in connections.\n\n[Name] faced their final illness with the same grace and courage that characterized their entire life. Even in those difficult last days, their concern was for the comfort of their family and friends rather than themselves.`,
    layout: {
      position: 'absolute',
      width: '50%',
      height: '35%',
      top: '55%',
      left: '25%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10
    }
  },
  {
    id: 'speech21',
    title: 'Democratic Rally Keynote',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 28, 2025, 09_02_26 PM.png'),
    text: `Friends, we are here tonight not just to celebrate a campaign — but to launch a movement.\n\nA movement rooted in equity, inclusion, and economic justice. One that says healthcare is a right, not a privilege. That climate action is not optional, it's essential.\n\nIf you believe in lifting each other up, in listening before speaking, and in fighting like hell for the next generation — then you're in the right place.\n\nLet's go out there and win this — together.\n\nI've spent the past six months traveling across this district, listening to your stories. I've heard from factory workers worried about automation, from parents struggling to afford childcare, from students drowning in debt, and from seniors choosing between medicine and food.\n\nThese aren't just policy issues — they're human issues that affect real people every single day. And they won't be solved by the same old approach that got us here.\n\nOur campaign isn't funded by corporate PACs or special interests. It's powered by people like you who believe we deserve better. Every five-dollar donation, every volunteer hour, every conversation with a neighbor — that's what will transform our community.\n\nWhen they say we're asking for too much, we say: we're just getting started. When they say change isn't possible, we say: watch us make it happen. This is our moment to stand up, to speak out, and to reshape what's possible in politics.`,
    layout: {
      position: 'absolute',
      width: '55%',
      height: '35%',
      top: '47%',
      left: '22.5%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10
    }
  },
  {
    id: 'speech22',
    title: 'Historic Civil Rights Tribute',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 28, 2025, 09_08_35 PM.png'),
    text: `Standing here, in the footsteps of giants, we remember those who marched, who sacrificed, and who dared to dream.\n\nThis monument is not made of stone — it is built from courage, from conviction, from the unwavering belief that freedom belongs to all.\n\nLet us not treat this history as distant. Let it stir us to action.\n\nBecause the arc of the moral universe does not bend on its own — it bends when we pull it with every ounce of our being.\n\nSixty years ago, on these very streets, ordinary citizens faced fire hoses, police dogs, and brutal violence — all for demanding the basic rights promised to them as Americans. They were teachers and preachers, students and workers. They were mothers and fathers who wanted a better world for their children.\n\nTheir moral courage changed the course of history. Their nonviolent resistance transformed not just laws but hearts and minds. The victories they won — at lunch counters, in courtrooms, on buses, and at ballot boxes — were hard-fought and costly.\n\nYet today, we face new challenges to justice and equality. Voter suppression. Economic inequality. Systemic racism that persists in housing, education, healthcare, and criminal justice. These injustices may take different forms than they did six decades ago, but they stem from the same root causes and demand the same moral clarity from us.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '42%',
      top: '48%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10
    }
  },
  {
    id: 'speech23',
    title: 'University Commencement Speech',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 28, 2025, 09_01_24 PM.png'),
    text: `To the graduating class: You did it.\n\nNot just the coursework — but the late nights, the doubts, the breakthroughs, the friendships, and the growth you never expected.\n\nToday isn't the end of your story. It's the moment the world hands you the pen and says, "Now you write it."\n\nSo go forward boldly. Make mistakes, make change, and make it count.\n\nWe can't wait to see what you build next.\n\nYour education has given you more than knowledge — it has given you perspective. In a world that's increasingly complex and polarized, you've learned to analyze deeply, question thoughtfully, and communicate effectively. These skills matter now more than ever.\n\nYou're graduating at a pivotal moment in history. Technologies like AI are transforming our economy. Climate change is reshaping our planet. Political and social movements are redefining our institutions. Some might see these challenges as burdens — I see them as opportunities for your generation to lead us toward more innovative, sustainable, and equitable solutions.\n\nRemember that success isn't linear. Many of you will change careers multiple times. You'll explore paths that don't even exist yet. The most successful people I know aren't those who followed a straight line, but those who remained curious, adaptable, and resilient in the face of uncertainty.\n\nAnd as you pursue your individual dreams, don't forget the collective responsibility we share to each other. Your education was made possible not just by your own efforts, but by the communities, family members, and institutions that supported you along the way.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '33%',
      top: '54%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
      transform: [{ rotate: '-2deg' }]
    }
  },
  {
    id: 'speech24',
    title: 'Unity Through Faith Address',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 29, 2025, 12_49_35 PM.png'),
    text: `Brothers and sisters, let us take a breath together — and remember who we are, and what binds us.\n\nNot our divisions, but our shared spirit. Not our fears, but our hope. Faith, not as dogma, but as the invitation to love boldly and serve humbly.\n\nIn times of turmoil, may our faith anchor us. In moments of doubt, may it carry us.\n\nLet us leave this place renewed — to be light in darkness and peace in unrest.\n\nFor centuries, people of faith have gathered in spaces like this — not to escape the world, but to be strengthened for it. Our sacred texts and traditions remind us that true spirituality is measured not just by what we believe, but by how we treat one another, especially those on the margins of society.\n\nOur community is blessed with diversity — different backgrounds, different life experiences, different interpretations of our shared faith. These differences need not divide us. Indeed, they enrich our understanding and expand our hearts.\n\nI'm reminded of the ancient parable of the wounded traveler, ignored by the religious authorities but helped by the unexpected stranger. This story challenges us to ask: Who is my neighbor? And how am I called to care for them? In a world that so often teaches us to fear the other, our faith calls us to a radical welcome and an expansive love.\n\nAs we face the challenges of our time — polarization, environmental crisis, economic inequality — let us draw strength from both our individual convictions and our collective wisdom.`,
    layout: {
      position: 'absolute',
      width: '50%',
      height: '32%',
      top: '55%',
      left: '23%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10
    }
  },
  {
    id: 'speech25',
    title: 'Community Empowerment Rally',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 29, 2025, 12_48_09 PM.png'),
    text: `Friends,\n\nLook around — this is what unity looks like. Today, we stand together for a brighter future, built on empowerment, inclusion, and action.\n\nWe're not here to just cheer; we're here to commit. To listen. To support one another. And to make real change — in our schools, our neighborhoods, and our leadership.\n\nLet's raise our voices and our hopes. Let's say yes to opportunity, yes to justice, and yes to every voice being heard. This movement belongs to all of us — and we're just getting started.\n\nFor too long, our community has been defined by what others say about us, rather than by what we know to be true. They look at our challenges and see only problems. We look at our community and see tremendous potential waiting to be unleashed.\n\nEvery person here has a story of resilience, a story of overcoming, a story of hope that refuses to die. Those stories, woven together, create the fabric of a community that's stronger than any challenge we face.\n\nSo what are we going to do? First, we're launching our neighborhood council initiative with representatives from every block working together to identify priorities and solutions. Second, we're starting a youth mentorship program connecting our elders with our teenagers to share wisdom and create opportunities. Third, we're establishing a community-owned cooperative to bring fresh food, jobs, and economic power right here to our neighborhood.\n\nThis isn't a quick fix or an overnight solution. Real change takes time, commitment, and consistent effort. But when we stand together, when we pool our resources, our talents, and our determination, there is absolutely nothing we cannot accomplish.`,
    layout: { position: 'absolute', width: '60%', height: '38%', top: '48%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'speech26',
    title: 'Gallery Hall Press Briefing',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 29, 2025, 12_44_59 PM.png'),
    text: `Members of the press, colleagues,\n\nAs we gather here in this grand hall, I'm reminded that leadership is not about titles — it's about responsibility. Today, we address not just headlines, but the principles we stand for.\n\nOur mission is clear: transparency, accountability, and unity in the face of complex challenges. Every decision we make echoes through this institution and into the lives of those we serve.\n\nLet this briefing be more than updates — let it reflect our unwavering dedication to public trust.\n\nThe announcements we're making today come after months of careful deliberation, countless hours of expert consultation, and genuine engagement with communities across the nation. We did not arrive at these policy positions lightly or with partisan calculation. We arrived here by following the evidence, listening to diverse perspectives, and remaining focused on long-term outcomes rather than short-term political convenience.\n\nI understand there will be critiques from across the political spectrum. That's not just expected — it's essential in a healthy democracy. But I ask that we all elevate the discourse beyond soundbites and engage with the substance of these proposals. The challenges we face — from economic inequality to climate resilience to healthcare access — are too important for anything less.\n\nIn the detailed briefing materials we've provided, you'll find not just our policy framework but the data, research, and community input that informed our approach. You'll also find metrics for accountability — specific, measurable outcomes that will allow the public to judge our progress objectively.\n\nI'm now ready to address your questions with the same transparency and directness that we hope will characterize this administration's relationship with both the press and the public.`,
    layout: { position: 'absolute', width: '60%', height: '35%', top: '62%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '-8deg' }] }
  },
  {
    id: 'speech27',
    title: 'Military Formation Address',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 29, 2025, 12_50_54 PM.png'),
    text: `Soldiers,\n\nAs you stand in formation today, remember what this uniform represents — loyalty, courage, and an unwavering duty to protect. Every drill, every command, every step you've taken has brought you to this moment.\n\nYou carry the pride of a nation and the strength of generations before you. In times of uncertainty, your discipline becomes the backbone of our defense.\n\nLead with honor. Train with intensity. Serve with heart. We are proud of you — now go make your mark.\n\nThe training you've completed has tested you physically and mentally. You've endured early mornings, long marches, and challenges designed to push you beyond what you thought possible. But the true test lies ahead, when you'll be called upon to make decisions under pressure, to lead when the path isn't clear, and to stand firm when others falter.\n\nLook to your left and right. These are not just your colleagues or fellow soldiers — they are your brothers and sisters in arms. The bonds you've formed during training will sustain you through whatever challenges lie ahead. Trust in each other, communicate clearly, and remember that your strength as a unit far exceeds your individual capabilities.\n\nAs you prepare for your deployments and assignments, remember also those who await your return. Your families, your communities, your country. They sleep peacefully at night because you have chosen to serve. That is a sacred trust and a profound responsibility.\n\nI have watched your progress through this training cycle, and I can say with confidence that you represent the very best of our military tradition. You have demonstrated not just technical proficiency, but the character and resilience that define true service.`,
    layout: { position: 'absolute', width: '60%', height: '35%', top: '50%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'speech29',
    title: 'Intimate Club Talk',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 29, 2025, 12_54_57 PM.png'),
    text: `Hey everyone,\n\nThanks for being here tonight. This isn't a big auditorium or some corporate setting — it's a space for honesty, laughter, and real connection.\n\nI want to talk about resilience. Not the kind you post about — the kind that keeps you standing when no one's clapping. The kind that turns failure into fire.\n\nWhatever you're carrying tonight, know this: you're not alone, and your story matters. Let's lift each other up — and maybe laugh a little while we're at it.\n\nFive years ago, I had what looked like success from the outside. The career, the relationship, the apartment with a view. Then in the span of three months, I lost my job, my partner left, and I couldn't make rent. I found myself sleeping on a friend's couch, wondering how my life had unraveled so quickly.\n\nThat moment taught me something powerful about resilience. It's not about avoiding failure or hardship — it's about how you respond when everything falls apart. It's about finding that tiny spark of hope when all you can see is darkness.\n\nWhat saved me wasn't some dramatic comeback story. It was small, daily acts of persistence. It was sending out one more application when I'd already received twenty rejections. It was forcing myself to take a walk when depression made it hard to get out of bed. It was accepting help when pride made me want to handle everything alone.\n\nI started rebuilding by focusing not on getting back what I'd lost, but on rediscovering what truly mattered to me. I found purpose in volunteer work, community in unexpected places, and eventually, a new path forward that feels more authentic than the one I was on before.`,
    layout: { position: 'absolute', width: '60%', height: '35%', top: '57%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'speech30',
    title: 'Policy Brief at National Press Club',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 30, 2025, 01_57_27 PM.png'),
    text: `Good afternoon,\n\nWe meet today at a critical juncture for our country. The conversations we hold in rooms like this shape policy that impacts every American.\n\nAs we tackle pressing issues — from economic equity to global stability — I urge each of you to engage with purpose. These aren't just policy points; they are real people's lives.\n\nLet's keep the dialogue honest, data-informed, and focused on solutions that unite instead of divide.\n\nThe policy framework we're introducing today represents a significant departure from the status quo. For too long, we've approached these challenges through the lens of short-term political calculation rather than long-term national interest. We've allowed ideological rigidity to prevent us from finding common ground on issues where most Americans actually agree.\n\nOur research indicates that 78% of citizens across political affiliations support investment in clean energy infrastructure that creates jobs while addressing climate change. Similarly, 82% believe we need comprehensive healthcare reform that ensures affordability and access without bankrupting families facing serious illness.\n\nThe five-point plan outlined in your briefing materials tackles these priorities through a pragmatic approach that incorporates ideas from across the political spectrum. It refuses the false choice between economic growth and environmental protection. It rejects the notion that we must choose between strong borders and humane immigration policies.\n\nI welcome rigorous debate on the specifics, but I ask that we begin from a shared commitment to finding workable solutions. The American people deserve nothing less than our best efforts to move beyond partisan gridlock and chart a course toward a more prosperous, secure, and just future for all.`,
    layout: { position: 'absolute', width: '62%', height: '42%', top: '52%', left: '19%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '-8deg' }] }
  },
  {
    id: 'speech31',
    title: 'White House Correspondents Gala',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 30, 2025, 01_46_37 PM.png'),
    text: `Ladies and gentlemen,\n\nWelcome to the most elegant roast in Washington! Tonight, we celebrate not just freedom of the press — but also freedom to make fun of everyone equally.\n\nYou all dig for truth in dark places and somehow still make it to dinner in black-tie attire.\n\nThank you for keeping us honest — and reminding us that democracy is stronger when journalism is brave, bold, and unrelenting. And yes — funny too.\n\nIt's quite remarkable to look around this room and see the faces that Americans wake up to every morning and go to bed with every night. Though I should clarify — I'm referring to your news broadcasts, not suggesting anything inappropriate about your sleeping arrangements.\n\nThese past few years haven't been easy for any of us. My administration has faced its share of challenges, and you've been there to document every triumph and stumble, often with a level of detail that makes my communications team reach for the antacids.\n\nBut that tension between government and press is not just normal — it's essential. When Thomas Jefferson said he'd prefer newspapers without government to government without newspapers, he probably hadn't just read an unflattering profile of himself. But he understood something fundamental about democracy: that accountability matters more than comfort.\n\nIn an era where authoritarianism is on the rise globally, where journalists face imprisonment and worse for doing their jobs, we should never take for granted the freedom represented in this room. The freedom to ask tough questions, to challenge power, and occasionally, to make the President squirm through five minutes of stand-up comedy.`,
    layout: { position: 'absolute', width: '62%', height: '33%', top: '62%', left: '15%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'speech32',
    title: 'NAACP Image Awards Keynote',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 30, 2025, 02_00_55 PM.png'),
    text: `Good evening,\n\nWhat an honor to stand before creators, changemakers, and champions of equity. The stories honored tonight break barriers and build bridges.\n\nFrom sound stages to classrooms, the work you do reshapes culture and inspires generations.\n\nTonight, we don't just hand out awards — we reaffirm a legacy of excellence, truth, and representation that continues to rise.\n\nKeep shining, keep creating — we see you.\n\nWhen I look across this room, I see more than talent. I see courage. I see persistence. I see the faces of those who refused to accept the limitations that society tried to place on them. In an industry that has historically marginalized our voices, you've not only claimed your seat at the table — you've transformed the entire conversation.\n\nThink back to where we were just a few decades ago, when roles for Black actors were limited and stereotypical, when our stories were told through someone else's lens, when directors and producers of color were barely represented. Compare that to tonight, where we celebrate groundbreaking films, television shows, music, and literature that center our diverse experiences with authenticity and nuance.\n\nThis progress didn't happen by accident. It happened because people in this room and those who came before you demanded change. You created your own production companies when doors were closed. You mentored young talent. You took creative and financial risks to bring untold stories to light.\n\nBut our work is far from finished. True representation isn't just about who appears on screen — it's about who makes decisions behind the scenes, who has access to funding, and whose stories are deemed worthy of being told. It's about ensuring that the full spectrum of Black experiences is reflected in our culture, not just those that fit comfortable narratives.`,
    layout: { position: 'absolute', width: '50%', height: '32%', top: '63%', left: '38%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '-8deg' }] }
  },
  {
    id: 'speech33',
    title: 'Late Night Guest Segment',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 30, 2025, 01_56_05 PM.png'),
    text: `Wow — what a crowd!\n\nBefore I walked out, they said, "Keep it short and funny." I'm aiming for at least one of those.\n\nBut seriously, I came here tonight not just to entertain, but to connect. Humor brings us together in ways politics never can.\n\nSo let's laugh, let's think, and let's be reminded that behind every joke, there's truth — and behind every person, there's a story worth hearing.\n\nYou know, I've spent the last few years traveling across the country talking to people from all walks of life for my new book. What's fascinating is that despite all the division we hear about, most people are united by the same basic desires: they want opportunities for their kids, they want their communities to be safe, and they want a good laugh after a long day.\n\nI remember sitting in a diner in a small Midwestern town, talking to this older gentleman who had views completely opposite to mine on almost everything political. But we spent three hours sharing stories and by the end, we were laughing so hard the waitress had to ask us to quiet down. We never changed each other's minds on policy, but we recognized each other's humanity.\n\nThat's what I hope we can do more of as a country — find those moments of connection through humor and genuine curiosity about each other's stories. It's harder to demonize someone when you've shared a laugh with them.\n\nSo while we might debate the serious issues facing our nation — and there are many — let's not forget that sometimes the most revolutionary act is simply to see each other clearly and to find joy in our shared experience as humans on this complicated journey together.`,
    layout: { position: 'absolute', width: '50%', height: '33%', top: '48%', left: '15%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'speech34',
    title: 'Iowa Debate Opening Statement',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 30, 2025, 02_02_25 PM.png'),
    text: `Thank you, Iowa,\n\nI'm here tonight not with slogans, but with substance. This election isn't about one person — it's about all of us.\n\nIt's about ensuring healthcare, climate action, and justice aren't privileges — they're promises. Promises we keep.\n\nLet's speak plainly, act boldly, and fight tirelessly for every American who's ever felt left behind. Because real leadership shows up when it matters most.\n\nI grew up in a working-class family just two hours south of here. My father was a factory worker for 35 years, my mother a school cafeteria worker. They taught me the value of hard work, community, and doing what's right even when it's difficult. Those values are at the core of my campaign and will guide every decision I make as president.\n\nOver the past year, I've visited all 99 counties in Iowa. I've sat at kitchen tables with farmers worried about climate change disrupting growing seasons. I've talked with parents working three jobs to afford childcare. I've listened to seniors choosing between groceries and prescriptions.\n\nThese aren't abstract policy debates – these are real challenges facing real people. And they deserve real solutions, not empty rhetoric or false promises.\n\nMy plan for rural economic revitalization includes expanded broadband access, significant investment in renewable energy jobs, and a healthcare system that ensures no rural hospital closes its doors. My climate proposal protects farmers while transitioning to sustainable practices and creating new revenue streams on agricultural land. My tax reform ensures the wealthiest individuals and corporations finally pay their fair share.`,
    layout: { position: 'absolute', width: '62%', height: '47%', top: '45%', left: '19%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'speech35',
    title: 'Pearl Harbor Remembrance Speech',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 30, 2025, 04_56_56 PM.png'),
    text: `Ladies and gentlemen,\n\nToday we gather at Pearl Harbor to honor the memory of those who gave their lives in service and sacrifice. This sacred site reminds us of the cost of freedom.\n\nTheir legacy lives not just in history books, but in our commitment to peace, vigilance, and unity.\n\nMay we never forget. And may we always live in a way that honors their courage.\n\nEighty-four years ago, on a quiet Sunday morning, the waters before us erupted in fire and chaos. More than 2,400 Americans lost their lives in a matter of hours. They were sailors and soldiers, marines and civilians. They were fathers and sons, husbands and brothers. They were Americans who had breakfast that morning with no idea that it would be their last.\n\nI'm humbled to stand here with the few remaining survivors of that fateful day – living witnesses to one of history's pivotal moments. Their firsthand accounts remind us that history isn't just dates and facts. It's human beings making choices of extraordinary courage amid unimaginable circumstances.\n\nWe remember the crew of the USS Oklahoma, who continued to tap messages to rescuers as water filled their compartments. We remember the nurses who treated the wounded under enemy fire. We remember the civilians who rushed to donate blood and provide aid.\n\nThe generation that endured Pearl Harbor and went on to win World War II has been rightly called the Greatest Generation. They didn't seek glory or recognition. They simply answered the call of duty, defended freedom when it was threatened, and then returned home to build the America we inherit today.`,
    layout: { position: 'absolute', width: '60%', height: '35%', top: '57%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'speech36',
    title: 'Gateway Arch Unity Speech',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 30, 2025, 04_58_20 PM.png'),
    text: `Standing under this great arch, we are reminded of the journey — from past struggles to future promise. This monument is more than metal — it's a symbol of progress.\n\nWe are many voices, but one people. One mission — to build bridges, not walls.\n\nLet today be a call for inclusion, innovation, and inspiration that reaches as high as the arch above us.\n\nThis Gateway Arch, rising 630 feet above us, was built by diverse hands — Irish and Italian immigrants, African Americans, and many others who may have spoken different languages but shared a common vision. They worked together, despite differences, to create something extraordinary that would outlast all of them.\n\nSt. Louis itself sits at the confluence of great rivers, a meeting place of cultures and ideas throughout our nation's history. It was from this very spot that Lewis and Clark embarked on their journey westward, opening a new chapter in American exploration. It was in this city that Dred Scott filed his lawsuit for freedom, challenging the very definition of citizenship and human rights in America.\n\nToday, we face our own defining challenges — division that threatens to tear at the fabric of our communities, economic uncertainties that leave too many families struggling, and rapid technological change that both connects and divides us. But like those who came before us, we have the opportunity to build something remarkable together.\n\nThe arch teaches us an important lesson about unity. Each section depends on all the others. Remove one piece, and the entire structure would fail. So too with our society — we rise or fall together. Our diversity isn't a weakness to overcome but our greatest source of strength and innovation.`,
    layout: { position: 'absolute', width: '60%', height: '33%', top: '50%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'speech37',
    title: 'University Commencement Speech',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 30, 2025, 05_05_00 PM.png'),
    text: `Welcome scholars,\n\nThis campus is more than classrooms and textbooks — it's a training ground for thought, for growth, and for global citizenship.\n\nToday you begin a chapter of discovery. Seek knowledge. Challenge assumptions. And above all, use what you learn to lead with compassion.\n\nThe world awaits what you will build.\n\nLook around you. These halls have been home to Nobel laureates, pioneering researchers, transformative artists, and leaders who have shaped our world. But they all started exactly where you are sitting today: curious, perhaps a bit nervous, and filled with possibilities.\n\nYou arrive at a pivotal moment in history. We face unprecedented global challenges: climate change, technological disruption, social inequality, and political polarization. These problems are complex and interconnected, requiring innovative thinking across traditional boundaries of discipline and culture.\n\nThis is why our university has redesigned its curriculum to emphasize interdisciplinary collaboration. We want you to become not just experts in your field, but translators between fields, able to connect insights from seemingly unrelated domains. The computer scientist who understands ethics. The economist who appreciates ecology. The engineer who values anthropology.\n\nDuring your time here, I encourage you to embrace intellectual discomfort. Seek out viewpoints that challenge your own. Take courses outside your comfort zone. Engage respectfully with those whose life experiences differ dramatically from yours. True learning happens not when we confirm what we already believe, but when we grapple with ideas that push us to think more deeply.`,
    layout: { position: 'absolute', width: '62%', height: '32%', top: '40%', left: '19%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '-4deg' }] }
  },
  {
    id: 'speech38',
    title: 'BET Awards Tribute',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 30, 2025, 05_03_35 PM.png'),
    text: `Good evening,\n\nTonight we honor Black excellence — not just in music and media, but in culture, courage, and community.\n\nThe stories shared on this stage uplift and ignite. They tell us that our voices matter, that our art shapes generations.\n\nSo shine bright, speak loud, and never stop pushing the world forward.\n\nThis moment calls for celebration, but also for reflection. When BET was founded over 45 years ago, the landscape of media representation looked vastly different. Doors were closed. Voices were silenced. Stories went untold. But through perseverance, creativity, and unwavering conviction, those barriers began to fall.\n\nI look around this room and see pioneers who refused to take no for an answer. Artists who created their own lanes when the existing ones excluded them. Visionaries who built platforms and opened doors for others to follow. Through your work, millions of young people see themselves represented, their experiences validated, their dreams affirmed.\n\nThis year's nominees have not just entertained us; they've moved us, challenged us, and inspired us. They've used their art to address systemic inequality, to preserve our rich cultural heritage, and to imagine new possibilities for our future. Their music, films, television, and digital content carry forward a legacy of storytelling that has sustained our communities through centuries of struggle and triumph.\n\nAs we celebrate tonight, let us remember that our creativity has always been both expression and resistance. From spirituals sung in fields to jazz clubs in Harlem, from community theaters to global streaming platforms, Black artistry has consistently transformed American culture while fighting for justice and human dignity.`,
    layout: { position: 'absolute', width: '55%', height: '35%', top: '50%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 100, transform: [{ rotate: '-1deg' }] }
  },
  {
    id: 'speech39',
    title: 'Atlanta Civil Rights Dedication',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 30, 2025, 05_01_50 PM.png'),
    text: `Today, at the Civil Rights Museum, we remember those who marched, who stood, and who refused to be silent.\n\nTheir struggle paved the way for justice — and it calls each of us to keep marching, keep standing, keep speaking.\n\nThis is not just history. This is a movement that lives in us.\n\nLet's carry the torch with dignity and determination.\n\nAtlanta stands at the heart of America's civil rights story. It was here that a young preacher named Martin Luther King Jr. developed his philosophy of nonviolent resistance. It was here that the Student Nonviolent Coordinating Committee organized campaigns that would transform the nation. It was here that ordinary citizens risked everything for the extraordinary promise of equality.\n\nAs we dedicate this new wing of the museum, we honor both famous leaders and unsung heroes. We remember the strategists who planned boycotts and the volunteers who prepared meals. We honor those who faced fire hoses and police dogs, and those who offered their homes as safe havens. We recognize that the movement was built not just on dramatic moments captured by news cameras, but on countless daily acts of courage that often went unrecorded.\n\nThis museum isn't just about preserving the past—it's about illuminating the present and inspiring the future. The exhibits you'll see remind us that progress is never guaranteed. Each generation must recommit to the work of justice, must find new ways to address persistent inequalities, must confront new manifestations of old prejudices.\n\nThe civil rights leaders we honor today understood that America's founding promise of equality required constant vigilance and ongoing work. They knew that democracy isn't a static achievement but a continuous process of becoming more inclusive, more just, more true to our highest ideals.`,
    layout: { position: 'absolute', width: '65%', height: '42%', top: '50%', left: '17%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '2deg' }] }
  },
  {
    id: 'speech40',
    title: 'Macys Parade Welcome',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 30, 2025, 02_26_26 PM.png'),
    text: `Hello New York!\n\nWhat a day to celebrate joy, creativity, and the incredible energy of our city. As the floats roll in and the music fills the air, let's remember what brings us together — imagination, tradition, and community.\n\nTo every performer, every family watching from home, and everyone lining these streets — thank you. Let's make this year's parade unforgettable!\n\nFor nearly a century, this parade has been a beloved tradition that marks the beginning of the holiday season. It started as a small celebration and has grown into this magnificent spectacle that captivates millions around the world. What makes this event so special is that it brings out the child in all of us — that sense of wonder and excitement that sometimes gets lost in our busy lives.\n\nToday we have over 8,000 participants — from marching bands that have practiced for months, to dance troupes showcasing incredible talent, to our balloon handlers managing those iconic characters floating above us. Behind every performer and every float is a story of dedication and hard work.\n\nAs we watch the parade unfold, I hope you feel the magic that happens when a city comes together to celebrate. This isn't just about entertainment — it's about creating memories that will last a lifetime for the children watching, just as many of us remember watching when we were young.\n\nNow, let the 99th Annual Macy's Thanksgiving Day Parade begin!`,
    layout: { position: 'absolute', width: '55%', height: '30%', top: '53%', left: '5%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '-9deg' }] }
  },
  {
    id: 'speech41',
    title: 'Hollywood Walk of Fame Tribute',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 30, 2025, 02_28_12 PM.png'),
    text: `Thank you all for being here today,\n\nStanding on this iconic stretch of sidewalk, we honor a journey paved with talent, perseverance, and passion. This star is more than a name — it's a legacy.\n\nTo the fans, colleagues, and dreamers: keep reaching. Because this industry runs on the stories we dare to tell and the dreams we dare to chase.\n\nThirty years ago, a young performer stepped off a bus with nothing but talent and determination. There were countless auditions, numerous rejections, and those small early roles that barely paid the rent. But with each setback came growth, with each challenge came opportunity.\n\nWhat makes this moment so special isn't just the accomplishments we celebrate today — the award-winning performances, the box office successes, the critical acclaim. It's the character behind the characters. It's the countless hours of preparation that the audience never sees. It's the mentorship provided to young artists, the philanthropic work that happens away from the cameras, and the courage to use this platform to advocate for important causes.\n\nHollywood Boulevard tells the story of our entertainment history through these stars. From the pioneers of the silent film era to the digital innovators of today, each star represents someone who dared to transform imagination into reality.\n\nToday, we add another name to this illustrious walkway — a name that future generations will see and be inspired by, just as you were inspired by those who came before.`,
    layout: { position: 'absolute', width: '60%', height: '38%', top: '45%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'speech42',
    title: 'Military Funeral Reflection',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 30, 2025, 02_29_13 PM.png'),
    text: `Today, we honor a life of service and sacrifice.\n\nIn the quiet rows of these stones lies the heartbeat of a nation — brave souls who stood for something greater than themselves. Our fallen hero joins their ranks.\n\nMay we carry forward their memory not in silence, but in the way we live, lead, and love this country.\n\nRest in peace, soldier. Your duty is done.\n\nWhen we speak of courage, we often think of dramatic moments on the battlefield. But for those who serve, courage is also found in the quiet commitment made on the day they first put on the uniform. It's found in the daily sacrifices — missing birthdays and anniversaries, moving families across the country, and facing dangers that most civilians will never understand.\n\nOur fallen comrade embodied this courage in both dramatic and ordinary ways. Those who served alongside speak of their calm under pressure, their unwavering integrity, and their dedication to the mission and to their fellow service members. They speak too of their humor, their kindness, and the countless small acts of generosity that defined their character.\n\nTo the family gathered here today: We cannot fully understand your grief, but please know that your loved one's sacrifice has meaning. They stood for the highest ideals of our nation — duty, honor, and the protection of the freedoms we hold dear.\n\nAs we lay them to rest among heroes, we make this solemn promise: We will remember. Not just today, but in the years to come. Their name, their service, their sacrifice will never be forgotten.`,
    layout: { position: 'absolute', width: '62%', height: '45%', top: '48%', left: '17%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '2deg' }] }
  },
  {
    id: 'speech43',
    title: 'Civil Rights Memorial Speech',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 30, 2025, 02_32_37 PM.png'),
    text: `We gather here before greatness carved in stone — a reminder that the arc of justice is long, but it bends because of those who push.\n\nDr. King once stood with conviction. Now we stand here, not to simply remember, but to continue.\n\nLet's carry forward his dream — with courage, with community, and with relentless belief in the power of peaceful change.\n\nFifty-eight years ago, Dr. King spoke of a dream. It wasn't just his dream — it was a vision of America at its best, a nation that truly lives up to its founding promise that all people are created equal. Today, as we stand in the shadow of this monument, we must ask ourselves: How far have we come toward realizing that dream? And what work remains undone?\n\nWe've seen progress that would have seemed impossible in Dr. King's time. Legal segregation has been abolished. The Voting Rights Act opened the ballot box to millions. We've witnessed leadership at every level of government that reflects the full diversity of our nation.\n\nBut we would dishonor Dr. King's legacy if we claimed the work was complete. When poverty still follows the fault lines of race and ethnicity, when voting rights face new restrictions, when our criminal justice system continues to impact communities of color disproportionately — we must acknowledge that the dream remains unfulfilled.\n\nHowever, acknowledging this reality is not cause for despair but for renewed commitment. Dr. King showed us that change is possible when ordinary people join together with extraordinary resolve.`,
    layout: { position: 'absolute', width: '62%', height: '38%', top: '60%', left: '19%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'speech44',
    title: 'State Capitol Press Briefing',
    category: 'Speeches',
    image: require('../assets/speechpics/ChatGPT Image Apr 30, 2025, 02_37_53 PM.png'),
    text: `Good morning,\n\nWe stand here in the heart of governance — where policy meets the people. Today's briefing is not about spin, it's about facts.\n\nFrom education funding to public safety, we're here to outline our next steps and invite accountability.\n\nLet's commit to a government that listens, learns, and leads — with clarity and compassion.\n\nI want to begin by addressing the infrastructure bill that passed last week. This represents the largest investment in our state's roads, bridges, and public transit in over two decades. Starting next month, you'll see crews breaking ground on key projects in every county, creating over 5,000 jobs for our residents.\n\nOn education, we've increased the per-pupil funding by 8% and secured additional support for special education services. Our teacher retention initiative has already shown promising results, with a 15% reduction in turnover compared to this time last year.\n\nRegarding public safety, the new community policing program is now operating in 12 municipalities, with plans to expand to 10 more by year-end. Early data shows a 20% improvement in response times and stronger community relationships.\n\nLet me be clear: these are not partisan issues. They're about creating a state where every resident has the opportunity to thrive, where our children receive a world-class education, and where our communities are safe and vibrant.`,
    layout: { position: 'absolute', width: '62%', height: '35%', top: '55%', left: '19%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  // --- End Speech Prompts ---

  // --- Presentation Prompts ---
  {
    id: 'presentation1',
    title: 'Amazon Executive Briefing',
    category: 'Presentations',
    image: require('../assets/presentationpics/pic23.png'),
    text: `Good morning, board members and distinguished guests.

  I'm pleased to present our quarterly performance update. Let's start with the key metrics: Revenue has grown by 15% year-over-year, with our new product line contributing 35% of total sales.

  Our market share in the Asia-Pacific region has increased to 22%, exceeding our target of 20%. However, we're seeing some challenges in the European market that we need to address.

  Looking at our operational efficiency, we've reduced production costs by 8% through our automation initiatives. Our customer satisfaction scores remain strong at 4.7 out of 5.

  For the next quarter, we're focusing on three strategic priorities: expanding our digital transformation efforts, launching our sustainability initiative, and strengthening our supply chain resilience.

  I'll now open the floor for questions and discussion.`,
    layout: {
      position: 'absolute',
      width: '50%',
      height: '42%',
      top: '49%',
      left: '25%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'presentation2',
    title: 'TechForward Keynote Kickoff',
    category: 'Presentations',
    image: require('../assets/presentationpics/pic45.png'),
    text: `Welcome to TechForward 2024!

  It's an honor to stand before such an impressive gathering of innovators, thought leaders, and change-makers. Over the next three days, we'll explore how technology is reshaping our world in ways we could barely imagine just a few years ago.

  This year's theme, "The Future of Human-Machine Collaboration," couldn't be more timely. We're at a pivotal moment where AI, quantum computing, and biotechnology are converging to create unprecedented opportunities.

  Our agenda is packed with insights from industry pioneers, hands-on workshops, and thought-provoking panel discussions. You'll hear from leaders who are pushing the boundaries of what's possible in healthcare, education, and sustainable development.

  But before we dive in, I want to share a story that perfectly illustrates why we're here today. It's about how technology, when guided by human values, can transform lives in ways we never expected.

  Let's begin this journey together.`,
    layout: {
      position: 'absolute',
      width: '70%',
      height: '48%',
      top: '30%',
      left: '15%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'presentation3',
    title: 'SmartHome Pro Product Launch',
    category: 'Presentations',
    image: require('../assets/presentationpics/pic9.png'),
    text: `Good afternoon everyone, and thank you for joining us for this exciting product demonstration.

  Today, I'm thrilled to introduce you to our latest innovation: the SmartHome Pro system. This isn't just another smart home device - it's a complete ecosystem that learns and adapts to your lifestyle.

  Let me show you how it works. With a simple voice command, you can control your entire home. Watch as the lights adjust automatically based on the time of day, the temperature optimizes for comfort, and your security system activates.

  What sets SmartHome Pro apart is its AI-powered personalization. It learns your routines, anticipates your needs, and even suggests energy-saving opportunities. The system can reduce your energy consumption by up to 30% while maintaining perfect comfort.

  But don't just take my word for it. Let's see it in action with a live demonstration of its key features.

  Any questions before we begin?`,
    layout: {
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
    title: 'Weekly Engineering Sync',
    category: 'Presentations',
    image: require('../assets/presentationpics/pic34.png'),
    text: `Team, thank you for gathering for our weekly update.

  Let's start with our progress on the Q2 initiatives. The new client onboarding system is now 80% complete, and we're on track to launch next week. Great work from the development team on meeting the tight deadline.

  Our customer support metrics show a 15% improvement in response times, but we're still seeing some challenges with the new ticketing system. The support team will be running additional training sessions this week.

  For upcoming projects, we have three major deadlines to focus on: the product launch on the 15th, the quarterly review on the 22nd, and the team offsite on the 29th. Let's make sure we're all aligned on these dates.

  I want to highlight some outstanding work from Sarah's team, who completed their sprint two days early while maintaining excellent code quality.

  Before we break, does anyone have updates or challenges they'd like to share?`,
    layout: {
      position: 'absolute',
      width: '55%',
      height: '42%',
      top: '48%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'presentation5',
    title: 'Casual Team Story Share',
    category: 'Presentations',
    image: require('../assets/presentationpics/pic2.png'),
    text: `Hey everyone, thanks for coming to our casual catch-up today!

  I thought we'd do something a bit different this time - less formal, more interactive. We're all here because we share a passion for innovation and making a difference.

  Let me start by sharing a quick story about how our team's work is making an impact. Just last week, I got an email from a user who told us our product helped them start their own business. That's the kind of impact we're all working towards.

  I want this to be more of a conversation than a presentation. Feel free to jump in with questions or share your own experiences. We're all learning from each other here.

  Before we dive into the details, who's had an interesting challenge or success they'd like to share?

  Let's make this session as valuable for you as possible.`,
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
    id: 'presentation6',
    title: 'Design Thinking Hands-on Workshop',
    category: 'Presentations',
    image: require('../assets/presentationpics/pic1.png'),
    text: `Welcome to our Design Thinking Workshop!

  Today, we're going to explore how to solve complex problems through creative collaboration. This is a hands-on session, so get ready to roll up your sleeves and dive in.

  We'll be following a structured process: First, we'll empathize with our users. Then, we'll define the problem clearly. After that, we'll ideate solutions, create prototypes, and test our ideas.

  Each activity will take about 20 minutes, and we'll have short breaks in between. I encourage you to work with people you haven't collaborated with before - that's where the magic happens!

  Remember, there are no bad ideas in this phase. We're here to explore possibilities and build on each other's thoughts.

  Let's start with our first activity: the empathy mapping exercise.`,
    layout: {
      position: 'absolute',
      width: '48%',
      height: '35%',
      top: '52%',
      left: '26%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'presentation7',
    title: 'Google Strategy Session',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 28, 2025, 08_15_15 PM.png'),
    text: `Good afternoon everyone, and thank you for joining today's strategic alignment session at Google.\n\nAs we look ahead to the next quarter, we're doubling down on responsible AI development, sustainability efforts, and global product accessibility.\n\nOur Pixel rollout exceeded projections in North America, and we saw exciting growth in Google Cloud among enterprise clients. However, we have to rethink our outreach strategy in underserved markets.\n\nWe'll spend today refining our go-to-market approach for Gemini integrations and our AI research publication pipeline.\n\nPlease turn to page 6 in the deck — I'll walk you through the updated OKRs and leadership priorities.\n\nThe data shows that our investment in AI safety protocols has yielded significant results, with our models demonstrating a 40% reduction in harmful outputs compared to industry benchmarks. This positions us well with enterprise customers who prioritize responsible deployment. Our cross-functional teams have created new evaluation frameworks that are becoming standard practice across the industry.\n\nRegarding sustainability, our data centers are now operating at 85% carbon-free energy, putting us ahead of schedule toward our 2030 goals. The engineering innovations from these efforts are creating additional revenue opportunities through Google Cloud sustainability solutions for customers in energy-intensive industries.\n\nLooking at our product accessibility initiatives, we've increased our reach to users with disabilities by 28% year-over-year. The accessibility features originally designed for specific needs are now driving broader user engagement across all demographics, confirming our hypothesis that inclusive design benefits everyone.`,
    layout: {
      position: 'absolute',
      width: '52%',
      height: '32%',
      top: '57%',
      left: '24%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'presentation8',
    title: 'Amazon Executive Briefing',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 28, 2025, 09_09_59 PM.png'),
    text: `Good morning everyone,\n\nLet's kick off this executive briefing with a quick look at our Prime subscriber growth: We're up 18% year-over-year, driven largely by improved logistics performance and aggressive pricing strategies in Latin America.\n\nWe've completed pilot tests for our drone delivery expansion, and customer satisfaction scores in those regions are 9.1 out of 10. Amazon Web Services continues to lead in cloud growth, but Azure is catching up — we'll review our enterprise acquisition pipeline later in the agenda.\n\nI've included three bold bets in today's proposal: a sustainability-centric supply chain revamp, AI-driven personalization across retail, and a Web3 fulfillment model pilot.\n\nLet's dive in and pressure-test these ideas together.\n\nFirst, our sustainability initiative goes beyond conventional green practices. We're proposing a complete redesign of our packaging systems, with biodegradable materials that reduce waste by 65%. The initial investment is substantial at $340 million, but our projections show both cost savings and brand equity improvements within 24 months. The pilot in Seattle demonstrated that customers actively prefer these options and are sharing their unboxing experiences across social media at 3x the rate of standard packaging.\n\nSecond, our AI personalization framework leverages our vast data ecosystem to create truly individualized shopping experiences. The early results from the beta test with 100,000 customers show a 28% increase in average order value and significant improvements in discovery metrics. This system doesn't just recommend products—it anticipates needs based on life events, seasonal patterns, and product lifecycle data.\n\nFinally, our Web3 fulfillment model represents our most experimental initiative. By tokenizing inventory and creating a decentralized warehousing network, we can potentially reduce last-mile delivery costs by 40% while dramatically increasing delivery speed. The technology is complex but could revolutionize our entire logistics framework if successful.`,
    layout: {
      position: 'absolute',
      width: '55%',
      height: '37%',
      top: '53%',
      left: '22%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'presentation9',
    title: 'Venture Capital Pitch',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 28, 2025, 09_11_13 PM.png'),
    text: `Thank you for having me here today.\n\nWe're building a platform that radically redefines how local businesses digitize their logistics, starting with underserved regions in Southeast Asia. In the past 6 months, we've onboarded 240 vendors and increased transaction volume by 5x.\n\nOur average CAC is $14 and payback period is just under 3 months. With this round, we'll scale operations in three major cities, complete our route optimization engine, and grow the product team.\n\nWe're raising $2.5M at a $12M pre-money valuation, with lead interest already confirmed.\n\nI'd love to take your questions and walk you through the product roadmap in more detail.\n\nLet me share why this opportunity is so compelling. In Southeast Asia, 70% of retail happens through small, independent businesses that still operate entirely offline. These merchants lose 20-30% of potential revenue due to inventory stockouts, inefficient delivery routes, and limited customer reach. Our platform solves these pain points with a mobile-first approach designed specifically for low-tech users.\n\nOur founding team brings unique expertise to this challenge. Our CTO previously built logistics systems for Grab, while I led market expansion for Shopee across the region. We understand both the technical requirements and the cultural nuances of these markets.\n\nThe competitive landscape is favorable – existing solutions are either too complex or too expensive for these merchants. We've created a tiered pricing model that starts with basic free features and grows as businesses scale. This approach has resulted in our outstanding retention metrics, with 88% of merchants still active after 6 months.\n\nOur vision extends beyond logistics to creating a comprehensive digital infrastructure for small businesses across emerging markets. The logistics platform is our wedge into a much larger ecosystem of financial services, inventory management, and business intelligence tools.`,
    layout: {
      position: 'absolute',
      width: '58%',
      height: '38%',
      top: '55%',
      left: '21%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'presentation10',
    title: 'Museum Policy Forum',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 28, 2025, 09_14_14 PM.png'),
    text: `Welcome to today's policy forum on cultural preservation in the digital age.\n\nAs curators, educators, and scholars, we share a deep responsibility to protect access to our collective heritage. Today we'll explore how AI and digitization can support conservation, accessibility, and ethical restoration.\n\nThe agenda includes keynotes from UNESCO partners, a demo of our virtual museum pilot, and breakout sessions on funding gaps for smaller institutions.\n\nLet's begin with a reflection on what we lose when we fail to preserve — and what we stand to gain when we innovate with purpose.\n\nThe statistics are sobering: over the past decade, we've lost an estimated 14% of physical cultural artifacts due to conflict, climate disasters, and deterioration. Each loss represents not just an object, but a thread in the fabric of human understanding. Digital preservation offers a powerful solution, but brings its own complex challenges around authenticity, representation, and accessibility.\n\nOur recent global survey revealed that while 82% of major museums have digitization initiatives, only 23% have comprehensive strategies that address long-term storage, format evolution, and equitable access. Even fewer have protocols for the ethical application of AI in restoration and research.\n\nThe case studies we'll examine today demonstrate both tremendous successes and cautionary tales. From the Virtual Palmyra Project that reconstructed destroyed monuments using community photographs, to the Indigenous Knowledge Repository that's pioneering new approaches to cultural repatriation through digital means while respecting traditional knowledge protocols.\n\nThrough today's discussions, we aim to develop a framework that balances technological innovation with cultural sensitivity, institutional needs with public access, and preservation imperatives with the dynamic nature of living culture.`,
    layout: {
      position: 'absolute',
      width: '50%',
      height: '20%',
      top: '70%',
      left: '16%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
      transform: [{ rotate: '17deg' }]
    }
  },
  {
    id: 'presentation11',
    title: 'Research Poster Discussion',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 29, 2025, 01_12_19 PM.png'),
    text: `Hi, thanks for stopping by! I'd love to walk you through our recent findings on behavioral trends in digital learning environments.\n\nWhat we discovered is that engagement isn't just about time spent — it's about cognitive triggers. With our adaptive feedback model, we saw a 26% improvement in knowledge retention among test groups.\n\nWe used a mixed-methods approach: qualitative surveys paired with machine learning analysis of usage data.\n\nIf you have time, I'd love your feedback on our methodology and whether you've seen similar results in your own work.\n\nHere's our contact info as well — happy to collaborate.`,
    layout: {
      position: 'absolute',
      width: '55%',
      height: '31%',
      top: '57%',
      left: '22%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,

      transform: [{ rotate: '2deg' }]
    }
  },
  {
    id: 'presentation12',
    title: 'MIT Department Colloquium',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 28, 2025, 09_15_05 PM.png'),
    text: `Good evening, colleagues. I'm honored to present at this year's MIT Department Colloquium.\n\nTonight, I'll be discussing scalable quantum architectures for AI model training — specifically, our recent advancements in reducing decoherence during computation.\n\nThe team has made significant progress on error correction protocols, and we're now benchmarking over 95% gate fidelity with qubit clusters above 64 units.\n\nI'll walk through the experimental framework, our lab instrumentation setup, and the implications for long-term general AI development.\n\nLet's begin with the control circuit diagram and test conditions.\n\nAs you can see on this first slide, our approach fundamentally reimagines the relationship between quantum processing and neural network training. Previous attempts at quantum machine learning have typically focused on implementing quantum versions of classical algorithms. Our innovation lies in leveraging quantum parallelism for specific computational bottlenecks while maintaining classical processing for tasks where it remains efficient.\n\nThe key breakthrough came when we developed a hybrid tensor network that dynamically allocates computations between quantum and classical processors based on the entanglement requirements of each layer in the neural network. This allowed us to achieve what was previously thought impossible – maintaining coherence long enough to process complex, high-dimensional datasets without requiring temperatures approaching absolute zero.\n\nOur experimental results have implications beyond just faster AI training. The coherence preservation techniques we've developed could revolutionize quantum communication networks, cryptographic systems, and simulation capabilities for materials science and pharmaceutical research. We're currently collaborating with teams at CERN and the Max Planck Institute to explore these applications.`,
    layout: {
      position: 'absolute',
      width: '57%',
      height: '38%',
      top: '57%',
      left: '21%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'presentation13',
    title: 'Hospital Grand Rounds',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 28, 2025, 09_19_50 PM.png'),
    text: `Good morning, and welcome to this week's Grand Rounds.\n\nToday we'll review a complex case involving multi-drug-resistant infections in a post-transplant patient.\n\nWe'll walk through the initial presentation, diagnostic pathway, microbiology findings, and evolving treatment strategy.\n\nAfter the case discussion, we'll hear from Dr. Hassan on the hospital's new infection control protocols and results from the antimicrobial stewardship program.\n\nPlease hold your questions until the end of the primary case presentation — we'll leave 15 minutes for open discussion.\n\nOur patient is a 47-year-old male who underwent renal transplantation four months ago following end-stage renal disease secondary to hypertensive nephropathy. His post-transplant course was initially uncomplicated, with stable allograft function and standard triple immunosuppression therapy. However, he presented to the emergency department three weeks ago with fever, malaise, and decreased urine output.\n\nWhat makes this case particularly instructive is the complex interplay between maintaining necessary immunosuppression and effectively treating multiple concurrent infections. Initial cultures revealed not one, but three resistant organisms: MRSA in the bloodstream, Pseudomonas aeruginosa in the urine, and evidence of CMV reactivation on PCR testing. This constellation of findings created significant therapeutic challenges.\n\nThe microbiology findings warrant close attention. The Pseudomonas isolate showed resistance to carbapenems, fluoroquinolones, and piperacillin-tazobactam, leaving limited treatment options. Susceptibility testing revealed sensitivity only to colistin and ceftolozane-tazobactam. The MRSA isolate demonstrated heterogeneous vancomycin resistance, requiring careful pharmacokinetic monitoring throughout treatment.`,
    layout: {
      position: 'absolute',
      width: '58%',
      height: '33%',
      top: '59%',
      left: '21%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'presentation14',
    title: 'NGO Policy Conference',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 28, 2025, 09_22_04 PM.png'),
    text: `Thank you for joining this year's International NGO Conference on Global Issues.\n\nThis session will cover cross-border collaboration in climate response policy, particularly around disaster relief logistics and carbon offset verification.\n\nWe'll be joined by policy analysts from the UNHCR, and panelists from our regional offices in Bangladesh, Kenya, and Brazil will present case data.\n\nFollowing the talks, we'll split into groups to co-design next quarter's operational KPIs and funding scenarios.\n\nLet's begin with the top five learnings from our field reports in Q1.\n\nFirst, early warning systems integrated with locally-led response coordination have reduced evacuation times by an average of 37% across vulnerable coastal regions. The community-based alert networks in Bangladesh have become particularly effective, with their model now being adapted for implementation in Mozambique and the Philippines.\n\nSecond, our carbon verification methodologies have revealed significant discrepancies between reported and actual sequestration in forestry projects. The satellite monitoring protocol developed in partnership with our Brazilian colleagues has identified several instances where carbon credits were issued for preservation efforts in areas that were subsequently partially cleared or degraded.\n\nThird, climate financing continues to disproportionately flow to mitigation rather than adaptation projects, despite mounting evidence that many communities have already crossed critical thresholds where adaptation is urgently needed. Our advocacy work has focused on recalibrating this balance, particularly for least-developed countries.\n\nFourth, cross-sector partnerships involving private industry, local governments, and NGOs have demonstrated the most resilient response capabilities. The Kenya drought response coalition stands as a powerful example, where agricultural technology companies worked alongside traditional community leadership structures to deploy water conservation systems.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '35%',
      top: '56%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'presentation15',
    title: 'NYSE IPO Bell Briefing',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 28, 2025, 09_24_23 PM.png'),
    text: `Team, congratulations — today marks our IPO debut on the New York Stock Exchange.\n\nBefore we head to the bell, I want to thank every single one of you for the relentless effort it took to get us here. From product to legal, engineering to marketing — you made this milestone possible.\n\nWe've raised $180M in capital and now begin a new chapter with even greater responsibility.\n\nThis morning, I'll walk through what's changing (and what's not): our new investor communications protocol, governance disclosures, and quarterly reporting cadence.\n\nLet's take a group photo before we head to the floor — you've earned it.\n\nI want to take a moment to reflect on our journey. Just seven years ago, we were five people working out of a tiny office with a bold vision to transform the industry. There were countless moments when success seemed impossible – the funding round that almost didn't close, the product pivot that risked everything, the competitive challenges that kept us up at night. But at each critical juncture, this team showed extraordinary resilience and creativity.\n\nBecoming a public company brings new expectations and scrutiny. Starting tomorrow, we'll operate with greater transparency and face quarterly performance assessments from analysts and investors. While this adds pressure, it also provides the resources and platform to accelerate our mission. Our core values remain unchanged – we still prioritize customer obsession, collaborative innovation, and long-term thinking over short-term gains.\n\nThe coming months will require adjustment as we implement new compliance processes and adapt to public market dynamics. We've assembled a stellar investor relations team to help navigate these waters, and our executive committee has completed extensive preparation for this transition.`,
    layout: {
      position: 'absolute',
      width: '58%',
      height: '33%',
      top: '60%',
      left: '21%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'presentation17',
    title: 'Government Economic Briefing',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 28, 2025, 10_23_14 PM.png'),
    text: `Good morning, members of the economic council.\n\nToday's session focuses on our national financial outlook and key fiscal policies moving forward. As illustrated on the screen behind me, our GDP growth trajectory remains positive, with increased capital expenditure driving momentum.\n\nHowever, inflation remains above the 2% target, largely driven by energy and housing sectors. We're implementing targeted subsidies to ease public burden while maintaining monetary discipline.\n\nOur near-term focus includes supporting innovation-led industries, optimizing tax incentives for SMEs, and maintaining global investor confidence.\n\nI welcome your questions and feedback as we fine-tune our policy actions.\n\nLet me elaborate on the specific macroeconomic indicators. Our quarterly GDP growth stands at 2.8%, outperforming initial projections of 2.3%. Labor market metrics show continued strength with unemployment at a 15-year low of 3.7%. Job creation is especially robust in manufacturing, renewable energy, and technology sectors, with 195,000 new positions created last quarter.\n\nThe inflation challenge warrants deeper discussion. While the headline rate of 3.6% exceeds our target, we're observing encouraging trends in the core inflation components. The energy price surge appears transitory, related to geopolitical factors that our diplomatic corps is actively addressing. Housing inflation, however, reflects structural supply constraints that require multi-year solutions combining zoning reforms, construction incentives, and public-private partnerships.\n\nOur fiscal position has improved markedly. Tax revenues exceed forecasts by 4.2%, primarily due to stronger corporate performance and capital gains realizations. This has allowed us to reduce our deficit projection from 3.1% to a more manageable 2.6% of GDP while maintaining planned investments in critical infrastructure and human capital development.`,
    layout: {
      position: 'absolute',
      width: '50%',
      height: '34%',
      top: '53%',
      left: '25%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'presentation18',
    title: 'Hospital Grand Rounds',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 29, 2025, 01_01_21 PM.png'),
    text: `Good afternoon, colleagues.\n\nIn today's Grand Rounds, we'll review a unique cardiac case that highlights critical decision points in emergency care.\n\nThe patient presented with atypical symptoms that challenged our initial diagnostic assumptions. We'll walk through the ECG patterns, the pharmacological interventions administered, and the rationale for surgical escalation.\n\nOur goal is to extract lessons for future protocols and explore where AI-driven tools could have accelerated decision-making.\n\nPlease prepare to share your thoughts and experiences during the open discussion segment.\n\nThe case involves a 62-year-old female with no significant cardiac history who presented to the ED with primary complaints of epigastric discomfort, mild dyspnea, and unusual fatigue. Notably absent were the classic symptoms of chest pain, radiation to left arm, or diaphoresis that typically trigger our STEMI protocols. Her initial vital signs showed mild tachycardia at 96 bpm, blood pressure of 142/88 mmHg, and oxygen saturation of 94% on room air.\n\nThe first ECG, which you can see on slide two, showed subtle ST depressions in leads V3-V5 with minimal T-wave inversions – changes that could easily be dismissed as non-specific. Initial troponin was only marginally elevated at 0.04 ng/mL. However, what caught our attending's attention was the patient's description of symptoms that worsened when lying flat and improved with sitting forward – a presentation more consistent with pericarditis than acute coronary syndrome.\n\nGiven these conflicting indicators, the team ordered point-of-care ultrasound, which revealed unexpected findings: regional wall motion abnormalities in the posterolateral segments with preserved ejection fraction. This prompted immediate cardiology consultation and repeat troponin testing, which showed a significant jump to 0.9 ng/mL just 90 minutes later.`,
    layout: {
      position: 'absolute',
      width: '54%',
      height: '30%',
      top: '60%',
      left: '35%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
      transform: [{ rotate: '7deg' }]
    }
  },
  {
    id: 'presentation19',
    title: 'Corporate All-Hands Update',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 29, 2025, 01_03_22 PM.png'),
    text: `Hi everyone,\n\nThanks for joining our monthly all-hands. We're continuing strong with a 27% growth in customer engagement metrics, largely driven by the new onboarding flow.\n\nWe've made solid progress on the OKRs for Q2 — but a few teams are still blocked on infrastructure access, so we'll address that today. Also, our hybrid work transition pilot has been approved and will roll out next week.\n\nToday, we'll also spotlight three product initiatives that went live, including the accessibility overhaul — kudos to the team!\n\nLet's wrap up with open Q&A and then move to team breakouts.\n\nBefore diving into the details, I want to acknowledge the exceptional work happening across departments. Our engineering team has been shipping code at 140% of last quarter's velocity while maintaining our quality standards. The customer success team has reduced response times by half while increasing satisfaction scores. And our sales organization has closed three enterprise deals ahead of schedule.\n\nLooking at financial performance, we're tracking 8% above revenue targets for the quarter, with particularly strong growth in our European and APAC markets. Our cash position remains healthy, allowing us to accelerate hiring in key roles – you'll see 15 new positions posted later this week across product, engineering, and customer success.\n\nRegarding the infrastructure access issues affecting the data science and analytics teams: we've identified the root cause in our permission governance system. The DevOps team has implemented a temporary workaround while developing a permanent solution. Everyone affected should see resolution by end of day tomorrow, and we're implementing additional monitoring to prevent similar bottlenecks in the future.`,
    layout: {
      position: 'absolute',
      width: '58%',
      height: '35%',
      top: '52%',
      left: '23%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
      transform: [{ rotate: '-3.5deg' }]
    }
  },
  {
    id: 'presentation20',
    title: 'Architecture Walkthrough',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 29, 2025, 01_06_35 PM.png'),
    text: `Welcome, everyone.\n\nToday we'll be walking through the floor plan revisions for Phase II of our development project. This version includes updated common areas, better daylight optimization, and green zones aligned with our sustainability goals.\n\nThe engineering team has suggested material upgrades for the west-facing walls based on the new thermal analysis.\n\nWe'll now open up to suggestions on flow efficiency and final placement of service shafts before sending this version to permit review.\n\nLet's dive into each section — starting with the lobby configuration.\n\nAs you can see from the 3D renderings, we've reimagined the main entrance to create a more welcoming transition from the street level. The previous design had several blind spots and congestion points during peak hours. The new layout features a double-height atrium with natural ventilation and improved sight lines throughout the space.\n\nMoving to the residential floors, we've increased unit diversity by 15% while maintaining the same overall density. Each floor now includes studio, one-bedroom, and two-bedroom options, with corner units optimized for views and cross-ventilation. The community spaces on floors 3, 8, and 12 have been expanded based on resident feedback from Phase I.\n\nOne significant change worth highlighting is our response to the city planning commission's request for more integrated green spaces. We've converted what was previously a traditional roof into a series of terraced gardens that provide both recreational areas and improve the building's thermal performance.`,
    layout: {
      position: 'absolute',
      width: '57%',
      height: '32%',
      top: '62%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
      transform: [{ rotate: '-6deg' }]
    }
  },
  {
    id: 'presentation21',
    title: 'University Poster Session',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 29, 2025, 01_12_19 PM.png'),
    text: `Hi, thank you for stopping by our research poster!\n\nThis study explores gene-environment interactions in the progression of autoimmune diseases. We analyzed data from over 2,000 patient records across 3 regions, focusing on correlations between exposure levels and antibody markers.\n\nAs you can see in the results section, there's a statistically significant spike in Type II cytokines when PM2.5 levels exceed baseline thresholds.\n\nWe're particularly excited about how this can inform early interventions using targeted therapies.\n\nLet us know if you have questions — happy to walk you through any part of the methodology.\n\nThe work began three years ago when our lab noticed an unusual clustering of autoimmune diagnoses in communities near industrial zones. Initially, we were looking at traditional risk factors like genetic predisposition and lifestyle, but the geographic pattern suggested environmental triggers might play a larger role than previously understood.\n\nOur methodology combined clinical data with environmental monitoring stations and satellite imagery to create high-resolution exposure maps. We then developed a novel statistical model that accounts for both genetic susceptibility markers and temporal exposure patterns. This allowed us to identify not just correlations, but potential causal mechanisms and exposure thresholds.\n\nOne of the most surprising findings was the strong association between intermittent exposure spikes and disease progression, rather than just chronic low-level exposure as previously thought. This suggests that even temporary environmental events could trigger lasting immunological changes in susceptible individuals.`,
    layout: {
      position: 'absolute',
      width: '55%',
      height: '32%',
      top: '57%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
      transform: [{ rotate: '2.5deg' }]
    }
  },
  {
    id: 'presentation22',
    title: 'Community Town Hall',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 29, 2025, 01_15_56 PM.png'),
    text: `Good evening, everyone.\n\nThank you for taking the time to join this community town hall. I want to begin by acknowledging the incredible work you all do to support our neighborhood's resilience and well-being.\n\nTonight, we'll discuss three topics: proposed zoning adjustments, our upcoming senior care initiatives, and the budget review for next quarter.\n\nWe're also collecting feedback on the new digital reporting portal, which is now live. Please try it out and let us know how it can better serve you.\n\nLet's open the floor for your questions and concerns.\n\nBefore we dive into the agenda items, I'd like to highlight some of the progress we've made since our last meeting three months ago. The community garden project has expanded to three additional locations, with over 50 families now participating. Our neighborhood watch program has seen a 40% increase in volunteers, and reported incidents are down 15% compared to this time last year.\n\nRegarding the zoning adjustments, we're proposing changes that would allow more mixed-use development along Main Street while preserving the residential character of surrounding blocks. The planning commission has prepared detailed maps and impact assessments, which are available at the information table and on our website.\n\nOur senior care initiative builds on the success of last year's pilot program. We're expanding transportation services, implementing a neighbor-to-neighbor support network, and partnering with the regional healthcare system to bring more preventive care services directly to our community center.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '38%',
      top: '54%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  }
  ,
  {
    id: 'presentation23',
    title: 'LinkedIn Industry Insights',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 30, 2025, 02_48_05 PM.png'),
    text: `Welcome to LinkedIn's quarterly industry insights session.

  We'll begin with a breakdown of current networking trends — remote-first professionals now drive over 60% of high-engagement connection activity.

  We're also seeing a major uptick in content shares from early-career professionals, especially in fields like green tech and fintech.

  Later in the session, we'll review LinkedIn Learning's most in-demand skills, followed by an audience Q&A.

  Let's dive in and uncover what's shaping professional ecosystems in 2025.
  
  Our data team has analyzed over 800 million professional profiles and billions of interactions to identify emerging patterns in how people connect, learn, and advance their careers. What's particularly fascinating is how dramatically the professional landscape has evolved since the hybrid work revolution that began in the early 2020s.
  
  Looking at connection patterns, we're observing that geographic proximity is no longer the primary driver of professional networking. Instead, skill adjacency and shared industry challenges are creating communities of practice that span continents. Professionals in Nairobi are collaborating with counterparts in Singapore and Santiago in ways that would have been exceptional just five years ago.
  
  Content engagement metrics show a clear shift toward video-based thought leadership and micro-credentials. The average professional now spends 4.2 hours weekly consuming career development content, with a strong preference for bite-sized, specialized learning modules rather than generalized courses.`,
    layout: {
      position: 'absolute',
      width: '55%',
      height: '34%',
      top: '55%',
      left: '25%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'presentation24',
    title: 'Tesla Research Review',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 30, 2025, 02_52_05 PM.png'),
    text: `Thanks for joining our autonomous driving research briefing.

  Today we're highlighting updates from our edge-case simulations and LiDAR model retraining pipeline.

  You'll see how our new data aggregation loop reduces false positives by 18% — a major breakthrough for unstructured environments.

  We're also excited to share findings on the driver-assist behavioral models and the next phase of real-world testing.

  Feel free to raise questions throughout — we want this session to be interactive.
  
  Let me start with some context on the challenges we've been addressing. Our fleet has now logged over 20 billion miles in autonomous mode across 42 countries, providing an unprecedented dataset for training. However, as we've expanded into more complex urban environments, we've encountered edge cases that traditional computer vision struggles to handle consistently.
  
  The research team has developed a novel approach combining our vision-based systems with selective LiDAR augmentation at critical decision points. This hybrid architecture maintains the cost efficiency of vision systems while benefiting from the precision of LiDAR in scenarios like adverse weather conditions and complex intersection navigation.
  
  What's truly groundbreaking is our new neural network architecture that can dynamically allocate computational resources based on scenario complexity. In straightforward highway driving, the system runs efficiently on minimal power, but when encountering construction zones or emergency vehicles, it instantly scales up processing capacity to handle the increased complexity.`,
    layout: {
      position: 'absolute',
      width: '55%',
      height: '38%',
      top: '58%',
      left: '22%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
      transform: [{ rotate: '1deg' }]
    }
  },
  {
    id: 'presentation25',
    title: 'Netflix Subscriber Trends',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 30, 2025, 02_54_25 PM.png'),
    text: `Let's take a quick dive into our current subscriber trends.

  As you can see from the chart, Q4 marked a significant uptick following the global release of our new originals and ad-supported tier.

  The retention rate for 18-25 age group is up 22%, and we're seeing stronger re-engagement from former churned users.

  We'll now walk through performance by region and upcoming personalization improvements powered by our new recommendation engine.

  Questions are welcome anytime.
  
  Breaking down the regional performance, APAC continues to be our fastest-growing market with a 28% year-over-year increase. Japan and South Korea are particularly strong, driven by our investment in local content production and the global popularity of their entertainment formats. Our Korean originals have consistently ranked in our top 10 globally, creating a powerful cross-market appeal.
  
  In mature markets like North America and Western Europe, our strategy has shifted more toward retention and ARPU growth rather than new subscriber acquisition. The introduction of the ad-supported tier has been particularly successful in these regions, with 34% of new sign-ups choosing this option. This has opened up a significant new revenue stream while making our service more accessible to price-sensitive segments.
  
  Looking at content performance, our investment in diverse genres is paying off. While sci-fi and thrillers continue to perform strongly, we've seen unexpected success in documentary series and international dramas that cross cultural boundaries. The algorithm now identifies potential cross-genre interests with remarkable accuracy.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '40%',
      top: '45%',
      left: '15%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'presentation26',
    title: 'Startup Demo Pitch',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 30, 2025, 03_00_29 PM.png'),
    text: `Thanks for joining us at Open Mic Tech Demo Austin.

  Today I'm presenting a beta build of our platform: a lightweight tool that helps small teams track ideas, tasks, and communication in one place — optimized for async workflows.

  Our core features include a kanban view, chat, analytics dashboard, and AI-assisted prioritization.

  We're currently onboarding pilot customers and seeking feedback on the user experience before public launch.

  Looking forward to your questions and suggestions!
  
  Let me share the origin story that led us to build this solution. Our founding team previously worked at distributed companies where we constantly juggled between 5-7 different tools to manage our daily work. The context-switching was exhausting, and valuable information kept getting lost between systems. We realized there was a gap in the market for truly integrated workflows that don't require multiple subscriptions or complex integrations.
  
  What makes our approach different is our focus on reducing cognitive load. Instead of building another feature-packed platform, we've designed around natural work patterns. The system learns from how your team operates and adapts its interface to minimize friction. For example, when you mention a deadline in chat, it automatically suggests creating a task card with that timeline.
  
  Our early metrics from the beta program have been encouraging. Teams report an average 26% reduction in time spent on work coordination and a 34% decrease in missed deadlines. The AI prioritization feature has been particularly valuable for remote teams working across time zones, ensuring that high-impact tasks remain visible despite asynchronous workflows.`,
    layout: {
      position: 'absolute',
      width: '58%',
      height: '40%',
      top: '52%',
      left: '21%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'presentation27',
    title: 'Stanford Design Thinking Workshop',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 30, 2025, 03_02_23 PM.png'),
    text: `Welcome to the Stanford d.school Design Thinking Workshop.\n\nThis session is all about real-world problem-solving using empathy and creativity. We'll walk through the five stages: Empathize, Define, Ideate, Prototype, and Test. These aren't just buzzwords—they're tools that drive innovation across industries.\n\nDuring the next 90 minutes, you'll team up with peers, identify user needs, brainstorm solutions, and create rough prototypes. Don't worry about getting it perfect. Design thinking celebrates iteration and learning through doing.\n\nLet's start by introducing ourselves and sharing one problem we've noticed in our daily routines. You'll be surprised how many innovative ideas are hiding in plain sight.\n\nThe design thinking approach we're practicing today has transformed how organizations from Apple to the Red Cross solve complex challenges. At its core, this methodology shifts our focus from technical constraints to human needs and experiences. This human-centered approach often reveals solutions that traditional problem-solving methods might overlook.\n\nIn the Empathize phase, we'll practice techniques for suspending our assumptions and truly understanding user perspectives. This might involve observation, interviews, or immersive experiences that help us identify unstated needs and emotional drivers. The Define stage helps us synthesize these insights into a clear problem statement that guides our innovation efforts.\n\nWhen we move to Ideation, we'll use structured brainstorming techniques that push beyond obvious solutions. The key here is volume and diversity of ideas—we aim for quantity first, knowing that quality will emerge through the process. You'll learn techniques for building on others' ideas and overcoming creative blocks.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '32%',
      top: '62%',
      left: '25%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10
    }
  },
  {
    id: 'presentation28',
    title: 'CDC Public Health Briefing',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 30, 2025, 03_09_20 PM.png'),
    text: `Good afternoon, and thank you for attending this CDC public health update.\n\nToday's briefing focuses on the rising flu activity across several states. We are seeing early spikes in hospitalization rates, especially among the elderly and young children.\n\nOur guidance is simple: Get vaccinated, wash your hands regularly, and stay home when feeling sick. We'll also provide updated guidance on mask recommendations and travel advisories.\n\nWe're working closely with state and local health departments to expand vaccination sites and ensure timely communication.\n\nI'll now open the floor for questions and invite our team leads in virology and epidemiology to join the panel.`,
    layout: {
      position: 'absolute',
      width: '65%',
      height: '38%',
      top: '47%',
      left: '22%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10
    }
  },
  {
    id: 'presentation29',
    title: 'Slack Feature Rollout Review',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 30, 2025, 03_11_25 PM.png'),
    text: `Welcome everyone to our internal Slack product review session.\n\nWe've just wrapped the beta testing of our latest features: a redesigned thread view, improved sidebar search, and new user tagging analytics.\n\nEarly user feedback is promising—90% of testers reported faster navigation and more efficient team communication. The new performance engine also reduced load times by 40%.\n\nOur next steps involve finalizing localization and launching across 10 key markets. Let's walk through each feature set, usage metrics, and known issues before we prep for global rollout next Friday.`,
    layout: {
      position: 'absolute',
      width: '58%',
      height: '40%',
      top: '50%',
      left: '21%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10
    }
  },
  {
    id: 'presentation30',
    title: 'NOAA Climate Policy Briefing',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 30, 2025, 03_12_59 PM.png'),
    text: `Thank you for joining us at NOAA's quarterly policy briefing.\n\nToday, we're reviewing new climate data trends and their implications for federal coastal planning.\n\nOur updated satellite measurements confirm a 6.8 mm rise in global sea levels over the last year. Areas of concern include the Gulf Coast and Southeast Atlantic regions.\n\nWe'll walk through our updated impact models and the proposal to expand NOAA's community resilience grant program. We'll also present our digital tool for forecasting localized flooding risk.\n\nLet's begin with a recap of last quarter's regional impact assessments.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '38%',
      top: '54%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10
    }
  },
  {
    id: 'presentation31',
    title: 'Silicon Valley Boardroom Strategy Pitch',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 30, 2025, 03_14_30 PM.png'),
    text: `Thank you for making time for this early Q2 boardroom strategy session.\n\nOur revised customer LTV projection is $942 per cohort—up 17% from our last quarter model. We attribute this to higher retention from our AI-powered onboarding and renewed enterprise interest.\n\nOur ask: greenlight the $1.8M budget to expand our data ops and launch the product-led growth funnel across 3 new enterprise verticals.\n\nWe'll walk through risk controls, rollout sequencing, and the hiring roadmap next.\n\nOpen to thoughts or questions before we proceed?`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '39%',
      top: '52%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10
    }
  },
  {
    id: 'presentation32',
    title: 'Department of Homeland Security Cyber Briefing',
    category: 'Presentations',
    image: require('../assets/presentationpics/ChatGPT Image Apr 30, 2025, 03_23_40 PM.png'),
    text: `Welcome to today's cybersecurity update from the Department of Homeland Security.\n\nWe've identified a critical vulnerability impacting federal agencies' cloud infrastructure, linked to a zero-day exploit in third-party APIs.\n\nMitigation steps have been issued and will be discussed in detail shortly. Our priority is containment, data integrity verification, and patch deployment across all endpoints.\n\nFollowing the update, our technical teams will hold breakout Q&As on threat attribution, system audits, and proactive defense mechanisms.\n\nLet's begin with a recap of the intrusion detection timeline and access log anomalies.`,
    layout: {
      position: 'absolute',
      width: '55%',
      height: '30%',
      top: '52%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
      transform: [{ rotate: '-5deg' }]
    }
  },
  {
    id: "presentation33",
    title: "Meta Policy Review Briefing",
    category: "Presentations",
    image: require('../assets/presentationpics/ChatGPT Image Apr 30, 2025, 05_06_29 PM.png'),
    text: "Good afternoon, and thank you for joining this session.\n\nAt Meta, our mission is to build responsible, privacy-first technologies that empower billions. Today, we'll walk through recent policy shifts and their implications for product development, data governance, and regulatory compliance.\n\nAs you can see in the latest audit results, we've reduced third-party data dependencies by 28% and rolled out a global transparency dashboard for users.\n\nWe're here to gather your insights on improving internal alignment between our legal, engineering, and product teams. Let's begin with a high-level overview of our policy compliance roadmap and then open the floor for your questions and recommendations.",
    layout: {
      position: "absolute",
      width: "60%",
      height: "42%",
      top: "50%",
      left: "20%",
      backgroundColor: "transparent",
      overflow: "hidden",
      borderRadius: 10
    }
  },
  {
    id: "presentation34",
    title: "BuzzFeed Editorial Pitch Workshop",
    category: "Presentations",
    image: require('../assets/presentationpics/ChatGPT Image Apr 30, 2025, 05_08_54 PM.png'),
    text: "Hey everyone, excited to have you here!\n\nThis session is all about refining your story ideas into viral-ready features. We'll look at what's trending, how to pitch for cross-platform appeal, and brainstorm collaborations that could supercharge visibility.\n\nLet's start with your strongest headline. Then we'll stress-test it against our engagement models and see if it's quiz-worthy, listicle-friendly, or podcast material.\n\nRemember: authenticity, humor, and community impact are our north stars.",
    layout: {
      position: "absolute",
      width: "60%",
      height: "32%",
      top: "58%",
      left: "20%",
      backgroundColor: "transparent",
      overflow: "hidden",
      borderRadius: 10
    }
  },
  {
    id: "presentation35",
    title: "Salesforce Innovation Roadmap Briefing",
    category: "Presentations",
    image: require('../assets/presentationpics/ChatGPT Image Apr 30, 2025, 05_10_42 PM.png'),
    text: "Welcome to the Salesforce Tower Innovation Center.\n\nToday we'll be diving into our 2025 product roadmap and outlining how our platform innovations are driving deeper client relationships.\n\nLet's begin with Einstein AI and how it's transforming CRM workflows. We've seen a 31% uplift in lead qualification accuracy across our pilot teams.\n\nI'll walk you through the updated Salesforce Platform features, and then we'll workshop your ideas on how to elevate customer success in your regions.",
    layout: {
      position: "absolute",
      width: "60%",
      height: "35%",
      top: "43%",
      left: "20%",
      backgroundColor: "transparent",
      overflow: "hidden",
      borderRadius: 10,
      transform: [{ rotate: '1deg' }]
    }
  },
  {
    id: "presentation36",
    title: "Amazon Robotics All-Hands",
    category: "Presentations",
    image: require('../assets/presentationpics/ChatGPT Image Apr 30, 2025, 05_11_35 PM.png'),
    text: "Team, thank you all for gathering today.\n\nThis year at Amazon Robotics, we've achieved major milestones: reduced pick times by 22%, improved autonomous pathfinding, and launched our first AI-augmented safety system.\n\nThese results reflect your dedication and passion for operational excellence. In this session, we'll review key KPIs, share spotlight achievements, and open a Q&A to hear your ideas for scaling innovation across sites.\n\nLet's keep raising the bar, together.",
    layout: {
      position: "absolute",
      width: "65%",
      height: "35%",
      top: "53%",
      left: "17.5%",
      backgroundColor: "transparent",
      overflow: "hidden",
      borderRadius: 10
    }
  },
  {
    id: "presentation37",
    title: "Dropbox Product Strategy Sync",
    category: "Presentations",
    image: require('../assets/presentationpics/ChatGPT Image Apr 30, 2025, 05_13_21 PM.png'),
    text: "Hi everyone — welcome to today's strategy sync.\n\nDropbox has always stood for simplicity and reliability. As we expand into AI-powered document workflows and team collaboration features, our focus must remain razor-sharp on user experience.\n\nLet's start with a review of customer feedback from our beta cohort. Then we'll discuss roadmap tradeoffs and align on the top three product priorities for Q3.\n\nYour input today shapes our next chapter.",
    layout: {
      position: "absolute",
      width: "60%",
      height: "35%",
      top: "60%",
      left: "20%",
      backgroundColor: "transparent",
      overflow: "hidden",
      borderRadius: 10
    }
  }
  ,
  // --- End Presentation Prompts ---

  // --- Interview Prompts (Placeholders - Customize details below!) ---
  {
    id: 'interview1',
    title: 'Google Networking Interview',
    category: 'Interviews',
    image: require('../assets/interviewpics/pic9300.png'),
    text: `[Question 1]\nTell me about yourself and your background.\n\n[Answer]\nI am a software engineer with 5 years of experience in full-stack development, specializing in building scalable web applications using React and Node.js. In my current role at XYZ Company, I led a team that improved application performance by 40% through implementing microservices architecture and optimizing database queries. I've also contributed to open-source projects focused on networking protocols and distributed systems. My passion for technology started early - I built my first network monitoring tool during my university years, which was later adopted by the computer science department for teaching purposes. I hold a master's degree in Computer Science with a focus on network security and distributed systems.\n\n[Question 2]\nWhat interests you about this position?\n\n[Answer]\nI'm particularly excited about this opportunity because of Google's innovative approach to technology and its commitment to solving complex problems at scale. The role's emphasis on cloud architecture and AI integration aligns perfectly with my career goals and expertise. I'm especially intrigued by Google's work on network automation and machine learning-driven traffic optimization. Having worked on similar challenges at a smaller scale, I'm eager to contribute to solutions that impact billions of users. The team's recent publications on network resilience and their open-source contributions to the networking community demonstrate the kind of impactful work I want to be part of.\n\n[Question 3]\nHow do you handle working in a team environment?\n\n[Answer]\nI believe in collaborative development and open communication. In my previous role, I regularly conducted code reviews and mentored junior developers, which helped improve our team's overall code quality by 30%. I established a weekly knowledge-sharing session where team members could present new technologies or challenging problems they solved. This initiative not only improved team collaboration but also reduced debugging time by 25%. I also believe in creating a positive team culture where everyone feels comfortable sharing ideas and concerns. When conflicts arise, I focus on understanding different perspectives and finding solutions that benefit the entire team while maintaining technical excellence.`,
    layout: { position: 'absolute', width: '60%', height: '30%', top: '64%', left: '15%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '8deg' }] }
  },
  {
    id: 'interview2',
    title: 'TV Presenter Interview',
    category: 'Interviews',
    image: require('../assets/interviewpics/pic8025.png'),
    text: `[Question 1]\nHow did you get started in broadcasting?\n\n[Answer]\nI began my career as a news reporter for a local station in Denver, where I developed my skills in live reporting and storytelling. My passion for connecting with audiences led me to pursue opportunities in television presenting. During my early days, I covered everything from local council meetings to breaking news events, which taught me the importance of quick thinking and clear communication. I also took evening classes in broadcast journalism to strengthen my technical skills and understanding of media ethics. A defining moment came when I covered a major snowstorm that affected thousands - my ability to provide clear, timely updates while maintaining composure caught the attention of network executives.\n\n[Question 2]\nHow do you prepare for a live broadcast?\n\n[Answer]\nI follow a thorough preparation routine that includes extensive research on the topic, practicing delivery, and reviewing technical aspects. I start by gathering background information from multiple sources, creating detailed notes, and identifying potential talking points. I conduct pre-interviews when possible and prepare backup questions or topics. I also make sure to arrive at least two hours early to check equipment, review the script with the production team, and do a final run-through. I've developed a pre-broadcast checklist that covers everything from microphone checks to backup power sources, ensuring we're prepared for any technical challenges.\n\n[Question 3]\nHow do you handle unexpected situations during live broadcasts?\n\n[Answer]\nI stay calm and maintain professionalism by drawing on my experience and training. For example, during a recent weather report, our teleprompter failed completely. I smoothly transitioned to ad-libbing while maintaining eye contact with the camera and delivering accurate information. I've learned to always have key data points memorized and to keep backup notes nearby. Another time, during a live interview, a guest became confrontational - I defused the situation by remaining composed, steering the conversation back to factual discussion, and ensuring all viewpoints were respected. These experiences have taught me that preparation and adaptability are crucial in live broadcasting.`,
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
    title: 'Technical Panel Interview',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 28, 2025, 09_26_51 PM.png'),
    text: `[Question 1]\nHow do you approach debugging a critical production issue?\n\n[Answer]\nI start by identifying the symptoms, isolating variables, and analyzing logs. Then I replicate the issue in a safe environment and apply fixes step-by-step while communicating progress with stakeholders.\n\n[Question 2]\nWhat's your experience with system design interviews?\n\n[Answer]\nI've led and participated in many. I focus on clarity, scalability, and trade-offs, often using diagrams to visualize data flow and structure.\n\n[Question 3]\nHow do you give technical feedback?\n\n[Answer]\nI focus on clarity and intent, provide examples, and ensure my tone is constructive. I also encourage open dialogue to make it a two-way learning moment.`,
    layout: { position: 'absolute', width: '60%', height: '15%', top: '80%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '3deg' }] }
  },
  {
    id: 'interview12',
    title: 'Hiring Committee Review',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 28, 2025, 09_33_14 PM.png'),
    text: `[Question 1]\nDescribe a time you had to disagree with a team decision.\n\n[Answer]\nI voiced my perspective respectfully, backed it with data, and remained open to feedback. Eventually, a compromise was reached, improving the outcome while maintaining harmony.\n\n[Question 2]\nHow do you measure the success of your projects?\n\n[Answer]\nI use KPIs aligned to business goals, such as user adoption, latency reduction, and delivery timelines. I also gather user feedback to evaluate qualitative impact.\n\n[Question 3]\nHow do you handle stakeholder misalignment?\n\n[Answer]\nI set up clear communication channels, clarify expectations early, and realign objectives through mutual understanding and data-driven discussions.`,
    layout: { position: 'absolute', width: '70%', height: '40%', top: '56%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'interview13',
    title: 'Coffee Chat Interview',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 28, 2025, 09_34_22 PM.png'),
    text: `[Question 1]\nWhat kind of team environment helps you do your best work?\n\n[Answer]\nI thrive in a transparent, supportive, and feedback-driven environment where ideas are respected and teammates help each other grow.\n\n[Question 2]\nHow do you handle disagreements in informal settings?\n\n[Answer]\nI listen first, then respectfully offer my view. I avoid escalating tensions and look for common ground.\n\n[Question 3]\nWhat's something fun or unexpected about you?\n\n[Answer]\nI used to run a travel blog and still love planning spontaneous weekend trips.`,
    layout: { position: 'absolute', width: '65%', height: '38%', top: '48%', left: '17%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'interview14',
    title: 'Whiteboard Coding Challenge',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 28, 2025, 09_35_26 PM.png'),
    text: `[Question 1]\nWalk us through your solution to this problem.\n\n[Answer]\nSure. I start by confirming requirements, outlining constraints, and sketching pseudocode. Then I break the logic into functions and walk through edge cases with test inputs.\n\n[Question 2]\nWhat do you prioritize during a technical assessment?\n\n[Answer]\nClarity, structure, and efficiency. I write clean code and explain trade-offs as I go, while being receptive to hints or feedback.\n\n[Question 3]\nHow do you manage your time during live challenges?\n\n[Answer]\nI allocate time upfront for planning and then track my progress against each part. If I get stuck, I quickly pivot or explain alternatives.`,
    layout: { position: 'absolute', width: '70%', height: '40%', top: '45%', left: '15%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'interview15',
    title: 'Behavioral Screening Interview',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 28, 2025, 09_36_33 PM.png'),
    text: `[Question 1]\nTell me about a time you overcame a big challenge.\n\n[Answer]\nIn my previous role, a legacy system outage required urgent fixes. I led a task force, reverse-engineered undocumented modules, and restored operations in under 12 hours.\n\n[Question 2]\nHow do you stay motivated during repetitive tasks?\n\n[Answer]\nI set mini-goals, automate where possible, and reward small wins. I also reflect on the broader purpose behind the task.\n\n[Question 3]\nHow do you handle constructive criticism?\n\n[Answer]\nI treat it as a growth opportunity. I ask clarifying questions, apply feedback to future work, and thank the person for helping me improve.`,
    layout: { position: 'absolute', width: '68%', height: '35%', top: '55%', left: '17%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'interview16',
    title: 'HR Screening Round',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 28, 2025, 09_37_39 PM.png'),
    text: `[Question 1]\nWhy are you interested in this position?\n\n[Answer]\nThis role aligns with both my experience and long-term goals. I'm excited about the team's vision and confident I can bring strong contributions from day one.\n\n[Question 2]\nWhat are your salary expectations?\n\n[Answer]\nI'm looking for a role that reflects my skills and market standards. I'm open to a fair discussion based on responsibilities and benefits.\n\n[Question 3]\nAre you interviewing elsewhere?\n\n[Answer]\nYes, I'm exploring a few opportunities, but this role is a top contender due to its mission and team culture.`,
    layout: { position: 'absolute', width: '75%', height: '20%', top: '75%', left: '10%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '3deg' }] }
  },
  {
    id: 'interview17',
    title: 'Virtual Interview Setup',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 28, 2025, 09_39_08 PM.png'),
    text: `[Question 1]\nHow do you prepare for virtual interviews?\n\n[Answer]\nI test all tech ahead of time, ensure good lighting, and minimize distractions. I also keep backup devices nearby and notes visible but off-camera.\n\n[Question 2]\nWhat's your experience working remotely?\n\n[Answer]\nI've led distributed teams across time zones, using tools like Slack and Zoom effectively. I prioritize async updates and make time for virtual rapport-building.\n\n[Question 3]\nAny tips for video interview etiquette?\n\n[Answer]\nYes — dress professionally, look at the camera to mimic eye contact, and smile. Use a neutral background and avoid interrupting; let your voice finish strong.`,
    layout: { position: 'absolute', width: '70%', height: '40%', top: '52%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'interview18',
    title: 'Recruiter Discussion at Career Fair',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 28, 2025, 09_44_51 PM.png'),
    text: `[Question 1]\nWhat brings you to this career fair?\n\n[Answer]\nI'm actively seeking a role that aligns with my experience and growth goals. Your company stood out to me because of its innovation and culture.\n\n[Question 2]\nWhat are you most proud of in your resume?\n\n[Answer]\nLeading a cloud migration that reduced hosting costs by 35% while improving system reliability. It was a cross-functional effort that I coordinated.\n\n[Question 3]\nHow soon are you available to start?\n\n[Answer]\nI'm available to start with a two-week notice. I'm committed to a smooth transition from my current responsibilities.`,
    layout: { position: 'absolute', width: '70%', height: '32%', top: '62%', left: '13%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'interview19',
    title: 'Product Manager Chat at Google Lounge',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 28, 2025, 10_37_26 PM.png'),
    text: `[Question 1]\nWhat's your approach to product strategy?\n\n[Answer]\nI start with user insights and business objectives. I map needs to features, validate through feedback, and iterate quickly with measurable milestones.\n\n[Question 2]\nHow do you handle conflicting stakeholder priorities?\n\n[Answer]\nI align priorities to core goals, facilitate data-backed decisions, and ensure transparency through regular check-ins and roadmap visibility.\n\n[Question 3]\nHow do you ensure product quality?\n\n[Answer]\nI collaborate with QA and engineering early, define acceptance criteria, and use continuous feedback from real users to drive improvements.`,
    layout: { position: 'absolute', width: '70%', height: '35%', top: '58%', left: '14%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '1deg' }] }
  },
  {
    id: 'interview20',
    title: 'Live TV Interview Set',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 28, 2025, 10_44_41 PM.png'),
    text: `[Question 1]\nHow do you stay composed on live TV?\n\n[Answer]\nPreparation is key. I rehearse thoroughly, focus on my breathing, and keep my core message front and center.\n\n[Question 2]\nWhat's the biggest risk you've taken professionally?\n\n[Answer]\nLeaving a secure job to join a fast-moving startup. It paid off — I learned rapidly, wore many hats, and contributed to doubling our user base.\n\n[Question 3]\nHow do you prepare for tricky or controversial questions?\n\n[Answer]\nI study past interviews, understand the context, and script responses that stay true to my values without sounding rehearsed.`,
    layout: { position: 'absolute', width: '70%', height: '40%', top: '60%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'interview21',
    title: 'White House Policy Discussion',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 29, 2025, 01_19_01 PM.png'),
    text: `[Question 1]\nWhat measures do you propose to improve national security?\n\n[Answer]\nI propose strengthening intelligence sharing, modernizing infrastructure, and enhancing cybersecurity through public-private partnerships.\n\n[Question 2]\nHow will your policy support economic growth?\n\n[Answer]\nThrough targeted investments in innovation, infrastructure, and workforce training to stimulate job creation and competitiveness globally.\n\n[Question 3]\nWhat's your strategy on international cooperation?\n\n[Answer]\nBuilding strong alliances, engaging in multilateral institutions, and leading by example on global challenges such as climate and trade.`,
    layout: { position: 'absolute', width: '70%', height: '35%', top: '60%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'interview22',
    title: 'Volunteer Program Interview',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 29, 2025, 01_27_07 PM.png'),
    text: `[Question 1]\nWhy do you want to volunteer here?\n\n[Answer]\nI admire your organization's mission and believe my skills can meaningfully contribute to the community outreach and support programs.\n\n[Question 2]\nHave you volunteered before?\n\n[Answer]\nYes, extensively in local shelters and fundraising events, where I coordinated teams and organized activities.\n\n[Question 3]\nHow would you handle challenging situations during volunteering?\n\n[Answer]\nI remain calm, empathetic, and resourceful, focusing on effective communication and collaboration to resolve issues.`,
    layout: { position: 'absolute', width: '68%', height: '38%', top: '57%', left: '17%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'interview23',
    title: 'Academic Panel Interview',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 29, 2025, 01_21_32 PM.png'),
    text: `[Question 1]\nHow do you manage classroom diversity?\n\n[Answer]\nBy fostering an inclusive environment, differentiating instruction, and respecting each student's unique perspectives and backgrounds.\n\n[Question 2]\nWhat innovative teaching methods do you use?\n\n[Answer]\nI integrate technology, collaborative projects, and real-world problem-solving to enhance student engagement and understanding.\n\n[Question 3]\nHow do you assess student progress?\n\n[Answer]\nThrough continuous formative assessments, feedback loops, and holistic evaluations including both academic performance and participation.`,
    layout: { position: 'absolute', width: '70%', height: '35%', top: '56%', left: '15%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'interview24',
    title: 'Factory Floor Interview',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 29, 2025, 01_29_14 PM.png'),
    text: `[Question 1]\nWhat steps do you take to ensure production efficiency?\n\n[Answer]\nI follow standard operating procedures, conduct regular equipment checks, and proactively identify potential delays.\n\n[Question 2]\nDescribe your experience with machinery maintenance?\n\n[Answer]\nI routinely perform preventive maintenance, document all actions, and quickly address mechanical issues to minimize downtime.\n\n[Question 3]\nHow do you approach teamwork on the factory floor?\n\n[Answer]\nClear communication, shared goals, and mutual support ensure smooth operations and quick problem-solving.`,
    layout: { position: 'absolute', width: '70%', height: '35%', top: '50%', left: '14%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '3deg' }] }
  },
  {
    id: 'interview25',
    title: 'Cafe Business Meeting',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 29, 2025, 01_30_33 PM.png'),
    text: `[Question 1]\nWhat are your key business priorities for this year?\n\n[Answer]\nExpanding market reach, enhancing customer experience, and optimizing operational efficiency through technology.\n\n[Question 2]\nHow do you maintain client relationships?\n\n[Answer]\nRegular communication, personalized service, and prompt issue resolution help foster strong, lasting partnerships.\n\n[Question 3]\nCan you give an example of overcoming a significant business challenge?\n\n[Answer]\nI navigated a critical supply chain disruption by swiftly sourcing alternative suppliers and transparent communication with stakeholders.`,
    layout: { position: 'absolute', width: '70%', height: '40%', top: '48%', left: '14%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '2deg' }] }
  },
  {
    id: 'interview26',
    title: 'Enterprise Strategy Meeting at IBM HQ',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 30, 2025, 03_24_42 PM.png'),
    text: `[Question 1]\nWhat are IBM's key innovation priorities?\n\n[Answer]\nFocusing on AI-driven solutions, hybrid cloud expansion, and quantum computing research to stay ahead in enterprise technology.\n\n[Question 2]\nHow do you approach digital transformation for clients?\n\n[Answer]\nBy conducting readiness assessments, co-creating roadmaps, and deploying agile teams for rapid, measurable value delivery.\n\n[Question 3]\nHow do you mitigate risks associated with legacy systems?\n\n[Answer]\nImplementing phased modernization, robust integration layers, and continuous cybersecurity monitoring.`,
    layout: { position: 'absolute', width: '70%', height: '32%', top: '68%', left: '14%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'interview27',
    title: 'Content Creator Pitch at YouTube Studio',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 30, 2025, 03_26_20 PM.png'),
    text: `[Question 1]\nHow do you grow your channel audience?\n\n[Answer]\nConsistent, high-quality content, SEO-optimized titles and thumbnails, and active engagement with viewers.\n\n[Question 2]\nWhat's your strategy for sustainable monetization?\n\n[Answer]\nDiversifying revenue streams through ads, sponsorships, merchandise, and membership programs.\n\n[Question 3]\nHow do you handle negative feedback or controversy?\n\n[Answer]\nListening objectively, responding professionally, and using criticism constructively to improve content.`,
    layout: { position: 'absolute', width: '60%', height: '35%', top: '65%', left: '10%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '2deg' }] }
  },
  {
    id: 'interview28',
    title: 'Recruiter Screening Interview',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 30, 2025, 03_28_42 PM.png'),
    text: `[Question 1]\nWhat key traits do you prioritize in candidates?\n\n[Answer]\nAdaptability, cultural fit, problem-solving skills, and a growth mindset.\n\n[Question 2]\nHow do you ensure impartiality in screening?\n\n[Answer]\nUsing structured evaluation rubrics, blind assessments, and consistent criteria across all applicants.\n\n[Question 3]\nHow do you handle high-volume recruitment effectively?\n\n[Answer]\nLeveraging ATS tools, batch interviews, and clear communication to streamline the process.`,
    layout: { position: 'absolute', width: '70%', height: '35%', top: '65%', left: '10%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '4deg' }] }
  },
  {
    id: 'interview29',
    title: 'Disney Imagineering Technical Review',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 30, 2025, 03_30_26 PM.png'),
    text: `[Question 1]\nHow do you balance storytelling with engineering constraints?\n\n[Answer]\nIterative prototyping, cross-disciplinary teams, and user testing ensure both imaginative design and technical feasibility.\n\n[Question 2]\nDescribe a themed experience you've successfully delivered.\n\n[Answer]\nI led a ride concept incorporating AR effects, synchronized show lighting, and dynamic audio for immersive guest engagement.\n\n[Question 3]\nHow do you validate guest interaction flows?\n\n[Answer]\nThrough small-scale simulations, sensor-based tracking, and real-time feedback to refine user experience.`,
    layout: { position: 'absolute', width: '50%', height: '27%', top: '55%', left: '5%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '2deg' }] }
  },
  {
    id: 'interview30',
    title: 'Talent Assessment at Corporate Office',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 30, 2025, 03_34_18 PM.png'),
    text: `[Question 1]\nHow do you design fair assessment exercises?\n\n[Answer]\nBy aligning tasks to role competencies, standardizing evaluation, and incorporating diverse challenge types.\n\n[Question 2]\nHow do you measure candidate performance objectively?\n\n[Answer]\nUsing clear scoring metrics, calibration sessions, and multiple assessors to reduce bias.\n\n[Question 3]\nHow do you provide feedback to unsuccessful candidates?\n\n[Answer]\nOffering constructive, actionable insights and resources for their career development.`,
    layout: { position: 'absolute', width: '70%', height: '35%', top: '67%', left: '15%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '-5deg' }] }
  },

  {
    id: 'interview31',
    title: 'Executive Panel Discussion in Chicago',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 30, 2025, 03_36_51 PM.png'),
    text: `[Question 1]\nWhat drives an effective metropolitan corporate strategy?\n\n[Answer]\nIntegrating local partnerships, leveraging city infrastructure, and aligning offerings with urban consumer insights.\n\n[Question 2]\nHow do you navigate regional regulatory challenges?\n\n[Answer]\nBy maintaining proactive compliance programs, engaging stakeholders early, and adapting swiftly to local policies.\n\n[Question 3]\nHow do you leverage city resources for growth?\n\n[Answer]\nThrough public–private collaborations, infrastructure grants, and targeted community outreach for market penetration.`,
    layout: { position: 'absolute', width: '70%', height: '37%', top: '55%', left: '14%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '0deg' }] }
  },
  {
    id: 'interview32',
    title: 'Regulatory Hearing at Federal Agency',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 30, 2025, 05_20_47 PM.png'),
    text: `[Question 1]\nHow do you ensure policy compliance across departments?\n\n[Answer]\nBy issuing clear guidelines, conducting routine audits, and offering targeted training programs.\n\n[Question 2]\nHow do you balance security interests with individual privacy?\n\n[Answer]\nThrough comprehensive risk assessments, data minimization, and transparent oversight processes.\n\n[Question 3]\nHow do you maintain public accountability?\n\n[Answer]\nBy publishing regular reports, facilitating stakeholder consultations, and leveraging open data platforms.`,
    layout: { position: 'absolute', width: '70%', height: '36%', top: '50%', left: '15%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'interview33',
    title: 'Regional Operations Interview at Home Depot Atlanta HQ',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 30, 2025, 03_39_56 PM.png'),
    text: `[Question 1]\nHow do you optimize supply chain efficiency regionally?\n\n[Answer]\nBy leveraging local distribution centers, real-time inventory tracking, and data-driven demand forecasting.\n\n[Question 2]\nHow do you manage seasonal demand fluctuations?\n\n[Answer]\nThrough predictive analytics, flexible staffing models, and scalable vendor partnerships.\n\n[Question 3]\nHow do you ensure brand consistency across stores?\n\n[Answer]\nWith standardized training, regular audits, and community-focused store initiatives.`,
    layout: { position: 'absolute', width: '70%', height: '40%', top: '58%', left: '18%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'interview34',
    title: 'Cloud Solutions Architect Interview at Microsoft',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 30, 2025, 03_48_25 PM.png'),
    text: `[Question 1]\nHow do you design scalable cloud architectures?\n\n[Answer]\nBy leveraging microservices, container orchestration, and auto-scaling policies.\n\n[Question 2]\nHow do you ensure data security in the cloud?\n\n[Answer]\nWith end-to-end encryption, identity management, and continuous security monitoring.\n\n[Question 3]\nHow do you optimize cloud costs for enterprise clients?\n\n[Answer]\nThrough resource rightsizing, reserved capacity planning, and cost analytics.`,
    layout: { position: 'absolute', width: '60%', height: '34%', top: '57%', left: '14%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '-1deg' }] }
  },
  {
    id: 'interview35',
    title: 'Financial Analyst Interview at Bloomberg',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 30, 2025, 05_19_13 PM.png'),
    text: `[Question 1]\nHow do you analyze market trends effectively?\n\n[Answer]\nBy employing quantitative models, real-time data feeds, and cross-market correlation analysis.\n\n[Question 2]\nHow do you communicate complex insights to stakeholders?\n\n[Answer]\nWith interactive dashboards, concise executive summaries, and data visualization techniques.\n\n[Question 3]\nHow do you ensure data accuracy under tight deadlines?\n\n[Answer]\nThrough automated data validation, redundancy checks, and rapid peer reviews.`,
    layout: { position: 'absolute', width: '60%', height: '35%', top: '65%', left: '22%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '-2deg' }] }
  },
  {
    id: 'interview36',
    title: 'Environmental Policy Advisor Interview',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 30, 2025, 03_45_04 PM.png'),
    text: `[Question 1]\nHow do you develop sustainable environmental policies?\n\n[Answer]\nBy integrating scientific research, stakeholder engagement, and cost-benefit analyses.\n\n[Question 2]\nHow do you measure environmental impact?\n\n[Answer]\nThrough lifecycle assessments, key performance indicators, and continuous monitoring.\n\n[Question 3]\nHow do you engage communities in policy adoption?\n\n[Answer]\nWith transparent communication, local forums, and education programs.`,
    layout: { position: 'absolute', width: '70%', height: '35%', top: '67%', left: '0%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '7deg' }] }
  },
  {
    id: 'interview37',
    title: 'Medical Ethics Panel at Johns Hopkins Medical Center',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 30, 2025, 03_43_22 PM.png'),
    text: `[Question 1]\nHow do you address patient informed consent?\n\n[Answer]\nBy ensuring clear disclosures, verifying understanding, and documenting agreements.\n\n[Question 2]\nHow do you balance research innovation with patient care?\n\n[Answer]\nThrough rigorous IRB review, phased trials, and ongoing safety monitoring.\n\n[Question 3]\nHow do you safeguard clinical trial integrity?\n\n[Answer]\nWith independent data safety monitoring boards, predefined endpoints, and transparency.`,
    layout: { position: 'absolute', width: '70%', height: '35%', top: '46%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'interview38',
    title: 'Brand Strategy Discussion at Starbucks HQ',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 30, 2025, 05_18_12 PM.png'),
    text: `[Question 1]\nHow do you maintain brand loyalty globally?\n\n[Answer]\nBy delivering consistent customer experiences, authentic storytelling, and localized offerings.\n\n[Question 2]\nWhat's your approach to digital engagement?\n\n[Answer]\nIntegrating app-based rewards, personalized recommendations, and social media activations.\n\n[Question 3]\nHow do you ensure responsible expansion?\n\n[Answer]\nThrough market research, community partnerships, and sustainable sourcing.`,
    layout: { position: 'absolute', width: '60%', height: '35%', top: '55%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '4deg' }] }
  },
  {
    id: 'interview39',
    title: 'Social Media Strategist Interview at Snap Inc.',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 30, 2025, 05_22_25 PM.png'),
    text: `[Question 1]\nHow do you drive user engagement on social platforms?\n\n[Answer]\nBy creating interactive features, leveraging AR filters, and fostering community trends.\n\n[Question 2]\nWhat's your strategy for monetizing content?\n\n[Answer]\nThrough targeted advertising, sponsored lenses, and premium subscription offerings.\n\n[Question 3]\nHow do you protect user data privacy?\n\n[Answer]\nImplementing privacy-by-design, user consent flows, and rigorous data governance.`,
    layout: { position: 'absolute', width: '65%', height: '33%', top: '66%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'interview40',
    title: 'Executive Education Director Interview at Harvard Business School',
    category: 'Interviews',
    image: require('../assets/interviewpics/ChatGPT Image Apr 30, 2025, 05_25_06 PM.png'),
    text: `[Question 1]\nHow do you design executive education curricula?\n\n[Answer]\nBy combining case-based learning, industry partnerships, and cutting-edge research insights.\n\n[Question 2]\nHow do you measure participant outcomes?\n\n[Answer]\nWith pre-and post-program assessments, 360-degree feedback, and long-term impact studies.\n\n[Question 3]\nHow do you adapt programs for evolving market needs?\n\n[Answer]\nThrough continuous program reviews, alumni input, and agile course updates.`,
    layout: { position: 'absolute', width: '70%', height: '40%', top: '56%', left: '14%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
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
    layout: { position: 'absolute', width: '50%', height: '30%', top: '61%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '4deg' }] }
  },
  {
    id: 'specific2',
    title: 'Fire Fighter Training',
    category: 'Situational/Specific',
    image: require('../assets/specificpics/pic82501.png'),
    text: `Welcome to today's firefighter training session. We'll be focusing on high-rise building fire scenarios.\n\nKey points to remember:\n- Always check your oxygen levels before entry\n- Maintain constant communication with your team\n- Follow the established evacuation procedures\n- Be aware of potential structural hazards\n\nToday's drill will simulate:\n- Smoke-filled environment navigation\n- Victim search and rescue\n- Emergency communication protocols\n- Equipment handling under pressure\n\nSafety is our top priority. Let's begin with the equipment check.`,
    layout: { position: 'absolute', width: '58%', height: '34%', top: '65%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '10deg' }] }
  },
  {
    id: 'specific3',
    title: 'Museum Guide',
    category: 'Situational/Specific',
    image: require('../assets/specificpics/pic8931.png'),
    text: `Welcome to the Museum of Modern Art. Today, we'll be exploring our special exhibition of 20th-century masterpieces.\n\nAs we walk through the galleries, you'll see works by:\n- Pablo Picasso's revolutionary cubist period\n- Salvador Dalí's surreal dreamscapes\n- Jackson Pollock's abstract expressionism\n- Andy Warhol's pop art icons\n\nPlease remember:\n- No flash photography\n- Maintain a respectful distance from the artwork\n- Feel free to ask questions\n- Take your time to appreciate each piece\n\nLet's begin our journey through modern art history.`,
    layout: { position: 'absolute', width: '50%', height: '35%', top: '57%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '12deg' }] }
  },
  {
    id: 'specific4',
    title: 'Fighter Jet Guide',
    category: 'Situational/Specific',
    image: require('../assets/specificpics/pic7649.png'),
    text: `Welcome to the F-35 Lightning II demonstration. This fifth-generation fighter represents the pinnacle of modern aviation technology.\n\nKey features we'll explore:\n- Advanced stealth capabilities\n- Supersonic speed performance\n- State-of-the-art avionics systems\n- Vertical takeoff and landing capabilities\n\nSafety protocols:\n- Stay within designated viewing areas\n- Wear provided ear protection\n- Follow all instructions from ground crew\n- No photography during active demonstrations\n\nLet's begin with a walk-around of the aircraft.`,
    layout: { position: 'absolute', width: '60%', height: '34%', top: '55%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '-3deg' }] }
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
    layout: { position: 'absolute', width: '60%', height: '36%', top: '47%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'specific7',
    title: 'Giving Constructive Feedback to Peer',
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 28, 2025, 09_49_46 PM.png'),
    text: `Hey Mark, do you have a few minutes to chat about the client presentation draft? Overall, the analysis section is really strong. One thing I noticed, however, is that the structure of the recommendations could perhaps be clearer. Maybe we could brainstorm ways to make the key takeaways stand out more? For example, we could use bullet points or a summary slide. What are your thoughts? I'm happy to help rework it if you like.`,
    layout: { position: 'absolute', width: '60%', height: '38%', top: '58%', left: '22%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'specific9',
    title: 'Explaining a Technical Issue to Non-Technical Manager',
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 28, 2025, 09_58_40 PM.png'),
    text: `Hi Boss. Regarding the website slowdown yesterday, the root cause was an unexpected surge in traffic overwhelming one of our database servers. Think of it like too many cars trying to get onto a small highway entrance ramp at once – things got backed up. We've temporarily increased the server capacity, like opening more lanes on the ramp, which has resolved the immediate issue. We're now working on a long-term fix to better distribute traffic automatically to prevent this bottleneck in the future.`,
    layout: { position: 'absolute', width: '60%', height: '33%', top: '55%', left: '18%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '3deg' }] }
  },
  {
    id: 'specific10',
    title: 'Asking for a Raise or Promotion',
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 28, 2025, 10_01_12 PM.png'),
    text: `Hi Sarah, thank you for taking the time to meet with me today. I wanted to discuss my career development here at the company. Over the past year, I feel I've consistently exceeded the expectations for my current role as Analyst. I've successfully taken on increased responsibilities, most notably leading the website redesign initiative start-to-finish. As you know, that project resulted in a 15% measured increase in user engagement and positive feedback from key stakeholders. Considering this track record and my contributions, alongside some research I've done on comparable roles in our industry, I believe my performance and responsibilities now strongly align with the Senior Analyst level. I'm very committed to my future here and eager to continue contributing at a higher level. Therefore, I would like to formally request consideration for a promotion to Senior Analyst and a corresponding salary adjustment that reflects the scope and impact of this level of work. I've prepared a document outlining my key achievements over the past year for your review.`,
    layout: { position: 'absolute', width: '60%', height: '33%', top: '57%', left: '22%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'specific11',
    title: 'Declining an Unreasonable Request Politely',
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 28, 2025, 10_10_32 PM.png'),
    text: `Hi Dave, thanks for reaching out and thinking of me for assistance with the urgent market analysis report – I appreciate you considering my expertise in that area. I've looked at the request and my current workload. Unfortunately, given my existing hard commitments to the Q3 financial reporting, which has a firm deadline this Friday, and the significant preparation required for the board presentation scheduled for next Tuesday, I realistically won't have the necessary bandwidth to dedicate to this new report and give it the thorough attention it deserves right now without significantly jeopardizing those critical existing priorities. It might be worth checking if Emily, who has related experience, might have more immediate availability? Alternatively, perhaps we could revisit this request after the board meeting concludes next week when my schedule clears up considerably?`,
    layout: { position: 'absolute', width: '60%', height: '38%', top: '42%', left: '22%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'specific12',
    title: 'Delivering Bad News to a Client',
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 28, 2025, 10_12_11 PM.png'),
    text: `Hi Mr. Harrison, thanks for taking my call. I'm calling to provide an important update regarding the progress on Project Alpha. While the team has been working diligently, we've encountered an unforeseen technical challenge specifically related to the complex integration with the third-party payment gateway system. We've been troubleshooting this extensively, but it's proving more complex than anticipated. As a result, we are now projecting a potential delay of approximately one week from the original go-live date we had discussed. I want to sincerely apologize for this unexpected development and any disruption this may cause to your plans. We've already allocated two additional senior engineers to focus exclusively on resolving this integration issue, and I want to assure you we're doing absolutely everything possible to minimize this delay and get back on track. I'd like to walk you through the specific technical details of the challenge and our detailed mitigation plan now, if you have a few minutes to discuss?`,
    layout: { position: 'absolute', width: '60%', height: '40%', top: '55%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'specific13',
    title: 'Persuading Stakeholders to Adopt New Process',
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 28, 2025, 11_02_07 PM.png'),
    text: `Thank you all for making the time to join this meeting today. The purpose of this session is to propose and discuss the adoption of a new automated testing process for our core software releases, specifically utilizing the Selenium framework integrated with our CI/CD pipeline. I understand that introducing new processes requires effort and adjustment, and I want to address potential concerns head-on. Based on extensive analysis and a successful pilot program run over the last sprint, implementing this automation could significantly reduce our manual regression testing time – estimates suggest by up to 30% per release cycle. More importantly, it allows us to catch critical integration bugs much earlier in the development process, ultimately leading to improved product quality, fewer post-release hotfixes, and faster delivery cycles. I've prepared a brief demonstration showcasing the framework in action, along with data from the pilot, a projected ROI calculation, a phased implementation plan, and details on training resources to address the initial learning curve. I strongly believe this strategic shift towards automation will substantially benefit our team's efficiency, reduce repetitive manual effort, and enhance the overall stability and reliability of our product in the long run. I'm keen to hear your feedback and answer any questions you may have.`,
    layout: { position: 'absolute', width: '45%', height: '30%', top: '58%', left: '12%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '-11deg' }] }
  },
  {
    id: 'specific14',
    title: 'Apologizing for a Mistake',
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 28, 2025, 11_09_00 PM.png'),
    text: `Hi Michael, I wanted to speak with you privately as soon as possible regarding the sales forecast report I submitted yesterday afternoon. I need to sincerely apologize – I discovered an error in one of the key calculations after I had sent it. Specifically, I inadvertently overlooked applying the regional adjustment factor during the final consolidation step. I take full responsibility for this oversight. I understand the importance of accuracy in these reports and deeply regret any confusion, incorrect assumptions, or inconvenience this may have caused before I could issue a correction. I have already fixed the report, meticulously triple-checked all figures and formulas this time, and the corrected version is now in your inbox with the specific change highlighted. To prevent this from happening again, I've already updated my standard reporting checklist to include an explicit peer-review step for all final forecast calculations before submission. Again, my sincere apologies for the error.`,
    layout: { position: 'absolute', width: '60%', height: '36%', top: '56%', left: '17%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '2.5deg' }] }
  },
  {
    id: 'specific15',
    title: 'Running a Quick Stand-up Meeting',
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 28, 2025, 11_11_46 PM.png'),
    text: `Alright team, good morning everyone, thanks for joining! Let's kick off our daily stand-up for Tuesday, November 12th. As usual, we'll do a quick round-robin update from each person. Please stick to answering the three core questions clearly and concisely: Firstly, what did you accomplish yesterday that moved us closer to our sprint goal? Secondly, what is your primary focus or plan for today? And thirdly, and most importantly, are there any blockers, impediments, or dependencies hindering your progress that the team needs to be aware of or can help resolve? Remember, the goal is quick synchronization, so let's keep our updates brief – aiming for the whole meeting under 15 minutes. John, why don't you start us off today?`,
    layout: { position: 'absolute', width: '60%', height: '35%', top: '58%', left: '18%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '10deg' }] }
  },
  {
    id: 'specific16',
    title: 'Storm Update Press Briefing',
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 30, 2025, 03_50_44 PM.png'),
    text: `Good afternoon and welcome to today's FEMA Storm Update Press Briefing. We will cover the latest forecast models, projected impact zones, and evacuation orders for residents in the storm's path.\n\nMeteorological experts will present detailed data on wind speeds and precipitation levels, followed by logistics coordinators explaining resource deployment strategies and shelter locations.\n\nOur objective is to ensure that all media partners have accurate, actionable information to share with the public. Please hold questions until the end of the presentation and submit them via the chat or by raising your hand. Thank you for your cooperation.`,
    textColor: 'white',
    layout: { position: 'absolute', width: '50%', height: '45%', top: '30%', left: '-1%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '0deg' }] }
  },
  {
    id: 'specific17',
    title: 'NORAD Command Center Briefing',
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 30, 2025, 04_06_06 PM.png'),
    text: `Welcome to the NORAD Command Center Briefing, where we monitor and secure North American aerospace. During this session, you will receive updates on current radar sweeps, satellite tracking results, and threat assessments.\n\nOur operations officers will review the status of active missions, share any unidentified object detections, and outline escalation protocols for interception or advisories to civilian air traffic.\n\nPlease note that classified details will remain restricted; declassified segments will be discussed in the later open session. We will conclude with a Q&A for unclassified inquiries. Your attention to these procedures is critical for maintaining operational readiness.`,
    textColor: 'white',
    layout: { position: 'absolute', width: '45%', height: '30%', top: '47%', left: '27%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '0deg' }] }
  },
  {
    id: 'specific18',
    title: 'Rocket Launch Site Crew Coordination',
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 30, 2025, 04_03_51 PM.png'),
    text: `Good morning, team. Today's coordination meeting at the rocket launch site will focus on countdown procedures, safety checks, and inter-team communication protocols.\n\nWe will review the final systems integration tests, including propulsion activation, fuel line pressurization, and telemetry link verification. Ground support will confirm clearance zones and emergency egress routes, while the weather team provides real-time updates on wind and cloud cover.\n\nOur primary goal is to ensure every subsystem meets launch criteria and that all personnel understand their roles during T-minus countdown. We will conclude with a rehearsal of rapid response actions should any anomaly arise.`,
    textColor: 'white',
    layout: { position: 'absolute', width: '42%', height: '34%', top: '54%', left: '18%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10 }
  },
  {
    id: 'specific19',
    title: 'Team Locker Room Pre-game Huddle',
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 30, 2025, 04_07_48 PM.png'),
    text: `Alright squad, gather up. This is our pre-game huddle to align on strategy and boost team morale before we hit the field.\n\nWe'll start by reviewing our defensive assignments, emphasizing communication on coverage switches and maintaining gap integrity. Then, we'll go over our offensive tempo plan, including tempo snaps and play-action sequences to keep the opponent off balance.\n\nRemember to stay hydrated, focus on the fundamentals, and trust your training. We execute exactly as practiced and finish every play with maximum effort. Let's lock in and bring the heat from kick-off.`,
    textColor: 'white',
    layout: { position: 'absolute', width: '45%', height: '32%', top: '40%', left: '28%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '2deg' }] }
  },
  {
    id: 'specific20',
    title: 'Disaster Relief Coordination Meeting',
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 30, 2025, 03_54_55 PM.png'),
    text: `Welcome to today's disaster relief coordination meeting for the recent flood response. Our objective is to synchronize efforts across multiple agencies, including Red Cross, local emergency services, and volunteer networks.\n\nWe will review current damage assessments, population displacement figures, and priority zones for mobile clinic deployment. Logistics leads will present supply chain updates for food, water, and medical shipments, while shelter managers confirm capacity and staffing levels.\n\nIt is critical that we maintain clear communication channels, minimize duplication of efforts, and ensure rapid resource allocation to the most affected areas. Let's collaborate on action items and timelines for the next 24 hours.`,
    textColor: 'white',
    layout: { position: 'absolute', width: '45%', height: '30%', top: '51%', left: '28%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '-1.5deg' }] }
  },
  {
    id: 'specific21',
    title: 'Pandemic Drill Emergency Response',
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 30, 2025, 04_09_46 PM.png'),
    text: `Good morning, and thank you for participating in today's pandemic drill in the Emergency Command Center. This exercise will simulate a high-volume patient influx requiring rapid triage, quarantine protocols, and supply allocation.\n\nWe will walk through patient tracking systems, PPE distribution workflows, and inter-departmental communication methods. Observers from health agencies will evaluate adherence to infection control guidelines and the speed of resource mobilization.\n\nOur goal is to identify any bottlenecks or gaps in the response plan so we can refine standard operating procedures before a real event occurs. Please treat this as a live exercise and follow instructions precisely.`,
    textColor: 'white',
    layout: { position: 'absolute', width: '50%', height: '43%', top: '40%', left: '24%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '-1.5deg' }] }
  },
  {
    id: 'specific22',
    title: 'Warehouse Operations Coordination',
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 30, 2025, 04_10_50 PM.png'),
    text: `Welcome to the daily warehouse operations coordination meeting. Today we'll review inbound and outbound shipment schedules, inventory levels, and forklift deployment plans.\n\nWe will start with a report on current stock counts, highlighting any items that have fallen below reorder thresholds. Next, the shipping team will outline prioritized orders and expected departure windows. Finally, maintenance will brief us on equipment status and safety checks.\n\nIt's essential that we optimize aisle traffic, minimize picking errors, and ensure timely delivery to our distribution network. Please share any challenges you're facing and your proposed solutions.`,
    textColor: 'white',
    layout: { position: 'absolute', width: '50%', height: '40%', top: '41%', left: '24%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '0deg' }] }
  },
  {
    id: 'specific23',
    title: 'Aerial Firefighting Deployment Brief',
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 30, 2025, 04_02_02 PM.png'),
    text: `Good afternoon, and thank you for attending the aerial firefighting deployment brief. We will coordinate helicopter bucket drops, water source access, and airspace deconfliction with ground crews.\n\nOur flight lead will present the fire perimeter map, identify high-priority hotspots, and review drop pattern strategies. Dispatch will confirm heli-route clearances and refilling site assignments.\n\nCivilian air traffic will be rerouted, and we will maintain constant radio communication to synchronize drops with ground containment efforts. Safety is paramount—ensure all crew understand emergency landing procedures.`,
    textColor: 'white',
    layout: { position: 'absolute', width: '45%', height: '38%', top: '46%', left: '3%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '1deg' }] }
  },
  {
    id: 'specific24',
    title: 'National Park Ranger Briefing',
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 30, 2025, 04_12_41 PM.png'),
    text: `Welcome to today's briefing at Yellowstone National Park. Rangers will receive updates on visitor safety alerts, wildlife movements, and trail conditions.\n\nThe wildlife biologist will report on recent elk migration patterns, while the fire management team outlines current controlled burn zones and air quality considerations. Trail maintenance will cover closures and hazard assessments from recent storms.\n\nPlease ensure all patrols carry bear spray and emergency radio check-ins occur at 30-minute intervals. Let's work together to keep both visitors and wildlife safe during peak season.`,
    textColor: 'white',
    layout: { position: 'absolute', width: '45%', height: '33%', top: '45%', left: '29%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '-1deg' }] }
  },
  {
    id: 'specific25',
    title: 'Airport Ground Operations Coordination',
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 30, 2025, 04_15_03 PM.png'),
    text: `Good morning and welcome to the airport ground operations coordination session. Today's focus will be on runway scheduling, aircraft turnaround procedures, and ground staff assignments.\n\nWe will begin with a status update on current flight arrivals and departures, followed by gate allocation changes due to maintenance delays. Baggage handling will brief on conveyor belt repairs and staffing levels.\n\nSafety officers will reiterate vehicle traffic patterns on tarmac and pedestrian clearances. It's crucial we maintain efficient aircraft flow and uphold regulatory compliance to ensure on-time performance for all carriers.`,
    textColor: 'white',
    layout: { position: 'absolute', width: '45%', height: '32%', top: '46%', left: '10%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '0deg' }] }
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
    layout: { position: 'absolute', width: '50%', height: '37%', top: '54%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '6deg' }] }
  },
  {
    id: 'social2',
    title: 'Office Social Scene',
    category: 'Social & Casual',
    image: require('../assets/socialpics/pic6712.png'),
    text: `Good morning everyone! I just wanted to share some exciting news - we've hit our quarterly targets ahead of schedule!\n\nTo celebrate, we're having a team lunch this Friday at that new fusion restaurant around the corner. It's on the company, so make sure to RSVP by Thursday.\n\nAlso, don't forget about our weekly coffee catch-up tomorrow at 10 AM. We'll be discussing the new project updates and brainstorming some ideas for the next quarter.`,
    layout: { position: 'absolute', width: '50%', height: '36%', top: '55%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '6deg' }] }
  },
  {
    id: 'social3',
    title: 'Family Social Scene',
    category: 'Social & Casual',
    image: require('../assets/socialpics/pic4002.png'),
    text: `Hey everyone, I was thinking we should plan a family game night this weekend. We haven't had one in a while, and it would be great to spend some quality time together.\n\nI can make your favorite snacks, and we can play some board games or maybe even have a movie marathon. The kids can pick the first movie, and then we can watch something more grown-up after they go to bed.\n\nWhat do you all think? Saturday evening work for everyone?`,
    layout: { position: 'absolute', width: '50%', height: '36%', top: '55%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '6deg' }] }
  },
  {
    id: 'social4',
    title: 'Library Social Scene',
    category: 'Social & Casual',
    image: require('../assets/socialpics/pic5021.png'),
    text: `Shh... I know we're in the library, but I just had to tell you about this amazing book I found in the new arrivals section.\n\nIt's a historical fiction novel set in ancient Rome, and the writing is absolutely captivating. I think you'd really enjoy it too.\n\nWould you like to join our book club meeting next week? We're discussing this month's pick, and I know you'd have some great insights to share.\n\nWe meet in the community room every Thursday at 6 PM.`,
    layout: { position: 'absolute', width: '55%', height: '40%', top: '53%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '7deg' }] }
  },
  {
    id: 'social6',
    title: 'Networking Event Small Talk',
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 28, 2025, 10_15_55 PM.png'),
    text: `Hi there, this is quite an event, isn't it? The energy here is great. I'm Alex, working in marketing at Tech Solutions. What brings you to this particular event today? \n\nOh, that's interesting! I know a bit about Apex Innovations. It sounds like challenging but rewarding work. What kind of specific projects or initiatives are keeping you busy currently? \n\nThat sounds fascinating. It relates a bit to some market analysis I've been doing. Before I arrived, I was hoping to learn more about AI integration in customer service. Have you attended any sessions or talks that you found particularly insightful or useful so far?`,
    layout: { position: 'absolute', width: '50%', height: '27%', top: '59%', left: '22%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '-1deg' }] }
  },
  {
    id: 'social7',
    title: 'Catching Up With a Friend',
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 28, 2025, 11_14_10 PM.png'),
    text: `Hey Sarah! It seriously feels like ages since we last properly caught up. How have things really been with you? Beyond the usual updates, what's new and genuinely exciting in your world these days? \n\nI saw on Instagram that you took that amazing trip to Italy last month. It looked absolutely incredible! You have to tell me more about it – what was the best part? The food looked divine. \n\nLife's been pretty busy with the new project at work for me. By the way, got any fun or relaxing plans lined up for the weekend, or just hoping to recharge?`,
    layout: { position: 'absolute', width: '50%', height: '30%', top: '45%', left: '35%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '6deg' }] }
  },
  {
    id: 'social8',
    title: 'Meeting a Neighbor',
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 28, 2025, 11_25_30 PM.png'),
    text: `Hi there! Sorry to bother you while you're gardening, but I realized we haven't officially met yet. I'm Ben, living just over at number 24. \n\nIt's nice to finally put a face to the name! How long have you been living in the neighborhood? We moved in about six months ago. It seems like a really friendly area, doesn't it? \n\nBy the way, have you had a chance to try that new bakery that opened up down on Maple Street? I keep meaning to check it out, heard their croissants are amazing.`,
    layout: { position: 'absolute', width: '60%', height: '42%', top: '39%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '2deg' }] }
  },
  {
    id: 'social9',
    title: 'Casual Coffee Break Chat (Work)',
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 28, 2025, 11_20_29 PM.png'),
    text: `Morning Lisa! Mind if I join you for this coffee break? Definitely need the caffeine boost before the day gets truly hectic. How's your week shaping up so far – surviving okay? \n\nAre you working on anything particularly interesting or challenging at the moment? I heard some buzz about the Project Phoenix deployment you're involved in – sounds like quite the undertaking with that tight deadline. \n\nOn a totally different note, did you happen to catch the basketball game last night? That final quarter was pretty wild, wasn't it?`,
    layout: { position: 'absolute', width: '50%', height: '42%', top: '39%', left: '15%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '0deg' }] }
  },
  {
    id: 'social10',
    title: 'Joining a Group Conversation',
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 28, 2025, 11_29_49 PM.png'),
    text: `Excuse me, hope you don't mind if I jump in for a moment? I couldn't help but overhear you discussing remote work policies, and it sounded really interesting. I'm David, by the way. \n\nIt actually reminds me of a similar situation I encountered at my previous company when we transitioned to a hybrid model. It makes me wonder... \n\nWhat are your general thoughts on maintaining team culture with remote teams? I'd be curious to hear your perspectives.`,
    layout: { position: 'absolute', width: '50%', height: '35%', top: '55%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '8deg' }] }
  },
  {
    id: 'social11',
    title: 'Making Plans with Acquaintance',
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 28, 2025, 11_37_48 PM.png'),
    text: `Hey Chloe, great seeing you again! It was really fun chatting with you back at the marketing conference last month. \n\nI know we briefly mentioned grabbing coffee sometime to talk more about content strategy. I was wondering if you might actually be free sometime next week to do that? Perhaps Tuesday or Thursday afternoon works? Or I'm flexible if another day is better. \n\nAlternatively, I saw that the local farmers market is happening on Saturday morning. If coffee doesn't work, maybe that would be of interest? No pressure either way, just thought I'd ask! Let me know what you think.`,
    layout: { position: 'absolute', width: '50%', height: '35%', top: '60%', left: '27%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '0deg' }] }
  },
  {
    id: 'social12',
    title: 'Discussing Hobbies/Interests',
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 28, 2025, 11_35_11 PM.png'),
    text: `So, shifting gears from project deadlines for a second, what kind of things do you enjoy doing when you actually have some free time? Any particular hobbies or interests you're passionate about? \n\nOh, really? You play the guitar? That's awesome! How did you first get into that? Is it something you've been doing for a long time? \n\nThat sounds great. For me, I'm really into hiking on the weekends. It's a great way to unwind and get outdoors. Have you ever tried any of the trails around here? Some are surprisingly challenging.`,
    layout: { position: 'absolute', width: '60%', height: '40%', top: '42%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '5deg' }] }
  },
  {
    id: 'social13',
    title: 'Giving a Casual Compliment',
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 28, 2025, 11_40_32 PM.png'),
    text: `Hey, excuse me, I just wanted to quickly say, I really admire your presentation style in that meeting earlier. You explained those complex ideas so clearly! The way you broke down the technical concepts into digestible parts was masterful, and your use of analogies really helped everyone grasp the key points.\n\nYou make that look so effortless, any tips on how you developed that skill? I've been trying to improve my own presentation abilities, and I'd love to know how you prepare and structure your talks. Do you have any particular techniques for keeping the audience engaged?\n\nSeriously though, I was genuinely impressed. Just wanted to mention it! Your confidence and clarity really made a difference in how the team received the information. It's not often you see someone who can make technical content both accessible and engaging.`,
    layout: { position: 'absolute', width: '60%', height: '35%', top: '50%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '10deg' }] }
  },
  {
    id: 'social14',
    title: 'Ending a Conversation Politely',
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 28, 2025, 11_47_47 PM.png'),
    text: `Well, listen, it has been genuinely great chatting with you about the future of remote work and hearing your perspective, but I unfortunately need to grab another drink before the next session starts. Your insights about hybrid team dynamics were particularly thought-provoking, and I'd love to continue this conversation another time.\n\nThank you so much for the interesting conversation! It was a pleasure meeting you. Hopefully, our paths will cross again soon at another event perhaps. I'll definitely keep an eye out for your name on future conference schedules - your experience in distributed team management is really valuable.\n\nTake care and enjoy the rest of the conference! If you're interested, I'd be happy to connect on LinkedIn to stay in touch. I think we could both benefit from sharing more ideas about remote work best practices.`,
    layout: { position: 'absolute', width: '50%', height: '35%', top: '52%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '0deg' }] }
  },
  {
    id: 'social15',
    title: 'Reacting to Shared News (Good/Bad)',
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 28, 2025, 11_52_54 PM.png'),
    text: `(Reacting to good news): Wow, no way! That is absolutely fantastic news, Mark! Seriously, congratulations on the promotion, you must be absolutely thrilled! How did that all come about? You have to give me the details! \n\n(Reacting to bad news): Oh, Jane, I am so incredibly sorry to hear about your dog being sick. That sounds really rough and worrying. Thank you for sharing that with me. Please know I'm thinking of you both. Is there honestly anything at all I can do to help, even just listening or grabbing groceries? Please don't hesitate to reach out if you need anything or just want to talk more.`,
    layout: { position: 'absolute', width: '60%', height: '37%', top: '50%', left: '15%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '0deg' }] }
  },
  {
    id: 'social16',
    title: 'Campfire Story Night',
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 30, 2025, 04_20_52 PM.png'),
    text: `Alright everyone, gather close — I've got one last story before we turn in.\n\nThis one's from my first solo hike through Yosemite, back when I barely knew how to read a compass. I ended up lost for hours, no signal, just me, the trees, and a very persistent raccoon.\n\nI wandered aimlessly until I found a stream and decided to wait it out. That night, under the stars, I felt both fear and awe. Nature has a way of humbling you, teaching lessons in silence.\n\nEventually, I made it back thanks to a ranger's whistle echoing through the trees. That experience taught me more than any guidebook ever could.`,
    layout: {
      position: 'absolute',
      width: '55%',
      height: '30%',
      top: '65%',
      left: '23%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
      transform: [{ rotate: '0deg' }]
    }
  },
  {
    id: 'social17',
    title: 'Thanksgiving Toast',
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 30, 2025, 04_22_36 PM.png'),
    text: `Before we dig in, I just want to say how thankful I am to have each of you here tonight.\n\nThis year had its highs and lows, but through it all, this family — chosen and born — kept me grounded. The laughs, the support, the surprise check-ins, and the loud debates over board games — I don't take any of it for granted.\n\nSo here's to the people at this table and the ones we hold in our hearts. Here's to resilience, unconditional love, shared meals, and perfectly golden turkey. May this warmth carry us into the new year.`,
    layout: {
      position: 'absolute',
      width: '50%',
      height: '27%',
      top: '70%',
      left: '25%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
      transform: [{ rotate: '-3deg' }]
    }
  },
  {
    id: 'social18',
    title: 'Outdoor Movie Night Welcome',
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 30, 2025, 04_26_02 PM.png'),
    text: `Welcome, movie lovers! We're so excited to have you here under the stars for our first backyard cinema night.\n\nFeel free to grab popcorn, pull up a blanket, and get cozy. Tonight's feature is a throwback classic — one guaranteed to bring laughs and maybe a tear or two.\n\nIf you need snacks, bug spray, or extra pillows, we've got a table at the back. And yes, there's a trivia quiz during intermission — prizes included!\n\nLet's make this a night to remember. So without further ado... lights, camera, action!`,
    layout: {
      position: 'absolute',
      width: '65%',
      height: '40%',
      top: '45%',
      left: '18.5%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
      transform: [{ rotate: '0deg' }]
    }
  },
  {
    id: 'social19',
    title: 'Cabin Game Night Kickoff',
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 30, 2025, 04_18_47 PM.png'),
    text: `Alright folks, the fire's crackling, the snacks are ready — it's time to settle the age-old debate: who's the most competitive in the cabin?\n\nWe're starting with charades, then splitting into teams for board games that will test wit, alliances, and bluffing skills. No phones, no distractions — just laughter, playful arguments, and new inside jokes.\n\nBy the end of tonight, someone will be crowned game night legend. Are you ready to play, scheme, and laugh until it hurts? Game on!`,
    layout: {
      position: 'absolute',
      width: '50%',
      height: '29%',
      top: '57%',
      left: '24%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
      transform: [{ rotate: '0deg' }]
    }
  },
  {
    id: 'social20',
    title: 'Brewery Brainstorm Session',
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 30, 2025, 04_27_46 PM.png'),
    text: `Alright, I know we said no work talk over beers… but I had an idea I couldn't keep in.\n\nWhat if we took that seasonal batch and paired it with an experience — like live art or acoustic nights? We could brand it "Craft & Culture."\n\nImagine curated pairings, small batch releases, and a rotating lineup of creators. Crazy? Maybe. But that's our thing — bold, unfiltered, and a little experimental.\n\nLet it simmer while we order another round. Could be something worth brewing up this quarter.`,
    layout: {
      position: 'absolute',
      width: '54%',
      height: '30%',
      top: '62%',
      left: '15%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
      transform: [{ rotate: '11deg' }]
    }
  },
  {
    id: 'social21',
    title: 'Festival Meet-Up Greeting',
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 30, 2025, 04_32_17 PM.png'),
    text: `Hey! I can't believe we finally found each other in this crowd — and just in time for the next set!\n\nYou all look amazing, by the way. That flower crown? Iconic. And those glitter shades? Next level.\n\nLet's grab some drinks after this, maybe catch some merch, and then try to edge closer to the stage.\n\nI don't know about you, but I plan to dance like nobody's watching and lose my voice before the night's over. Let's make this a festival night to remember!`,
    layout: {
      position: 'absolute',
      width: '50%',
      height: '37%',
      top: '45%',
      left: '25%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
      transform: [{ rotate: '1deg' }]
    }
  },
  {
    id: 'social22',
    title: 'Dorm Game Night Starter',
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 30, 2025, 04_30_03 PM.png'),
    text: `Alright everyone, rules are simple: no phones, no mercy, and absolutely no cheating.\n\nEach color card has a different challenge — trivia, charades, mini dares, or team tasks. It's unpredictable and guaranteed to lead to outrageous stories.\n\nWinner gets dorm bragging rights until finals. Loser? Well, they might end up with a ridiculous dare posted on the fridge.\n\nLet's laugh loud, play harder, and create the kind of memories we'll talk about for years. Let the games begin!`,
    layout: {
      position: 'absolute',
      width: '50%',
      height: '38%',
      top: '54%',
      left: '22%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
      transform: [{ rotate: '4deg' }]
    }
  },
  {
    id: 'social23',
    title: 'Porch Group Catch-Up',
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 30, 2025, 04_39_35 PM.png'),
    text: `This porch is giving me life right now. Cool breeze, warm drink, and no calendar reminders popping up.\n\nI've missed just *sitting* and catching up like this. No rushed schedules, no background noise — just us.\n\nSo tell me everything — how's life, how's work, how's the dog? Any weird neighbor stories? Did you finally build that patio furniture you ordered months ago?\n\nTonight, we're just here. And honestly, that's more than enough.`,
    layout: {
      position: 'absolute',
      width: '55%',
      height: '33%',
      top: '52%',
      left: '23%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
      transform: [{ rotate: '1deg' }]
    }
  },
  {
    id: 'social24',
    title: 'Fairground Food Talk',
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 30, 2025, 04_44_47 PM.png'),
    text: `Okay, serious question: who's brave enough to try the deep-fried butter?\n\nThis fair is like a neon dream — funnel cakes, rainbow slushies, and every food you can imagine dipped in batter. I've already demolished two corndogs and I regret nothing.\n\nBut the night isn't over until someone wins a giant plush bear and we ride the Ferris wheel just as the lights start to flicker on.\n\nLet's make this chaotic, sugar-fueled adventure count. Who's in?`,
    layout: {
      position: 'absolute',
      width: '50%',
      height: '41%',
      top: '51%',
      left: '24%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
      transform: [{ rotate: '0deg' }]
    }
  },
  {
    id: 'social25',
    title: 'Rooftop Wine Conversation',
    category: 'Social & Casual',
    image: require('../assets/socialpics/ChatGPT Image Apr 30, 2025, 04_41_42 PM.png'),
    text: `You know what I love about rooftop nights like this? The way the city noise becomes a hum and real conversations just unfold naturally.\n\nSo tell me, what's something new you've been learning about yourself lately? Big or small, I want to hear it. No pressure, just genuine curiosity.\n\nAlso, this wine? Way too good. Whoever brought it is now officially the sommelier for the group. Let's keep the bottles flowing and the stories coming.`,
    layout: {
      position: 'absolute',
      width: '50%',
      height: '35%',
      top: '54%',
      left: '25%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
      transform: [{ rotate: '0deg' }]
    }
  },
  // --- End Social & Casual Prompts ---

  // --- Virtual Communication Prompts ---
  {
    id: 'virtual1',
    title: 'Quarterly Project Update & Next Steps', // Updated title
    category: 'Virtual Communication',
    image: require('../assets/vcpics/ChatGPT Image Apr 26, 2025, 07_25_39 PM.png'),
    text: `Good morning, team. Let's dive into the Q3 progress for Project Phoenix. We successfully completed the alpha testing phase two days ahead of schedule, thanks to the diligent work from the engineering team. Key performance indicators show a 15% improvement in processing speed compared to the previous build, which is fantastic news.\n\nLooking ahead to Q4, our primary focus will be on beta testing and addressing the feedback received from alpha users. We need to finalize the user documentation by November 15th and prepare for the limited launch targeted for the first week of December. Marketing, please ensure the campaign materials are aligned with this timeline. Let's open the floor for any questions regarding resource allocation for the beta phase.`, // Updated text
    layout: { // Default layout - ADJUST AS NEEDED!
      position: 'absolute',
      width: '60%',
      height: '37%',
      top: '56%',
      left: '17%',
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
      width: '50%',
      height: '23%',
      top: '69%',
      left: '24%',
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
      height: '26%',
      top: '60%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10,
    }
  },
  {
    id: 'virtual5',
    title: 'Large Group Webinar: Polling Session',
    category: 'Virtual Communication',
    image: require('../assets/vcpics/ChatGPT Image Apr 29, 2025, 12_19_40 AM.png'),
    text: `Welcome everyone to today's webinar. Before we begin the main presentation, we'll start with a quick interactive poll to better understand our audience demographics. Please take a moment to answer the three questions displayed on your screen.

Your responses will help tailor the rest of the session to your needs and interests. Once everyone has responded, we'll display the aggregated results and proceed accordingly. Let's get started with Question 1.`,
    layout: {
      position: 'absolute',
      width: '60%',
      height: '37%',
      top: '59%',
      left: '20%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10
    }
  },
  {
    id: 'virtual6',
    title: 'Video Status Update for Internal Team',
    category: 'Virtual Communication',
    image: require('../assets/vcpics/ChatGPT Image Apr 29, 2025, 12_25_15 AM.png'),
    text: `Hey team, here's the latest status update on the Gird Project. We've just completed milestone three, which involved finalizing backend APIs and running security validations.

Next up is the front-end integration and QA testing phase. If you have any blockers or need support, please drop a note in the project thread. I'll be reviewing all pending pull requests by end of day. Thanks again for staying on track — keep up the great work!`,
    layout: {
      position: 'absolute',
      width: '70%',
      height: '36%',
      top: '57%',
      left: '15%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10
    }
  },
  {
    id: 'virtual7',
    title: 'Hotel-Based Remote Check-In Meeting',
    category: 'Virtual Communication',
    image: require('../assets/vcpics/ChatGPT Image Apr 29, 2025, 12_28_35 AM.png'),
    text: `Good evening! Just wanted to check in quickly before tomorrow's investor meeting. Everything is prepared and the presentation deck has been shared via email. I'll be joining from my hotel room, but fully available to walk through any last-minute changes you may need.`,
    layout: {
      position: 'absolute',
      width: '70%',
      height: '36%',
      top: '57%',
      left: '15%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderRadius: 10
    }
  }
  // --- End Virtual Communication Prompts ---

  // --- Situational/Specific Prompts ---
  {
    id: 'specific1',
    title: 'Client Meeting Follow-Up',
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 28, 2025, 09_47_11 PM.png'),
    text: `Hey team, I wanted to quickly follow up on our client meeting yesterday.\n\nI've drafted a summary email that includes key action items and next steps. Please review and provide any feedback by end of day.\n\nI'll send out the final version tomorrow morning.`,
    layout: { position: 'absolute', width: '60%', height: '38%', top: '58%', left: '22%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'specific2',
    title: 'Team Lunch Discussion',
    category: 'Situational/Specific',
    image: require('../assets/specificpics/ChatGPT Image Apr 28, 2025, 09_47_58 PM.png'),
    text: `Alright team, let's gather around for a quick lunch discussion.\n\nWe've received some feedback about the current project timeline. It seems there might be a delay in the delivery of a key component, which could potentially impact our launch date.\n\nI've invited the relevant stakeholders to join this call. Let's discuss potential solutions and mitigation strategies.`,
    layout: { position: 'absolute', width: '60%', height: '38%', top: '58%', left: '22%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'specific3',
  },
  {
    id: "virtual9",
    title: "Conference Networking Recap",
    category: "Virtual Communication",
    image: require("../assets/vcpics/ChatGPT Image Apr 29, 2025, 12_42_17 AM.png"),
    text: "Thanks for joining the quick debrief. The conference had some great takeaways — especially around AI productization and cross-border partnerships.\n\nLet’s review the key conversations we had, and assign follow-ups based on interest areas. Everyone, please share your notes if you haven’t already. We’ll consolidate all takeaways into a shared doc this afternoon.",
    layout: {
      position: "absolute",
      width: "60%",
      height: "35%",
      top: "60%",
      left: "20%",
      backgroundColor: "transparent",
      overflow: "hidden",
      borderRadius: 10
    }
  },
  {
    id: "virtual10",
    title: "Training Session Wrap-up and Reflection",
    category: "Virtual Communication",
    image: require("../assets/vcpics/ChatGPT Image Apr 29, 2025, 12_43_27 AM.png"),
    text: "That wraps up today's training session. Great engagement from all participants — thank you! Before we close, let’s reflect briefly: what’s one key insight you’re taking away, and how will you apply it in your day-to-day role?\n\nFeel free to share in chat or speak up. I’ll also be sending a short recap and survey for feedback. Thanks again for your energy and insights today!",
    layout: {
      position: "absolute",
      width: "60%",
      height: "36%",
      top: "63%",
      left: "20%",
      backgroundColor: "transparent",
      overflow: "hidden",
      borderRadius: 10
    }
  },
  {
    id: "virtual11",
    title: "Global Sync Call: Leadership Check-In",
    category: "Virtual Communication",
    image: require("../assets/vcpics/ChatGPT Image Apr 29, 2025, 12_50_06 AM.png"),
    text: "Hi everyone! Welcome to our monthly leadership sync. This session is an important opportunity to ensure global alignment across departments and regions.\n\n We’ll take time to highlight recent wins, surface any blockers, and track progress on key cross-regional initiatives.We’ll begin with updates from the APAC team, followed by EMEA, and then the Americas. Please keep your updates focused and concise, and be sure to flag any items that require escalation or follow-up after the call.Looking forward to a productive and collaborative discussion.",
    layout: {
      position: "absolute",
      width: "70%",
      height: "40%",
      top: "51%",
      left: "12%",
      backgroundColor: "transparent",
      overflow: "hidden",
      borderRadius: 10
    }
  },
  {
    id: "virtual12",
    title: "Pre-Recorded Course Introduction",
    category: "Virtual Communication",
    image: require("../assets/vcpics/ChatGPT Image Apr 29, 2025, 12_51_28 AM.png"),
    text: "Welcome to this online training module. I’m your instructor, and I’ll be guiding you through the key lessons over the next hour. Feel free to pause and replay sections as needed.\n\nMake sure to take notes, and there’s a quick quiz at the end to reinforce what you’ve learned. Let’s jump right in with the fundamentals.\n\nIn this first section, we’ll cover the core principles, define key terms, and look at a few practical examples. These will help set the stage for more advanced content later in the module.\n\nAfter each lesson, you’ll get a brief checkpoint to review your understanding before we move on. Don’t worry — these are designed to support your learning, not stress you out.\n\nBy the end of this session, you should feel confident in applying these concepts to real-world scenarios. Let’s get started.",
    layout: {
      position: "absolute",
      width: "60%",
      height: "38%",
      top: "58%",
      left: "20%",
      backgroundColor: "transparent",
      overflow: "hidden",
      borderRadius: 10
    }
  },
  {
    id: "virtual13",
    title: "One-on-One: Career Coaching Session",
    category: "Virtual Communication",
    image: require("../assets/vcpics/ChatGPT Image Apr 29, 2025, 12_59_30 AM.png"),
    text: "Hi Alex, I’m glad we could connect. Today I’d like to focus on your goals for the next 6 months — whether that’s a promotion, upskilling, or improving work-life balance.\n\nLet’s map out actionable steps, identify support resources, and clarify what success looks like for you. Feel free to share any challenges you're currently facing.\n\nWe’ll also review your recent achievements and reflect on what’s been working well. This is a great opportunity to realign your career path with your personal values and aspirations.\n\nIf there are specific areas you’d like to grow in — such as leadership, communication, or technical expertise — we can build a plan around that.\n\nLet’s make the most of this session and set you up for meaningful progress in the months ahead.",
    layout: {
      position: "absolute",
      width: "60%",
      height: "40%",
      top: "50%",
      left: "20%",
      backgroundColor: "transparent",
      overflow: "hidden",
      borderRadius: 10
    }
  },
  {
    id: "virtual14",
    title: "Live Podcast Recording",
    category: "Virtual Communication",
    image: require("../assets/vcpics/ChatGPT Image Apr 30, 2025, 05_44_53 PM.png"),
    text: `Welcome to our live podcast session where we dive deep into the latest technology trends and coding best practices. Hosts will introduce each segment, including expert interviews and audience Q&A.\n\nFeel free to submit your questions in chat at any time. We’ll address them live and even dedicate a special segment to troubleshooting your toughest bugs. Enjoy the interactive experience!`,
    textColor: 'white',
    layout: {
      position: "absolute",
      width: "50%",
      height: "40%",
      top: "46%",
      left: "30%",
      backgroundColor: "transparent",
      overflow: "hidden",
      borderRadius: 10,
      transform: [{ rotate: '3deg' }]
    }
  },
  [
    {
      id: "virtual15",
      title: "Virtual Trivia Night",
      category: "Virtual Communication",
      image: require("../assets/vcpics/ChatGPT Image Apr 30, 2025, 06_17_01 PM.png"),
      text: `Welcome to Trivia Night! Tonight’s theme covers general knowledge, tech history, and programming trivia.\n\nGet ready for a fast-paced, fun-filled session where everyone can participate and test their smarts. Watch the live scoreboard on the right and type your answers in the chat box before time runs out. We'll announce the correct answer after each round, along with a quick explanation or fun fact you might not know.\n\nBonus points may be awarded for speed, creativity, or wit—so stay sharp! Whether you’re here to win or just to have a blast, we’re thrilled to have you. Let's build friendly competition, cheer each other on, and crown our trivia champion by the end of the night. Buckle up—it’s going to be an exciting ride!`,
      textColor: 'white',
      layout: {
        position: "absolute",
        width: "40%",
        height: "33%",
        top: "34%",
        left: "-4%",
        backgroundColor: "transparent",
        overflow: "hidden",
        borderRadius: 10,
        transform: [{ rotate: '-2deg' }]
      }
    },
    {
      id: "virtual16",
      title: "Team Sync: Project Overview",
      category: "Virtual Communication",
      image: require("../assets/vcpics/ChatGPT Image Apr 30, 2025, 06_19_26 PM.png"),
      text: `Welcome everyone to our weekly team sync.\n\nToday’s agenda includes:\n• Recap of project objectives and progress made so far.\n• Detailed milestone timeline, including current status and next deliverables.\n• Cross-functional alignment across teams to ensure our shared goals are clear.\n• Identification of current blockers and interdependencies that could affect progress.\n\nPlease prepare your updates in advance, highlight any risks needing escalation, and note any wins worth sharing. The goal is to foster transparency and make decisions faster. Let’s keep our conversation concise, focused on outcomes, and ensure every team member leaves this call with clarity on priorities and next steps.`,
      textColor: 'white',
      layout: {
        position: "absolute",
        width: "50%",
        height: "42%",
        top: "41%",
        left: "26%",
        backgroundColor: "transparent",
        overflow: "hidden",
        borderRadius: 10,
        transform: [{ rotate: '1deg' }]
      }
    },
    {
      id: "virtual17",
      title: "Reddit Live AMA Session",
      category: "Virtual Communication",
      image: require("../assets/vcpics/ChatGPT Image Apr 30, 2025, 06_21_13 PM.png"),
      text: `Thank you for joining our Reddit AMA!\n\nAsk me anything about our latest project developments, industry insights, or career advice. I’ll be monitoring the comment thread in real time and answering top-voted questions every 5 minutes. Don’t hesitate to dive deep—this is your chance for direct interaction!\n\nOur moderators will help manage the flow of questions and ensure a respectful environment for all participants. We value curiosity, honesty, and openness. You can also share feedback about our work or ask about behind-the-scenes decision-making. Let’s make this a vibrant, insightful discussion that benefits the whole community.`,
      textColor: 'white',
      layout: {
        position: "absolute",
        width: "48%",
        height: "38%",
        top: "41%",
        left: "18%",
        backgroundColor: "transparent",
        overflow: "hidden",
        borderRadius: 10,
        transform: [{ rotate: '1deg' }]
      }
    },
    {
      id: "virtual18",
      title: "Clubhouse Live Audio Panel",
      category: "Virtual Communication",
      image: require("../assets/vcpics/ChatGPT Image Apr 30, 2025, 06_23_48 PM.png"),
      text: `Welcome to today’s Clubhouse panel discussion.\n\nSpeakers will share insights on emerging tech trends and product strategy. If you’d like to speak, raise your hand and we’ll invite you to the stage.\n\nFeel free to drop questions or topics in chat at any time. Let’s foster an engaging dialogue!\n\nWe encourage thoughtful exchanges, so keep comments constructive and collaborative. We aim to include diverse perspectives from across industries and regions. Be sure to follow our moderators and panelists if you'd like to stay updated on future rooms. Enjoy the conversation!`,
      textColor: 'white',
      layout: {
        position: "absolute",
        width: "50%",
        height: "42%",
        top: "37%",
        left: "25%",
        backgroundColor: "transparent",
        overflow: "hidden",
        borderRadius: 10,
        transform: [{ rotate: '2deg' }]
      }
    },
    {
      id: "virtual19",
      title: "Horizon Virtual Meeting Login",
      category: "Virtual Communication",
      image: require("../assets/vcpics/ChatGPT Image Apr 30, 2025, 06_25_37 PM.png"),
      text: `Please log in with your Horizon credentials to access the secure meeting room.\n\nEnter your email and password in the fields above. If you forgot your password, click “Forgot your password?” to reset it securely. Contact IT support for any access issues.\n\nThis platform uses advanced encryption protocols to ensure session security. For best results, connect via a supported browser and stable VPN. Unauthorized access is prohibited and monitored. Once logged in, you'll be redirected to the meeting dashboard with access to your session schedule, shared files, and live chat features.`,
      textColor: 'white',
      layout: {
        position: "absolute",
        width: "50%",
        height: "52%",
        top: "30%",
        left: "28%",
        backgroundColor: "transparent",
        overflow: "hidden",
        borderRadius: 10,
        transform: [{ rotate: '7deg' }]
      }
    },
    {
      id: "virtual20",
      title: "Discord Screen Sharing Session",
      category: "Virtual Communication",
      image: require("../assets/vcpics/ChatGPT Image Apr 30, 2025, 06_26_30 PM.png"),
      text: `I’m now sharing my screen to walk you through the new workflow setup.\n\nYou should see the presentation slide in the center. Confirm in the voice channel if everything is visible. We’ll pause after each section for questions.\n\nThis walkthrough covers onboarding, permissions, user roles, and final handoff. Please take notes and share questions in the #feedback thread. For those who can’t attend live, a recording and resource links will be available post-session. Let’s ensure everyone is aligned before rollout.`,
      textColor: 'white',
      layout: {
        position: "absolute",
        width: "50%",
        height: "38%",
        top: "50%",
        left: "48%",
        backgroundColor: "transparent",
        overflow: "hidden",
        borderRadius: 10,
        transform: [{ rotate: '1deg' }]
      }
    },
    {
      id: "virtual21",
      title: "Live News Broadcast",
      category: "Virtual Communication",
      image: require("../assets/vcpics/ChatGPT Image Apr 30, 2025, 06_30_43 PM.png"),
      text: `Good evening and welcome to our live news broadcast.\n\nI’m your anchor with tonight’s top headlines and in-depth analysis.\n\nComing up: market updates, global events, and exclusive interviews. Stay tuned for expert commentary and live reports.\n\nWe begin with breaking news from the capital, then zoom out to regional developments and economic shifts impacting policy. Field reporters will join us shortly with on-the-ground coverage. Later in the hour, we’ll feature a special editorial roundtable. Let's get started.`,
      textColor: 'white',
      layout: {
        position: "absolute",
        width: "50%",
        height: "40%",
        top: "44%",
        left: "25%",
        backgroundColor: "transparent",
        overflow: "hidden",
        borderRadius: 10
      }
    },
    {
      id: "virtual22",
      title: "StreamYard Live Broadcast",
      category: "Virtual Communication",
      image: require("../assets/vcpics/ChatGPT Image Apr 30, 2025, 06_37_36 PM.png"),
      text: `Welcome to our multi-platform live broadcast via StreamYard.\n\nWe’re streaming simultaneously to YouTube, Facebook, and LinkedIn. Interact with us through the live chat or comment section on your preferred platform.\n\nWe’ll highlight key viewer reactions, answer audience questions, and share behind-the-scenes context about our work. Stay tuned for special announcements and giveaways during the session. If you encounter audio or video issues, try refreshing your browser or switching devices. Thanks for being part of our virtual community!`,
      textColor: 'white',
      layout: {
        position: "absolute",
        width: "45%",
        height: "36%",
        top: "34%",
        left: "-3%",
        backgroundColor: "transparent",
        overflow: "hidden",
        borderRadius: 10,
        transform: [{ rotate: '1deg' }]
      }
    },
    {
      id: "virtual23",
      title: "Video Standup Meeting",
      category: "Virtual Communication",
      image: require("../assets/vcpics/ChatGPT Image Apr 30, 2025, 06_39_29 PM.png"),
      text: `Daily standup agenda on screen: Video Standup\n\nAgenda:\n• Team updates\n• Roadmap discussion\n• Blockers review\n\nTasks status:\n☐ Finish quarter report\n☐ Design new feature\n✅ Fix login issue\n☐ Plan offsite\n\nShare your updates one by one. Let’s keep it to 15 minutes. Please use your allocated time wisely, call out dependencies, and mention if you're blocked on anything. The goal is alignment, momentum, and visibility. Post-standup, notes will be shared in the team channel for follow-ups.`,
      textColor: 'white',
      layout: {
        position: "absolute",
        width: "45%",
        height: "38%",
        top: "47%",
        left: "35%",
        backgroundColor: "transparent",
        overflow: "hidden",
        borderRadius: 10,
        transform: [{ rotate: '1deg' }]
      }
    }
  ]
  // --- End Virtual Communication Prompts ---

  // Add more prompts here in the future
];


