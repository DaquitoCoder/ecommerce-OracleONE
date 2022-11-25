const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

const productList = () => fetch(`https://server-f1souvenirs.herokuapp.com/products/${id}`).then(res => res.json())

const productsObj = {
  productList
}

const newForm = (name, price, image, alt, category) => {
  
  const form = document.createElement('form');
  form.classList.add('editForm__form');
  const content = `
    <h2 class="editForm__form__title">Editar Producto</h2>
    <input type="text" id="name" placeholder="Nombre del producto" value="${name}"/>
    <input type="text" id="price" placeholder="Precio" value="${price}"/>
    <input type="text" id="urlImage" placeholder="URL de la imagen" value="${image}"/>
    <input type="text" id="altImage" placeholder="Texto alternativo de la imagen" value="${alt}"/>
    `;

  const select = document.createElement('select');
  select.id = 'category';
  const caps = document.createElement('option');
  const cars = document.createElement('option');
  const circuits = document.createElement('option');
  caps.value = 'caps';
  caps.textContent = 'Gorras';
  cars.value = 'cars';
  cars.textContent = 'Monoplazas 1/18';
  circuits.value = 'circuits';
  circuits.textContent = 'Circuitos';
  select.appendChild(caps);
  select.appendChild(cars);
  select.appendChild(circuits);
  
  form.innerHTML = content;
  form.appendChild(select);

  const btnsubmit = document.createElement('button');
  btnsubmit.id = 'btn-submit';
  btnsubmit.textContent = 'Editar Producto';
  form.appendChild(btnsubmit);
  return form;
}

const render = async () => {
  try {
    const products = await productsObj.productList();
    const {name, price, image, alt, category} = products;
        document.querySelector('[data-form-product]').appendChild(newForm(name, price, image, alt, category));
  } catch (error) {
    console.log(error);
  }

  const btnsubmit = document.querySelector('#btn-submit');

  btnsubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const price = document.querySelector('#price').value;
    const image = document.querySelector('#urlImage').value;
    const alt = document.querySelector('#altImage').value;
    const category = document.querySelector('#category').value;
    const product = {
      name,
      price,
      image,
      alt,
      category
    }

    fetch(`https://server-f1souvenirs.herokuapp.com/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(alert('Producto editado con éxito'))
    .catch(err => console.log(err))
  });
}

render();
