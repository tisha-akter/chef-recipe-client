import React, { useEffect, useState } from 'react';
import RecipeBanner from './Recipes/RecipeBanner';
import RecipeDetails from './Recipes/RecipeDetails';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
    const [chefDetails, setChefDetail] = useState({});

    let { chefId } = useParams();

    useEffect(() => {
        const url = `https://chef-recipe-hunter-server-tisha-akter.vercel.app/banner/${chefId}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setChefDetail(data))
    }, []);

    console.log(chefDetails);


    return (
        <div>
           <RecipeBanner chefDetails ={chefDetails}></RecipeBanner>
           <RecipeDetails chefDetails ={chefDetails}></RecipeDetails>
        </div>
    );
};

export default CardDetails;