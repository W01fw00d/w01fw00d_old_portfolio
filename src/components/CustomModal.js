import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const renderParagraphs = function(paragraphs) {
    if (paragraphs) {
            return paragraphs.map((paragraph, index) => (
                <p key={index} >{paragraph}</p>
            ));
        }
    },

    renderUrlButtons = function(links) {
        if (links) {
            return links.map((link, index) => (
                <a key={index} target="_blank" href={link.url}>
                    <Button className="pointer"> {link.label} </Button>
                </a>
            ));
        }
    };

class CustomModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    componentWillReceiveProps(nextProps) {  
        if(JSON.stringify(this.props.showModal) !== JSON.stringify(nextProps.showModal)) {
            this.setState({
                modal: true
            });
        }
    }
    
    render() {        
        return ( 
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}> {this.props.modalTitle} </ModalHeader>
                <ModalBody>
                    {renderParagraphs(this.props.paragraphs)}
                </ModalBody>
                <ModalFooter>
                    {renderUrlButtons(this.props.links)}
                </ModalFooter>
            </Modal>  
        );
    }
}

export default CustomModal;