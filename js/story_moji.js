AOS.init();

async function loadHexagons() {
    const response = await fetch("data/story_moji.json");
    const data = await response.json();
    const container = document.getElementById("content-area");

    for (let i = 1; i <= 5; i++) {
        const hex = data.hexagons.find((h) => h.id === `${i}`);
        if (!hex) continue;

        const group = document.createElement("div");
        group.className = "hexagon-group";
        group.setAttribute("data-aos", "fade-up");

        group.appendChild(createHexagonImage(`img/history_moji${i}.jpg`));
        group.appendChild(
            createHexagonText(hex.title, hex.text, hex.linkHref, hex.linkText)
        );

        const textArea = document.createElement("div");
        textArea.className = "text-content";
        textArea.innerHTML = `
      ${hex.title ? `<h2>${hex.title}</h2>` : ""}
      <p>${hex.text}</p>
      ${
          hex.linkHref && hex.linkText
              ? `<a href="${hex.linkHref}" class="link-text">${hex.linkText}</a>`
              : ""
      }
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

function createHexagonText(title, text, linkHref, linkText) {
    const wrapper = document.createElement("div");
    wrapper.className = "hexagon-wrapper large-hexagon";
    wrapper.innerHTML = `
  <div class="hexagon-background"></div>
  <div class="hexagon">
    <div>
      ${title ? `<p class="story-title ">${title}</p>` : ""}
      <p class="story-text">${text}</p>
      ${
          linkHref && linkText
              ? `<a href=${linkHref} class="link-text">${linkText}</a>`
              : ""
      }
    </div>
  </div>
`;
    return wrapper;
}

loadHexagons();
