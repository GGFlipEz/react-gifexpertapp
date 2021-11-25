import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories }) => {
    
    //const categories  = ['One Punch','Samurai X','Dragon Ball'];
    const [categories, setCategories] = useState(defaultCategories);

    const handledAdd = () => {
        //setCategories([...categories],'HunterXhunter');
        setCategories(cats => [...cats, 'HunterXhunter']);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category => (
                    <GifGrid 
                    key={ category }
                    category={ category } 
                    />
                 ))
                }
            </ol>
        </>
    )
}
