import { categoryServices } from '../services/category-services.js'

const newCategory = (id, name, nameId) => {
  const category = document.createElement('div');
  category.classList.add('category');
  const content = `
  <div class="category__title">
    <h2 class="category__title__text">${name}</h2>
    <a>Ver más <i class="fa-solid fa-arrow-right"></i></a>
  </div>
  <div class="category__products" data-product-${nameId}>
  </div>
  `
  category.innerHTML = content;
  return category;
}

const categoriesSection = document.querySelector('[data-categories]');

export const renderCategories = async () => {
  try {
    const categories = await categoryServices.categoryList();
    categories.forEach(category => {
      const {id, name, nameId } = category;
      categoriesSection.appendChild(newCategory(id, name, nameId));
    })
  } catch (error) {
    console.log(error);
  }
}
