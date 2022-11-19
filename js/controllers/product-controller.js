import { productServices } from '../services/product-services.js';

const newProduct = (name, price, image, alt) => {
  const card = document.createElement('div');
  card.classList.add('card');
  const content = `
    <div class="card__image">
      <img
        src="${image}"
        alt="${alt}"
      />
    </div>
    <div class="card__title">${name}</div>
    <div class="card__price">$${price}</div>
    <a href="" class="card__seeMore">Ver más</a>
  `;
  card.innerHTML = content;
  return card;
};

export const newProductEditDelete = (id, name, price, image, alt) => {
  const card = document.createElement('div');
  card.classList.add('card');
  const content = `
    <div class="card__image">
      <img
        src="${image}"
        alt="${alt}"
      />
      <div class="card__actions">
      <a href="./editProduct.html?id=${id}"><i class="fa-solid fa-pen-to-square"></i></a>
      <a href="./deleteProduct.html?id=${id}"><i class="fa-solid fa-trash"></i></i></a>
      </div>
    </div>
    <div class="card__title">${name}</div>
    <div class="card__price">$${price}</div>
    <a href="" class="card__seeMore">Ver más</a>
  `;
  card.innerHTML = content;
  return card;
};

export const renderProductByCategory = async () => {
  try {
    const products = await productServices.productList();
    products.forEach((product) => {
      const { name, price, image, alt, category } = product;
      switch (category) {
        case 'caps':
          document
            .querySelector('[data-product-caps]')
            .appendChild(newProduct(name, price, image, alt));
          break;
        case 'cars':
          document
            .querySelector('[data-product-cars]')
            .appendChild(newProduct(name, price, image, alt));
          break;
        case 'circuits':
          document
            .querySelector('[data-product-circuits]')
            .appendChild(newProduct(name, price, image, alt));
          break;
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const renderProducts = async () => {
  try {
    const products = await productServices.productList();
    products.forEach((product) => {
      const { id, name, price, image, alt } = product;
      document
        .querySelector('[data-products]')
        .appendChild(newProductEditDelete(id, name, price, image, alt));
    });
  } catch (error) {
    console.log(error);
  }
};
