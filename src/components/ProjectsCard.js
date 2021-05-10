import React from 'react';
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
    return (
        <div className="project-cards">
            <h1>Web Portfolio</h1>
            <div className="project__cards__container">
                <div className="project__cards__wrapper">
                    <ul className="project__cards__items">
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
                    
                    <ul className="project__cards__items">
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
