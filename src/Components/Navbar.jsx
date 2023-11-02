import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import hero from '../assets/hero.jpg'

const Navbar = () => {
    const [toggel, setToggel] = useState( );
    return (
        <div className=' '>
            <div className='max-w-[1240px] px-6 py-[10px] items-center  mx-auto flex justify-between'>
            <img src={hero} alt="" className='md:w-[50px] md:flex hidden mt-2 md:h-[50px] rounded-full bg-[#fff] p-[2px]'/> 
                <div data-aos="fade-right" className='text-3xl font-bold font-[mv boli] ml-[-350px] '> 
                
                <span  className='text-red-600  mx-5 ml-10 mt-2 '> Shoaib</span> </div>

                {
                    toggel ?
                        <AiOutlineClose onClick={() => setToggel(!toggel)} className='text-black text-2xl md:hidden block' />
                        :
                        <AiOutlineMenu onClick={() => setToggel(!toggel)} className='text-black text-2xl md:hidden block' />
                }



                <ul  className='md:flex hidden text-black gap-10    ' >
                    <li className='text-[18px] font-bold  hover:text-red-600'>
                       <a href=""> Home</a>
                    </li>
                    <li className='text-[18px] font-bold  hover:text-red-600 '><a href="">About uS</a></li>
                    <li className='text-[18px] font-bold  hover:text-red-600'><a href="">Skill</a></li>
                    <li className='text-[18px] font-bold  hover:text-red-600'><a href="">Project</a></li>
                    <li className='text-[18px] font-bold  hover:text-red-600'><a href="">Testamonial</a></li>
                    <li className='text-[18px] font-bold  hover:text-red-600'><a href="">News</a></li>
                    <li className='text-[18px] font-bold  hover:text-red-600'><a href="">Contact us</a></li>
                </ul>
               
                {/* Responsive */}
                
                <ul  className={` md:hidden text-white fixed w-full left-0 h-[60vh] px-2  bg-[#000]  top-[50px]  ${ toggel ? "left-[0]" : "left-[-100%]"}`} >
                <li className='text-[18px] mx-10 py-5'>
                       <a href=""> Home</a>
                    </li>
                    <li className='text-[18px] mx-10 py-5'><a className=''href="">About uS</a></li>
                  
                    <li className='text-[18px] mx-10 py-5'><a className=''href="">Skill</a></li>
                    <li className='text-[18px] mx-10 py-5'><a className=''href="">Project</a></li>
                    <li className='text-[18px] mx-10 py-5'><a className=''href="">Testamonial</a></li>
                    <li className='text-[18px] mx-10 py-5'><a className=''href="">News</a></li>
                    <li className='text-[18px] mx-10 py-5'><a className='' href="">Contact us</a></li>
                    
            </ul>
         
        </div>
    </div >
  )
}

export default Navbar