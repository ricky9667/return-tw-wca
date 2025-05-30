const replacements = {
  "Chinese Taipei": "Taiwan",
  "Taipei Xinesa": "Taiwan",
  "Čínská Taipei": "Taiwan",
  "Kinesisk Taipei": "Taiwan",
  "Chinesisch Taipeh": "Taiwan",
  "Ĉina Tajpeo": "Tajvano",
  "Txinatar Taipei": "Taiwan",
  "Taipéi Chino": "Taiwán",
  "Kiinan Taipei": "Taiwan",
  "Taipei Chinois": "Taïwan",
  "Kineski Tajpej": "Tajvan",
  "Kínai Tajpej": "Tajvan",
  "Taipei Tionghoa": "Taiwan",
  "Taipei Cinese": "Taiwan",
  "チャイニーズタイペイ": "台湾",
  "Қытай Тайпейі": "Тайван",
  "차이니스 타이페이": "대만",
  "Chinees Taipei": "Taiwan",
  "Chińskie Tajpej": "Tajwan",
  "Taipé Chinês": "Taiwan",
  "Taipei Chinez": "Taiwan",
  "Китайский Тайбэй": "Тайвань",
  "Čínsky Tchaj-pej": "Taiwan",
  "Kitajski Tajpej": "Tajvan",
  "Kinesiska Taipei": "Taiwan",
  "ไชนีสไทเป": "ไต้หวัน",
  "Китайський Тайбей": "Тайвань",
  "Đài Bắc Trung Quốc": "Đài Loan",
  "中国台北": "台湾",
  "中國台北": "台灣"
};

function replaceTextInNode(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    for (const [oldText, newText] of Object.entries(replacements)) {
      node.textContent = node.textContent.replace(new RegExp(oldText, 'gi'), newText);
    }
  } else {
    node.childNodes.forEach(child => replaceTextInNode(child));
  }
}

replaceTextInNode(document.body);

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
        replaceTextInNode(node);
    });
  });
});
observer.observe(document.body, { childList: true, subtree: true });
