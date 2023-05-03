import React from 'react';
import Hero from '../Hero/Hero';
import Cards from '../Cards/Cards';
import MealLists from '../MealLists/MealLists';
import CustomerReview from '../CustomerReview/CustomerReview';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Cards></Cards>
            <MealLists></MealLists>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;