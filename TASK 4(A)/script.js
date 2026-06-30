
const products = [
    {
        name: "Laptop",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
        description: "High performance laptop for work and gaming with cutting-edge specs.",
        price: "$1200"
    },
    {
        name: "smartphone",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
        description: "Latest smartphone with amazing camera quality and all-day battery life.",
        price: "$800"
    },
    {
        name: "Headphones",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
        description: "Noise cancelling wireless headphones with premium studio sound.",
        price: "$200"
    },
    {
        name: "Smart Watch",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
        description: "Stay connected and track your fitness goals with this stylish wearable.",
        price: "$350"
    },
    {
        name: "Camera",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
        description: "Professional DSLR camera for capturing life's most beautiful moments.",
        price: "$1500"
    }
];


const productGrid = document.getElementById('product-grid');

function displayProducts() {
    products.forEach(product => {
        
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="card-content">
                <h2 class="product-name">${product.name}</h2>
                <p class="product-desc">${product.description}</p>
                <p class="product-price">${product.price}</p>
                <button class="add-btn">Add to Cart</button>
            </div>
        `;

        productGrid.appendChild(card);
    });
}

displayProducts();