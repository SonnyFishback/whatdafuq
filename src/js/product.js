/**
 * Get product by id
 * @returns {}
 */
async function getProductByID(id) {
	try {
		const response = await fetch(`https://fakestoreapi.com/products/${id}`);

		if (response.status !== 200 || !response.body) {
			console.warn('Something went wrong :/');
			return null;
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Something is fuqued');
	}
}

(async () => {
	const params = new URLSearchParams(window.location.search);
	const productID = params.get('pid');

	if (!productID) {
		return console.error('Unable to access product id');
	}

	const product = await getProductByID(productID);

	const titleElement = document.createElement('h2');
	titleElement.innerText = product.title;

	const productElement = document.getElementById('product-content');
	productElement.appendChild(titleElement);

	console.log(product);
	/**
	 * CHALLENGE:
	 * 1. Show all the data that is returned in the product being logged above.
	 * 2. Generate the most semantic tag for each product. For example: product.image should be stored in an <img/> tag.
	 */
})();
