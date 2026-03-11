/*  ═══════════════════════════════════════════════════════════════
 *  🎂  BIRTHDAY SITE CONFIG  —  Edit everything here!
 *  ═══════════════════════════════════════════════════════════════
 *  
 *  HOW TO USE:
 *  1. Change any value below to personalise the site.
 *  2. Save the file. That's it — every page reads from here.
 *  
 *  TIP:  Strings use quotes ("..."). Keep the quotes!
 *        Dates use { year, month, day }. Month is 1-12.
 *  ═══════════════════════════════════════════════════════════════ */

const CONFIG = {

  /* ─── GENERAL ──────────────────────────────────────────────── */
  name: "Medha",                         // The birthday person's name

  /* ─── LOGIN PAGE ───────────────────────────────────────────── */
  password: "finally",                    // Password to unlock the site
  loginEmoji: "🥳🎂🎉",                  // Big emoji displayed at top
  loginTitle: "It's Finally Your Birthday 🎂",
  loginSubtitle: "I waited for it for so long 💕",
  // The button label (before unlock)
  loginButton: "Let's Go! (i really hope you like it)",
  // Error shown on wrong password
  loginError: "Oops, who're you? Don't dare to open it!",
  loginErrorHint: "just try again - there might be a little typo",

  /* ─── BIRTHDAY / TIMELAPSE PAGE ────────────────────────────── */
  heroTitle: "It's finally your birthday!",
  heroNote: "May your year be warm, bright and filled with tiny beautiful moments - this and every.",
  timelineTitle: "A little timeline - from the day I asked",

  // Calendar timelapse start & end dates  (month is 1–12)
  startDate: { year: 2025, month: 5, day: 11 },   // 11 May 2025
  endDate:   { year: 2025, month: 11, day: 15 },   // 15 Nov 2025

  // The screenshot / image shown on the birthday page
  screenshotImage: "screenshot.jpg",
  screenshotAlt: "Birthday conversation screenshot",

  // Message below the screenshot  (HTML allowed)
  screenshotCaption: 'Do you remember this message?',
  waitingMessage:
    'waiting from <strong>11 May</strong> until <strong>15 Nov</strong> ' +
    'was super exciting and it felt like it was years , still If any of this ' +
    'brings a small smile today, then every hour was worth it. Wishing you ' +
    'a calm, happy birthday - you deserve every good thing.',

  // "Next" section text
  nextSectionText: "So , Next .. ☕",

  /* ─── COFFEE PAGE ──────────────────────────────────────────── */
  coffeeTitle: "Would you like to have a coffee with me?",
  coffeeSub: "A short virtual coffee , no pressure.",

  // Pleading stages when they click "No"
  plead1Title: "Please, it's just a virtual coffee ☕🙂",
  plead1Sub: "Only a few minutes - promise.",
  plead2Title: "Please 🥺☕",
  plead2Sub: "Just one short virtual coffee - tap Yes?",
  plead2Button: "Fine..",

  // Dialogue bubbles shown during the coffee animation
  dialogues: [
    "Happy Birthday Medha! 🎉",
    "I hope you get all the happiness in the world , you really deserve it 💫",
    "Thanks for coming here, there's something I wrote for you... please take it light 💌",
  ],

  // Final panel after the coffee animation
  finalTitle: "Here is this letter..",
  finalButtonText: "Read the Letter",

  /* ─── LETTER PAGE ──────────────────────────────────────────── */
  letterGreeting: "Happy Birthday Medha 🥳✨",
  letterDate: "November 15, 2025 at 11:11",

  // Each item becomes a <p> paragraph in the letter
  letterParagraphs: [
    "You might think I'm late but check the timestamp - 11:11, angel hour, your time. I waited for this exact second, even though it was so so hard , because I wanted you to enjoy your birthday first fully, and just take last few minutes for me.",

    "This date has lived as my lockscreen password for months. The day you told me your birthday, I locked it in like a vault.",

    "I've been building this site just to make your day feel even half as special as you make everyone around you feel without trying. You deserve the whole world and thousand surprises, but I never earned the rights to give them. Still, I poured what I could into this, because even our short text threads felt like gifts. Every second with you, even across screens, has been a highlight reel I replay when the world goes quiet.",

    "Medha - Goddess Saraswati's name carved in calm eyes that don't just look beautiful, they hold entire stories. Your wisdom turns formal chats into something deeper. Your kindness lights up lives without effort, especially mine. I genuinely think: how can someone be this smart, this kind, this effortlessly amazing every single time your name pops up? You have no idea how rare that is.",

    "I asked to be your online friend knowing the answer would be no, but then when our Chemistry ma'am appreciated you in class when you were absent, and damn, that glow hit me hard. I wanted to tell you but boundaries held me back. And soon exams ended, so I gathered courage and asked anyway. And you? You didn't laugh, didn't expose me, didn't make me feel small. That kindness alone proves my choice was perfect.",

    "I built a whole future in my head where you'd text back and everything would align. I wanted to be the one who made you feel safe, valued, never a burden. But I'm self-aware enough to see the truth. Still, you said you're not ready without saying something hurtful, and I really respect that. You don't owe anyone your time, your energy, your future. You've got your own choice, life goals, parents to make proud, small wishes to chase.",

    "So here's the part I shouldn't say on your birthday, but I might never get another chance to say it, so... I'm letting you go from my one-sided love story. Not because you did anything wrong , never that. Not because I'm giving up too soon, but because if it's not meant to be, no amount of trying or waiting will force it. Some stories are chapters, not books. Some dreams look close but live light-years away.",

    "I thought you were here to complete my dreams. Turns out you became the dream, and that's okay.",

    "This isn't me walking away bitter. This is my final act of love , stepping back so you can have the future you deserve with someone who matches your orbit, not chases it. I hope you find him at the right time. I hope he sees what I saw. I hope they never take it for granted.",

    "And the door stays open if you ever feel low, even if words fail, or if you just need someone to listen - no catch, no strings, no hidden hopes. I'm here. Your secrets die with me, always.",

    "Thank you for showing me what love feels like, even one-sided. You taught me people in love build websites at 3 AM - Months before, memorize birthdays like prayers, turn rejection into respect. I'll carry that forever. And one day when it will be mutual, I can't wait to feel that version.",

    "Take care of yourself. Best of Luck for whatever you aim for - Ik you're gonna get it , Either it be UPSC or whatever . Make your parents beam. Chase every dream until the stars line up, and have the most incredible year ahead.",
  ],

  letterBestLuck: "Best of Luck.",
  letterSignatureLabel: "— the guy who had the longest and most loyal crush on you",
  letterSignatureName: "softsideof_",
  letterThankYou: "Thank You",
};
