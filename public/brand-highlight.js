/**
 * Brand Highlight - Ensures "Launchify Digital" appears correctly throughout the site
 * This script helps maintain brand consistency and improves SEO by:
 * 1. Ensuring the brand name appears consistently across the site
 * 2. Highlighting brand mentions with styling
 */

(function() {
  // Set of brand name variations to detect and standardize
  const brandVariations = [
    'launchify digital',
    'launchified digital',
    'launchify',
    'launchified'
  ];
  
  // The standardized brand name
  const standardBrand = 'Launchify Digital';
  
  // Function to find and highlight brand mentions
  function highlightBrandMentions() {
    // Don't run in admin or dashboard sections
    if (window.location.pathname.includes('/admin') || 
        window.location.pathname.includes('/dashboard')) {
      return;
    }
    
    // Get all text nodes on the page (ignore script and style tags)
    const textNodes = [];
    const walk = document.createTreeWalker(
      document.body, 
      NodeFilter.SHOW_TEXT, 
      {
        acceptNode: function(node) {
          const parent = node.parentNode;
          if (!parent) return NodeFilter.FILTER_REJECT;
          
          const tagName = parent.tagName.toLowerCase();
          if (tagName === 'script' || tagName === 'style' || tagName === 'code') {
            return NodeFilter.FILTER_REJECT;
          }
          
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );
    
    let node;
    while (node = walk.nextNode()) {
      textNodes.push(node);
    }
    
    // Process each text node
    textNodes.forEach(textNode => {
      let content = textNode.nodeValue;
      let hasMatch = false;
      
      // Check for brand variations
      brandVariations.forEach(variation => {
        // Case insensitive search
        const regex = new RegExp(`\\b${variation}\\b`, 'gi');
        if (regex.test(content)) {
          hasMatch = true;
          
          // Replace with the standardized version, preserving case sensitivity
          content = content.replace(regex, match => {
            if (match === match.toLowerCase()) {
              return standardBrand.toLowerCase();
            } else if (match === match.toUpperCase()) {
              return standardBrand.toUpperCase();
            } else if (match.charAt(0) === match.charAt(0).toUpperCase()) {
              return standardBrand;
            } else {
              return standardBrand;
            }
          });
        }
      });
      
      // If there was a match, create a highlighted version
      if (hasMatch) {
        // Create a span to hold the new content
        const fragment = document.createDocumentFragment();
        const parts = content.split(new RegExp(`\\b${standardBrand}\\b`, 'gi'));
        
        // For each part and brand mention, create the appropriate nodes
        for (let i = 0; i < parts.length; i++) {
          // Add the text before the brand mention
          fragment.appendChild(document.createTextNode(parts[i]));
          
          // Add the highlighted brand mention (except after the last part)
          if (i < parts.length - 1) {
            const brandSpan = document.createElement('span');
            brandSpan.className = 'brand-highlight';
            brandSpan.textContent = standardBrand;
            brandSpan.style.fontWeight = '600';
            fragment.appendChild(brandSpan);
          }
        }
        
        // Replace the original text node with our fragment
        textNode.parentNode.replaceChild(fragment, textNode);
      }
    });
  }
  
  // Run when the DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', highlightBrandMentions);
  } else {
    highlightBrandMentions();
  }
  
  // Add a small CSS rule for brand highlights
  const style = document.createElement('style');
  style.textContent = `
    .brand-highlight {
      font-weight: 600;
      color: #2563eb;
    }
  `;
  document.head.appendChild(style);
})(); 