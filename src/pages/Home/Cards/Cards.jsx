import React, { useEffect, useState } from 'react';
import { FaGulp, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Cards = () => {

    const [cardsData, setCardData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cards')
            .then(response => response.json())
            .then(data => setCardData(data))
    }, [])

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container py-24 mx-auto">
                    <h2 className='text-center text-orange-500 font-sans text-5xl mb-8'>Our Chefs</h2>
                    <div className="flex flex-wrap -m-4">
                        {cardsData.map(card => (
                            <div className="p-4 md:w-1/3" key={card?.id}>
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-90 md:h-90 w-full object-cover object-center" src={card?.picture} alt="blog" />
                                   
                                   
                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{card?.name}</h1>
                                        <p className="leading-relaxed mb-3">{card?.years_of_experience} years of experience</p>
                                        <div className="flex items-center flex-wrap ">
                                          

                                            <Link to={`/cards-details/${card?.id}`}><button className="btn btn-active bg-orange-500">View Recipes</button></Link>

                                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                <FaGulp className="w-6 h-6 mr-1 text-orange-300"/>
                                                <span>{card?.number_of_recipes} Recipes</span>
                                            </span>

                                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                <FaHeart className="w-4 h-4 mr-1 text-rose-600" />
                                                <span>  {card?.likes} likes</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Cards;