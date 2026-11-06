// 1) Typing effect for the code window in the hero
const lines = [
  '<span class="k">const</span> <span class="p">developer</span> = {',
  '  name: <span class="s">"Badr koobra"</span>,',
  '  role: <span class="s">"Full-Stack Engineer"</span>,',
  '  location: <span class="s">"Cairo, Egypt"</span>,',
  '  stack: [<span class="s">"html"</span>, <span class="s">"css"</span>, <span class="s">"java"</span>]' ,
  '  experience: <span class="n">7</span>, <span class="c">// years</span>',
  '  openToWork: <span class="n">true</span>,',
  '};',
  '',
  '<span class="p">developer</span>.<span class="p">ship</span>(<span class="s">"quality software"</span>);',
];

const codeEl = document.getElementById('code');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion) {
  codeEl.innerHTML = lines.join('\n');
} else {
  // Reveal one line at a time (keeps the HTML tags intact)
  let i = 0;
  const timer = setInterval(() => {
    codeEl.innerHTML = lines.slice(0, ++i).join('\n');
    if (i >= lines.length) clearInterval(timer);
  }, 260);
}

// 2) Filter projects
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.card');

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const f = chip.dataset.f;
    cards.forEach(card => { card.hidden = f !== 'all' && card.dataset.t !== f; });
  });
});

// 3) Copy email to clipboard
const copyBtn = document.getElementById('copy');
const hint = document.getElementById('hint');

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copyBtn.textContent.trim());
    hint.textContent = 'تم نسخ البريد';
  } catch {
    hint.textContent = 'تعذّر النسخ، انسخه يدويًا';
  }
  setTimeout(() => { hint.textContent = 'اضغط لنسخ البريد'; }, 2200);
});

// 4) Footer year
document.getElementById('year').textContent = new Date().getFullYear();