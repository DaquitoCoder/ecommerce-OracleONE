// 

const productList = () => fetch(`http://localhost:3000/products`).then(res => res.json())


export const productServices = {
  productList
}
