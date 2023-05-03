import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const RecipeDetails = ({ chefDetails }) => {
    const [favorites, setFavorites] = useState([]);
    const [disabledButtons, setDisabledButtons] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
        if (storedFavorites) {
            setFavorites(storedFavorites);
        }
    }, []);

    const handleAddToFavorites = (item, index) => {
        setFavorites([...favorites, item]);
        toast.success(`Added ${item.recipe} to favorites!`);
        setDisabledButtons([...disabledButtons, index]);
        localStorage.setItem('favorites', JSON.stringify([...favorites, item]));
    };

    const isButtonDisabled = (index) => {
        return disabledButtons.includes(index);
    };



    return (
        <div>
            <ToastContainer />
            <section className="text-gray-600 body-font overflow-hidden ">
                <div className="container px-5 py-24 mx-auto gap-5">
                    <h2 className='text-center text-orange-500 font-sans text-5xl mb-12'> This Chef's Famous recipes</h2>
                    {chefDetails?.recipes?.map((item, index) => (
                        <div key={index} className="lg:w-4/5 mx-auto flex flex-wrap mb-10 p-5 border border-orange-500">
                            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">

                                <h1 className="text-3xl title-font font-medium text-orange-500 mb-4">{item?.recipe}</h1>
                                <div className="flex mb-4">
                                    <a className="flex-grow  border-b-2 border-orange-500 py-2 font-bold  px-1"><span className='text-orange-500 text-xl'>Ingredients: </span><br />{item?.ingredients}</a>

                                </div>

                                <p className="leading-relaxed mb-4 font-bold"><span className='text-orange-500 text-xl'>Cooking method:</span><br /> {item?.cooking_method}</p>

                                <div className="flex">
                                    <div>
                                        <span className="title-font font-medium  text-gray-900 text-xl inline-flex items-center gap-2"><Rating 
                                        style={{ maxWidth: 100 }}
                                         value={Math.round(item?.rating || 0)}
                                          readOnly />{item?.rating}</span>
                                    </div>
                                    <button
                                        className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                                        onClick={() => handleAddToFavorites(item, index)}
                                        disabled={isButtonDisabled(index)}
                                    >
                                        {isButtonDisabled(index) ? 'Favorited' : <FaHeart />}
                                    </button>


                                </div>
                            </div>
                            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://braise.qodeinteractive.com/wp-content/uploads/2021/09/home-3-recipes-list-img-1.jpg" />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default RecipeDetails;

