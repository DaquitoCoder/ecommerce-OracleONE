// 

const productList = () => fetch(`https://server-f1souvenirs.herokuapp.com/products`).then(res => res.json())


export const productServices = {
  productList
}
