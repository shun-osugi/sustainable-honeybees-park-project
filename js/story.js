AOS.init();

async function loadHexagons() {
  const response = await fetch('data/story.json');
  const data = await response.json();
  const container = document.getElementById('content-area');

  for (let i = 1; i <= 7; i++) {
    const hex1 = data.hexagons.find(h => h.id === `${i}-1`);
    const hex2 = data.hexagons.find(h => h.id === `${i}-2`);
    if (!hex1 || !hex2) continue;

    const group = document.createElement('div');
    group.className = 'hexagon-group';
    group.setAttribute('data-aos', 'fade-up');

    group.appendChild(createHexagonImage(`img/history${i}.png`));
    group.appendChild(createHexagonText(hex1.title, hex1.text));

    const bottomHex = createHexagonText(hex2.title, hex2.text);
    bottomHex.classList.add('bottom-hex');
    group.appendChild(bottomHex);

    const textArea = document.createElement('div');
    textArea.className = 'text-content';
    textArea.innerHTML = `
      <h2>${hex1.title}</h2>
      <p>${hex1.text}</p>
      <p>${hex2.text}</p>
    `;
    group.appendChild(textArea);

    container.appendChild(group);
  }
}

function createHexagonImage(imgPath) {
  const wrapper = document.createElement('div');
  wrapper.className = 'hexagon-wrapper';
  wrapper.innerHTML = `
    <div class="hexagon-background"></div>
    <div class="hexagon">
      <img src="${imgPath}" alt="Image Hex">
    </div>
  `;
  return wrapper;
}

function createHexagonText(title, text) {
  const wrapper = document.createElement('div');
  wrapper.className = 'hexagon-wrapper';
  wrapper.innerHTML = `
    <div class="hexagon-background"></div>
    <div class="hexagon">
      <div>
        ${title ? `<h2>${title}</h2>` : ''}
        <p>${text}</p>
      </div>
    </div>
  `;
  return wrapper;
}

loadHexagons();
