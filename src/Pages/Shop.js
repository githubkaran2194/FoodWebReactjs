import React,{useState} from 'react'
import Product from './ProductCard'
import { PRODUCTS } from './Data'


const Shop = () => {
  const [filter, setFilter]=useState('');

  const SearchText=(e)=>{
    setFilter(e.target.value)
  }
  console.log(filter)
  let dataSearch =PRODUCTS.filter(item=>{
    return Object.keys(item).some(key=>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
  })
  return (
    <div className='products'>
   <div className="col-md-12">
    <div className="mb-3 mb-5  text-center">
      <h1>Search</h1>
      <input type="search" className='col-sm-6 rounded-1 border-0 p-2' placeholder="Search Item Here" 
        value={filter}
        onChange={SearchText.bind(this)}
      />

    </div>
   </div>
   <hr />
    <h1 className='text-center mt-3 p-2'>Menu</h1>
    <section className='py-3 container'>
    <div className="row justify-content-center">
    {dataSearch.map((item, index) => (
      <Product
       image_url={item.image_url}
       name = {item.name}
       ingredients={item.ingredients}
       price={item.price}
       description={item.description}
       calories={item.nutrition.calories}
       fat={item.nutrition.fat}
       item={item}
       key = {index}
      />
    ))}
    </div>
    </section>
    </div>
    
  )
}

export default Shop