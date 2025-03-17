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
    console.log("Functionality developed by Alliyan Gul");
  }
});
