import React from 'react';
import banner from '../../../assets/about-1.png'

const Hero = () => {
    return (

        <div className='bg-orange-50'>
            <div className='container mx-auto px-4 pt-10'>
                <section className="text-gray-600 body-font">
                    <div className="flex md:flex-row flex-col items-center justify-center h-auto md:h-[700px]">
                        <div className="md:w-1/2 md:pr-16 flex items-center justify-center flex-col md:items-start md:text-left mb-16 md:mb-0 text-center h-full">
                            <div className='flex items-center justify-center'>
                                <img className='' src="https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2022/09/about-2.png" alt="" />
                                
                            </div>
                            <h1 className="title-font sm:text-6xl text-3xl  mb-8 md:mb-2 lg:mb-8 font-medium text-gray-900">
                                Traditional & Modern Service <span className='text-orange-500'>Since 1992</span>
                            </h1>
                            <p className="mb-8 md:mb-3 lg:mb-8 leading-relaxed text-xl md:text-sm lg:text-xl">
                                Indulge your taste buds with our delicious and freshly-prepared cuisine. From mouth-watering appetizers to satisfying entrees and decadent desserts, our menu features a wide variety of dishes to satisfy every craving.

                                Our chefs use only the finest ingredients and innovative cooking techniques to bring you the best possible flavors. Whether you're in the mood for something spicy, savory, or sweet, we have something to please every palate.

                                So why wait? Come visit us and experience the taste of our restaurant today!
                            </p>

                            <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Order Now!!!</button>

                        </div>
                        
                        <div className="flex items-end md:w-1/2  lg:-mb-12  -mb-6">
                            <img className="object-cover object-center rounded"
                                alt="image" src={banner} />
                                
                        </div>
                    </div>
                </section>



            </div>
        </div>

    );
};

export default Hero;