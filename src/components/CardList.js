import React from 'react';
import Card from "./Card";


const CardList = ({starmen}) => {
    return (
        <div>
            {
                starmen.map((starman,key)=>{
                    const {name,homeworld,films,url}=starman;
                    return(
                        <Card
                            key={key}
                            name={name}
                            homeworld={homeworld}
                            films={films}
                            url={url}/>
                        )
                })
            }
        </div>

    )
}

export default CardList