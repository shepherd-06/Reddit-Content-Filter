// Function to remove the specific lazy-loading section
function removeLazyLoadedContent() {
  const selectors = [
    'faceplate-loader[name="left-nav-recent-section"]',
    'faceplate-partial[name="left-nav-recent-section"]'
  ];

  selectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.remove();
    });
  });
}

// Initialize a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      removeLazyLoadedContent();
    }
  });
});

// Configuration of the observer
const config = { childList: true, subtree: true };

// Start observing the document body for added nodes
observer.observe(document.body, config);

// Initial removal call in case the elements are already present
removeLazyLoadedContent();
