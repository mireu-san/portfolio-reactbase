import React from 'react';
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
    return (
        <div className="cards">
            <h1>Web Developer Portfolio</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9.jpg"
                            text="GnK Kakaotalk"
                            label="#html #css"
                            path="/skills"
                        />
                        <CardItem
                            src="images/node.png"
                            text="Mireulix"
                            label="#react.js #API"
                            path="/skills"
                        />
                        <CardItem
                            src="images/img-9.jpg"
                            text="Airbnb Clone"
                            label="#Django #Python"
                            path="/skills"
                        />                                   
                    </ul>
                    
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9.jpg"
                            text="Web Painter"
                            label="#JS #API"
                            path="/skills"
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="Web Data Crawler"
                            label="#Python"
                            path="/skills"
                        />
                        <CardItem
                            src="images/img-9.jpg"
                            text="Portfolio Webpage"
                            label="#react.js #CSS"
                            path="/skills"
                        />                                   
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default Cards;
