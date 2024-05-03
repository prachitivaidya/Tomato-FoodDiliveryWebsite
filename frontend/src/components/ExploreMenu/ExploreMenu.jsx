import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>“Welcome to our food delivery app, where culinary adventures await! 🍽️ Whether you’re craving comfort classics or daring to explore new flavors, our diverse menu has something for everyone. From sizzling street tacos to aromatic Thai curries, our carefully curated selection celebrates global cuisine. Browse through our mouthwatering options, each dish crafted with love by talented chefs. Vegetarian, vegan, gluten-free, or indulgent? We’ve got you covered! Customize your order, add your favorite sides, and let your taste buds embark on a flavor-filled journey. 🌮🍜🍕 Bon appétit!”</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev => prev === item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category === item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu