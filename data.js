// ── ALL PAGE CONTENT ──
// Each "spread" = { left: HTMLstring, right: HTMLstring }
// Pages are pairs; we navigate spread by spread.

const spreads = [];

// ── SPREAD 0: INTRO ──
spreads.push({
  left: `
    <div class="page-content left-shadow">
      <div class="torn-edge"></div>
      <div class="tape-h" style="width:72px;top:14px;left:42%;transform:translateX(-50%) rotate(-2deg)"></div>
      <div class="sticker" style="top:8px;right:18px">🌸</div>
      <div class="margin-note" style="top:48%">read slowly ♡</div>
      <div class="ink-splat" style="top:38%;left:82%"></div>
      <div class="doodle-star" style="bottom:50px;right:20px">✦</div>

      <div style="margin-top:28px">
        <div class="intro-big">a letter to<br>every girl<br>i've been</div>
        <div class="pg-body">
          <p>to every girl i've been,</p>
          <p>i'm sorry.</p>
          <p>i'm sorry for how often i wished you away.</p>
          <p>how badly i wanted to become someone else.</p>
          <p>someone happier. someone easier.</p>
          <p>someone less afraid.</p>
        </div>
        
      </div>
      <div class="pg-num left">i</div>
    </div>`,
  right: `
    <div class="page-content right-bg">
      <div class="torn-edge" style="background:var(--page-r)"></div>
      <div class="washi" style="width:60px;top:18px;right:28px;transform:rotate(3deg)"></div>
      <div class="sticker" style="bottom:38px;right:18px">💜</div>
      <div class="corner-fold"></div>

      <div style="margin-top:22px">
        <div class="pg-body">
          <p>i didn't understand then what i know now.</p>
          <p>you were never standing in the way of my future.</p>
          <p>you were carrying me toward it.</p>
          <br>
          <p>and if i could meet every version of myself one last time,</p>
          <p>i don't think i'd give them advice.</p>
          <p>i don't think i'd tell them what happens next.</p>
          <br>
          <p>i think i'd just hold them for a little longer.</p>
          <br>
          <p>because they spent years trying to become me.</p>
          <p>and there are still days when all i want</p>
          <p>is to become them again.</p>
          
        </div>
        <div class="intro-sig">— diya ♡</div>
      </div>
      <div class="pg-num right">ii</div>
    </div>`
});

// ── SPREAD 1: TABLE OF CONTENTS ──
spreads.push({
  left: `
    <div class="page-content left-shadow">
      <div class="torn-edge"></div>
      <div class="tape-h" style="width:80px;top:16px;left:50%;transform:translateX(-50%) rotate(-1deg)"></div>
      <div class="sticker" style="top:10px;right:16px;font-size:22px">📖</div>
      <div class="margin-note" style="top:42%">these are mine</div>

      <div class="page-center" style="height:100%;padding-top:20px">
        <div style="text-align:center">
          <div style="font-family:'Caveat',cursive;font-weight:700;font-size:clamp(34px,6vw,52px);color:var(--deepest);line-height:1.05">what's<br>inside</div>
          <div style="margin-top:10px;font-family:'Reenie Beanie',cursive;font-size:16px;color:var(--violet)">nine confessions ✦</div>
        </div>
      </div>
      <div class="doodle-star" style="bottom:40px;left:24px;font-size:18px;opacity:0.4">✧ ✧ ✧</div>
      <div class="pg-num left">iii</div>
    </div>`,
  right: `
    <div class="page-content right-bg" id="toc-right">
      <div class="torn-edge" style="background:var(--page-r)"></div>
      <div class="tape-h" style="width:55px;top:18px;left:26px;transform:rotate(-2deg)"></div>
      <div style="margin-top:26px">
        <div class="toc-heading">contents</div>
        <div id="toc-list"></div>
      </div>
      <div class="pg-num right">iv</div>
    </div>`
});

// ── ENTRY DATA ──
const entries = [
  {
    title: "what exactly is love?",
    mood: "wondering · 2026",
    left: `<p>you're asking the wrong person, honestly. i've spent almost twenty years on this planet without a proper relationship and with enough butterflies to count on one hand. most of what i know about love comes from stolen glances, songs that hurt a little too much, and watching people become softer around someone they care about.</p>
<p>but i think love is cute.</p>
<p>not in the flowers-and-chocolates way. in the "i saw this and thought of you" way. in the remembering-how-they-take-their-coffee way. in the way a person can walk into a room and somehow make it feel warmer.</p>
<p>and yet, for something so sweet, love is terrifying. nobody talks about that part enough.</p>`,
    right: `<p>because one day you're perfectly fine being your own little universe, and the next, someone accidentally becomes a moon around which your thoughts begin to orbit.</p>
<p>love is handing someone a map to all the places inside you that you've spent years protecting and just hoping they won't burn them down.</p>
<p>it's wanting to be known and fearing it at the exact same time.</p>
<p>maybe love isn't butterflies. maybe it's courage dressed up as tenderness. maybe it's the bravest thing people do without ever realising they're being brave.</p>
<p>and if all of that is true — then i guess i only have one question left.</p>
<p><em>when will it find me?</em></p>`,
    decos: { sticker: '🌙', note: 'i feel this deeply', washi: true }
  },
  {
    title: "do i even want to date?",
    mood: "complicated · 2026",
    left: `<p>or am i just in love with the idea of someone choosing me?</p>
<p>because those are two very different things.</p>
<p>the idea is easy. the idea is beautiful. someone looking at a room full of people and somehow deciding that you're their favorite. someone choosing you on random tuesdays, on bad hair days, after arguments, after mistakes.</p>
<p>who wouldn't want that?</p>
<p>but dating is different. dating means being known. and that's where things get complicated.</p>`,
    right: `<p>because i've spent years building walls so high that they've practically become part of the landscape. brick by brick. disappointment by disappointment.</p>
<p>they're not there because i'm cold. they're there because i've learned that not everyone deserves access to every version of me.</p>
<p>maybe i'm not waiting for perfection. maybe i'm waiting for safety. for someone patient enough to knock instead of forcing their way in.</p>
<p>the cruel part? sometimes the people you would have torn your walls down for are the very reason you built them higher.</p>`,
    decos: { sticker: '💭', note: 'still figuring it out', washi: false }
  },
  {
    title: "happiness and sadness in the same room",
    mood: "realising · 2026",
    left: `<p>one of the hardest things i've had to learn is that happiness and sadness can exist in the same room.</p>
<p>for the longest time, i thought they were enemies. i thought if i was truly happy, there would be no sadness left.</p>
<p>turns out, life isn't nearly that simple.</p>
<p>you can miss someone and still know you're better off without them. you can love someone and not want them anymore. you can close a chapter without hating the characters.</p>`,
    right: `<p>for so long, i genuinely thought something inside me was wired incorrectly. i had a happy personality and a sad soul.</p>
<p>i was the friend making jokes while carrying storms nobody could see.</p>
<p><em>(what is diya without her occasional depression phase anyway?)</em></p>
<p>but sadness was never the opposite of happiness. it was proof that i had loved, hoped, cared, dreamed.</p>
<p>happiness and sadness were simply sharing the same home. and after all these years, they've learned to live together.</p>
<p>i just wish they hadn't met through me.</p>`,
    decos: { sticker: '🩷', note: 'both can be true', washi: true }
  },
  {
    title: "when did the world become so nonchalant?",
    mood: "nostalgic · 2026",
    left: `<p>or maybe it always was, and i'm just late to the realization.</p>
<p>somewhere along the way, missing someone became embarrassing. caring became "too much." feeling deeply became something you were supposed to outgrow.</p>
<p>i was cleaning my room when i found an old journal. i opened it randomly. and there she was — a version of me from four years ago. completely overwhelmed. completely convinced she wouldn't survive what she was feeling.</p>`,
    right: `<p>it was strange reading her words. because i don't feel that way anymore.</p>
<p>and suddenly i wasn't just reading a journal. i was meeting a girl i used to be. and grieving her, a little. not because she died. because she changed. because she survived into someone she didn't recognise yet.</p>
<p>it's been so long since i've written anything. i just don't write unless something feels too big to hold inside me.</p>
<p>four years ago, she thought she'd never be okay again.</p>
<p>today, i'm okay. and somehow, neither of us got what we expected.</p>`,
    decos: { sticker: '📓', note: 'four years ago...', washi: false }
  },
  {
    title: "the tragedy of becoming okay",
    mood: "bittersweet · 2026",
    left: `<p>everyone talks about surviving. nobody talks about what comes next.</p>
<p>for years, i thought healing would feel like a celebration. like confetti. like relief.</p>
<p>instead, it felt a lot like grief.</p>
<p>because when you've carried sadness long enough, it stops feeling like an emotion. it becomes part of your identity. it shapes your music taste, your writing, your humor, your perspective.</p>
<p>and then one day, without realising it, you start getting better.</p>`,
    right: `<p>and suddenly you're faced with a question nobody prepared you for.</p>
<p><em>who am i without this?</em></p>
<p>i spent years wanting to become someone happier. then happiness arrived, and all i could think about was the girl who had to suffer for me to meet her. the girl who turned pain into poetry because she didn't know what else to do with it.</p>
<p>i don't miss the sadness. but sometimes... i miss her.</p>
<p>she was having the worst time of her life. and somehow, she's the one i'm homesick for.</p>`,
    decos: { sticker: '🫧', note: 'grief looked like this', washi: true }
  },
  {
    title: "nobody is coming",
    mood: "growing up · 2026",
    left: `<p>growing up is realising nobody is coming.</p>
<p>not in a sad way. not in a bitter way. just in the same way you realise summer eventually ends and childhood eventually leaves.</p>
<p>for years, i thought there would be a moment. a person. a conversation. something that would arrive and suddenly make everything easier.</p>
<p>but life doesn't work like that.</p>`,
    right: `<p>people can love you. people can support you. people can sit beside you while you struggle. but nobody can climb inside your mind and fight your battles for you.</p>
<p>at some point, you have to do that yourself.</p>
<p>and one day, after years of waiting, you stop checking the horizon. you pick it up yourself. and somehow, you survive.</p>
<p>one day i became the person i needed years ago.</p>
<p>nobody warned me that would hurt too. because the moment i finally became my own hero... i realised how long that little girl had been waiting for one.</p>`,
    decos: { sticker: '🌿', note: 'no one is coming', washi: false }
  },
  {
    title: "i romanticize everything",
    mood: "self-aware · 2026",
    left: `<p>i think i've lived a thousand lives in my head.</p>
<p>i've dated people i've never touched. had conversations that never happened. fallen apart over futures that never existed.</p>
<p>why do i romanticize everything?</p>
<p>most people experience moments. i seem to collect them. store them away. turn them over in my head until they've become something bigger than they were ever meant to be.</p>`,
    right: `<p>when you romanticize everything, you don't just fall for people. you fall for possibilities. for potential. for almosts.</p>
<p>i've had conversations that lasted ten minutes and occupied my thoughts for months. i've mourned futures that never existed. i've missed people i never really had.</p>
<p>sometimes i wonder how many of my heartbreaks were real. and how many belonged to stories i wrote myself.</p>
<p>still, i don't think i'd change it. because yes, it hurts. but it also means i get to experience life in colors some people never notice.</p>
<p>the only problem is that sometimes i fall in love with stories before they've even had the chance to become memories.</p>`,
    decos: { sticker: '🎞️', note: 'all in my head', washi: true }
  },
  {
    title: "the loneliness nobody talks about",
    mood: "honest · 2026",
    left: `<p>people always assume loneliness means having nobody.</p>
<p>i don't think that's true.</p>
<p>i have people. good people. the kind who would answer my call at 2 a.m.</p>
<p>the problem is that whenever i start falling apart, my first instinct is never to reach out. it's always to convince myself not to. what if they're busy? what if i become one more thing they have to carry?</p>`,
    right: `<p>funny how people encourage you to come out of your shell until they decide your shell was easier to handle.</p>
<p>the thing nobody tells you about shrinking yourself is that eventually you forget your original shape.</p>
<p>i've spent so long introducing people to different versions of me that i'm not sure i've ever met the original myself.</p>
<p>i knew how to carry everyone else's storms. i just never learned where to put my own.</p>
<p>and sometimes i wonder which hurts more — the people who convinced me i was too much, or the fact that i believed them.</p>`,
    decos: { sticker: '🤍', note: 'still unlearning this', washi: false }
  },
  {
    title: "finally liking my own company",
    mood: "peaceful · 2026",
    left: `<p>i think i'm finally liking my own company.</p>
<p>that feels strange to say out loud.</p>
<p>because for the longest time, being alone with my thoughts used to feel like a place i needed to escape from. silence wasn't peaceful — it was loud in a different way.</p>
<p>but lately, something has shifted. not dramatically. more like… i stopped running.</p>`,
    right: `<p>now i sit with myself differently. i don't rush to fill every gap with noise. i can be in a room alone and not feel like i need to become someone else to make it bearable.</p>
<p>there's still overthinking sometimes. that probably never fully leaves. but it doesn't swallow me the same way anymore. it feels less like drowning and more like passing waves.</p>
<p>i don't think i'm suddenly healed or completely different or anything dramatic like that.</p>
<p>but i do think i'm starting to enjoy my own presence.</p>
<p>and for someone who used to treat solitude like something to escape from… that feels like a very soft kind of victory. ✦</p>`,
    decos: { sticker: '☁️', note: 'a soft victory ♡', washi: true }
  }
];

// Build entry spreads
const entryDecoSets = [
  { tapeW: 68, tapeOff: '44%', stickerPos: {top:'9px',right:'17px'} },
  { tapeW: 76, tapeOff: '22px', stickerPos: {top:'8px',right:'18px'} },
  { tapeW: 58, tapeOff: '48%', stickerPos: {top:'7px',right:'16px'} },
  { tapeW: 72, tapeOff: '36px', stickerPos: {top:'10px',right:'19px'} },
  { tapeW: 64, tapeOff: '40%', stickerPos: {top:'8px',right:'17px'} },
  { tapeW: 80, tapeOff: '28px', stickerPos: {top:'9px',right:'18px'} },
  { tapeW: 60, tapeOff: '46%', stickerPos: {top:'7px',right:'16px'} },
  { tapeW: 74, tapeOff: '32px', stickerPos: {top:'10px',right:'18px'} },
  { tapeW: 66, tapeOff: '42%', stickerPos: {top:'8px',right:'17px'} },
];

entries.forEach((e, i) => {
  const d = entryDecoSets[i];
  const tapeStyle = d.tapeOff.includes('%')
    ? `width:${d.tapeW}px;top:15px;left:${d.tapeOff};transform:translateX(-50%) rotate(${[-2,2,-1,1,-3,2,-1,3,-2][i]}deg)`
    : `width:${d.tapeW}px;top:15px;left:${d.tapeOff};transform:rotate(${[-2,2,-1,1,-3,2,-1,3,-2][i]}deg)`;

  const pgL = (i + 2) * 2 - 1;
  const pgR = (i + 2) * 2;

  spreads.push({
    left: `
      <div class="page-content left-shadow">
        <div class="torn-edge"></div>
        <div class="tape-h" style="${tapeStyle}"></div>
        <div class="sticker" style="top:${d.stickerPos.top};right:${d.stickerPos.right}">${e.decos.sticker}</div>
        <div class="margin-note" style="top:${42 + (i%3)*5}%">${e.decos.note}</div>
        <div class="ink-splat" style="top:${30+i*5}%;left:${75+i%3*5}%"></div>
        ${e.decos.washi ? `<div class="washi" style="width:52px;bottom:${44+i%4*6}px;left:18px;transform:rotate(${-2+i%3}deg)"></div>` : ''}
        <div class="doodle-star" style="bottom:${36+i%3*8}px;right:${18+i%2*10}px">✦</div>

        <div style="margin-top:22px">
          <div class="pg-title">${e.title}</div>
          <div class="pg-mood">${e.mood}</div>
          <div class="pg-body">${e.left}</div>
        </div>
        <div class="pg-num left">${pgL}</div>
      </div>`,
    right: `
      <div class="page-content right-bg">
        <div class="torn-edge" style="background:var(--page-r)"></div>
        <div class="tape-h" style="width:50px;top:18px;right:32px;transform:rotate(${2+i%3}deg);background:var(--tape2)"></div>
        <div class="corner-fold"></div>
        ${i % 2 === 0 ? `<div class="sticker" style="bottom:${34+i%3*6}px;right:16px;font-size:14px;opacity:0.5">✧</div>` : ''}

        <div style="margin-top:22px">
          <div class="pg-body">${e.right}</div>
        </div>
        <div class="pg-num right">${pgR}</div>
      </div>`
  });
});

// ── SPREAD: MORE TO COME ──
spreads.push({
  left: `
    <div class="page-content left-shadow">
      <div class="torn-edge"></div>
      <div class="tape-h" style="width:70px;top:14px;left:50%;transform:translateX(-50%) rotate(-2deg)"></div>
      <div class="sticker" style="top:10px;right:18px;font-size:22px">🌙</div>
      <div class="margin-note" style="top:45%">she's still writing</div>

      <div class="page-center">
        <div class="more-big">more to come.</div>
        <div style="margin-top:8px;font-family:'Reenie Beanie',cursive;font-size:17px;color:var(--violet);text-align:center">
          she's still figuring it out.<br>
          and that's the whole point.
        </div>
        <div style="margin-top:24px;font-family:'Just Another Hand',cursive;font-size:14px;color:rgba(180,150,220,0.5);letter-spacing:0.1em">
          ✦ &nbsp; check back &nbsp; ✦
        </div>
      </div>
      <div class="doodle-star" style="bottom:36px;left:24px;opacity:0.35;font-size:16px">✧ ✧ ✧</div>
      <div class="pg-num left">23</div>
    </div>`,
  right: `
    <div class="page-content right-bg">
      <div class="torn-edge" style="background:var(--page-r)"></div>
      <div class="washi" style="width:65px;top:18px;right:28px;transform:rotate(3deg)"></div>
      <div class="sticker" style="bottom:40px;right:20px;font-size:20px">💜</div>
      <div class="corner-fold"></div>

      <div class="page-center">
        <div style="font-family:'Reenie Beanie',cursive;font-size:52px;color:rgba(180,150,220,0.2);line-height:1">...</div>
        <div style="margin-top:12px;font-family:'Caveat',cursive;font-size:clamp(14px,2vw,17px);color:var(--ink);opacity:0.6;text-align:center;line-height:1.85;max-width:220px">
          <p>every girl she's still becoming</p>
          <p>deserves a page too.</p>
        </div>
      </div>
      <div class="pg-num right">24</div>
    </div>`
});

// ── SPREAD: CLOSING PAGE ──
spreads.push({
  left: `
    <div class="page-content left-shadow" style="background:linear-gradient(160deg,#f0eaff,#f8f4ff)">
      <div class="torn-edge" style="background:#f0eaff"></div>
      <div class="tape-h" style="width:60px;top:16px;left:50%;transform:translateX(-50%) rotate(-1deg)"></div>
      <div class="sticker" style="top:12px;right:20px;font-size:20px">✦</div>

      <div class="page-center">
        <div style="font-family:'Reenie Beanie',cursive;font-size:72px;color:rgba(124,92,158,0.12);line-height:1;margin-bottom:8px">fin.</div>
        <div class="closing-line">
          to every girl<br>i've been —<br><br>
          <span style="color:var(--deep)">i'd choose you again.</span>
        </div>
        <div style="margin-top:28px;font-family:'Reenie Beanie',cursive;font-size:20px;color:var(--violet);opacity:0.7">
          — diya ♡
        </div>
      </div>
      <div class="pg-num left">25</div>
    </div>`,
  right: `
    <div class="page-content right-bg" style="background:linear-gradient(160deg,#faf7ff,#f5f0ff)">
      <div class="torn-edge" style="background:#faf7ff"></div>
      <div class="corner-fold"></div>
      <div class="sticker" style="bottom:36px;right:18px;font-size:22px;opacity:0.4">✧</div>

      <div class="page-center">
        <div style="font-family:'Just Another Hand',cursive;font-size:13px;letter-spacing:0.14em;color:rgba(180,150,220,0.4);text-align:center">
          dear every girl i've been<br>
          <span style="font-size:18px;margin-top:6px;display:block">✦</span>
          diya rathod · 2026
        </div>
      </div>
      <div class="pg-num right">26</div>
    </div>`
});
