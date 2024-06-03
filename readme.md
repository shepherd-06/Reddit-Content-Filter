# Reddit Content Filter

Reddit Content Filter is a Chrome extension designed to enhance your Reddit browsing experience by removing specific lazy-loaded sections and posts containing certain keywords. The extension automatically detects and removes content containing the keywords "BangladeshGoneSexy" and "cambd", as well as the lazy-loaded "left-nav-recent-section" elements.

## Features

- **Automatic Content Removal**: Instantly removes posts containing specific keywords ("BangladeshGoneSexy" and "cambd") from Reddit pages.
- **Lazy-Loaded Content Handling**: Detects and removes lazy-loaded sections, preventing unwanted content from appearing even if it loads after the initial page load.
- **Real-Time Monitoring**: Uses a MutationObserver to continuously monitor the page for changes and remove unwanted content as soon as it appears.
- **User-Friendly Popup**: Provides a simple popup interface indicating the extension's status on the current page.

## How It Works

1. **Content Script**: A script (`content.js`) runs on all Reddit pages, scanning for specified keywords and lazy-loaded sections.
2. **MutationObserver**: Monitors the DOM for changes and removes unwanted content dynamically as it loads.
3. **Background Script**: Ensures the content script is executed whenever a Reddit page is fully loaded or updated.

## Installation

1. Clone or download the `RedditContentFilter` directory.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the `RedditContentFilter` directory.

## Directory Structure

    RedditContentFilter/
    ├── manifest.json
    ├── content.js
    ├── background.js
    ├── popup.html
    └── icons/
    ├── icon16.png
    ├── icon48.png
    ├── icon128.png


## Files

### manifest.json

This file contains the metadata about the extension.

### content.js

This file contains the logic to check the URL and remove the content if the keywords are found.

### background.js
This file ensures the content script runs whenever the page loads or the URL changes.

### popup.html
This file provides a simple popup interface indicating the extension's status on the current page.

## Contributing
If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
