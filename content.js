function replaceTextInNode(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = node.textContent.replace(/Chinese Taipei/gi, 'Taiwan');
    node.textContent = node.textContent.replace(/中華台北/gi, '台灣');
    node.textContent = node.textContent.replace(/中华台北/gi, '台湾');
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
