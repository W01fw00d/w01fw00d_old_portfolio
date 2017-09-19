import React, { Component } from 'react';
import CrossfadeImage from 'react-crossfade-image';
import '../stylesheets/ProfessionalPage.css';

import edreams_img1 from '../assets/gallery/edreams1.PNG';
import edreams_img2 from '../assets/gallery/edreams2.PNG';
import edreams_img3 from '../assets/gallery/edreams3.PNG';

const galleries = {
          edreams: {
              url: 'https://www.edreams.com/',
              images: [
                  edreams_img1,
                  edreams_img2,
                  edreams_img3
              ],
          },
          esBaluard: {
              url: 'http://www.esbaluard.org/',
              images: [
                  edreams_img1,
                  edreams_img2,
                  edreams_img3
              ],
          }
      },
      imageChangeFrequency = 3000;

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            imageIndex: 0
        };
        this.changeImage = this.changeImage.bind(this);

        setInterval(this.changeImage, imageChangeFrequency);
    }

    changeImage() {
        if (this.state.imageIndex === galleries.edreams.images.length - 1) {
            this.setState({ imageIndex: 0 });
        } else {
            this.setState({ imageIndex: this.state.imageIndex + 1 });
        }
    }

    render() {
        return (
            <div className="ProfessionalPage">
            <div className="work-example-img">
                <CrossfadeImage 
                    src={galleries.edreams.images[this.state.imageIndex]}
                    duration={1000}
                    timingFunction={"ease-out"}
                />
            </div>
            <button onClick={this.changeImage}>
                Change Image
            </button>
            </div>
        );
    }
}

export default HomePage;