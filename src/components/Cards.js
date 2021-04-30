import React from 'react';
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
    return (
        <div className="cards">
            <h1>SKILLS</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9.jpg"
                            text="React.js"
                            label="#Preferred"
                            path="/skills"
                        />
                        <CardItem
                            src={require("./images/img-9.jpg")}
                            text="Node.js"
                            label="#Preferred"
                            path="/skills"
                        />
                        <CardItem
                            src={require("./images/img-9.jpg")}
                            text="Vanilla JavaScript"
                            label="#experienced"
                            path="/skills"
                        />                                   
                    </ul>
                    
                    <ul className="cards__items">
                        <CardItem
                            src={require("./images/img-9.jpg")}
                            text="HTML/CSS"
                            label="#experienced"
                            path="/skills"
                        />
                        <CardItem
                            src={require("./images/img-9.jpg")}
                            text="Python/Django"
                            label="#beginner"
                            path="/skills"
                        />
                        <CardItem
                            src={require("./images/img-9.jpg")}
                            text="MySQL"
                            label="#beginner"
                            path="/skills"
                        />                                   
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default Cards;
