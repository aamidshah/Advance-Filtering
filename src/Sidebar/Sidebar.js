import React from 'react'
import './Sidebar.css'
import Category from './Category/Category';
import Price from './Price/Price';
import Color from './Colors/Color';
import { BsCart4} from 'react-icons/bs';



const Sidebar = ({handleChange}) => {


  return (
    <>
    <section className='sidebar'>
      <div className="logo-container">
      <BsCart4  style={{fontSize:'44px'}} />
      </div>

    <Category  handleChange={handleChange}/>
    <Price handleChange= {handleChange}/>
    <Color handleChange={handleChange} />

    </section>
      
    </>
  )
}

export default Sidebar