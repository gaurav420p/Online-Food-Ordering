import React from 'react';
import "./Home.css";
import MultiitemCarousel from './MultiitemCarousel';
import RestaurantCard from '../Restaurant/RestaurantCard';
import restaurant from '../Restaurant/restaurant'; 


const Home = () => {

  return (
    <div className=''>
        <section className='banner -z-50 relative flex flex-col justify-center items-center'>
            <div className='w-[50vw] z-10 text-center'>

                <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>CraveCart</p>
                <p className='z-10 text-gray-300 text-xl lg:text-4xl'>Taste the Convenience:Food,Fast and</p>
                <p className='z-10 text-gray-300 text-xl lg:text-4xl'>Delivered</p>
            </div>
            <div className='cover absolute top-0 left-0 right-0'>
                {/* Most likely acts as a dark or blurred overlay that sits 
                above the background but behind the text (due to z-10 on text). */}
            </div>
            <div className='fadout'>

            </div>
        </section>


        <section className='p-10 lg:y-10 lg:px:20'>
            <p className='text-2xl font-semibold text-gray-400 py-3 pb-3'>Top Meal</p>
            <MultiitemCarousel/>
        </section>

        <section className='px-5 lg:px-20 pt-10'>
            <h1 className='text-2xl font-semibold text-gray-400 pb-8'>Order From Our HandPicked Favorites</h1>
            <div className='flex flex-wrap justify-around gap-5'>
                {
                restaurant.map((item, index) => (
                <RestaurantCard
                key={index}
                name={item.name}
                description={item.description}
                image={item.image}
                />
                ))
                }

            </div>
        </section>
      
    </div>
  )
}

export default Home
