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
    text: `Welcome to your interview with TechInnovate Solutions. I'm Sarah, the hiring manager for the Software Engineer position.\n\nBefore we begin, I'd like to understand your background and experience. Could you walk me through your resume, focusing on your most recent role and key achievements?\n\nPay attention to:\n- Clear communication of your experience\n- Highlighting relevant technical skills\n- Demonstrating problem-solving abilities\n- Showing enthusiasm for the role\n\nRemember to maintain good eye contact and speak confidently about your experience.`, 
    layout: { position: 'absolute', width: '60%', height: '30%', top: '64%', left: '15%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '8deg' }] }
  },
  {
    id: 'interview2',
    title: 'TV Presenter Interview', 
    category: 'Interviews',
    image: require('../assets/interviewpics/pic8025.png'),
    text: `"Tell me about yourself" is often the first question in an interview. This is your chance to make a strong first impression.\n\nStructure your answer to include:\n- Brief professional background\n- Key skills and expertise\n- Relevant achievements\n- Why you're interested in this role\n\nExample structure:\n"I'm a software engineer with 5 years of experience in full-stack development. I specialize in building scalable web applications using React and Node.js. In my current role at XYZ Company, I led a team that improved application performance by 40%. I'm particularly excited about this opportunity because..."\n\nKeep it concise (2-3 minutes) and relevant to the position.`, 
    layout: { position: 'absolute', width: '55%', height: '35%', top: '55%', left: '22%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '5deg' }] }
  },
  {
    id: 'interview3',
    title: 'Interview Scene 3', 
    category: 'Interviews',
    image: require('../assets/interviewpics/pic7621.png'),
    text: `"What are your greatest strengths?" is a common interview question that allows you to highlight your most relevant skills.\n\nWhen answering:\n- Choose 2-3 strengths relevant to the job\n- Provide specific examples\n- Show how these strengths benefit the company\n\nExample structure:\n"One of my key strengths is problem-solving. In my last role, I identified a bottleneck in our deployment process and implemented an automated solution that reduced deployment time by 50%. Another strength is my ability to collaborate effectively. I regularly work with cross-functional teams to ensure smooth project delivery..."\n\nBe honest but strategic in your response.`, 
    textColor: 'white',
    layout: { position: 'absolute', width: '70%', height: '30%', top: '20%', left: '15%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview4',
    title: 'Business Analyst Interview', 
    category: 'Interviews',
    image: require('../assets/interviewpics/pic7800.png'),
    text: `"What is your greatest weakness?" is a challenging question that tests your self-awareness and honesty.\n\nWhen answering:\n- Choose a real but not critical weakness\n- Show how you're working to improve it\n- Turn it into a positive\n\nExample structure:\n"One area I've been working on is public speaking. Early in my career, I found it challenging to present technical concepts to non-technical stakeholders. To improve this, I've taken public speaking courses and regularly volunteer to lead team presentations. This has helped me become more confident and effective in communicating complex ideas..."\n\nAvoid clichés like "I'm a perfectionist" or "I work too hard."`, 
    layout: { position: 'absolute', width: '50%', height: '34%', top: '57%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10,
      transform: [{ rotate: '2deg' }]
     }
  },
  {
    id: 'interview5',
    title: 'Marketing Manager Interview', 
    category: 'Interviews',
    image: require('../assets/interviewpics/01234.png'),
    text: `"Why do you want this job?" is your opportunity to show your enthusiasm and alignment with the company.\n\nStructure your answer to include:\n- What attracts you to the company\n- How your skills match the role\n- Your career goals\n\nExample structure:\n"I'm excited about this opportunity because TechInnovate's focus on AI-driven solutions aligns perfectly with my passion for machine learning. The role's emphasis on full-stack development matches my experience building scalable applications. I'm particularly drawn to your company culture of innovation and continuous learning, which matches my own values..."\n\nShow that you've researched the company and understand the role.`, 
    layout: { position: 'absolute', width: '55%', height: '34%', top: '60%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview6',
    title: 'News Reporter Interview', 
    category: 'Interviews',
    image: require('../assets/interviewpics/pic3921.png'),
    text: `"Where do you see yourself in 5 years?" helps interviewers understand your career aspirations and commitment.\n\nWhen answering:\n- Show ambition but be realistic\n- Align with company growth\n- Demonstrate long-term interest\n\nExample structure:\n"In five years, I see myself as a senior software engineer leading complex projects and mentoring junior developers. I'm particularly interested in growing my expertise in cloud architecture and AI integration. I hope to contribute to TechInnovate's mission of transforming industries through technology while developing my leadership skills..."\n\nAvoid mentioning plans that might conflict with the role or company.`, 
    layout: { position: 'absolute', width: '60%', height: '38%', top: '57%', left: '25%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, transform: [{ rotate: '4deg' }] }
  },
  {
    id: 'interview7',
    title: 'Interview with a Panel', 
    category: 'Interviews',
    image: require('../assets/interviewpics/pic3401.png'),
    text: `"Do you have any questions for us?" is your chance to show interest and gather important information.\n\nPrepare questions about:\n- Team dynamics and culture\n- Growth opportunities\n- Current projects\n- Performance expectations\n\nExample questions:\n"Could you tell me about the team I'll be working with and how projects are typically structured?"\n"What opportunities are there for professional development and learning new technologies?"\n"How does the company measure success in this role?"\n"What are the biggest challenges the team is currently facing?"\n\nAvoid questions about salary or benefits at this stage.`, 
    layout: { position: 'absolute', width: '60%', height: '40%', top: '56%', left: '20%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
  },
  {
    id: 'interview8',
    title: 'One to One Interview', 
    category: 'Interviews',
    image: require('../assets/interviewpics/444.png'),
    text: `Behavioral questions assess how you've handled situations in the past. They often start with "Tell me about a time when..."\n\nUse the STAR method to structure your answers:\nSituation: Describe the context\nTask: Explain what needed to be done\nAction: Detail what you did\nResult: Share the outcome\n\nExample question: "Tell me about a time you faced a difficult technical challenge."\n\nExample answer structure:\n"Situation: Our team was facing performance issues with our database queries...\nTask: We needed to improve response times by 50%...\nAction: I analyzed the queries, implemented indexing, and optimized the code...\nResult: We achieved a 60% improvement in performance..."\n\nPrepare multiple examples for different scenarios.`, 
    layout: { position: 'absolute', width: '70%', height: '35%', top: '60%', left: '16%', backgroundColor: 'transparent', overflow: 'hidden', borderRadius: 10, }
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