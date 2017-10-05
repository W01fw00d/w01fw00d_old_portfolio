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
import git_logo from '../assets/logos/git.png';

import js6_logo from '../assets/logos/js6.png';
import htmlCss_logo from '../assets/logos/html_css.png';
import java_logo from '../assets/logos/java.png';
import python_logo from '../assets/logos/python.png';
import php_logo from '../assets/logos/php.png';

const techs = [
<<<<<<< HEAD
    {type: 'framework', name: 'React', logo: react_logo},
    {type: 'framework', name: 'Backbone', logo: backbone_logo},
    {type: 'framework', name: 'Node', logo: node_logo},
    {type: 'framework', name: 'Cucumber & Gherkin', logo: cucumber_logo},
    {type: 'framework', name: 'Selenium', logo: selenium_logo},
    {type: 'framework', name: 'Angular', logo: angular_logo},
    {type: 'framework', name: 'Ionic', logo: ionic_logo},
    {type: 'framework', name: 'Laravel', logo: laravel_logo},
    {type: 'framework', name: 'Android', logo: android_logo},
    {type: 'framework', name: 'Git', logo: git_logo},
    {type: 'language', name: 'ECMAScript 6', logo: js6_logo},
    {type: 'language', name: 'HTML5 & CSS3', logo: htmlCss_logo},
    {type: 'language', name: 'Java', logo: java_logo},
    {type: 'language', name: 'Python', logo: python_logo}
=======
    {type: 'framework', name: 'React', logo: react_logo, url: 'https://reactjs.org/'},
    {type: 'framework', name: 'Backbone', logo: backbone_logo, url: 'http://backbonejs.org/'},
    {type: 'framework', name: 'Node', logo: node_logo, url: 'https://nodejs.org/en/'},
    {type: 'framework', name: 'Cucumber & Gherkin', logo: cucumber_logo, url: 'https://cucumber.io/'},
    {type: 'framework', name: 'Selenium', logo: selenium_logo, url: 'http://www.seleniumhq.org/'},
    {type: 'framework', name: 'Angular', logo: angular_logo, url: 'https://angular.io/'},
    {type: 'framework', name: 'Ionic', logo: ionic_logo, url: 'https://ionicframework.com/'},
    {type: 'framework', name: 'Laravel', logo: laravel_logo, url: 'https://laravel.com/'},
    {type: 'framework', name: 'Android', logo: android_logo, url: 'https://www.android.com/'},
    {type: 'language', name: 'ECMAScript 6', logo: js6_logo, url: 'http://es6-features.org/'},
    {type: 'language', name: 'HTML5 & CSS3', logo: htmlCss_logo, url: 'https://www.w3.org/TR/html5/'},
    {type: 'language', name: 'Java', logo: java_logo, url: 'https://www.java.com/'},
    {type: 'language', name: 'Python', logo: python_logo, url: 'https://www.python.org/'},
    {type: 'language', name: 'PHP', logo: php_logo, url: 'http://php.net/'}
>>>>>>> d15065f7b9ab40741bb1a418c710d47208f98b1d
];

class TechsPage extends Component {
    render () {
        let leftPositions = [],
            topPositions = [];

        const techsTags = techs.map((tech, index) => {
            let imgStyle = {
                left: this.getRandomNumber(leftPositions, window.innerWidth), //1200
                bottom: this.getRandomNumber(topPositions, window.innerHeight - 150), //300
            };

<<<<<<< HEAD
            return <img key={index} src={tech.logo} title={tech.name} className="tech-logo" alt="logo" style={imgStyle} />
=======
            return (
                <a key={index} target="_blank" href={tech.url}>
                    <img key={index} src={tech.logo} title={tech.name} className="tech-logo" alt="logo" style={imgStyle} />
                </a>
            );
>>>>>>> d15065f7b9ab40741bb1a418c710d47208f98b1d
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