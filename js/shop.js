const categoryFilter = document.getElementById('category-filter');
const sortOptions = document.getElementById('sort-options');
const products = document.querySelectorAll('.product');

// Filter by Category
categoryFilter.addEventListener('change', () => {
    const selectedCategory = categoryFilter.value;
    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        if (selectedCategory === 'all' || productCategory === selectedCategory) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// Sort by Options
sortOptions.addEventListener('change', () => {
    const option = sortOptions.value;
    const productContainer = document.querySelector('.product-container');
    const productArray = Array.from(products);

    if (option === 'price-low-high') {
        productArray.sort((a, b) => parseFloat(a.querySelector('p').textContent.slice(1)) - 
                                     parseFloat(b.querySelector('p').textContent.slice(1)));
    } else if (option === 'price-high-low') {
        productArray.sort((a, b) => parseFloat(b.querySelector('p').textContent.slice(1)) - 
                                     parseFloat(a.querySelector('p').textContent.slice(1)));
    }

    // Append sorted products
    productArray.forEach(product => productContainer.appendChild(product));
});
