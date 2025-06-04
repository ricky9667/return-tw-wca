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
  "中华台北": "台湾",
  "中華台北": "台灣",
  "Hong Kong (Cina)": "Hong Kong",
  "Hong Kong, China": "Hong Kong",
  "Hong Kong, Chine": "Hong Kong",
  "Hong Kong, Chiny": "Hong Kong",
  "Hong Kong, Čína": "Hong Kong",
  "Hong Kong, Kina": "Hong Kong",
  "Hong Kong, Kitajska": "Hong Kong",
  "Hong Kong, Tiongkok": "Hong Kong",
  "Hồng Kông, Trung Quốc": "Hồng Kông",
  "Hong Kong, Txina": "Hong Kong",
  "Hongkong SAR Kína": "Hongkong",
  "Hongkong, China": "Hongkong",
  "Hongkong, Kina": "Hongkong",
  "Honkongo, Ĉinio": "Honkongo",
  "Гонконг, Китай": "Гонконг",
  "Гонконг, Қытай": "Гонконг",
  "ฮ่องกง, จีน": "ฮ่องกง",
  "中國香港特別行政區": "香港",
  "香港，中国": "香港",
  "香港、中国": "香港",
  "Ma Cao, Trung Quốc": "Ma Cao",
  "Macao (Cina)": "Macao",
  "Macao, China": "Macao",
  "Macao, Chine": "Macao",
  "Macao, Čína": "Macao",
  "Macao, Kina": "Macao",
  "Macao, Txina": "Macao",
  "Macau, China": "Macau",
  "Macau, Kina": "Macau",
  "Macau, Kitajska": "Macau",
  "Makaó SAR Kína": "Makaó",
  "Makao, Ĉinio": "Makao",
  "Makao, Kina": "Makao",
  "Makau, Chiny": "Makau",
  "Makau, Tiongkok": "Makau",
  "Макао, Китай": "Макао",
  "Макао, Қытай": "Макао",
  "マカオ、中国": "マカオ",
  "มาเก๊า, จีน": "มาเก๊า",
  "中國澳門特別行政區": "澳門",
  "澳门，中国": "澳门"
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
