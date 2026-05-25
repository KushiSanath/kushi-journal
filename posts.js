// ============================================================
//  KUSHI'S JOURNAL — POSTS FILE
// ============================================================
//
//  HOW TO ADD A NEW POST:
//
//  1. Find the section you want to add to (TIES, CLOUDS, LOOPS, or MARKERS)
//  2. Copy an existing post (everything between { and },)
//  3. Paste it at the TOP of that section's list (so newest shows first)
//  4. Change the text to your new writing
//  5. Save the file — your site updates automatically in ~30 seconds
//
//  IMPORTANT RULES:
//  - Keep the quotes "   " or '   ' around every piece of text
//  - If your writing has an apostrophe (like don't), use \' instead: don\'t
//  - Keep the commas where they are
//  - Don't delete the [ ] brackets or the { } around each post
//
// ============================================================


// ─── TIES ─── full essays about people
// Template for a new Ties post:
//   {
//     title: "Your title here",
//     date:  "May 24",
//     mins:  "5",
//     excerpt: "A short teaser sentence or two."
//   },

const TIES = [
  {
    title: "Fractured Girlhood",
    date:  "May 25",
    mins:  "5",
    excerpt: "I grew up spending most of my time around male friendships, partially because I saw how toxic the female friendships around me were but also mostly because I went to a male dominant school."
  },
  {
    title: "The way you explained things to me",
    date:  "May 14",
    mins:  "5",
    excerpt: "You had a way of making the complicated feel obvious. I wonder sometimes if that was patience, or just love wearing a different coat."
  },
  {
    title: "People who leave without saying why",
    date:  "Apr 28",
    mins:  "7",
    excerpt: "Some exits are clean. Others are a slow disappearance, messages getting shorter, calls never returned. You learn to read the space between responses."
  },
  {
    title: "On being someone's favourite person",
    date:  "Apr 10",
    mins:  "4",
    excerpt: "There's a weight to it. Being held in that much warmth. It changes how carefully you move."
  },
];


// ─── CLOUDS ─── short floating thoughts
// Template for a new Clouds post:
//   {
//     text: "\"Your fleeting thought here.\"",
//     date: "May 24"
//   },

const CLOUDS = [
  {
    text: "\"Some days feel borrowed. Like I'm spending time I haven't earned yet.\"",
    date: "May 20"
  },
  {
    text: "\"Being understood is not the same as being known.\"",
    date: "May 12"
  },
  {
    text: "\"I keep rereading old conversations looking for the moment it changed.\"",
    date: "May 17"
  },
  {
    text: "\"There's a certain kind of tired that sleep doesn't fix.\"",
    date: "May 8"
  },
  {
    text: "\"I spoke too honestly and spent three days wondering if that was a mistake.\"",
    date: "Apr 30"
  },
  {
    text: "\"The version of me before that conversation — I miss her a little.\"",
    date: "Apr 22"
  },
];


// ─── LOOPS ─── recurring "what if" thoughts
// Template for a new Loops post:
//   {
//     question: "\"Your what-if question?\"",
//     body:     "A paragraph explaining when and why this thought comes back."
//   },

const LOOPS = [
  {
    question: "\"What if I'm wrong about everything I think I know about myself?\"",
    body:     "This one comes back every few months. Usually after a conversation that goes deeper than expected, or after watching someone else seem so sure of who they are."
  },
  {
    question: "\"What if I waited too long, and now it's too late?\"",
    body:     "For the decision. The message. The version of my life I kept deferring. I don't always know what the thing is, just the feeling that a window is closing."
  },
  {
    question: "\"What if they remember me differently than I remember myself?\"",
    body:     "The gap between who we are and who we seem is unsettling. I go back over things I said and try to see them from the outside."
  },
  {
    question: "\"What if nothing I'm afraid of actually matters?\"",
    body:     "This one is less anxiety and more exhaustion. What if all this weight I've been carrying is just optional?"
  },
];


// ─── MARKERS ─── moments that left a trace
// Template for a new Markers post:
//   {
//     title: "Your title here",
//     body:  "A paragraph about the moment.",
//     when:  "May 2026 · Turning point",   // can also be: Ending, Beginning, In between
//     lit:   false                          // set to true for the most important one
//   },

const MARKERS = [
  {
    title: "The day I stopped pretending I was fine",
    body:  "It wasn't dramatic. No one noticed. But something in me decided, quietly, not to perform it anymore. That small choice rearranged a lot.",
    when:  "May 2026 · Turning point",
    lit:   true
  },
  {
    title: "A goodbye I didn't know was a goodbye",
    body:  "I only understood it months later, looking back. There was nothing special about the moment while it happened. That's the thing about endings, they don't announce themselves.",
    when:  "Feb 2026 · Ending",
    lit:   false
  },
  {
    title: "The first time I chose myself without apologising",
    body:  "Small act. Big interior shift. I kept waiting for the guilt to arrive and it didn't, not all of it, anyway.",
    when:  "Nov 2025 · Beginning",
    lit:   false
  },
  {
    title: "The conversation that divided time into before and after",
    body:  "Some things, once said, change the shape of everything around them. I still think about the exact words. How ordinary they seemed at first.",
    when:  "Aug 2025 · In between",
    lit:   false
  },
];
