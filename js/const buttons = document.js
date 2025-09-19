const buttons = document.querySelectorAll('.add-to-cart');
const cartItems = document.querySelector('.cart-items');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const foodItem = event.target.parentElement;
        const foodName = foodItem.querySelector('h2').innerText;
        const foodPrice = foodItem.querySelector('p:last-child').innerText;

        const cartItem = document.createElement('div');
        cartItem.innerText = `${foodName} - ${foodPrice}`;
        cartItems.appendChild(cartItem);
    });
});
