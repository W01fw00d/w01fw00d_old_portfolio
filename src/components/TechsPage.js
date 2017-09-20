import React, { Component } from 'react';
import '../stylesheets/TechsPage.css';

import react_logo from '../assets/logos/react.svg';
import backbone_logo from '../assets/logos/backbone.png';
import node_logo from '../assets/logos/node.png';
import cucumber_logo from '../assets/logos/cucumber.png';
import selenium_logo from '../assets/logos/selenium.png';
import angular_logo from '../assets/logos/angular.png';
import ionic_logo from '../assets/logos/ionic.png';
import laravel_logo from '../assets/logos/laravel.png';
import android_logo from '../assets/logos/android.png';

import js6_logo from '../assets/logos/js6.png';
import htmlCss_logo from '../assets/logos/html_css.png';
import java_logo from '../assets/logos/java.png';
import python_logo from '../assets/logos/python.png';

const techs = [
    {id: 1, type: 'framework', name: 'React', logo: react_logo},
    {id: 2, type: 'framework', name: 'Backbone', logo: backbone_logo},
    {id: 3, type: 'framework', name: 'Node', logo: node_logo},
    {id: 4, type: 'framework', name: 'Cucumber & Gherkin', logo: cucumber_logo},
    {id: 5, type: 'framework', name: 'Selenium', logo: selenium_logo},
    {id: 6, type: 'framework', name: 'Angular', logo: angular_logo},
    {id: 7, type: 'framework', name: 'Ionic', logo: ionic_logo},
    {id: 8, type: 'framework', name: 'Laravel', logo: laravel_logo},
    {id: 9, type: 'framework', name: 'Android', logo: android_logo},
    {id: 10, type: 'language', name: 'ECMAScript 6', logo: js6_logo},
    {id: 11, type: 'language', name: 'HTML5 & CSS3', logo: htmlCss_logo},
    {id: 12, type: 'language', name: 'Java', logo: java_logo},
    {id: 13, type: 'language', name: 'Python', logo: python_logo}
];

class TechsPage extends Component {
    render () {
        let leftPositions = [],
            topPositions = [];

        const techsTags = techs.map(tech => {
            let imgStyle = {
                left: this.getRandomNumber(leftPositions, window.innerWidth), //1200
                bottom: this.getRandomNumber(topPositions, window.innerHeight - 150), //300
            };

            console.log(tech.logo);

            return <img key={tech.id} src={tech.logo} className="tech-logo" alt="logo" style={imgStyle} />
        });

        return (
            <div className="TechsPage">
                {techsTags}
            </div>
        );
    }

    getRandomNumber(occupiedPositions, parentMaxNumber) {
        const logoHeight = 120, 
              maxNumber = parentMaxNumber - logoHeight,
              minNumber = 0;

        let randomNumber = Math.random() * (maxNumber - minNumber) + minNumber;

        occupiedPositions.push(randomNumber);
        return randomNumber;
    }
}

export default TechsPage;