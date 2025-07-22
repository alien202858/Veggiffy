import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CategoryWrapper from './CategoryWrapper';
import axios from 'axios';
import Card from '../../components/Card';

const CategoryPage = () => {
    const { category } = useParams();
    console.log(category);
    const [items,setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchCategoryData = async () => {
      setLoading(true);
      try{
        const response  = await axios.get(`https://recipe-mean-web.vercel.app/api/categories/${category}`);
        setItems(response.data);
      }
      catch(error){
        setError(error.message || "Error Loading Category");
      }
    }
    fetchCategoryData();
  },[category])

  return (
    <div className='px-6 lg:px-12 py-20'>
        <h1 className='text-3xl font-semibold py-10 text-center text-secondary sm:text-6xl
        sm:leading-relaxed capitalize'>{category}</h1>
        <CategoryWrapper/>

        <ul className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {
            items && items?.map(item=>(
              <Card item = {item} key={item._id}/>
            ))
          }
        </ul>
    </div>
  )
}

export default CategoryPage