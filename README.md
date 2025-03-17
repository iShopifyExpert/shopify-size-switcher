# shopify-size-switcher
# Shopify Size Switcher

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
Copy the following script and place it in your **theme's JavaScript file** (`theme.js` or `global.js`):

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const fieldset = document.querySelector(
    '.product-form__input[name="Size"], .product-form__variants[name="Size"], .variant-wrapper fieldset.variant-input-wrap[name="Size"]'
  );
  const labels = fieldset ? fieldset.querySelectorAll('.variant-input label, .product-form__label') : [];

  if (labels.length) {
    fieldset.style.display = "none";
    fieldset.style.visibility = "hidden";

    const sizeSelector = document.createElement('div');
    sizeSelector.className = 'size-selector';

    labels.forEach(label => (label.dataset.originalSizes = label.innerText));

    const sizeFormats = { UK: 1, EU: 2, US: 3 };

    Object.keys(sizeFormats).forEach(format => {
      const span = document.createElement('span');
      span.textContent = format;
      span.setAttribute('value', format);
      span.classList.add('size-option');
      if (format === 'UK') span.classList.add('selected');

      span.addEventListener('click', () => updateSizeFormat(format, span));
      sizeSelector.appendChild(span);
    });

    fieldset.prepend(sizeSelector);

    function updateSizeFormat(format, selectedSpan) {
      document.querySelectorAll('.size-selector span').forEach(el => el.classList.remove('selected'));
      selectedSpan.classList.add('selected');

      labels.forEach(label => {
        const match = label.dataset.originalSizes.match(/UK ([\w\s\d\.\-\/]+) \| EU ([\w\s\d\.\-\/]+) \| US ([\w\s\d\.\-\/]+)/);
        if (match) {
          label.innerText = match[sizeFormats[format]] || "N/A";
        } else {
          label.innerText = "N/A";
          console.warn('Unexpected size format:', label.dataset.originalSizes);
        }
      });

      fieldset.style.display = "block";
      fieldset.style.visibility = "visible";
    }

    updateSizeFormat('UK', document.querySelector('.size-selector span[value="UK"]'));
  }
});

