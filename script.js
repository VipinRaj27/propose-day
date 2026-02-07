/* Floating hearts */
const heartContainer = document.getElementById("heart-container");

setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = "💖";
  h.style.left = Math.random() * 100 + "vw";
  h.style.animationDuration = 5 + Math.random() * 5 + "s";
  heartContainer.appendChild(h);
  setTimeout(() => h.remove(), 10000);
}, 400);

/* Proposal reveal */
const proposal = document.getElementById("proposal");
const openBtn = document.getElementById("openBtn");

function openProposal() {
  openBtn.style.display = "none";
  proposal.style.display = "block";
  setTimeout(() => proposal.classList.add("show"), 50);
}

/* Buttons */
const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");

/* YES → explosion + confetti + disable NO */
yesBtn.addEventListener("click", (e) => {
  explodeYes(e);
  launchConfetti();

  yesBtn.innerText = "💖 She Said YES 💖";
  yesBtn.disabled = true;

  noBtn.disabled = true;
  noBtn.style.pointerEvents = "none";
  noBtn.style.opacity = "0.5";
  noBtn.innerText = "😌 Too late";

  noBtn.removeEventListener("mouseover", moveNo);
  noBtn.removeEventListener("touchstart", moveNo);
});

/* Heart explosion */
function explodeYes(e) {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.className = "explode-heart";
    heart.innerHTML = "💖";

    heart.style.left = e.clientX + Math.random() * 60 - 30 + "px";
    heart.style.top = e.clientY + Math.random() * 60 - 30 + "px";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1200);
  }
}

/* Confetti */
function launchConfetti() {
  for (let i = 0; i < 50; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.innerHTML = ["🎉","✨","💖","💍"][Math.floor(Math.random() * 4)];
    c.style.left = Math.random() * 100 + "vw";
    c.style.top = "-10px";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}

/* NO button runs away */
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

/* Valentine Countdown */
const valentineTimer = document.getElementById("valentineTimer");
let year = new Date().getFullYear();
let valentinesDay = new Date(year, 1, 14);

if (new Date() > valentinesDay) {
  valentinesDay = new Date(year + 1, 1, 14);
}

function updateValentineTimer() {
  const diff = valentinesDay - new Date();

  if (diff <= 0) {
    valentineTimer.innerHTML = "💖 It’s Valentine’s Day 💖";
    return;
  }

  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;

  valentineTimer.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
}

setInterval(updateValentineTimer, 1000);
updateValentineTimer();
