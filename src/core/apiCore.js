import { API } from '../config';


export const getProducts = (sotrBy) => {
    return fetch(`${API}/products?sortBy=${sotrBy}&order=desc&limit=6`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}

export const getCategories = () =>  {
    // return fetch(`${API}/categories`, {
    //     method: "GET"
    // })
    // .then(response => {
    //     return response.json()
    // })
    // .catch(err => console.log(err));
}