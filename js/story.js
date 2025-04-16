AOS.init();

async function loadHexagons() {
    const response = await fetch("data/story.json");
    const data = await response.json();
    const container = document.getElementById("content-area");

    for (let i = 1; i <= 7; i++) {
        const hex = data.hexagons.find((h) => h.id === `${i}`);
        if (!hex) continue;

        const group = document.createElement("div");
        group.className = "hexagon-group";
        group.setAttribute("data-aos", "fade-up");

        group.appendChild(createHexagonImage(`img/history${i}.png`));
        group.appendChild(createHexagonText(hex.title, hex.text));

        const textArea = document.createElement("div");
        textArea.className = "text-content";
        textArea.innerHTML = `
      <h2>${hex.title}</h2>
      <p>${hex.text}</p>
    `;
        group.appendChild(textArea);

        container.appendChild(group);
    }
}

function createHexagonImage(imgPath) {
    const wrapper = document.createElement("div");
    wrapper.className = "hexagon-wrapper";
    wrapper.innerHTML = `
    <div class="hexagon-background"></div>
    <div class="hexagon">
      <img src="${imgPath}" alt="Image Hex">
    </div>
  `;
    return wrapper;
}

function createHexagonText(title, text) {
    const wrapper = document.createElement("div");
    wrapper.className = "hexagon-wrapper large-hexagon";
    wrapper.innerHTML = `
    <div class="hexagon-background"></div>
    <div class="hexagon">
      <div>
        ${title ? `<p class="story-title ">${title}</p>` : ""}
        <p class="story-text">${text}</p>
      </div>
    </div>
  `;
    return wrapper;
}

loadHexagons();
