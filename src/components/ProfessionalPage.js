import React, { Component } from 'react';
import '../stylesheets/ProfessionalPage.css';

import Gallery from './Gallery';

import edreams_img1 from '../assets/gallery/edreams1.PNG';
import edreams_img2 from '../assets/gallery/edreams2.PNG';
import edreams_img3 from '../assets/gallery/edreams3.PNG';
import edreams_img4 from '../assets/gallery/edreams4.PNG';

import esbaluard_img1 from '../assets/gallery/esbaluard1.PNG';
import esbaluard_img2 from '../assets/gallery/esbaluard2.PNG';
import esbaluard_img3 from '../assets/gallery/esbaluard3.PNG';
import esbaluard_img4 from '../assets/gallery/esbaluard4.PNG';

const galleries = {
    edreams: {
        modalTitle: 'eDreams',
        description: 'This is the flights ecommerce eDreams site. I worked in this project for a year.',
        links: [{
            label: 'Visit eDreams',
            url: 'https://www.edreams.com/'
        }],
        images: [
            edreams_img1,
            edreams_img2,
            edreams_img3,
            edreams_img4
        ]  
    },
    
    esBaluard: {
        modalTitle: 'Es Baluard',
        description: 'This is the official site of the "Es Baluard" museum. I worked in this project while training as a web developer in Kamalyon.',
        links: [
            {
                label: 'Visit Es Baluard site',
                url: 'http://www.esbaluard.org/'
            },
            {
                label: 'Visit Kamalyon site',
                url: 'http://kamalyon.com/'
            }   
        ],
        images: [
            esbaluard_img1,
            esbaluard_img2,
            esbaluard_img3,
            esbaluard_img4
        ]
    }
};

class ProfessionalPage extends Component {
    render() {
        return (
            <div className="ProfessionalPage">
                <Gallery 
                    url={galleries.edreams.url} 
                    images={galleries.edreams.images} 
                    modalTitle={galleries.edreams.modalTitle}
                    description={galleries.edreams.description}
                    links={galleries.edreams.links}
                />
            </div>
        );
    }
}

export default ProfessionalPage;