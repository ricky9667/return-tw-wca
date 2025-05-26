function replaceTextInNode(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = node.textContent.replace(/Chinese Taipei/gi, 'Taiwan');
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
