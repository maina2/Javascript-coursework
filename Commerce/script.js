document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const product = e.target.closest('.product');
            const productId = product.getAttribute('data-id');
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('p').textContent;

            const productItem = {
                id: productId,
                name: productName,
                price: parseFloat(productPrice.replace('$', '')),
            };

            addToCart(productItem);
            updateCartCount();
        });
    });

    function addToCart(product) {
        cart.push(product);
        console.log(cart);
    }

    function updateCartCount() {
        cartCount.textContent = cart.length;
    }
});
