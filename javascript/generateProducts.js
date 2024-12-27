// generateCard.js
import { products } from './products.js'; // Asegúrate de que la ruta sea correcta

fetch('./products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
});

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

    card.querySelector("button").addEventListener("click", () => {
        addProduct(producto);  // Llamar a addProduct pasando el producto
    });
    
    productContainer.appendChild(card);
});

// Función para agregar productos al carrito
const addProduct = (p) => {

    let products = localStorage.getItem('products');
    if (products === null || products === '') {
        products = [];
    } else {
        products = JSON.parse(products);
    }

    if (products.some(product => product.title === p.title)) {
        console.log('El producto ya está en el carrito:', p);
        return;
        
    }
    products.push(p);
    localStorage.setItem('products', JSON.stringify(products));
    console.log('Producto agregado al carrito:', p);
}
