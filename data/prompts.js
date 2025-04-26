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
    title: 'Boardroom Update',
    category: 'Presentations',
    image: require('../assets/presentationpics/pic23.png'),
    text: `Good morning, board members and distinguished guests.\n\nI'm pleased to present our quarterly performance update. Let's start with the key metrics: Revenue has grown by 15% year-over-year, with our new product line contributing 35% of total sales.\n\nOur market share in the Asia-Pacific region has increased to 22%, exceeding our target of 20%. However, we're seeing some challenges in the European market that we need to address.\n\nLooking at our operational efficiency, we've reduced production costs by 8% through our automation initiatives. Our customer satisfaction scores remain strong at 4.7 out of 5.\n\nFor the next quarter, we're focusing on three strategic priorities: expanding our digital transformation efforts, launching our sustainability initiative, and strengthening our supply chain resilience.\n\nI'll now open the floor for questions and discussion.`, 
    layout: { // Adjust layout percentages based on image!
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
    title: 'Conference Keynote Intro',
    category: 'Presentations',
    image: require('../assets/presentationpics/pic45.png'),
    text: `Welcome to TechForward 2024!\n\nIt's an honor to stand before such an impressive gathering of innovators, thought leaders, and change-makers. Over the next three days, we'll explore how technology is reshaping our world in ways we could barely imagine just a few years ago.\n\nThis year's theme, "The Future of Human-Machine Collaboration," couldn't be more timely. We're at a pivotal moment where AI, quantum computing, and biotechnology are converging to create unprecedented opportunities.\n\nOur agenda is packed with insights from industry pioneers, hands-on workshops, and thought-provoking panel discussions. You'll hear from leaders who are pushing the boundaries of what's possible in healthcare, education, and sustainable development.\n\nBut before we dive in, I want to share a story that perfectly illustrates why we're here today. It's about how technology, when guided by human values, can transform lives in ways we never expected.\n\nLet's begin this journey together.`, 
    layout: { // Adjust layout percentages based on image!
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
    title: 'Product Demo',
    category: 'Presentations',
    image: require('../assets/presentationpics/pic9.png'),
    text: `Good afternoon everyone, and thank you for joining us for this exciting product demonstration.\n\nToday, I'm thrilled to introduce you to our latest innovation: the SmartHome Pro system. This isn't just another smart home device - it's a complete ecosystem that learns and adapts to your lifestyle.\n\nLet me show you how it works. With a simple voice command, you can control your entire home. Watch as the lights adjust automatically based on the time of day, the temperature optimizes for comfort, and your security system activates.\n\nWhat sets SmartHome Pro apart is its AI-powered personalization. It learns your routines, anticipates your needs, and even suggests energy-saving opportunities. The system can reduce your energy consumption by up to 30% while maintaining perfect comfort.\n\nBut don't just take my word for it. Let's see it in action with a live demonstration of its key features.\n\nAny questions before we begin?`, 
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
    title: 'Team Update',
    category: 'Presentations',
    image: require('../assets/presentationpics/pic34.png'),
    text: `Team, thank you for gathering for our weekly update.\n\nLet's start with our progress on the Q2 initiatives. The new client onboarding system is now 80% complete, and we're on track to launch next week. Great work from the development team on meeting the tight deadline.\n\nOur customer support metrics show a 15% improvement in response times, but we're still seeing some challenges with the new ticketing system. The support team will be running additional training sessions this week.\n\nFor upcoming projects, we have three major deadlines to focus on: the product launch on the 15th, the quarterly review on the 22nd, and the team offsite on the 29th. Let's make sure we're all aligned on these dates.\n\nI want to highlight some outstanding work from Sarah's team, who completed their sprint two days early while maintaining excellent code quality.\n\nBefore we break, does anyone have updates or challenges they'd like to share?`, 
    layout: { // Adjust layout percentages based on image!
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
    title: 'Informal Presentation',
    category: 'Presentations',
    image: require('../assets/presentationpics/pic2.png'),
    text: `Hey everyone, thanks for coming to our casual catch-up today!\n\nI thought we'd do something a bit different this time - less formal, more interactive. We're all here because we share a passion for innovation and making a difference.\n\nLet me start by sharing a quick story about how our team's work is making an impact. Just last week, I got an email from a user who told us our product helped them start their own business. That's the kind of impact we're all working towards.\n\nI want this to be more of a conversation than a presentation. Feel free to jump in with questions or share your own experiences. We're all learning from each other here.\n\nBefore we dive into the details, who's had an interesting challenge or success they'd like to share?\n\nLet's make this session as valuable for you as possible.`, 
    layout: { // Adjust layout percentages based on image!
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
    title: 'Workshop Facilitation',
    category: 'Presentations',
    image: require('../assets/presentationpics/pic1.png'),
    text: `Welcome to our Design Thinking Workshop!\n\nToday, we're going to explore how to solve complex problems through creative collaboration. This is a hands-on session, so get ready to roll up your sleeves and dive in.\n\nWe'll be following a structured process: First, we'll empathize with our users. Then, we'll define the problem clearly. After that, we'll ideate solutions, create prototypes, and test our ideas.\n\nEach activity will take about 20 minutes, and we'll have short breaks in between. I encourage you to work with people you haven't collaborated with before - that's where the magic happens!\n\nRemember, there are no bad ideas in this phase. We're here to explore possibilities and build on each other's thoughts.\n\nLet's start with our first activity: the empathy mapping exercise.`, 
    layout: { // Adjust layout percentages based on image!
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
  // --- End Presentation Prompts ---

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
  // --- End Speech Prompts ---

  // --- Interview Prompts (Placeholders - Customize details below!) ---
  // Remember to:
  // 1. Ensure image files are in 'assets/interviewpics/'
  // 2. Update `require('../assets/interviewpics/...')` with actual filenames.
  // 3. Customize placeholder `title`, `text`, and `layout` for each prompt.
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
    id: 'interview6',
    title: 'Interview with a Panel', 
    category: 'Interviews',
    image: require('../assets/interviewpics/pic3401.png'),
    text: `[Question 1]\nHow do you handle multiple stakeholders in a project?\n\n[Answer]\nI maintain clear communication channels and regular updates for all stakeholders. I use project management tools to track progress and ensure everyone is aligned with project goals and timelines.\n\n[Question 2]\nHow do you make decisions under pressure?\n\n[Answer]\nI gather relevant information quickly, consult with key team members, and make decisions based on data and experience. I remain calm and focused, considering both short-term and long-term implications.\n\n[Question 3]\nHow do you handle constructive criticism?\n\n[Answer]\nI view feedback as an opportunity for growth. I listen actively, ask clarifying questions, and implement suggested improvements. I've found this approach has helped me develop both professionally and personally.`, 
    layout: { position: 'absolute', width: '60%', height: '40%', top: '56%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
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
  // --- End Social & Casual Prompts ---

  // Add more prompts here in the future
]; 