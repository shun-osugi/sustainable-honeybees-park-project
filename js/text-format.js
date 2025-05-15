// js/groups.js

// JSONデータを読み込み、指定した要素に表示する関数
function loadOrganizationData(jsonFile, containerId) {
    fetch(jsonFile)
        .then((res) => res.json())
        .then((data) => {
            const container = document.getElementById(containerId);

            const title = document.createElement("h2");
            title.textContent = data.title;
            container.appendChild(title);

            data.paragraphs.forEach((text) => {
                const p = document.createElement("p");
                p.textContent = text;
                container.appendChild(p);
            });

            if (data.linkHref && data.linkText) {
                const link = document.createElement("a");
                link.href = data.linkHref;
                link.textContent = data.linkText;
                link.className = "link-text";
                link.target = "_blank"; // 新しいタブで開く
                link.rel = "noopener noreferrer"; // セキュリティ対策

                const linkContainer = document.createElement("p");
                linkContainer.appendChild(link);
                container.appendChild(linkContainer);
            }
        })
        .catch((error) => {
            console.error("JSON読み込みエラー:", error);
        });
}
