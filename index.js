function renderCard(data) {
   return `
        <div class="head">
          <div class="title">${data.title}</div>
          <div class="badges">${data.badges.map(b => `<span class="badge ${b === data.badges[1] ? 'key' : ''}">${b}</span>`).join('')}</div>
        </div>
        <div class="section"><h3>Ý nghĩa</h3><p>${data.meaning || ''}</p></div>
        ${data.keywords ? `<div class="section"><h3>Từ khóa</h3><div class="chips">${data.keywords.map(k => `<span class="chip">${k}</span>`).join('')}</div></div>` : ''}
        ${data.structure ? `<div class="section"><h3>Cấu trúc</h3><div class="pattern">${data.structure.map(s => `<span class="pill">${s}</span>`).join('')}</div></div>` : ''}
        ${data.examples ? `<div class="section"><h3>Ví dụ</h3><div class="examples">${data.examples.map(e => `
          <div class="ex"><div class="jp">${e.jp}</div><div class="vi">${e.vi}</div>${e.note ? `<div class="note">${e.note}</div>` : ''}</div>`).join('')}</div></div>` : ''}
        ${data.compare ? `<div class="section"><h3>So sánh</h3><ul>${data.compare.map(c => `<li>${c}</li>`).join('')}</ul></div>` : ''}
        ${data.mistakes ? `<div class="section"><h3>Lỗi thường gặp</h3><div class="flags">${data.mistakes.map(m => `<div class="flag ${m.type}">${m.text}</div>`).join('')}</div></div>` : ''}
        ${data.tip ? `<div class="section"><h3>Mẹo nhớ</h3><p>${data.tip}</p></div>` : ''}
      `;
}

function renderCards(data) {
   document.getElementById("app").innerHTML = data.map((d, i) => `
        <div class="card ${i === 0 ? 'active' : ''}">
          ${renderCard(d)}
        </div>
      `).join("");
}

// ban đầu render toàn bộ
renderCards(grammarData);

const cards = () => document.querySelectorAll('.card');
let currentIndex = 0;

function showCard(index) {
   if (index < 0) index = 0;
   if (index >= cards().length) index = cards().length - 1;
   cards().forEach((c, i) => c.classList.toggle('active', i === index));
   currentIndex = index;
}

document.querySelector('.prev-btn').addEventListener('click', () => showCard(currentIndex - 1));
document.querySelector('.next-btn').addEventListener('click', () => showCard(currentIndex + 1));

// vuốt mobile
let startX = 0;
document.addEventListener('touchstart', e => startX = e.touches[0].clientX);
document.addEventListener('touchend', e => {
   let endX = e.changedTouches[0].clientX;
   if (endX - startX > 50) showCard(currentIndex - 1);
   else if (startX - endX > 50) showCard(currentIndex + 1);
});

showCard(0);

// range render
document.getElementById('renderBtn').addEventListener('click', () => {
   const start = parseInt(document.getElementById('start').value) || 1;
   const end = parseInt(document.getElementById('end').value) || grammarData.length;
   const sliceData = grammarData.slice(start - 1, end);
   renderCards(sliceData);
   showCard(0);
});

// search
document.getElementById('search').addEventListener('input', e => {
   const keyword = e.target.value.trim().toLowerCase();
   const filtered = grammarData.filter(item =>
      item.title.toLowerCase().includes(keyword) ||
      (item.keywords && item.keywords.some(k => k.toLowerCase().includes(keyword)))
   );
   renderCards(filtered.length ? filtered : []);
   showCard(0);
});