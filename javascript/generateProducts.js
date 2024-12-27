const productContainer = document.querySelector(".card_container");

// Hacer fetch para obtener los productos
fetch('https://raw.githubusercontent.com/MAG-dev1/Zenit-Boutique/main/javascript/products.json')
    .then(response => response.json())
    .then(products => {
        // Iterar sobre los productos que llegan del fetch
        Object.keys(products).forEach(key => {
            const producto = products[key]; // Acceder a cada producto mediante `key`

            // Crear la tarjeta del producto
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h3>${producto.title}</h3>
                <img src="${producto.img_src}" alt="${producto.title}">
                <p>${producto.p}</p>
                <button class="buttonadd">Agregar</button>
            `;

            // Agregar evento de clic al botón
            card.querySelector("button").addEventListener("click", () => {
                addProduct(producto);  // Llamar a addProduct pasando el producto
            });

            // Agregar la tarjeta al contenedor
            productContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error al obtener los productos:', error));

// Función para agregar productos al carrito
const addProduct = (p) => {

    const productsInCart = JSON.parse(localStorage.getItem('products')) || [];
    const existingProduct = productsInCart.find(product => product.title === p.title);
    if (existingProduct) {
        console.log('El producto ya está en el carrito:', p);
        existingProduct.count += 1;
        
    }else{
            // Agregar producto al carrito
        productsInCart.push({...p, count: 1});
       
        console.log('Producto agregado al carrito:', p);
    }
    // Guardar el carrito en localStorage
    
    localStorage.setItem('products', JSON.stringify(productsInCart));
    
    
};
