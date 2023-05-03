import React from 'react';
import Hero from '../Hero/Hero';
import Cards from '../Cards/Cards';
import MealLists from '../MealLists/MealLists';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Cards></Cards>
            <MealLists></MealLists>
        </div>
    );
};

export default Home;