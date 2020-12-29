import faker from 'faker';

const mount = (el) => {
  let products = '';
  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  el.innerHTML = products;
}


// Context: running this file in development in isolation using local index.html
// which definitely has an element with id 'dev-product
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  if (el) {
    mount(el)
  }
}

// Context: running this file in development or production through the container app.
// with no guarantee that en element of 'dev-products' exists
export { mount };
