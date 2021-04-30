import React from 'react';
import "../../App.css";
import Cards from "../Cards";
import "../Cards.css";
import "./AboutMe.css";


function AboutMe() {
    return (
        <>
            <h1 className="AboutMe">
                About Me
            </h1>
            
        <div className="cards">
                <div className="cards__wrapper">
                    <h2 className="me-context">안녕하세요,</h2>
                        <h3 className="me-context-body">
                        이 사이트는 JavaScript 를 기반으로 한 웹 프레임워크 React.js 를 사용하고 있습니다.</h3>
                        <h3 className="me-context-body">
                        아직은 완성이 덜 된 모습이지만, 조만간 달라질 모습을 기대해주세요.</h3>
                </div>
            </div>
        </>
    );
}

export default AboutMe