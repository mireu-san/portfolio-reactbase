import React from 'react'
import "../App.css";
import { Button } from "./Button";
import "./VideoFile.css";
import Cards from "../components/Cards";

function SkillCard() {
    return (
        <div className="skill-container">  
            <h1>Skills</h1>
            <Cards />
            
        </div>

    )
}

export default SkillCard
