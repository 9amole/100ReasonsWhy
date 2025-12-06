// script.js
// CLEAN — Polaroid Viewer Only Version

(function () {

  /* -----------------------------------------------------------
     ELEMENTS
  ----------------------------------------------------------- */
  const introScreen = document.getElementById("intro-screen");
  const beginBtn = document.getElementById("begin-btn");
  const bgMusic = document.getElementById("bg-music");

  const viewer = document.getElementById("polaroid-viewer");
  const textEl = document.getElementById("polaroid-text");
  const counterEl = document.getElementById("polaroid-counter");
  const btnPrev = document.getElementById("polaroid-prev");
  const btnNext = document.getElementById("polaroid-next");
  const btnClose = document.getElementById("polaroid-close");
  

  /* -----------------------------------------------------------
     MERGED — 100 POLAROID REASONS (TEXT ONLY)
  ----------------------------------------------------------- */
  const polaroidReasons = [
    "I love the way you laugh.",
    "I love how you listen to me when I Yap☹️.",
    "I love your hair😍.",
    "Te amo mucho mi diosa",
    "I love your courage when things get hard.",
    "I love that you make everyday special😭.",
    "Eres el amor de mi vida.",
    "I love when you call me papi😝😝.",
    "I love how patient you are",
    "I love the video you showed me when you were dancing😝😭",
    "I love your sense of humor.",
    "I love that you cheer for me and always support me☹️",
    "I love your strength so much",
    "I love your eyes😍😍",
    "Me encanta lo sexy que eres😍.",
    "I love the way you say 'mhmmm' when you think while sending me voices😍.",
    "Me encantan tus pechos.",
    "I love the freaky side of you😝😭😍",
    "I love that you make me want to be better.",
    "I love your lips😍 (i want to eat them).",
    "I love when you are happy☹️",
    "I love when you call me crazy😭.",
    "I love the way you make me feel comfortable.",
    "I love when you are obedient to me😝😝.",
    "I love how you remember the details.",
    "I love your loyalty.",
    "I love how you believe in me.",
    "Me encanta lo perfecta que eres..",
    "I love that you always try and never give up☹️.",
    "I love the way you express your emotions☹️.",
    "I love the long messages you send when i ask about your day☹️☹️☹️.",
    "I love when you call me baby☹️🥺.",
    "I love how honest you are",
    "I love your cheeks🥺😍.",
    "I love that you are my bestfriend ☹️.",
    "I love how you always tell me that you are not tired of me.☹️🥺",
    "I love your intelligence 😍.",
    "I love your eyebrows so much.😍😍😍",
    "I LOVE YOUR ASS😝😝",
    "I love every message you send to me🥰",
    "I love your 'good night' texts☹️.",
    "I LOVE YOUR BELLY OMG.😭😍😝😝",
    "I love when you tell me random things that you remember😍.",
    "I love our inside jokes.",
    "I love that you are a good story teller.😍",
    "I love you even if you were a worm😭.",
    "I love that you always listen to me and reassure me☹️.",
    "I love that you dont get tired of how obsessed im with you☹️😭.",
    "I love that you always promise me to warn me if i did something wrong☹️.",
    "I love how kind of a person you are☹️☹️☹️",
    "I love when you talk about our future with me☹️",
    "I love when you ask me questions about anything☹️.",
    "I LOVE YOUR BODY😍",
    "I love that you always express your emotions😍",
    "I love how you reply to every message i send to you☹️",
    "I love when you love me☹️",
    "I love how emotionally intelligent you are☹️😍",
    "I love the way you take care of me☹️.",
    "I love our late-night talks☹️☹️.",
    "I love that you let me be silly☹️.",
    "I love your empathetic heart😍.",
    "I love how you make me feel seen.",
    "I love your good morning texts😍.",
    "I love how shy you make me feel😭😭😭.",
    "I love when you send me lots of messages and reels😍😍😍😍.",
    "I love when you call me handsome☹️.",
    "I love how willing you are to make us work☹️",
    "I love how you see me☹️☹️.",
    "I love when you share everything about your life with me☹️.",
    "I love that when i tell i want to see you, you send me a photo of you, and if you dont feel like it you tell me that you are gonna send one later🥰☹️.",
    "I love when you call me your man.",
    "I miss you ☹️☹️.",
    "I love how you treat me like a baby when im sick or anxious☹️☹️",
    "I love how your brain works😍😍.",
    "I love your strength on my weakest days.",
    "I love how you make me not hate myself.",
    "I love when you do anything no matter how small it is that shows me that you love me☹️.",
    "I love when you tell me more about your self and your life☹️😍😍😍.",
    "I love that you are patient with my bad spanish😭😭😭.",
    "I love how you love when im a cringy lover boy😭.",
    "I love that you love when i simp for you😭☹️.",
    "I love your taste in music😍.",
    "I love that you are always straightforward with me☹️☹️.",
    "I love when you send me long messages expressing your emotions☹️.",
    "I love that you sense when im not okay☹️☹️.",
    "I love every picture of you😍😍😍😍😍.",
    "I love that you promised to help me to be a better lover for you☹️.",
    "I love MY BEAUTIFUL SEXY HOT GORGOUS PAT PIE😭😭😭😭😍😍.",
    "I love that you make home wherever we are☹️.",
    "I love that you are comfortable with me☹️.",
    "I love you when you are happy☹️.",
    "I love you even when you are sad☹️.",
    "you just told me that you think i only love photos of you that you dont like😭😭 trust me mi amor, i LOVE every photo you send me.",
    "I love that you are always willing to make me happy.",
    "I love when you send me pictures about your day.",
    "I love when we discuss random events and we realize how much our opinions are alike.",
    "I love you for you, not for the things you do☹️",
    "I love your soul .",
    "I LOVE EVERYTHING ABOUT YOU",
    "I LOVE YOU"
  ];

  /* -----------------------------------------------------------
     POLAROID VIEWER LOGIC
  ----------------------------------------------------------- */
  let index = 0;

  function renderPolaroid(i) {
    textEl.textContent = polaroidReasons[i];
    counterEl.textContent = `${i + 1} / ${polaroidReasons.length}`;
  }

  btnNext.addEventListener("click", () => {
    index = (index + 1) % polaroidReasons.length;
    renderPolaroid(index);
  });

  btnPrev.addEventListener("click", () => {
    index = (index - 1 + polaroidReasons.length) % polaroidReasons.length;
    renderPolaroid(index);
  });

  btnClose.addEventListener("click", () => {
    viewer.classList.add("hidden");
  });

  /* -----------------------------------------------------------
     INTRO → OPEN POLAROID + MUSIC
  ----------------------------------------------------------- */
  beginBtn.addEventListener("click", () => {
    introScreen.classList.add("hidden");

    viewer.classList.remove("hidden");
    renderPolaroid(index);

    bgMusic.loop = true;
    bgMusic.volume = 0.45;
    bgMusic.play().catch(() => {});
  });

  /* -----------------------------------------------------------
     KEYBOARD ARROWS
  ----------------------------------------------------------- */
  document.addEventListener("keydown", (e) => {
    if (viewer.classList.contains("hidden")) return;

    if (e.key === "ArrowRight" || e.key === " ")
      btnNext.click();
    else if (e.key === "ArrowLeft")
      btnPrev.click();
    else if (e.key === "Escape")
      btnClose.click();
  });
let startX = 0;

viewer.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

viewer.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) btnNext.click();   // swipe left → next
    else btnPrev.click();           // swipe right → prev
  }
});

})();
