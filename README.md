# Size Selector Enhancement for Shopify
This script hides the default size variant selection and replaces it with a custom size selector that allows users to toggle between UK, EU, and US sizes.

🚀 **Shopify Size Switcher** is a lightweight JavaScript solution that allows users to **toggle between UK, EU, and US size formats** on Shopify product pages. It works with **both numeric and text-based sizes**, preventing layout flash issues.

## 📌 Feature List & How It Works
- ✅ 1. Dynamic Size Format Switching
    Allows users to toggle between UK, EU, and US size formats.
    Works with both numeric and text-based sizes (e.g., UK 10 | EU 44 | US 11 and UK Small | EU Medium | US Large).
    Updates size labels dynamically on click.
- ✅ 2. Automatic Size Detection
    Extracts sizes from a predefined format UK [size] | EU [size] | US [size].
    Uses a robust regex pattern to capture both numeric & text-based values.
    Products with size variants format not found → Works as usual (no interference).
    Products with mixed formats (some missing sizes) → Shows "N/A" only where needed, otherwise retains original size.
- ✅ 3. Prevents "Flashing" of Old Sizes
    Hides the size fieldset initially (display: none) to prevent a flash of old sizes before JavaScript updates them.
- ✅ 4. SEO & Accessibility Friendly
    Optimized for Shopify's themes like Dawn & Debut.
    Ensures semantic HTML structure for search engines.
    Does not break Shopify's built-in variant selection system.
- ✅ 5. Works with All Shopify Themes
    Customizable selector paths make it adaptable for any Shopify theme.
    Works for both classic and modern Shopify structures.
- ✅ 6. SEO & Performance Optimized for faster page loads.
- ✅ 7. No Shopify App Required – Works with native Shopify variant system.

## 🛠️ Installation
### **1. Add JavaScript to Your Theme**
Copy the following script.js and place it in your **theme's JavaScript file** (`theme.js` or `global.js` or a custom script file):

### **2. Add CSS for Styling**
Copy and paste style.css into your theme's CSS file (theme.css or global.css):

🎯 Customization
If using Dawn Theme, update the JavaScript selector to:

    const fieldset = document.querySelector('.product-form__input[name="Size"]');

If using Debut Theme, update the JavaScript selector to:

    const fieldset = document.querySelector('.product-form__variants[name="Size"]');

![GIF Description](https://github.com/iShopifyExpert/shopify-size-switcher/blob/main/reference.gif)

🚀 Support
If you find this useful, consider starring the repository ⭐ on GitHub!
