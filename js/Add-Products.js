const addProduct = (newLabel, strikethroughPrice, productCode, details, buttonLink, imageSrc) => {
    const productList = document.getElementById('product-list2');
    const newProduct = document.createElement('li');
    newProduct.className = 'product-item new';
    newProduct.setAttribute('data-index', '1');

    newProduct.innerHTML = `
        <div class="image-container">
            <img src="${imageSrc}" alt="Product Image">
            <span class="new-label" style="display: true;">${newLabel} <del>${strikethroughPrice}</del></span>
        </div>
        <span class="Product-code">លេខកូដ: ${productCode}</span>
        <span class="details">${details}</span>
        <a id="buy_button" target="_blank" href="${buttonLink}">Buy Now</a>
    `;

    productList.appendChild(newProduct);
};

// Example usage with separate strikethrough price
addProduct('R12,000', '$3.60', '0001', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/1.jpg');
addProduct('R20,000', '$5.60', '0002', 'Mini flower Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/2.jpg');
addProduct('R30,000', '$7.60', '0003', 'Mini pen Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/3.jpg');
addProduct('R40,000', '$9.60', '0004', 'Mini ring Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/4.jpg');
addProduct('R50,000', '$11.60', '0005', 'Mini worm Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/5.jpg');
addProduct('R60,000', '$13.60', '0006', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/6.jpg');
addProduct('R70,000', '$15.60', '0007', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/7.jpg');
addProduct('R80,000', '$17.60', '0008', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/8.jpg');
addProduct('R90,000', '$19.60', '0009', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/9.jpg');
addProduct('R100,000', '$21.60', '0010', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/10.jpg');
addProduct('R110,000', '$23.60', '0011', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/11.jpg');
addProduct('R120,000', '$25.60', '0012', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/12.jpg');
addProduct('R130,000', '$27.60', '0013', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/13.jpg');
addProduct('R140,000', '$29.60', '0014', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/14.jpeg');
addProduct('R150,000', '$31.60', '0015', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/15.jpg');
addProduct('R160,000', '$33.60', '0016', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/16.jpg');
addProduct('R170,000', '$35.60', '0017', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/17.jpg');
addProduct('R180,000', '$37.60', '0018', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/18.jpg');
addProduct('R190,000', '$39.60', '0019', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/19.jpg');
addProduct('R200,000', '$41.60', '0020', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/20.jpg');
addProduct('R210,000', '$43.60', '0021', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/21.jpg');
addProduct('R220,000', '$45.60', '0022', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/22.jpg');
addProduct('R220,001', '’$5.51', '0023', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/23.jpg');
addProduct('R220,002', '’$5.52', '0024', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/24.jpg');
addProduct('R220,003', '’$5.53', '0025', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/25.jpg');
addProduct('R220,004', '’$5.54', '0026', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/26.jpg');
addProduct('R220,005', '’$5.55', '0027', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/27.jpg');
addProduct('R220,006', '’$5.56', '0028', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/28.jpg');
addProduct('R220,007', '’$5.57', '0029', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/29.jpg');
addProduct('R220,008', '’$5.58', '0030', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/30.jpg');
addProduct('R220,009', '’$5.59', '0031', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/31.jpg');
addProduct('R220,010', '’$5.60', '0032', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/32.jpg');
addProduct('R220,011', '’$5.61', '0033', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/33.jpg');
addProduct('R220,012', '’$5.62', '0034', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/34.jpg');
addProduct('R220,013', '’$5.63', '0035', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/35.jpg');
addProduct('R220,014', '’$5.64', '0036', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/36.jpg');
addProduct('R220,015', '’$5.65', '0037', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/37.jpg');
addProduct('R220,016', '’$5.66', '0038', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/38.jpg');
addProduct('R220,017', '’$5.67', '0039', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/39.jpg');
addProduct('R220,018', '’$5.68', '0040', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/40.jpg');
addProduct('R220,019', '’$5.69', '0041', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/41.jpg');
addProduct('R220,020', '’$5.70', '0042', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/42.jpg');
addProduct('R220,021', '’$5.71', '0043', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/43.jpg');
addProduct('R220,022', '’$5.72', '0044', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/44.jpg');
addProduct('R220,023', '’$5.73', '0045', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/45.jpg');
addProduct('R220,024', '’$5.74', '0046', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/46.jpg');
addProduct('R220,025', '’$5.75', '0047', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/47.jpg');
addProduct('R220,026', '’$5.76', '0048', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/48.jpg');
addProduct('R220,027', '’$5.77', '0049', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/49.jpg');
addProduct('R220,028', '’$5.78', '0050', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/50.jpg');
addProduct('R220,029', '’$5.79', '0051', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/51.jpg');
addProduct('R220,030', '’$5.80', '0052', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/52.jpg');
addProduct('R220,031', '’$5.81', '0053', 'Mini Heart Necklace', 'https://t.me/tinhnow_bot', 'https://kakaladi-catalog.github.io/Stall/images/Products/53.jpg');


