import React from 'react'
import myimge from '../assets/myimge.jpg'

const About = () => {
    return (
        <div className='max-w-[1240px] m-auto mt-8 '>
            <div className='md:grid md:grid-cols-2'>
                <div className=''>
<img src={myimge} alt=""  className='md:w-[400px] w-[250px] h-[250px] md:h-[400px] justify-center border border-[#ec8729] border-spacing-3 border-[4px] md:mx-5 mx-20 my-10 rounded-full'/>
                </div>
                <div className=''>
<h1 className='text-center text-4xl font-bold my-10 text-red-600'>About Me!</h1>
<h1 className='text-3xl font-bold  mx-10'>Creative independent web-developer based on USA </h1>
<p className='mx-10 my-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae aut sed ratione esse excepturi sint quaerat, laboriosam, quidem, enim provident ab sit corrupti odit optio eos vitae voluptatem iste suscipit.</p>
<button className='mx-10 border border-[2px] border-red-700 bg-white shadow-lg p-[12px] border-[2px] text-black rounded-lg shadow-red-400'>Downlod</button>
                </div> 
            </div>
        </div>
    )
}

export default About