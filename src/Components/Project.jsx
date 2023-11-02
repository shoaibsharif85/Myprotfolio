import React from 'react'
import project1 from '../assets/project1.jpg'
import { AiOutlineHeart, AiOutlineLink } from 'react-icons/ai'

const Project = () => {
    return (
        <div className='max-w-[1240px] m-auto mt-10'>
            <h1 className='text-center text-red-700 text-4xl font-bold my-10'>MY Protfolio</h1>
            <div className='md:grid md:grid-cols-3'>
                <div className=' bg-[#ffffff]  h-[350px] mx-5 w-[350px] my-5   md:w-[400px]  md:h-[400px]'>
                    <img src={project1} alt="" className='md:w-[380px]  w-[330px] rounded md:mt-2  py-2 mx-2   hover:scale-105 cursor-pointer ' />
                    <div className='flex ml-5  mt-5'>
                        <p className='text-2xl text-red-600'>580+</p>
                        <AiOutlineHeart className='md:ml-[250px] ml-[220px] mt-1 text-2xl hover:text-red-600 cursor-pointer' />
                    </div>
                    <div className='text-center mt-5 text-2xl font-bold flex'>
                        <AiOutlineLink className='mx-10  text-red-700' />
                        <a href="https://gym-two-ashy.vercel.app/" className='mt-[-5px]'> My protfolio</a>
                    </div>
                </div>
                <div className=' bg-[#ffffff]  h-[350px] mx-5 w-[350px] my-5   md:w-[400px]  md:h-[400px]'>
                    <img src={project1} alt="" className='md:w-[380px]  w-[330px] rounded md:mt-2  py-2 mx-2  hover:scale-105 cursor-pointer '  />
                    <div className='flex ml-5  mt-5'>
                        <p className='text-2xl text-red-600'>480+</p>
                        <AiOutlineHeart className='md:ml-[250px] ml-[220px] mt-1 text-2xl hover:text-red-600 cursor-pointer' />
                    </div>
                    <div className='text-center mt-5 text-2xl font-bold flex'>
                        <AiOutlineLink className='mx-10  text-red-700' />
                        <a href="https://gym-two-ashy.vercel.app/" className='mt-[-5px]'> My protfolio</a>
                    </div>
                </div>
                <div className=' bg-[#ffffff]  h-[350px] mx-5 w-[350px] my-5   md:w-[400px]  md:h-[400px] '>
                    <img src={project1} alt="" className='md:w-[380px]  w-[330px] rounded md:mt-2  py-2 mx-2  hover:scale-105 cursor-pointer ' />
                    <div className='flex ml-5  mt-5'>
                        <p className='text-2xl text-red-600'>380+</p>
                        <AiOutlineHeart className='md:ml-[250px] ml-[220px] mt-1 text-2xl hover:text-red-600 cursor-pointer' />
                    </div>
                    <div className='text-center mt-5 text-2xl font-bold flex'>
                        <AiOutlineLink className='mx-10  text-red-700' />
                        <a href="https://gym-two-ashy.vercel.app/" className='mt-[-5px]'> My protfolio</a>
                    </div>
                </div>
                <div className=' bg-[#ffffff]  h-[350px] mx-5 w-[350px] my-5   md:w-[400px]  md:h-[400px] '>
                    <img src={project1} alt="" className='md:w-[380px]  w-[330px] rounded md:mt-2  py-2 mx-2 hover:scale-105 cursor-pointer ' />
                    <div className='flex ml-5  mt-5'>
                        <p className='text-2xl text-red-600'>680+</p>
                        <AiOutlineHeart className='md:ml-[250px] ml-[220px] mt-1 text-2xl hover:text-red-600 cursor-pointer' />
                    </div>
                    <div className='text-center mt-5 text-2xl font-bold flex'>
                        <AiOutlineLink className='mx-10  text-red-700' />
                        <a href="https://gym-two-ashy.vercel.app/" className='mt-[-5px]'> My protfolio</a>
                    </div>
                </div>
                <div className=' bg-[#ffffff]  h-[350px] mx-5 w-[350px] my-5   md:w-[400px]  md:h-[400px] '>
                    <img src={project1} alt="" className='md:w-[380px]  w-[330px] rounded md:mt-2  py-2 mx-2 hover:scale-105 cursor-pointer ' />
                    <div className='flex ml-5  mt-5'>
                        <p className='text-2xl text-red-600'>280+</p>
                        <AiOutlineHeart className='md:ml-[250px] ml-[220px] mt-1 text-2xl hover:text-red-600 cursor-pointer' />
                    </div>
                    <div className='text-center mt-5 text-2xl font-bold flex'>
                        <AiOutlineLink className='mx-10  text-red-700' />
                        <a href="https://gym-two-ashy.vercel.app/" className='mt-[-5px]'> My protfolio</a>
                    </div>
                </div>
                <div className=' bg-[#ffffff] mx-5 w-[350px] h-[350px] my-5   md:w-[400px]  md:h-[400px]'>
                    <img src={project1} alt="" className='md:w-[380px]  w-[330px] rounded md:mt-2  py-2 mx-2  hover:scale-105 cursor-pointer ' />
                    <div className='flex ml-5  mt-5'>
                        <p className='text-2xl text-red-600'>280+</p>
                        <AiOutlineHeart className='md:ml-[250px] ml-[220px] mt-1 text-2xl hover:text-red-600 cursor-pointer' />
                    </div>
                    <div className='text-center mt-5 text-2xl font-bold flex'>
                        <AiOutlineLink className='mx-10  text-red-700' />
                        <a href="https://gym-two-ashy.vercel.app/"  className='mt-[-5px]' > My protfolio</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project