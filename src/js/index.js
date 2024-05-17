
/**
 * This gets all products
 * @returns {}
 */
async function getAllProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');

        if (response.status !== 200 || !response.body) {
            console.warn('Something went wrong :/');
            return null;
        };
        
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Something is fuqued');
    }
};

(async () => {
    // Get all products from database.
    const products = await getAllProducts();
    // render all products on product listings page.
    /**
     * Get the product-list DOM Node
     */
    const productList = document.querySelector('#product-list');

    return products.forEach((product) => {
        const productListItem = document.createElement('li');
        const productLink = document.createElement('a');
        const productID = product.id;

        productLink.setAttribute('href',  `product.html?pid=${productID}`);
        productLink.innerText = product.title;
        productListItem.appendChild(productLink);
        productList.appendChild(productListItem);
    })
})();


