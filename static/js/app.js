(() => {
  const pad = document.getElementById("pad");
  const ctx = pad.getContext("2d");
  let isDrawing = false;
  let words = {};

  function resizeCanvas() {
    const rect = pad.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    pad.width = rect.width * dpr;
    pad.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = "#193c7b";
    clearCanvas();
  }

  function pointerDown(e) {
    isDrawing = true;
    ctx.beginPath();
    const { x, y } = getPos(e);
    ctx.moveTo(x, y);
  }

  function pointerMove(e) {
    if (!isDrawing) return;
    const { x, y } = getPos(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  }

  function pointerUp() {
    isDrawing = false;
    ctx.beginPath();
  }

  function getPos(e) {
    const rect = pad.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }

  async function loadWords() {
    try {
      const res = await fetch("/api/words");
      words = await res.json();
      console.log("Loaded words", words);
      // TODO: initialize game state with these words
    } catch (err) {
      console.error("Failed to load words", err);
    }
  }

  function clearCanvas() {
    const rect = pad.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
  }

  function nextWord() {
    // TODO: advance to next word and update UI
  }

  function showWord() {
    // TODO: reveal the current word if hidden
  }

  function rewardAnimation() {
    // TODO: simple stars/confetti animation
  }

  function bindEvents() {
    pad.addEventListener("pointerdown", pointerDown);
    pad.addEventListener("pointermove", pointerMove);
    pad.addEventListener("pointerup", pointerUp);
    pad.addEventListener("pointerleave", pointerUp);

    document.getElementById("clear-btn").addEventListener("click", clearCanvas);
    document.getElementById("next-btn").addEventListener("click", nextWord);
    document.getElementById("show-word").addEventListener("click", showWord);
  }

  window.addEventListener("resize", resizeCanvas);

  window.addEventListener("DOMContentLoaded", () => {
    bindEvents();
    resizeCanvas();
    loadWords();
  });
})();
