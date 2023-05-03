import React, { useEffect, useState } from 'react';
import { FaGulp, FaHeart } from 'react-icons/fa';

const RecipeBanner = ({ chefDetails }) => {

    // const { } = chefDetails;


    return (
        <div className='bg-orange-50 mb-5'>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center  rounded" alt="hero" src={chefDetails?.picture} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{chefDetails?.name}

                        </h1>
                        <p className="mb-8 leading-relaxed">{chefDetails?.description}</p>
                        <p className="leading-relaxed text-xl font-bold mb-3">Years of experience: {chefDetails?.years_of_experience}</p>
                        <div className="flex justify-center">
                            <FaGulp className="w-6 h-6 mr-1 text-orange-300" />
                            <span>{chefDetails?.number_of_recipes} Recipes</span>

                            <FaHeart className="w-4 h-4 mr-1 text-rose-600" />
                            <span>{chefDetails?.likes} Likes</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default RecipeBanner;