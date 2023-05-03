import React from 'react';

const MealLists = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h2 className='text-center text-orange-500 font-sans text-5xl mb-8'><span className='text-black'>Healthy</span> Meals</h2>
                    <p className='mb-12 text-lg text-center'>Our restaurant specializes in providing healthy Italian meals. We use only the freshest ingredients to create delicious and nutritious dishes that are both satisfying and nourishing. From hearty salads to hearty pasta dishes, our menu is designed to cater to a variety of dietary preferences and restrictions. Whether you're looking for a quick lunch or a leisurely dinner, we offer a wide range of options that are sure to please. So come in and enjoy the taste of authentic Italian cuisine, without sacrificing your health goals.</p>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="http://cdn.gastrotheme.com/wp/wp-content/uploads/2017/03/appetizer-07-512x512.jpg" />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">Roast Chicken</h2>
                                <p className="mt-1">Price: $6.00</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="http://cdn.gastrotheme.com/wp/wp-content/uploads/2017/03/pasta-01-512x512.jpg" />
                            </a>
                            <div className="mt-4">

                                <h2 className="text-gray-900 title-font text-lg font-medium">Chicken Parmesan</h2>
                                <p className="mt-1">Price: $10.15</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="http://cdn.gastrotheme.com/wp/wp-content/uploads/2017/03/appetizer-04-512x512.jpg" />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">Margherita Pizza</h2>
                                <p className="mt-1">Price: $20.00</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="http://cdn.gastrotheme.com/wp/wp-content/uploads/2017/03/appetizer-05-512x512.jpg" />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">Spaghetti Carbonara</h2>
                                <p className="mt-1">Price: $18.40</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="http://cdn.gastrotheme.com/wp/wp-content/uploads/2017/03/appetizer-08-512x512.jpg" />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">PRAWN BISQUE</h2>
                                <p className="mt-1">Price: $6.00</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="http://cdn.gastrotheme.com/wp/wp-content/uploads/2017/03/appetizer-02-512x512.jpg" />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">PETIT CARP</h2>
                                <p className="mt-1">Price: $21.15</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="http://cdn.gastrotheme.com/wp/wp-content/uploads/2017/03/salad-01-512x512.jpg" />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium"> AVOCADO SALAD</h2>
                                <p className="mt-1">Price: $12.00</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="http://cdn.gastrotheme.com/wp/wp-content/uploads/2017/03/appetizer-01-512x512.jpg" />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">Tomato Soup</h2>
                                <p className="mt-1">Price: $18.40</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MealLists;