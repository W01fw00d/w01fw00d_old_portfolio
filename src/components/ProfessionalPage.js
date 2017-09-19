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
        url: 'https://www.edreams.com/',
        description: 'Info about eDreams',
        images: [
            edreams_img1,
            edreams_img2,
            edreams_img3,
            edreams_img4
        ]  
    },
    esBaluard: {
        url: 'http://www.esbaluard.org/',
        description: 'Info about esBaluard',
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
                    description={galleries.edreams.description}
                />
            
                <Gallery 
                    url={galleries.esBaluard.url} 
                    images={galleries.esBaluard.images} 
                    description={galleries.esBaluard.description}
                />
            </div>
        );
    }
}

export default ProfessionalPage;