import React, { useRef, useState } from 'react';
import reviews from '../assets/reviews.png'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import qut from '../assets/qut.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <div className=' md:max-w-[1240px] m-auto max-w-[400px] m-auto'>
      <div>
        <h1 data-aos="fade-right" className='text-center font-bold text-3xl md:my-10 md:text-4xl text-red-500 '>Testamonial.</h1>
      </div>
      <Swiper data-aos="fade-down"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,

        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper md:my-20 my-8 "
      >


        <SwiperSlide className='md:my-10 '>
          <div className='max-w-[1240px] m-auto '>
            <div className='md:grid md:grid-cols-2 md:mx-20 '>
              <div className='md:ml-[20px]'>
                <div className='bg-[#ffffff] p-5 w-[300px]   md:w-[400px] ml-10 md:ml-20'>
                  <img src={reviews} alt="" className='w-[200px] md:ml-20 ml-5' />
                  <h1 className='my-10 text-center font-bold text-3xl'>jhon David</h1>
                  <p className='mx-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, reiciendis?</p>
                  <div className='flex ml-20'>
                    <AiFillFacebook className=' my-7 bg-[#a19595] rounded-lg hover:text-white hover:bg-[#993439]' />
                    <AiFillInstagram className='mx-10  my-7 bg-[#a19595] hover:text-white hover:bg-[#993439] rounded-lg' />
                    <BsWhatsapp className=' bg-[#a19595] my-7 rounded-lg  hover:text-white hover:bg-[#993439]' />
                  </div>
                </div>
              </div>

              <div className=' md:ml-[-50px]  mx-5'>
                <img src={qut} alt="" className='md:w-[300px] w-[200px] md:mx-5  my-5' />
                <p className='mx-10 my-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium similique ab modi nisi, excepturi repellendus nemo nam ipsum ratione.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>



        <SwiperSlide>
          <div className='max-w-[1240px] m-auto '>
            <div className='md:grid md:grid-cols-2 md:mx-20 '>
              <div className='md:ml-[20px]'>
                <div className='bg-[#ffffff] p-5 w-[300px]  md:w-[400px] ml-10 md:ml-20'>
                  <img src={reviews} alt="" className='w-[200px] md:ml-20 ml-5' />
                  <h1 className='my-10 text-center font-bold text-3xl'>jhon David</h1>
                  <p className='mx-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, reiciendis?</p>
                  <div className='flex ml-20'>
                    <AiFillFacebook className=' my-7 bg-[#a19595] rounded-lg hover:text-white hover:bg-[#993439]' />
                    <AiFillInstagram className='mx-10  my-7 bg-[#a19595] hover:text-white hover:bg-[#993439] rounded-lg' />
                    <BsWhatsapp className=' bg-[#a19595] my-7 rounded-lg  hover:text-white hover:bg-[#993439]' />
                  </div>
                </div>
              </div>

              <div className=' md:ml-[-50px] mx-5'>
                <img src={qut} alt="" className='md:w-[300px] w-[200px] md:mx-5  my-5' />
                <p className='mx-10 my-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium similique ab modi nisi, excepturi repellendus nemo nam ipsum ratione.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>




        <SwiperSlide>
          <div className='max-w-[1240px] m-auto '>
            <div className='md:grid md:grid-cols-2 md:mx-20 '>
              <div className=' md:ml-[20px] '>
                <div className='bg-[#ffffff] p-5 w-[300px]  md:w-[400px] ml-10 md:ml-20'>
                  <img src={reviews} alt="" className='w-[200px] mmd:ml-20 ml-5' />
                  <h1 className='my-10 text-center font-bold text-3xl'>jhon David</h1>
                  <p className='mx-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, reiciendis?</p>
                  <div className='flex ml-20'>
                    <AiFillFacebook className=' my-7 bg-[#a19595] rounded-lg hover:text-white hover:bg-[#993439]' />
                    <AiFillInstagram className='mx-10  my-7 bg-[#a19595] hover:text-white hover:bg-[#993439] rounded-lg' />
                    <BsWhatsapp className=' bg-[#a19595] my-7 rounded-lg  hover:text-white hover:bg-[#993439]' />
                  </div>
                </div>
              </div>

              <div className=' md:ml-[-50px] mx-5'>
                <img src={qut} alt="" className='md:w-[300px] w-[200px] md:mx-5  my-5' />
                <p className='mx-10 my-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium similique ab modi nisi, excepturi repellendus nemo nam ipsum ratione.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>




        <SwiperSlide>
          <div className='max-w-[1240px] m-auto '>
            <div className='md:grid md:grid-cols-2 md:mx-20 '>
              <div className=' md:ml-[20px] '>
                <div className='bg-[#ffffff] p-5 w-[300px]  md:w-[400px] ml-10 md:ml-20'>
                  <img src={reviews} alt="" className='w-[200px] md:ml-20 ml-5' />
                  <h1 className='my-10 text-center font-bold text-3xl'>jhon David</h1>
                  <p className='mx-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, reiciendis?</p>
                  <div className='flex ml-20'>
                    <AiFillFacebook className=' my-7 bg-[#a19595] rounded-lg hover:text-white hover:bg-[#993439]' />
                    <AiFillInstagram className='mx-10  my-7 bg-[#a19595] hover:text-white hover:bg-[#993439] rounded-lg' />
                    <BsWhatsapp className=' bg-[#a19595] my-7 rounded-lg  hover:text-white hover:bg-[#993439]' />
                  </div>
                </div>
              </div>

              <div className=' md:ml-[-50px] '>
                <img src={qut} alt="" className='md:w-[300px] w-[200px] md:mx-5  my-5' />
                <p className='mx-10 my-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium similique ab modi nisi, excepturi repellendus nemo nam ipsum ratione.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>


      </Swiper>
    </div>
  );
}
