// generateCard.js
import { products } from './products.js'; // Asegúrate de que la ruta sea correcta

const productContainer = document.querySelector(".card_container");

// Iterar sobre las propiedades del objeto `products`
Object.keys(products).forEach(key => {
    const producto = products[key]; // Acceder a cada producto mediante `key`
    
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h3>${producto.title}</h3>
        <img src="${producto.img_src}" alt="${producto.title}">
        <p>${producto.p}</p>
        <button>Agregar</button>
    `;
    
    productContainer.appendChild(card);
});
