# Size Selector Enhancement for Shopify
This script hides the default size variant selection and replaces it with a custom size selector that allows users to toggle between UK, EU, and US sizes.

🚀 **Shopify Size Switcher** is a lightweight JavaScript solution that allows users to **toggle between UK, EU, and US size formats** on Shopify product pages. It works with **both numeric and text-based sizes**, preventing layout flash issues.

## 📌 Features
- ✅ **Toggle Between UK, EU, US Sizes** dynamically.
- ✅ **Works with Numeric & Text-Based Sizes** (e.g., `UK 10 | EU 44 | US 11` and `UK Small | EU Medium | US Large`).
- ✅ **No Flash Issues** – Hides old sizes until the script updates them.
- ✅ **Fully Compatible with Shopify Themes** (Dawn, Debut, and Custom Themes).
- ✅ **SEO & Performance Optimized** for faster page loads.
- ✅ **No Shopify App Required** – Works with native Shopify variant system.

## 🛠️ Installation
### **1. Add JavaScript to Your Theme**
Copy the following script.js and place it in your **theme's JavaScript file** (`theme.js` or `global.js` or a custom script file):

2. Add CSS for Styling
Copy and paste style.css into your theme's CSS file (theme.css or global.css):

🎯 Customization
If using Dawn Theme, update the JavaScript selector to:
javascript
Copy
Edit
    const fieldset = document.querySelector('.product-form__input[name="Size"]');
If using Debut Theme, update the JavaScript selector to:
javascript
Copy
Edit
    const fieldset = document.querySelector('.product-form__variants[name="Size"]');
🚀 Support
If you find this useful, consider starring the repository ⭐ on GitHub!
