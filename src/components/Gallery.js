import React, { Component } from 'react';
import CrossfadeImage from 'react-crossfade-image';
import '../stylesheets/Gallery.css';

const imageChangeFrequency = 4000,
      fadeOutDuration = 1000;

class Gallery extends Component {
    constructor(props) {
        super();
        this.state = {
            imageIndex: 0
        };
        
        this.changeImage = this.changeImage.bind(this);
        setInterval(this.changeImage, imageChangeFrequency);
    }

    changeImage() {
        if (this.state.imageIndex === this.props.images.length - 1) {
            this.setState({ imageIndex: 0 });
        } else {
            this.setState({ imageIndex: this.state.imageIndex + 1 });
        }
    }
    
    showInfo() {
        
    }
    
    render(props) {
        return (
            <div className="Gallery">
                <div className="work-example-img">
                    <a target="_blank" href={this.props.url}>
                        <CrossfadeImage 
                            src={this.props.images[this.state.imageIndex]}
                            duration={fadeOutDuration}
                            timingFunction={"ease-out"}
                        />
                    </a>
                </div>

                <div className="hidden">
                    {this.props.description}
                </div>

                <button className="hidden" onClick={this.showInfo}>
                    Show info
                </button>
            </div>
        );
    }
}

export default Gallery;