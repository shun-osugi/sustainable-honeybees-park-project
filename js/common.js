// js/common.js

// ホットスポットのクリックで説明切り替え
const hotspots = document.querySelectorAll('.hotspot');
const descriptions = document.querySelectorAll('.description');
let currentIndex = 0; // 現在表示中の説明のインデックス

// 初期表示
descriptions[currentIndex].classList.add('active', 'fade-in');

// 説明を更新する関数
function updateDescription() {
  descriptions.forEach((desc, index) => {
    if (index === currentIndex) {
      desc.classList.add('active');
    } else {
      desc.classList.remove('active');
    }
  });
}

// ホットスポットのクリックで説明
hotspots.forEach(hotspot => {
  hotspot.addEventListener('click', () => {
    const id = hotspot.getAttribute('data-id');
    descriptions.forEach((desc, index) => {
      if (desc.id === id) {
        currentIndex = index; // クリックした説明のインデックスをセット
        updateDescription(); // 説明を更新
      }
    });
  });
});

// ▶ボタン（次へ）の処理
document.querySelectorAll('.next-btn').forEach(button => {
  button.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % descriptions.length;
    updateDescription(); //説明を更新
  });
});

// ◀ボタン（前へ）の処理
document.querySelectorAll('.prev-btn').forEach(button => {
  button.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + descriptions.length) % descriptions.length;
    updateDescription(); //説明を更新
  });
})


// ホットスポットを画像に位置合わせ
function positionHotspots() {
  const image = document.querySelector('.image-area img');
  const imageRect = image.getBoundingClientRect();
  const imageWidth = image.offsetWidth;
  const imageHeight = image.offsetHeight;

  document.querySelectorAll('.hotspot').forEach(hotspot => {
    const topPercent = parseFloat(hotspot.getAttribute('data-top'));
    const leftPercent = parseFloat(hotspot.getAttribute('data-left'));

    // 画像のサイズに合わせて絶対位置を計算
    hotspot.style.top = (imageHeight * topPercent / 100) + 'px';
    hotspot.style.left = (imageWidth * leftPercent / 100) + 'px';
  });
}

// 初期表示とリサイズ時に実行
window.addEventListener('load', positionHotspots);
window.addEventListener('resize', positionHotspots);

// 最初に全体の制作意図を表示
document.getElementById('area').classList.add('active');

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
  