// Mock data for products
const products = [
    { id: 1, name: 'Smartphone', image: 'https://via.placeholder.com/150', price: '$599' },
    { id: 2, name: 'Laptop', image: 'https://via.placeholder.com/150', price: '$999' },
    { id: 3, name: 'Headphones', image: 'https://via.placeholder.com/150', price: '$199' },
    { id: 4, name: 'T-Shirt', image: 'https://via.placeholder.com/150', price: '$29' },
    { id: 5, name: 'Sneakers', image: 'https://via.placeholder.com/150', price: '$89' },
];

const searchInput = document.getElementById('search-query');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results-container');
const noResultsMessage = document.getElementById('no-results');
const queryTerm = document.getElementById('query-term');

// Search function
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim().toLowerCase();
    queryTerm.textContent = query || 'all';

    // Filter products by query
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query)
    );

    // Clear previous results
    resultsContainer.innerHTML = '';

    if (filteredProducts.length > 0) {
        noResultsMessage.style.display = 'none';
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('result-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button>View Product</button>
            `;
            resultsContainer.appendChild(productCard);
        });
    } else {
        noResultsMessage.style.display = 'block';
    }
});
