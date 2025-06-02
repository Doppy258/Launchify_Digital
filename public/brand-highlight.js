// This script helps search engines recognize the importance of our brand names
document.addEventListener('DOMContentLoaded', function() {
  // Find all instances of brand names in text nodes and enhance them
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

  // Brand names to highlight
  const brandNames = ['Launchify Digital', 'Launchified Digital', 'Launchify', 'Launchified'];
  
  // Create a regex pattern for all brand names
  const brandPattern = new RegExp('(' + brandNames.map(name => name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|') + ')', 'g');

  // Process text nodes to highlight brand mentions
  textNodes.forEach(textNode => {
    const content = textNode.nodeValue;
    if(brandNames.some(brand => content.includes(brand))) {
      // Only process if not already inside a highlighted element
      if(!textNode.parentNode.classList.contains('brand-highlight')) {
        const parts = content.split(brandPattern);
        if(parts.length > 1) {
          const fragment = document.createDocumentFragment();
          
          parts.forEach(part => {
            if(brandNames.includes(part)) {
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