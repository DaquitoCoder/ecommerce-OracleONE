const categoryList = () => fetch(`https://server-f1souvenirs.onrender.com/category`).then(res => res.json())


export const categoryServices = {
  categoryList
}