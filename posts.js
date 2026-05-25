// ============================================================
//  KUSHI'S JOURNAL — POSTS FILE
// ============================================================
//
//  HOW TO ADD A NEW POST:
//
//  1. Find the section you want (TIES, CLOUDS, LOOPS, or MARKERS)
//  2. Copy an existing post (everything between { and },)
//  3. Paste it at the TOP of that section (so newest shows first)
//  4. Change the text to your new writing
//  5. Save the file — site updates in ~30 seconds
//
//  TIPS:
//  - Use backticks ` ` for the body field so you can write
//    multiple paragraphs. Separate paragraphs with a blank line.
//  - If your writing has a backtick ` use \` instead
//  - Keep all the commas, brackets, and quotes in place
//
// ============================================================


// ─── TIES ─── full essays about people and relationships
//
// Template:
//   {
//     title:   "Your title here",
//     date:    "May 24",
//     mins:    "5",
//     excerpt: "A short teaser sentence or two.",
//     body: `Your full writing goes here.
//
// Second paragraph here.
//
// Third paragraph here. As many as you want.`
//   },

const TIES = [
  {
    title:   "The way you explained things to me",
    date:    "May 14",
    mins:    "5",
    excerpt: "You had a way of making the complicated feel obvious. I wonder sometimes if that was patience, or just love wearing a different coat.",
    body: `You had a way of making the complicated feel obvious. I wonder sometimes if that was patience, or just love wearing a different coat.

There were nights where I didn't understand myself, and you'd sit there, untangling my own thoughts for me like they were yours to carry. You never rushed it. Never made me feel stupid for not getting there on my own.

I think about that now, in rooms where no one explains anything. Where people talk at you instead of to you. Where clarity is a luxury and not something someone just hands you because they care.

You made understanding feel like a gift. And I didn't know it was rare until it was gone.`
  },
  {
    title:   "People who leave without saying why",
    date:    "Apr 28",
    mins:    "7",
    excerpt: "Some exits are clean. Others are a slow disappearance, messages getting shorter, calls never returned. You learn to read the space between responses.",
    body: `Some exits are clean. Others are a slow disappearance, messages getting shorter, calls never returned. You learn to read the space between responses.

I've been left before, but never like that. The kind where you don't even get a door shutting. Just silence where sound used to be.

You start checking your phone differently. Not hoping, exactly, but scanning. Looking for proof that you didn't imagine the whole thing. That the warmth was real and not just something you projected onto someone who was already halfway out.

The worst part isn't the leaving. It's the not knowing why. Because without a reason, you fill in the blank yourself, and you never write anything kind.`
  },
  {
    title:   "On being someone's favourite person",
    date:    "Apr 10",
    mins:    "4",
    excerpt: "There's a weight to it. Being held in that much warmth. It changes how carefully you move.",
    body: `There's a weight to it. Being held in that much warmth. It changes how carefully you move.

When someone chooses you as their person, their first call, their safe place, you start carrying something invisible. Not a burden exactly. More like an awareness. That your words land harder. That your silence means more. That you can break something without meaning to.

I used to think being loved was the easy part. But being someone's favourite is different. It asks you to show up, every time, even when you're tired. Especially when you're tired.

It's a beautiful kind of heavy.`
  },
];


// ─── CLOUDS ─── short floating thoughts
//
// Template:
//   {
//     text: "Your fleeting thought here.",
//     date: "May 24"
//   },

const CLOUDS = [
  {
    text: "Some days feel borrowed. Like I'm spending time I haven't earned yet.",
    date: "May 20"
  },
  {
    text: "Being understood is not the same as being known.",
    date: "May 12"
  },
  {
    text: "I keep rereading old conversations looking for the moment it changed.",
    date: "May 17"
  },
  {
    text: "There's a certain kind of tired that sleep doesn't fix.",
    date: "May 8"
  },
  {
    text: "I spoke too honestly and spent three days wondering if that was a mistake.",
    date: "Apr 30"
  },
  {
    text: "The version of me before that conversation — I miss her a little.",
    date: "Apr 22"
  },
];


// ─── LOOPS ─── recurring "what if" thoughts
//
// Template:
//   {
//     question: "Your what-if question?",
//     body:     "A paragraph explaining when this thought comes back."
//   },

const LOOPS = [
  {
    question: "What if I'm wrong about everything I think I know about myself?",
    body:     "This one comes back every few months. Usually after a conversation that goes deeper than expected, or after watching someone else seem so sure of who they are."
  },
  {
    question: "What if I waited too long, and now it's too late?",
    body:     "For the decision. The message. The version of my life I kept deferring. I don't always know what the thing is, just the feeling that a window is closing."
  },
  {
    question: "What if they remember me differently than I remember myself?",
    body:     "The gap between who we are and who we seem is unsettling. I go back over things I said and try to see them from the outside."
  },
  {
    question: "What if nothing I'm afraid of actually matters?",
    body:     "This one is less anxiety and more exhaustion. What if all this weight I've been carrying is just optional?"
  },
];


// ─── MARKERS ─── moments that left a trace
//
// Template:
//   {
//     title: "Your title here",
//     body:  "A paragraph about the moment.",
//     when:  "May 2026 · Turning point",
//     lit:   false
//   },
//   For "when", use: Turning point, Ending, Beginning, or In between
//   Set lit: true for the most important one (highlighted dot)

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
