import React, { Component } from 'react';
import '../stylesheets/ProfessionalPage.css';

import Gallery from './Gallery';

import edreams_gif1 from '../assets/gallery/edreams1.gif';
import edreams_gif2 from '../assets/gallery/edreams2.gif';
import esbaluard_gif1 from '../assets/gallery/esbaluard1.gif';
import esbaluard_gif2 from '../assets/gallery/esbaluard2.gif';

const galleries = {
    edreams: {
        modalTitle: 'eDreams',
        paragraphs: [
            'This is the flights ecommerce eDreams site. I worked in this project for a year, ' + 
            'as a Full-Stack Web Developer in “Brújula Tecnologías de la Información”, ' +
            'working remotely full-time with only one client: “eDreams Odigeo”, ' + 
            'integrated in one of its Front-end development teams.',
        
            'We used Kanban as an Agile Methodology, and Mercurial for version control. ' + 
            'I performed maintenance and development of new ' + 
            'products for the eDreams site, in a fast iterative process with A/B tests. ' + 
            'I worked with Javascript (Backbone framework) in the Front-End and ' +
            'with Java in order to receive the data from the API, in desktop as well as mobile versions of eDreams. ' +
            'I developed and fixed automatic tests with Cucumber (as well as unit tests with Java), ' + 
            'that covered the web functionality. I improved its efficiency too, refactoring legacy code.'
        ],
        links: [
            {
                label: 'Visit eDreams',
                url: 'https://www.edreams.com/'
            },
            {
                label: 'Visit Brújula',
                url: 'http://www.brujula.es/'
            }
        
        ],
        images: [
            edreams_gif1,
            edreams_gif2
        ]  
    },
    
    esbaluard: {
        modalTitle: 'Es Baluard',
        description: 'This is the official site of the "Es Baluard" museum. I worked in this project while training as a web developer in Kamalyon.',
        paragraphs: [
            'I developed a PHP web, using a Wordpress template that I modified in order to implement ' +
            'a Masonry gallery, sliders, filters, Google Maps pluggin, Twitter… ' +
            'I created custom postypes to adapt the web content to the client needs, ' +
            'so that way all content would be dynamic and the client would be able to modify them themselves.',
            
            'The web includes an interactive museum map which markers that link to anchors on each section of the post.'
        ],
        links: [
            {
                label: 'Visit Es Baluard',
                url: 'http://www.esbaluard.org/'
            },
            {
                label: 'Visit Kamalyon',
                url: 'http://kamalyon.com/'
            }   
        ],
        images: [
            esbaluard_gif1,
            esbaluard_gif2
        ]
    }
},
    email = 'romay.gabriel@gmail.com';  ;

class ProfessionalPage extends Component {
    render() {
        return (
            <div className="ProfessionalPage">
                <h3 className="margin-top"> Professional Projects </h3>
            
                <div className="margin-top">
                    <Gallery
                        url={galleries.edreams.url} 
                        images={galleries.edreams.images} 
                        modalTitle={galleries.edreams.modalTitle}
                        paragraphs={galleries.edreams.paragraphs}
                        links={galleries.edreams.links}
                    />
                </div>
            
                <div className="margin-top">
                    <Gallery
                        url={galleries.esbaluard.url} 
                        images={galleries.esbaluard.images} 
                        modalTitle={galleries.esbaluard.modalTitle}
                        paragraphs={galleries.esbaluard.paragraphs}
                        links={galleries.esbaluard.links}
                    />
                </div>
                
                <h3 className="margin-top"> Contact: {email}</h3>
            </div>
        );
    }
}

export default ProfessionalPage;