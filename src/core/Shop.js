import React , {useState, useEffect}from 'react';
import Layout from './Layout';
import Card from './Card'
import {getCategories} from "./apiCore"

const Shop = () => {
   const [categories, setCategories] = useState([])
   const [error, setError] = useState(false)

   const init = () => {
    // getCategories().then(data => {
    //     if(data.error) {
    //         setValues({...values, error: data.error})
    //     }else {
    //         setValues({...values, categories: data, formData: new FormData})
    //     }
    // })
}

useEffect(() => {
    init()
}, [])

    return (
        <Layout title="Shop Page" 
        description="Search and find books of your choice"
        className="container-fluid">
           

           <div className="row">
                <div className="col-4">
                    {JSON.stringify(categories)}
                </div>
                <div className="col-8">
                    left sidebar
                </div>
           </div>
        </Layout>
    )
}

export default Shop;