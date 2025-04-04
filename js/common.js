// js/common.js

// JSONデータを読み込み、指定した要素に表示する関数
function loadOrganizationData(jsonFile, containerId) {
    fetch(jsonFile)
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById(containerId);
  
        const title = document.createElement('h2');
        title.textContent = data.title;
        container.appendChild(title);
  
        data.paragraphs.forEach(text => {
          const p = document.createElement('p');
          p.textContent = text;
          container.appendChild(p);
        });
      })
      .catch(error => {
        console.error('JSON読み込みエラー:', error);
      });
  }
  