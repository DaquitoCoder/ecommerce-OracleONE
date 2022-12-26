// 

const productList = () => fetch(`https://server-f1souvenirs.onrender.com/products`).then(res => res.json())


export const productServices = {
  productList
}
