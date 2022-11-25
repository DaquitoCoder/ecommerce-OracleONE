const categoryList = () => fetch(`https://server-f1souvenirs.herokuapp.com/category`).then(res => res.json())


export const categoryServices = {
  categoryList
}