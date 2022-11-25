const btn = document.querySelector('#btn-newProduct');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const price = document.querySelector('#price').value;
  const image = document.querySelector('#urlImage').value;
  const alt = document.querySelector('#altImage').value;
  const category = document.querySelector('#category').value;
  console.log(name, price, image, alt, category);
  const product = {
    name,
    price,
    image,
    alt,
    category
  }

  fetch(`https://server-f1souvenirs.herokuapp.com/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(alert('Producto creado con éxito')).then(window.location.replace("https://daquitocoder.github.io/ecommerce-OracleONE/adminMenu.html"))
    .catch(err => console.log(err))
});