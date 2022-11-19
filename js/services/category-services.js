const categoryList = () => fetch(`http://localhost:3000/category`).then(res => res.json())


export const categoryServices = {
  categoryList
}