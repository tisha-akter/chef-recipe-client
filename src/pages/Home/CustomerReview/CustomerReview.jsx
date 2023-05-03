import React from 'react';

const CustomerReview = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h2 className='text-center text-orange-500 font-sans text-5xl mb-8'><span className='text-black'>Our Happy </span> Customers!!!</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-4-150x150.jpg" />
                                <p className="leading-relaxed">Social Chef is my new favorite spot! The healthy Italian dishes are so flavorful and unique, it's clear that the chefs put a lot of thought and care into creating them. I never knew healthy food could taste this good!</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg">Jerin</h2>
                                <p className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-2-150x150.jpg" />
                                <p className="leading-relaxed">I highly recommend Social Chef for anyone looking for delicious and healthy Italian cuisine. The menu offers so many creative options, from zucchini noodles to cauliflower crust pizza. I always leave feeling satisfied and energized.</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg">Emma Waston</h2>
                                <p className="text-gray-500">Software Engineer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-1-150x150.jpg" />
                                <p className="leading-relaxed">Social Chef is a game-changer for healthy eating! The Italian dishes are not only good for you but also so satisfying and flavorful. I appreciate that they use fresh, quality ingredients and don't skimp on taste. This is definitely my go-to spot for healthy Italian food.</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg">Harry Potter</h2>
                                <p className="text-gray-500">Heart Surgeon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CustomerReview;