import React from 'react'
import Typed from 'react-typed';
import image from '../assets/image.png'
import { AiFillFacebook,AiFillInstagram } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';

const Home = () => {
  return (
    <div className='max-w-[1240px] m-auto '>
<div className='md:grid md:grid-cols-2 mt-10'>
    <div className=''>
<div>
  <h1 className='text-1xl mt-10 mx-3'>Welcome To my world</h1>
  <h1 className='text-5xl my-5 mx-3 font-bold'>Hi,I'm <span className='text-red-600'> Shoaib Sharif</span></h1>
  <h1 className='text-5xl  mx-3 font-bold'><span className='text-red-600'>I'm </span>
  <Typed
                    strings={['Mern Stack React' ,'Professional Coder' ,'Frontend developer']}
                    typeSpeed={80}
                    loop={true}
                />
  </h1>
  <p className='mx-3 my-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laboriosam nesciunt provident repellendus nam facilis impedit aut ipsum, quis ratione soluta qui fuga odio. Tenetur nulla doloremque totam non recusandae!</p>
  <button className='p-[12px] border border-[2px] border-red-700 bg-white shadow-black shadow-lg ml-5 hover:bg-[#d3535e] rounded-lg hover:text-white'>Contact Me!</button>
  <div className='mt-20'>
    <h1 className='ml-5 text-2xl font-bold text-red-600'>Find to Me</h1>
    <div className='flex mx-8 mt-10 text-5xl '>
    <AiFillFacebook className='p-[8px] bg-[#a19595] rounded-lg text-white hover:bg-[#993439]'/>
    <AiFillInstagram className='mx-10  p-[8px] bg-[#a19595] text-white hover:bg-[#993439] rounded-lg'/>
    <BsWhatsapp className='p-[8px] bg-[#a19595] rounded-lg  text-white hover:bg-[#993439]'/>
    </div>
  </div>
</div>
    </div>
    <div className=' md:mt-[-10px] mt-20 mx-10 md:ml-20'>
<img src={image} alt="" className='md:w-[500px]  w-[300px] h-[400px] md:h-[600px] mt-[-30px]'/>
</div>
</div>
    </div>
  )
}

export default Home