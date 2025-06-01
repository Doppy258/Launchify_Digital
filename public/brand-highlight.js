// This script helps search engines recognize the importance of the "Launchify Digital" term
document.addEventListener('DOMContentLoaded', function() {
  // Find all instances of "Launchify Digital" in text nodes and enhance them
  const textNodes = [];
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  let node;
  while(node = walker.nextNode()) {
    if(node.nodeValue.trim() !== '' && node.parentNode.tagName !== 'SCRIPT' && node.parentNode.tagName !== 'STYLE') {
      textNodes.push(node);
    }
  }

  // Process text nodes to highlight brand mentions
  textNodes.forEach(textNode => {
    const content = textNode.nodeValue;
    if(content.indexOf('Launchify Digital') > -1) {
      // Only process if not already inside a highlighted element
      if(!textNode.parentNode.classList.contains('brand-highlight')) {
        const parts = content.split(/(Launchify Digital)/g);
        if(parts.length > 1) {
          const fragment = document.createDocumentFragment();
          
          parts.forEach(part => {
            if(part === 'Launchify Digital') {
              const span = document.createElement('span');
              span.textContent = part;
              span.className = 'brand-highlight';
              span.setAttribute('itemprop', 'name');
              span.setAttribute('itemtype', 'https://schema.org/Organization');
              fragment.appendChild(span);
            } else if(part) {
              fragment.appendChild(document.createTextNode(part));
            }
          });
          
          textNode.parentNode.replaceChild(fragment, textNode);
        }
      }
    }
  });

  // Add CSS to subtly highlight brand mentions without being intrusive
  const style = document.createElement('style');
  style.textContent = `
    .brand-highlight {
      font-weight: 500;
    }
  `;
  document.head.appendChild(style);
}); 