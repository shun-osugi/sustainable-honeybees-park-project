document.addEventListener("DOMContentLoaded", () => {
    const hotspots = document.querySelectorAll(".hotspot");
    const descriptions = document.querySelectorAll(".description");
    const instruction = document.getElementById("instruction");
    let currentIndex = 0;

    // 初期状態：すべて非表示、案内だけ表示
    descriptions.forEach((desc) => desc.classList.remove("active"));
    instruction.style.display = "block";

    // 説明を更新する関数
    function updateDescription() {
        descriptions.forEach((desc, index) => {
            if (index === currentIndex) {
                desc.classList.add("active", "fade-in");
            } else {
                desc.classList.remove("active", "fade-in");
            }
        });
        instruction.style.display = "none";
    }

    // ホットスポットのクリックで説明表示
    hotspots.forEach((hotspot) => {
        hotspot.addEventListener("click", () => {
            const id = hotspot.getAttribute("data-id");
            descriptions.forEach((desc, index) => {
                if (desc.id === id) {
                    currentIndex = index;
                    updateDescription();
                }
            });
        });
    });

    // ▶ボタン（次へ）
    document.querySelectorAll(".next-btn").forEach((button) => {
        button.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % descriptions.length;
            updateDescription();
        });
    });

    // ◀ボタン（前へ）
    document.querySelectorAll(".prev-btn").forEach((button) => {
        button.addEventListener("click", function () {
            currentIndex =
                (currentIndex - 1 + descriptions.length) % descriptions.length;
            updateDescription();
        });
    });

    // ホットスポットの位置調整
    function positionHotspots() {
        const image = document.querySelector(".image-area img");
        const imageHeight = image.offsetHeight;
        const imageWidth = image.offsetWidth;

        document.querySelectorAll(".hotspot").forEach((hotspot) => {
            const topPercent = parseFloat(hotspot.getAttribute("data-top"));
            const leftPercent = parseFloat(hotspot.getAttribute("data-left"));
            hotspot.style.top = (imageHeight * topPercent) / 100 + "px";
            hotspot.style.left = (imageWidth * leftPercent) / 100 + "px";
        });
    }

    window.addEventListener("load", positionHotspots);
    window.addEventListener("resize", positionHotspots);
});
