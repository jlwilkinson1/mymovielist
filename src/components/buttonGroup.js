import React from 'react';

const ButtonGroup = (props) => {
    console.log("Button Group->", props.genres);
    return (
        <div class="btn-group" role="group" aria-label="Basic example">
            {props.genres.map((g) => (   
            <button 
                key={g} 
                onClick={()=>props.genreClick(g)}  
                type="button" class="btn btn-secondary" >  
                {g}
            </button> ))}
        </div>
    )
}

export default ButtonGroup;

//use this only in class component, since this is a functional component, using "this" will cause an error
