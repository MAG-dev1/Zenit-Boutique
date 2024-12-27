document.addEventListener("DOMContentLoaded", () => {
    const carritoLista = document.getElementById("carrito-lista");
    
    // Obtener productos del carrito desde localStorage
    const productosCarrito = JSON.parse(localStorage.getItem('products')) || [];
    
    if (productosCarrito.length === 0) {
        carritoLista.innerHTML = "<p>No hay productos en el carrito.</p>";
    } else {
        // Crear un elemento para cada producto y agregarlo al carrito
        productosCarrito.forEach((item, index) => {
            const productoDiv = document.createElement("div");
            productoDiv.classList.add("cart-item");
            productoDiv.innerHTML = `
                <img src="${item.img_src}" alt="${item.title}">
                <div class="cart-item-details">
                    <h3>${item.title}</h3>
                    <p>${item.p}</p>
                    
                </div>
                <div class="cart-item-actions">
                    <button onclick="removeFromCart(${index})">Eliminar</button>
                    <button id="addbutton">Agregar</button>
                    <div id="total">Cantidad:1</div>
                </div>
                
                
            `;
            carritoLista.appendChild(productoDiv);
        });
    }
    
    document.getElementById("addbutton").addEventListener("click", () => {
        const productosCarrito = JSON.parse(localStorage.getItem('products')) || [];
        document.getElementById("total").innerHTML = "Cantidad: " + productosCarrito.length;
    });

    // Función para vaciar el carrito
    document.getElementById("vaciar-carrito").addEventListener("click", () => {
        const productosCarrito = JSON.parse(localStorage.getItem('products')) || [];
    
    // Agregar el nuevo producto
    productosCarrito.push(product);
    
    // Guardar la lista actualizada en localStorage
    localStorage.setItem('products', JSON.stringify(productosCarrito));
    });

    // Función para eliminar un producto del carrito
    window.removeFromCart = (index) => {
        const productosCarrito = JSON.parse(localStorage.getItem('products')) || [];
        productosCarrito.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(productosCarrito));
        location.reload();
    }

    

});
