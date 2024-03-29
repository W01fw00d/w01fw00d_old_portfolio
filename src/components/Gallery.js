import React, { Component } from 'react';
import CrossfadeImage from 'react-crossfade-image';
import '../stylesheets/Gallery.css';

import CustomModal from './CustomModal';

const imageChangeFrequency = 15000,
      fadeOutDuration = 1000,
      modalButtonLabel = 'Show info',
      galleryToolTip = 'Click to know more!';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageIndex: 0,
            modal: false
        };

        this.showModal = this.showModal.bind(this);
        
        this.changeImage = this.changeImage.bind(this);
        this.intervalID = setInterval(this.changeImage, imageChangeFrequency);
    }
    
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    
    changeImage() {
       this.setState({ 
           imageIndex: (this.state.imageIndex === this.props.images.length - 1) ? 
            0 : (this.state.imageIndex + 1) 
        }); 
    }
    
    showModal() {
        this.setState({
            showModal: !this.state.showModal
        });
    }
    
    render() {           
        return (
            <div className="Gallery">
                <div className="work-example-img pointer" title={galleryToolTip} onClick={this.showModal}>
                    <CrossfadeImage 
                        src={this.props.images[this.state.imageIndex]}
                        duration={fadeOutDuration}
                        timingFunction={"ease-out"}
                    />
                </div>
                
                <CustomModal
                    showModal={this.state.showModal}
                    modalButtonLabel={modalButtonLabel}
                    modalTitle={this.props.modalTitle}
                    paragraphs={this.props.paragraphs}
                    links={this.props.links}
                />
            </div>
        );
    }
}

export default Gallery;