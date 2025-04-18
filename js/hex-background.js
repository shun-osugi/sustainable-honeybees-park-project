function generateHexBackground() {
    const hexContainer = document.querySelector(".hex-bg");
    if (!hexContainer) return;

    hexContainer.innerHTML = "";

    // 一時的に六角形要素を作って高さを取得
    const tempHex = document.createElement("div");
    tempHex.className = "hex";
    tempHex.style.visibility = "hidden";
    document.body.appendChild(tempHex);

    const hexHeightPx = parseFloat(getComputedStyle(tempHex).height);
    document.body.removeChild(tempHex);

    const bodyHeight = document.body.scrollHeight;
    const rowsNeeded = Math.ceil(bodyHeight / hexHeightPx);

    for (let row = 0; row < rowsNeeded; row++) {
        const rowDiv = document.createElement("div");
        rowDiv.className = "hex-row";
        if (row % 2 === 1) rowDiv.classList.add("offset");

        for (let col = 0; col < 8; col++) {
            const hex = document.createElement("div");
            hex.className = "hex transparent";

            // 表示する六角形の選出
            if (row % 16 < 8) {
                if (col > row % 8) hex.classList.remove("transparent");
            } else {
                if (col < row % 8) hex.classList.remove("transparent");
            }

            rowDiv.appendChild(hex);
        }

        hexContainer.appendChild(rowDiv);
    }
}

// 背景の高さ調整
function adjustHexBgHeight() {
    const hexBg = document.querySelector(".hex-bg");
    if (hexBg) {
        const bodyHeight = document.body.scrollHeight;
        hexBg.style.height = `${bodyHeight}px`;
    }
}

// 初期化
window.addEventListener("load", () => {
    adjustHexBgHeight();
    generateHexBackground();
});

window.addEventListener("resize", () => {
    adjustHexBgHeight();
    generateHexBackground();
});
