"use client"
import React, { useState,useEffect } from 'react'
import Link from 'next/link';









const imageslider = () => {
  const[productimage,setProductimage]=useState([]);
  const fetchApi = async()=>{
   
   
    

try {
  const response = await fetch (' https://fakestoreapi.com/products')
const data=await response.json()
console.log(data)
setProductimage(data);

	
} catch (error) {
	console.error(error);
}
}
useEffect(() => {
  fetchApi();
  
}, []);
  

  return (
    
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
    {productimage.map(( product) => (
      
      
      <Link href={`/product?product=${product.title}&image=${product.image}&price=${product.price}`} key={product.id} className="rounded-md border">
        <img
        src={product.image}
          
          alt="Laptop"
          className="aspect-[16/9] w-[12rem] h-[8rem] rounded-md md:aspect-auto md:h-[200px] lg:h-[200px]"
        />
        <div className="p-2">
          <h1 className="inline-flex items-center text-lg font-semibold">{product.title}</h1>
        </div>
        <div className="p-2">

          <h1 className="inline-flex items-center text-lg font-semibold">{product.category}</h1>
        </div>
        <div className="p-2">
          <h1 className="inline-flex items-center text-lg font-semibold">from:{product.price}</h1>
        </div>
        </Link>
      
      
    ))}
  </div>

  )
}

export default imageslider
