import React from 'react';
import { FaHeart } from 'react-icons/fa';

const RecipeDetails = () => {
    return (
        <div className='mb-5'>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">recipe name</h1>
                            <div className="flex mb-4">
                                <a className="flex-grow text-orange-500 border-b-2 border-orange-500 py-2 font-bold text-lg px-1">Description</a>
                               
                            </div>
                            <p className="leading-relaxed mb-4">ingredients</p>
                            <p className="leading-relaxed mb-4">cooking_method</p>
                          
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">rating</span>
                                <button className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"><FaHeart flex ml-auto></FaHeart></button>
                                
                            </div>
                        </div>
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://braise.qodeinteractive.com/wp-content/uploads/2021/09/home-3-recipes-list-img-1.jpg" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RecipeDetails;