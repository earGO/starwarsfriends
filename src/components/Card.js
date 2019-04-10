import React from 'react';
import './Card.css'

const Card = (props) => {
        return (
            <section className="tc pa3 bg-light-blue dib br3 grow bw2 shadow-5 ma2 h25">
                    <img
                        src={`https://robohash.org/${props.url}?set=set2`}
                        alt="starman face"
                    />
                    <div className="pa2 h10">
                        <h2 className="f5 db link dark-blue hover-blue">{props.name}</h2>
                        <p className="f6 mv1">Born on {props.homeworld}</p>
                        <p className="f6 mv1">Featured in movies:</p>
                        <ul>
                        {
                            props.films.map((film,key)=>{
                                return <li className="f6 mv1" key={key}>{film}</li>
                            })
                        }
                        </ul>
                    </div>
            </section>
        )
}

export default Card